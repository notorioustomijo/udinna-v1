import { useState, useEffect } from 'react';
import styles from './UdinnaLoader.module.css';

export default function UdinnaLoader({ onComplete }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'UDINNA';

  useEffect(() => {
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            // Call the onComplete callback to notify parent
            if (onComplete) {
              onComplete();
            }
          }, 300);
        }, 800);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${styles.loader}`}
    >
      <div className="relative flex items-center justify-center">
        <h1 className={styles.title}>
          {displayText}
          <span 
            className={`${styles.cursor} inline-block w-1 ml-1 transition-opacity duration-100`}
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        </h1>
      </div>
      <p 
        className={`${styles.tagline} mt-6 transition-opacity duration-700`}
        style={{ opacity: displayText.length === fullText.length ? 1 : 0 }}
      >
        DIGITAL AGENCY
      </p>
    </div>
  );
}