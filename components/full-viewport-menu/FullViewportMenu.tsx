"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconHome, IconStar, IconUserStar, IconList, IconCalendarEvent, IconInfoCircle, IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  icon: React.ReactElement<{ style?: React.CSSProperties }>;
  label: string;
  images: [ImageSource, ImageSource];
}

interface ImageSource {
  src: string;
  alt: string;
}

interface FullViewportMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (itemLabel: string) => void;
  appName: string;
}

const items: MenuItem[] = [
  {
    icon: <IconHome size={22} />,
    label: 'Home',
    images: [
      { src: 'https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-n-voitkevich-6275096.jpg?raw=true', alt: 'Image 1' },
      { src: 'https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-nicola-barts-7937351.jpg?raw=true', alt: 'Image 2' }
    ]
  },
  {
    icon: <IconStar size={22} />,
    label: 'Food of the Day',
    images: [
      { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'https://images.unsplash.com/photo-1641283356224-79a4c4a7e768?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' }
    ]
  },
  {
    icon: <IconUserStar size={22} />,
    label: 'Customer Reviews',
    images: [
      { src: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D', alt: 'Image 2' }
    ]
  },
  {
    icon: <IconList size={22} />,
    label: 'Menu',
    images: [
      { src: 'https://images.unsplash.com/photo-1636972677998-d76f527e5576?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'pexels-doraklimova-9928336.jpg', alt: 'Image 2' }
    ]
  },
  {
    icon: <IconCalendarEvent size={22} />,
    label: 'Events & Promotions',
    images: [
      { src: 'https://images.unsplash.com/photo-1615837197154-2e801f4bd294?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/eaters-collective-12eHC6FxPyg-unsplash.jpg?raw=true', alt: 'Image 2' }
    ]
  },
  {
    icon: <IconInfoCircle size={22} />,
    label: 'About Us',
    images: [
      { src: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'https://images.unsplash.com/photo-1736885978380-8d7d9f7d7880?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' }
    ]
  }
];

const FullViewportMenu: React.FC<FullViewportMenuProps> = ({ isOpen, onClose, onNavItemClick, appName }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = (label: string) => {
    onNavItemClick(label);
    onClose();
  };

  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect = "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-full bg-foreground text-background z-[1000000] flex flex-col overflow-auto"
        >
          <div className="flex justify-between items-center h-20 px-4">
            <div className={`text-[20px] font-regular ${isMobile ? 'p-5' : 'p-8'}`}>{appName}</div>
            <button onClick={onClose} className="p-2 text-white rounded-full">
              <IconX size={26} />
            </button>
          </div>
          <div style={{ transform: 'translateY(-25px)' }} className="flex-1 flex justify-center items-center">
            <div className={`flex flex-col space-y-4 w-full ${isMobile ? 'max-w-xs text-sm' : 'max-w-[31rem]'}`}>
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(item.label)}
                  className="group relative h-fit overflow-visible py-3 flex items-center space-x-4 p-4 hover:text-[var(--theme-color-2)] transition-colors duration-300 w-fit cursor-pointer font-bold"
                >
                  {item.icon}
                  <span style={{ fontSize: isMobile ? '16px' : '38px' }}>{item.label}</span>
                  <div style={{ transform: 'translateY(-43px) translateX(70px)' }} className="relative flex space-x-2">
                    <div className={container}>
                      <div className={effect}>
                        <img alt={item.images[1].alt} src={item.images[1].src} className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className={cn(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12")}>
                      <div className={cn(effect, "duration-200")}>
                        <img alt={item.images[0].alt} src={item.images[0].src} className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FullViewportMenu;
