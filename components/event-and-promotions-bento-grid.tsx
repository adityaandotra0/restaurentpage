"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid/BentoGrid";
import Image from "next/image";

// Define the items with titles, descriptions, and images
const items = [
  {
    title: 'Middle Eastern Festival',
    description: 'Taste delightful dishes from Israel, Kuwait, Saudi Arabia, and other Middle Eastern countries.',
    image: 'https://images.unsplash.com/photo-1582492710145-d723e0a219f8?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: "md:col-span-1"
  },
  {
    title: 'American Bakery Week',
    description: 'Celebrate American Bakery Week with an array of freshly baked delights. Indulge in iconic treats like apple pie, cherry pie, and chocolate chip cookies. Each bite offers a taste of cherished baking traditions that evoke warmth and nostalgia.',
    image: 'https://images.unsplash.com/photo-1607455849478-86754d8816f0?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: "md:col-span-2"
  },
  {
    title: 'Italian Pasta Week',
    description: 'Savor authentic Italian pasta dishes like spaghetti and fettuccine that bring Italy to your plate.',
    image: 'https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/eaters-collective-12eHC6FxPyg-unsplash.jpg?raw=true',
    className: "md:col-span-1"
  },
  {
    title: 'Sweet Weekend',
    description: 'Indulge in our delectable desserts, perfect for satisfying your sweet cravings this weekend.',
    image: 'https://images.unsplash.com/photo-1615837197154-2e801f4bd294?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: "md:col-span-1"
  },
  {
    title: 'Zebra Day',
    description: 'One day only! Order three or more dishes and get every second dish for free - don\'t miss out!',
    image: 'https://images.unsplash.com/photo-1594555250062-0ab99b058546?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: "md:col-span-1"
  }
];

interface RestaurantEventsProps {
  desktopVersionBottomThreshold: number;
}

// Main component
export function RestaurantEvents({ desktopVersionBottomThreshold }: RestaurantEventsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < desktopVersionBottomThreshold);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopVersionBottomThreshold]);

  const bottomMargin = isMobile ? '32px' : '90px';

  return (
    <div style={{ marginBottom: bottomMargin }}>
      <BentoGrid className={cn("w-full mx-auto md:auto-rows-[20rem]", isMobile ? "flex flex-col items-center" : "")}>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <div className="relative w-full h-48">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            }
            className={cn("[&>p:text-lg]", item.className, isMobile ? "w-full" : "")}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
