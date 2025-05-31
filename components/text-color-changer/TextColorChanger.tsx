"use client";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface TextColorChangerProps {
  children: string;
  fontSize?: string;
}

const TextColorChanger: React.FC<TextColorChangerProps> = ({ children, fontSize }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.add('animate');
        }
      }, 4250);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <AnimatedText fontSize={fontSize} ref={textRef}>
      {children}
    </AnimatedText>
  );
};

const AnimatedText = styled.span<{ fontSize?: string }>`
  display: inline;
  font-size: ${props => props.fontSize || 'inherit'};
  white-space: pre;
  color: var(--foreground);
  transition: color 1s ease-in-out;

  &.animate {
    color: var(--background);
  }
`;

export default TextColorChanger;
