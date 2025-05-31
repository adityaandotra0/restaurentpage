"use client";

import React, { useEffect, useState, useRef } from "react";

const Footer: React.FC = () => {
  const [textSize, setTextSize] = useState("0.98rem");
  const footerRef = useRef<HTMLDivElement>(null);

  // Function to check and update text size based on width
  const handleResize = () => {
    if (footerRef.current) {
      const width = footerRef.current.offsetWidth;
      if (width < 574) {
        setTextSize("0.76rem");
      } else {
        setTextSize("0.98rem");
      }
    }
  };

  // Add event listeners to track resizing
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full flex justify-center items-center"
      style={{
        height: "69px",
        borderTop: "1px solid var(--third-foreground-shade)",
        backgroundColor: "var(--sub-foreground)",
      }}
    >
      <div
        className="text-center leading-[1.5] tracking-[-0.0035em] text-white"
        style={{ fontSize: textSize }}
      >
        Made by{" "}
        <a
          href="https://maxim-bortnikov.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Maxim Bortnikov
        </a>{" "}
        using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Next.js
        </a>
      </div>

      <style jsx>{`
        .footer-link {
          color: white;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--theme-color-2);
        }
        .footer-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transform: scaleX(1);
          transition: transform 0.3s ease;
        }
        .footer-link:hover::after {
          transform: scaleX(0);
        }
      `}</style>
    </footer>
  );
};

export default Footer;