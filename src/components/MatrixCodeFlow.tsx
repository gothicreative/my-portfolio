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

    // Matrix characters with more variety for a richer effect
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/+=~`|\\abcdefghijklmnopqrstuvwxyz';
    const charArray = chars.split('');

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array to store the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above the viewport for a more natural flow
    }

    // Animation function with enhanced visual effects
    const draw = () => {
      // Semi-transparent black overlay for trail effect
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw "Hafiz" in the top-right corner
      context.fillStyle = '#0f0'; // Bright green color
      context.font = 'bold 20px monospace';
      context.fillText('Hafiz', canvas.width - 80, 30);

      // Draw characters with varying brightness
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Varying brightness for depth effect - brighter at the head of the stream
        const brightness = Math.floor(Math.random() * 155) + 100; // 100-255
        context.fillStyle = `rgb(0, ${brightness}, 0)`;
        context.font = `bold ${fontSize}px monospace`;

        // Draw character
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly or when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -50; // Reset above the viewport
        }

        // Increment y position with varying speeds for a more natural effect
        drops[i] += Math.random() * 0.5 + 0.5;
      }
    };

    // Start animation with a faster frame rate for smoother effect
    const interval = setInterval(draw, 33); // ~30fps

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