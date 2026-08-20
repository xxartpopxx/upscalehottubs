import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { ASSETS } from '../../data/constants';

const JinglePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={ASSETS.jingle} loop preload="none" />
      <motion.button 
        data-testid="jingle-toggle-btn" 
        onClick={togglePlay} 
        className="fixed bottom-6 right-6 z-50 bg-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:bg-[#DC2626] transition-all" 
        whileHover={{ scale: 1.1, rotate: 10 }} 
        whileTap={{ scale: 0.95 }} 
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
};

export default JinglePlayer;
