import React, { useRef, useEffect, useState } from 'react';

const images = [
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/70dd0dfd0_generated_7b7884f5.png',
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/6603a7b14_generated_e124d9f3.png',
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/fef0f8841_generated_2b451721.png',
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/482c48df2_generated_275b56b7.png',
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/e7a56beab_generated_f586b318.png',
  'https://media.base44.com/images/public/69de52af395855871aaa1d20/b9ff0c8a4_generated_c3410849.png',
];

export default function ScrollingImages() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPos = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 0.5;

    const animate = () => {
      if (!isHovered && container) {
        scrollPos.current += speed;
        // Reset when we've scrolled through half the content (since we duplicate)
        const halfHeight = container.scrollHeight / 2;
        if (scrollPos.current >= halfHeight) {
          scrollPos.current = 0;
        }
        container.scrollTop = scrollPos.current;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered]);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-screen overflow-hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="hide-scrollbar flex flex-col gap-3 p-2">
        {allImages.map((src, i) => (
          <div
            key={i}
            className="w-full rounded-lg overflow-hidden shrink-0"
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}