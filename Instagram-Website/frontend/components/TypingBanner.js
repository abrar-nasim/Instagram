import { useState, useEffect } from 'react';

export default function TypingBanner() {
  const messages = [
    "Changing lives with Instagram and influencer marketing...",
    "To sell contact us on Email/Telegram",
    "Build your empire with real followers...",
    "Monetize your page like a pro...",
    "Skip the grind. Start earning today..."
  ];

  const typingSpeed = 110;          // typing speed (ms per character)
  const deletingSpeed = 50;        // deleting speed
  const pauseAfterTyping = 50;   // pause before deletion
  const pauseAfterDeleting = 30; // pause before next sentence

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);        // Which message
  const [charIndex, setCharIndex] = useState(0); // Character index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];

    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentMessage.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    }

    if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="bg-blue-50 py-3 px-4 sm:px-8 text-center shadow-sm z-10">
      <p className="text-sm sm:text-base font-mono text-gray-600 tracking-wide">
        {text}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
}
