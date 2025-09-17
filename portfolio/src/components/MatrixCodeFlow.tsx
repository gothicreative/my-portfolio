import React, { useEffect, useRef } from 'react';

interface MatrixCodeFlowProps {
  className?: string;
}

const MatrixCodeFlow: React.FC<MatrixCodeFlowProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (including some coding symbols)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/+=~`|\\';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Animation function
    const draw = () => {
      // Semi-transparent black background to create fade effect
      context.fillStyle = 'rgba(0, 0, 0, 0.04)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0f0'; // Green color
      context.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw character
        context.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.8 + 0.2})`;
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y position
        drops[i]++;
      }
    };

    // Start animation
    const interval = setInterval(draw, 35);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: 'black' }}
    />
  );
};

export default MatrixCodeFlow;