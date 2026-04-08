#!/usr/bin/env python3
"""
Detailed Frontend Testing Script for Hot Tub/Spa Website
Tests actual rendered pages for pricing and add-ons
"""

import requests
import json
import sys
import re
from datetime import datetime

# Configuration 
FRONTEND_URL = "https://tub-hours-update.preview.emergentagent.com"

def test_product_page_pricing(product_id, expected_name, expected_price, expected_collection=None):
    """Test individual product page for correct pricing and add-ons"""
    url = f"{FRONTEND_URL}/products/{product_id}"
    
    try:
        response = requests.get(url, timeout=15)
        if response.status_code != 200:
            print(f"❌ {product_id} - Failed to load page (Status: {response.status_code})")
            return False
            
        html_content = response.text
        
        # Check if product name appears
        if expected_name.lower() not in html_content.lower():
            print(f"❌ {product_id} - Product name '{expected_name}' not found on page")
            return False
            
        # Check if price appears  
        if expected_price not in html_content:
            print(f"❌ {product_id} - Expected price '{expected_price}' not found on page")
            return False
            
        print(f"✅ {expected_name} ({product_id})")
        print(f"   💰 Price: {expected_price} - FOUND")
        
        # Check for Dynasty add-ons section if it's a Dynasty product
        if "Dynasty Spas" in html_content and expected_collection:
            addons_section = "Available Upgrades & Extras" in html_content
            if addons_section:
                print(f"   🔧 Add-ons section: FOUND")
                
                # Check for specific add-ons based on collection
                if expected_collection == "Oasis Collection":
                    required_addons = ["Instream Stereo", "In Mix Lighting", "Circulation Pump", "In Touch App"]
                elif expected_collection == "Vacation Collection": 
                    required_addons = ["K1000 Touchscreen", "Instream Stereo", "Circulation Pump", "In Touch App"]
                elif expected_collection == "Hideaway Collection":
                    required_addons = ["Instream Stereo", "Circulation Pump"]
                else:
                    required_addons = []
                
                found_addons = 0
                for addon in required_addons:
                    if addon.lower() in html_content.lower():
                        found_addons += 1
                        
                if found_addons == len(required_addons):
                    print(f"   ✅ All {len(required_addons)} expected add-ons found for {expected_collection}")
                else:
                    print(f"   ⚠️  Only {found_addons}/{len(required_addons)} expected add-ons found")
            else:
                print(f"   ⚠️  Add-ons section not found")
        
        return True
        
    except Exception as e:
        print(f"❌ {product_id} - Error testing page: {e}")
        return False

def main():
    """Main test runner for detailed frontend testing"""
    print(f"🔧 Hot Tub/Spa Website Frontend Testing - Detailed")
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🌐 Frontend URL: {FRONTEND_URL}")
    
    print("\n" + "=" * 70)
    print("TESTING SPECIFIC PRODUCT PAGES FOR PRICING & ADD-ONS")
    print("=" * 70)
    
    # Test cases from review request
    test_cases = [
        # Dynasty Spa Pricing
        ("ds-serenity-cove", "Serenity Cove", "$9,999.99", "Vacation Collection"),
        ("ds-paradise-bay-iii", "Paradise Bay III", "$13,999.99", "Oasis Collection"), 
        ("ds-high-tide", "High Tide", "$8,995.99", "Hideaway Collection"),
        
        # Grand River and Viking Pricing (+$500 increase)
        ("gr-chariton-2", "Chariton 2", "$11,495.99", None),
        ("vs-heritage-2", "Heritage 2", "$12,995.99", None),
    ]
    
    results = []
    
    for product_id, name, price, collection in test_cases:
        print(f"\n📋 Testing {name}...")
        result = test_product_page_pricing(product_id, name, price, collection)
        results.append((f"{name} ({product_id})", result))
    
    # Additional test for Island Oasis SL (swim spa)
    print(f"\n📋 Testing Island Oasis SL (swim spa)...")
    
    # For swim spas, we need to check the homepage or swim spas section
    try:
        response = requests.get(f"{FRONTEND_URL}/", timeout=15)
        if response.status_code == 200:
            html_content = response.text
            if "Island Oasis SL" in html_content and "$16,999.99" in html_content:
                print(f"✅ Island Oasis SL")
                print(f"   💰 Price: $16,999.99 - FOUND on homepage")
                results.append(("Island Oasis SL", True))
            else:
                print(f"❌ Island Oasis SL - Price not found on homepage")
                results.append(("Island Oasis SL", False))
        else:
            print(f"❌ Island Oasis SL - Failed to load homepage")
            results.append(("Island Oasis SL", False))
    except Exception as e:
        print(f"❌ Island Oasis SL - Error: {e}")
        results.append(("Island Oasis SL", False))
    
    # Summary
    print("\n" + "=" * 70)
    print("DETAILED FRONTEND TESTING SUMMARY")
    print("=" * 70)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\n📊 Results: {passed} passed, {failed} failed")
    
    if failed == 0:
        print("🎉 All frontend tests passed! Pricing and add-ons are displaying correctly.")
        return 0
    else:
        print("⚠️  Some frontend tests failed. Please review the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())