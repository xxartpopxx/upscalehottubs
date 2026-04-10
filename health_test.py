#!/usr/bin/env python3
"""
Health Check Test for Hot Tub/Spa Website Backend
Tests the /api/health endpoint and MongoDB connection
"""

import requests
import json
import sys
from datetime import datetime

# Configuration
BACKEND_URL = "https://celebrate-mom-4.preview.emergentagent.com/api"

def test_health_endpoint():
    """Test the /api/health endpoint"""
    print("=" * 60)
    print("TESTING BACKEND HEALTH ENDPOINT")
    print("=" * 60)
    
    try:
        # Test health endpoint
        response = requests.get(f"{BACKEND_URL}/health", timeout=10)
        print(f"✅ Health endpoint (/api/health) - Status: {response.status_code}")
        
        if response.status_code == 200:
            health_data = response.json()
            print(f"   Response: {json.dumps(health_data, indent=2)}")
            
            # Verify response structure
            required_fields = ['status', 'timestamp', 'database', 'service']
            missing_fields = [field for field in required_fields if field not in health_data]
            
            if missing_fields:
                print(f"   ❌ Missing required fields: {missing_fields}")
                return False
            
            # Check database status
            db_status = health_data.get('database', {}).get('status')
            if db_status == 'connected':
                print(f"   ✅ MongoDB connection: {db_status}")
            else:
                print(f"   ❌ MongoDB connection: {db_status}")
                return False
            
            # Check overall health status
            overall_status = health_data.get('status')
            if overall_status == 'healthy':
                print(f"   ✅ Overall health status: {overall_status}")
            else:
                print(f"   ❌ Overall health status: {overall_status}")
                return False
            
            return True
        else:
            print(f"   ❌ Unexpected status code: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Health endpoint failed: {e}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection through the backend"""
    print("\n" + "=" * 60)
    print("TESTING MONGODB CONNECTION VIA BACKEND")
    print("=" * 60)
    
    try:
        # Test by creating and retrieving a status check
        test_data = {
            "client_name": "HealthTestClient_MongoDB"
        }
        
        # Create a status check (tests MongoDB write)
        response = requests.post(f"{BACKEND_URL}/status", json=test_data, timeout=10)
        print(f"✅ MongoDB Write Test - Status: {response.status_code}")
        
        if response.status_code == 200:
            created_status = response.json()
            print(f"   Created status check with ID: {created_status['id']}")
            
            # Retrieve status checks (tests MongoDB read)
            response = requests.get(f"{BACKEND_URL}/status", timeout=10)
            print(f"✅ MongoDB Read Test - Status: {response.status_code}")
            
            if response.status_code == 200:
                status_checks = response.json()
                print(f"   Retrieved {len(status_checks)} status checks from MongoDB")
                
                # Verify our test record exists
                test_record_found = any(
                    check.get('client_name') == 'HealthTestClient_MongoDB' 
                    for check in status_checks
                )
                
                if test_record_found:
                    print(f"   ✅ Test record found in MongoDB")
                    return True
                else:
                    print(f"   ❌ Test record not found in MongoDB")
                    return False
            else:
                print(f"   ❌ MongoDB read failed: {response.status_code}")
                return False
        else:
            print(f"   ❌ MongoDB write failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ MongoDB connection test failed: {e}")
        return False

def main():
    """Main test runner"""
    print(f"🔧 Backend Health Check Testing")
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🌐 Backend URL: {BACKEND_URL}")
    
    test_results = []
    
    # Run tests
    print("\n" + "🧪 RUNNING HEALTH TESTS..." + "\n")
    
    # 1. Health Endpoint Test
    health_test = test_health_endpoint()
    test_results.append(("Health Endpoint", health_test))
    
    # 2. MongoDB Connection Test
    mongo_test = test_mongodb_connection()
    test_results.append(("MongoDB Connection", mongo_test))
    
    # Summary
    print("\n" + "=" * 60)
    print("HEALTH CHECK SUMMARY") 
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\n📊 Results: {passed} passed, {failed} failed")
    
    if failed == 0:
        print("🎉 All health checks passed! Backend server and MongoDB are working correctly.")
        return 0
    else:
        print("⚠️  Some health checks failed. Please review the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())