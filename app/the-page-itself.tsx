"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

import SequenceHeroSection from '@/components/sequence-hero-section/SequenceHeroSection';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import StructuredBlock from '@/components/structured-block/StructuredBlock';
import SectionContainer from '@/components/section-container/SectionContainer';
import ProductCard from '@/components/product-card/ProductCard';
import { Highlight } from "@/components/hero-highlight/HeroHighlight";
import TextColorChanger from "@/components/text-color-changer/TextColorChanger";
import { RestaurantEvents } from '@/components/event-and-promotions-bento-grid';
import AboutUsSection from '@/components/about-us-section/AboutUsSection'

import WhatsAppWidget from '@/components/whats-app-widget/WhatsAppWidget'
import FullViewportMenu from '@/components/full-viewport-menu/FullViewportMenu'
import Footer from '@/components/footer/Footer'
import Credit from '@/components/credit/Credit'

const DESKTOP_THRESHOLD = 1024;
const MAX_VIEWPORT_WIDTH = "1536px";
const MAX_FOOD_CONTAINER_WIDTH = 1310;

const Page: React.FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const foodOfDayRef = useRef<HTMLDivElement | null>(null);
  const customerReviewsRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const eventsPromotionsRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleNavItemClick = (itemLabel: string) => {
    let ref;
    switch (itemLabel) {
      case "Home":
        ref = homeRef;
        break;
      case "Food of the Day":
        ref = foodOfDayRef;
        break;
      case "Customer Reviews":
        ref = customerReviewsRef;
        break;
      case "Menu":
        ref = menuRef;
        break;
      case "About Us":
        ref = aboutUsRef;
        break;
      case "Events & Promotions":
        ref = eventsPromotionsRef;
        break;
      default:
        return;
    }

    // Scroll to the section if the ref exists
    if (ref && ref.current) {
      const yOffset = -69; // Offset for navbar height
      const element = ref.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [showCredit, setShowCredit] = useState(false);

  const openCredit = () => setShowCredit(true);
  const closeCredit = () => setShowCredit(false);

  const testimonials = [
    {
      quote:
        "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
      name: "Tamar Mendelson",
      designation: "Restaurant Critic",
      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
      name: "Joe Charlescraft",
      designation: "Frequent Visitor",
      src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
    {
      quote:
        "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
      name: "Martina Edelweist",
      designation: "Satisfied Customer",
      src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
  ];

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleAccept = () => {
    setShowDisclaimer(false);
  };

  return (
  <>
  <div>
    {showCredit && <Credit onClose={closeCredit} />}
  </div>
  <div style={{ overflowX: 'hidden', width: '100%' }}>
    <FullViewportMenu
      isOpen={isMenuOpen}
      onClose={closeMenu}
      onNavItemClick={handleNavItemClick}
      appName="Shining Yam"
    />
    <WhatsAppWidget
      name="Maya Yarok"
      photo="https://images.unsplash.com/photo-1587069841489-397256e1683e?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      status="online"
      onWhatsAppClick={() => {
        setIsMenuOpen(true);
      }}
      displayedMessage='Hi, I&#39;m Maya from Shining Yam. 🚀 This is supposed to be a selling pitch for the WhatsApp widget, but it is being used as a "convenient" way to show you the "Open Full-Viewport Menu" button instead.'
      selfPopUpsIn={3000}
      typingDotsColor="#454549"
      nameTransformY="3px"
      statusTransformY="0px"
    />
    <div style={{ height: '69px', width: '100%' }}></div>
    <Navbar
      desktopPadding="40px"
      mobilePadding="16px"
      maxWidth={MAX_VIEWPORT_WIDTH}
      desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
      onNavItemClick={handleNavItemClick}
    />
    <div ref={homeRef}></div>
    <div
      className="bg-[var(--background)] items-center justify-center relative flex"
      style={{
        minHeight: windowWidth >= 1024 ? 'calc(100vh - 69px)' : 'auto',
        maxWidth: MAX_VIEWPORT_WIDTH,
        margin: '0 auto', // Center the div horizontally
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <SequenceHeroSection 
        title="Enjoy the Flavors"
        subtitle="Experience culinary artistry on every plate."
        steps={[
          {
            number: "01",
            title: "Discover Our Culinary Delights!",
            description: "Explore a menu that changes with the seasons, showcasing the freshest ingredients and innovative recipes crafted by our chefs.",
            bgColor: "bg-[#48834A]"
          },
          {
            number: "02",
            title: "Secure Your Reservation!",
            description: "Ensure a seamless dining experience by reserving your table in advance, allowing you to relax and enjoy your meal without any hassle.",
            bgColor: "bg-[#439A46]"
          },
          {
            number: "03",
            title: "Enjoy an Unforgettable Meal!",
            description: "Sit back, relax, and indulge in a remarkable dining experience that combines great food with exceptional service.",
            bgColor: "bg-[#72B01D]"
          }
        ]}
        ctaText="Explore Now"
        onCtaClick={() => handleNavItemClick("Menu")}
        carouselImages={[
          "https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-doraklimova-9928336.jpg?raw=true",
          "https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-n-voitkevich-6275096.jpg?raw=true",
          "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=76&w=1672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-nicola-barts-7937351.jpg?raw=true",
        ]}
        profiles={[
          { 
            name: "Tamar Mendelson", 
            image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            rating: 4.8 
          },
          { 
            name: "Joe Charlescraft", 
            image: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            rating: 4.9 
          },
          { 
            name: "Martina Edelweist", 
            image: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            rating: 5.0 
          }
        ]}
      />
    </div>
    <div style={{ height: '52px', width: '100%' }}></div>
    <div ref={foodOfDayRef}></div>
    <div
      className="w-full bg-[var(--foreground)]"
    >
      <div
        className="flex flex-col items-center relative"
        style={{
          minHeight: windowWidth >= MAX_FOOD_CONTAINER_WIDTH ? 'calc(100vh - 37px)' : 'auto',
          maxWidth: MAX_VIEWPORT_WIDTH,
          margin: '0 auto',
          paddingBottom: '32px',
          display: 'flex', //redundant since tailwind is doing this
        }}
      >
        <div
          className="min-h-[300px] w-full flex flex-col items-stretch relative"
          style={{
            width: '100%', // Ensures the inner div takes full width,
          }}
        >
          <StructuredBlock
            textColor="var(--background)"
            isBold={true}
            desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "45px", bottom: "0px" }}
            mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "30px", bottom: "16px" }}
            desktopFontSize="var(--desktop-headline-font-size)"
            mobileFontSize="var(--mobile-headline-font-size)"
            desktopTextAlign="center"
            mobileTextAlign="center"
          >
            <Highlight gradientColors="linear-gradient(to right, var(--theme-color-2), var(--theme-color-1))">
              Food of the Day
            </Highlight>
          </StructuredBlock>
          <StructuredBlock
              textColor="var(--background)"
              desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "21px", bottom: "5px" }}
              mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "0px", bottom: "5px" }}
              desktopFontSize="var(--desktop-subheader-font-size)"
              mobileFontSize="var(--mobile-subheader-font-size)"
              desktopTextAlign="center"
              mobileTextAlign="center"
            >
              Get the best of both worlds! By ordering from our special "Food of the Day" menu, you're not just getting a high-quality meal made with organic, seasonal ingredients sourced from local farms; you're also saving up to 25% off the original price!
          </StructuredBlock>
          <div
            className="items-start justify-center relative flex"
            style={{
              margin: '0 auto',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '32px',
            }}
           >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap', // Allow items to wrap onto multiple lines
                justifyContent: 'center', // Center items on the main axis
                paddingLeft: windowWidth >= DESKTOP_THRESHOLD ? 'var(--desktop-horizontal-padding)' : 'var(--mobile-horizontal-padding)',
                paddingRight: windowWidth >= DESKTOP_THRESHOLD ? 'var(--desktop-horizontal-padding)' : 'var(--mobile-horizontal-padding)',
                paddingTop: windowWidth >= DESKTOP_THRESHOLD ? '40px' : '20px',
                paddingBottom: '20px',
                gap: '24px', // Space between items
                backgroundColor: 'transparent', // No background color
              }}
            >
              <ProductCard
                id="Beef in Lettuce Wraps"
                imageSrc="https://images.unsplash.com/photo-1641283356224-79a4c4a7e768?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Beef in Lettuce Wraps"
                oldPrice="$18"
                price="$15.30"
                condition="30 min."
                discountTag="Meat"
                title="Beef in Lettuce Wraps"
                description="Savory ground beef with seasonings, served in crisp lettuce."
                onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                accentColor="#C03920"
                buttonRounding={50}
                outerWidth={392}
                outerHeight={414}
                borderWidth={4}
                containerRounding={14}
                innerContainerRounding={14}
              />
              <ProductCard
                id="Crispy Fried Fish"
                imageSrc="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Crispy Fried Fish"
                oldPrice="$30"
                price="$27"
                condition="45 min."
                discountTag="Fish"
                title="Crispy Fried Fish"
                description="Whole fish marinated and coated in spices, fried to crispy perfection."
                onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                accentColor="#A71DB0"
                buttonRounding={50}
                outerWidth={392}
                outerHeight={414}
                borderWidth={4}
                containerRounding={14}
                innerContainerRounding={14}
              />
              <ProductCard
                id="Mediterranean Salad"
                imageSrc="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Mediterranean Salad"
                oldPrice="$19"
                price="$14.25"
                condition="10 min."
                discountTag="Vegan"
                title="Mediterranean Salad"
                description="Fresh vegetables, feta, and olives with a light vinaigrette."
                onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                accentColor="#72B01D"
                buttonRounding={50}
                outerWidth={392}
                outerHeight={414}
                borderWidth={4}
                containerRounding={14}
                innerContainerRounding={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref={customerReviewsRef}></div>
    <div
    className="bg-[var(--background)] relative flex flex-col"
    style={{
        minHeight: windowWidth >= 1024 ? 'calc(100vh - 18px)' : 'auto',
        maxWidth: MAX_VIEWPORT_WIDTH,
        margin: '0 auto', // Center the div horizontally
        width: '100%', // Ensure it takes full width
        padding: 0, // Remove any default padding
        display: 'flex',
        alignItems: 'stretch', // Align children to stretch full width
        justifyContent: 'flex-start' // Align items to the top
    }}
>
    <StructuredBlock
      textColor="var(--foreground)"
      isBold={true}
      desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "46px", bottom: "8px" }}
      mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "30px", bottom: "20px" }}
      desktopFontSize="var(--desktop-headline-font-size)"
      mobileFontSize="var(--mobile-headline-font-size)"
      desktopTextAlign="center"
      mobileTextAlign="center"
    >
      <Highlight gradientColors="linear-gradient(to right, var(--theme-color-2), var(--theme-color-1))">
        <TextColorChanger>Customer Reviews</TextColorChanger>
      </Highlight>
    </StructuredBlock>
    <div
      className="bg-[var(--background)] items-center justify-center relative flex"
      style={{
        maxWidth: MAX_VIEWPORT_WIDTH,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <SectionContainer 
        desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "21px", bottom: "20px" }}
        mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "20px", bottom: "20px" }}
        desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
      >
        <AnimatedTestimonials
          testimonials={testimonials}
          colors={{
              name:"var(--foreground)",
              position:"var(--third-foreground-shade)",
              testimony:"var(--sub-foreground)",
              arrowBackground:"var(--foreground)",
              arrowForeground:"var(--background)",
              arrowHoverForeground:"var(--theme-color-2)"
          }}
          desktopVersionBottomThreshold={1024}
          fontSizes={{
              name:"28px",
              position:"20px",
              testimony:"20px"
          }}
          spacing={{
              nameTop:"0",
              nameBottom:"10px",
              positionTop:"0",
              positionBottom:"0.5em",
              testimonyTop:"1.24em",
              testimonyBottom:"1em",
              lineHeight:"1.56",
              imageToTestimonialSpace:"24px" // Space between image and testimonial
          }}
          imageAspectRatio={1.05}
        />
      </SectionContainer>
    </div>
    </div>
    <div ref={menuRef}></div>
      <div
        className="w-full bg-[var(--foreground)]"
      >
        <div
          className="flex flex-col items-center relative"
          style={{
            height: 'auto',
            maxWidth: MAX_VIEWPORT_WIDTH,
            margin: '0 auto',
            paddingBottom: '32px',
            display: 'flex', //redundant since tailwind is doing this
          }}
        >
          <div
            className="min-h-[300px] w-full flex flex-col items-stretch relative"
            style={{
              width: '100%', // Ensures the inner div takes full width,
            }}
          >
            <StructuredBlock
              textColor="var(--background)"
              isBold={true}
              desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "45px", bottom: "0px" }}
              mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "30px", bottom: "16px" }}
              desktopFontSize="var(--desktop-headline-font-size)"
              mobileFontSize="var(--mobile-headline-font-size)"
              desktopTextAlign="center"
              mobileTextAlign="center"
            >
              <Highlight gradientColors="linear-gradient(to right, var(--theme-color-2), var(--theme-color-1))">
                Menu
              </Highlight>
            </StructuredBlock>
            <StructuredBlock
                textColor="var(--background)"
                desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "21px", bottom: "5px" }}
                mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "0px", bottom: "5px" }}
                desktopFontSize="var(--desktop-subheader-font-size)"
                mobileFontSize="var(--mobile-subheader-font-size)"
                desktopTextAlign="center"
                mobileTextAlign="center"
              >
                Explore a diverse selection of dishes crafted with care and creativity. Our menu features a variety of flavors and ingredients, ensuring there is something for everyone. Whether you are in the mood for a hearty meal or a light salad, you will find an array of options that cater to different tastes and dietary preferences.
              </StructuredBlock>
              <div
                className="items-start justify-center relative flex"
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: '32px',
                }}
              >
            <div
              className="flex flex-col items-center relative"
              style={{
                height: 'auto',
                maxWidth: `${MAX_FOOD_CONTAINER_WIDTH}px`,
                margin: '0 auto',
                paddingBottom: '32px',
                display: 'flex', //redundant since tailwind is doing this
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap', // Allow items to wrap onto multiple lines
                  justifyContent: 'center', // Center items on the main axis
                  paddingLeft: windowWidth >= DESKTOP_THRESHOLD ? 'var(--desktop-horizontal-padding)' : 'var(--mobile-horizontal-padding)',
                  paddingRight: windowWidth >= DESKTOP_THRESHOLD ? 'var(--desktop-horizontal-padding)' : 'var(--mobile-horizontal-padding)',
                  paddingTop: windowWidth >= DESKTOP_THRESHOLD ? '40px' : '20px',
                  paddingBottom: '20px',
                  gap: '24px', // Space between items
                  backgroundColor: 'transparent', // No background color
                }}
              >
                <ProductCard
                  id="Shakshouka"
                  imageSrc="https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-n-voitkevich-6275158.jpg?raw=true"
                  altText="Shakshouka"
                  price="$21.99"
                  condition="20 min."
                  discountTag="Dairy"
                  title="Shakshouka"
                  description="A tasty dish of poached eggs and cheese in a spicy tomato sauce with herbs."
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  accentColor="#FFC107"
                  buttonRounding={50}
                  outerWidth={392}
                  outerHeight={414}
                  borderWidth={4}
                  containerRounding={14}
                  innerContainerRounding={14}
                  darkTextInTags={true}
                />
                <ProductCard
                  id="Crispy Fried Fish"
                  imageSrc="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  altText="Crispy Fried Fish"
                  oldPrice="$30"
                  price="$27"
                  condition="45 min."
                  discountTag="Fish"
                  title="Crispy Fried Fish"
                  description="Whole fish marinated and coated in spices, fried to crispy perfection."
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  accentColor="#A71DB0"
                  buttonRounding={50}
                  outerWidth={392}
                  outerHeight={414}
                  borderWidth={4}
                  containerRounding={14}
                  innerContainerRounding={14}
                />
                <ProductCard
                  id="Chicken Wok"
                  imageSrc="https://images.unsplash.com/photo-1630257527668-c27eb6a427a4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  altText="Chicken Wok"
                  price="$17.50"
                  condition="25 min."
                  discountTag="Meat"
                  title="Chicken Wok"
                  description="Stir-fried chicken with pasta and fresh, seasonal organic vegetables."
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  accentColor="#C03920"
                  buttonRounding={50}
                  outerWidth={392}
                  outerHeight={414}
                  borderWidth={4}
                  containerRounding={14}
                  innerContainerRounding={14}
                />
                <ProductCard
                  id="Mediterranean Salad"
                  imageSrc="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  altText="Mediterranean Salad"
                  oldPrice="$19"
                  price="$14.25"
                  condition="10 min."
                  discountTag="Vegan"
                  title="Mediterranean Salad"
                  description="Fresh vegetables, feta, and olives with a light vinaigrette."
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  accentColor="#72B01D"
                  buttonRounding={50}
                  outerWidth={392}
                  outerHeight={414}
                  borderWidth={4}
                  containerRounding={14}
                  innerContainerRounding={14}
                />
                <ProductCard
                  id="Spicy Tantanmen"
                  imageSrc="https://images.unsplash.com/photo-1637024698421-533d83c7b883?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  altText="Spicy Tantanmen"
                  price="$19.99"
                  condition="25 min."
                  discountTag="Neutral"
                  title="Spicy Tantanmen"
                  description="A spicy ramen with eggs, topped with slices of chili pepper for an extra kick."
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  accentColor="#1D72B0"
                  buttonRounding={50}
                  outerWidth={392}
                  outerHeight={414}
                  borderWidth={4}
                  containerRounding={14}
                  innerContainerRounding={14}
                />
                <ProductCard
                  id="Berry Bliss Pancakes"
                  imageSrc="https://images.unsplash.com/photo-1636972677998-d76f527e5576?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  altText="Berry Bliss Pancakes"
                  price="₪12.98"
                  condition="דקות&#x2800;15"
                  discountTag={'פרווה'}
                  title={'פנקייקים של עונג התות'}
                  description={'בליני מרחבי ואווירי, מבשל בביצים ממשרד ארעי, מעוטר בתות שחור ותות לבן.'}
                  onFilledButtonClick={(id) => console.log(`Filled button clicked for ID: ${id}`)}
                  filledButtonInscription={'קנה עכשיו'} 
                  onOutlinedButtonClick={(id) => console.log(`Outlined button clicked for ID: ${id}`)}
                  outlinedButtonInscription={'הוסף לעגלה'} 
                  accentColor="#1D72B0" 
                  buttonRounding={50} 
                  outerWidth={392} 
                  outerHeight={414} 
                  borderWidth={4} 
                  containerRounding={14} innerContainerRounding={14}
                  swapButtons={true} mirrorTags={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'var(--background)',
          height: '1px',
          width: '100%'
        }}
      />
      <div
        className="w-full bg-[var(--background)]"
      >
        <div ref={eventsPromotionsRef}></div>
        <div
          className="bg-[var(--background)] relative flex flex-col"
          style={{
              minHeight: windowWidth >= 1024 ? 'calc(100vh - 18px)' : 'auto',
              maxWidth: MAX_VIEWPORT_WIDTH,
              margin: '0 auto', // Center the div horizontally
              width: '100%', // Ensure it takes full width
              padding: 0, // Remove any default padding
              display: 'flex',
              alignItems: 'stretch', // Align children to stretch full width
              justifyContent: 'flex-start' // Align items to the top
          }}
        >
          <StructuredBlock
            textColor="var(--foreground)"
            isBold={true}
            desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "45px", bottom: "8px" }}
            mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "29px", bottom: "20px" }}
            desktopFontSize="var(--desktop-headline-font-size)"
            mobileFontSize="var(--mobile-headline-font-size)"
            desktopTextAlign="center"
            mobileTextAlign="center"
          >
            <Highlight gradientColors="linear-gradient(to right, var(--theme-color-2), var(--theme-color-1))">
              <TextColorChanger>Events & Promotions</TextColorChanger>
            </Highlight>
          </StructuredBlock>
          <div
            className="bg-[var(--background)] items-center justify-center relative flex"
            style={{
              maxWidth: MAX_VIEWPORT_WIDTH,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SectionContainer 
              desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "21px", bottom: "20px" }}
              mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "20px", bottom: "20px" }}
              desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
            >
              <RestaurantEvents desktopVersionBottomThreshold={DESKTOP_THRESHOLD} />
            </SectionContainer>
          </div>
        </div>
      </div>
      <div ref={aboutUsRef}></div>
      <div
        className="w-full bg-[var(--foreground)]"
      >
        <div
          className="bg-[var(--foreground)] relative flex flex-col"
          style={{
              minHeight: windowWidth >= 1024 ? 'calc(100vh - 18px)' : 'auto',
              maxWidth: MAX_VIEWPORT_WIDTH,
              margin: '0 auto', // Center the div horizontally
              width: '100%', // Ensure it takes full width
              padding: 0, // Remove any default padding
              display: 'flex',
              alignItems: 'stretch', // Align children to stretch full width
              justifyContent: 'flex-start' // Align items to the top
          }}
        >
          <StructuredBlock
            textColor="var(--background)"
            isBold={true}
            desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "46px", bottom: "8px" }}
            mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "30px", bottom: "20px" }}
            desktopFontSize="var(--desktop-headline-font-size)"
            mobileFontSize="var(--mobile-headline-font-size)"
            desktopTextAlign="center"
            mobileTextAlign="center"
          >
            <Highlight gradientColors="linear-gradient(to right, var(--theme-color-2), var(--theme-color-1))">
              About Us
            </Highlight>
          </StructuredBlock>
          <div
            className="bg-[var(--foreground)] items-center justify-center relative flex"
            style={{
              maxWidth: MAX_VIEWPORT_WIDTH,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SectionContainer 
              desktopPadding={{ left: "var(--desktop-horizontal-padding)", right: "var(--desktop-horizontal-padding)", top: "21px", bottom: "20px" }}
              mobilePadding={{ left: "var(--mobile-horizontal-padding)", right: "var(--mobile-horizontal-padding)", top: "20px", bottom: "20px" }}
              desktopVersionBottomThreshold={DESKTOP_THRESHOLD}
            >
              <AboutUsSection
                aboutUsImages={[
                  "https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/eaters-collective-12eHC6FxPyg-unsplash.jpg?raw=true",
                  "https://images.unsplash.com/photo-1736885978380-8d7d9f7d7880?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://github.com/Northstrix/shining-yam-fictional-restaurant/blob/main/images/pexels-n-voitkevich-6275096.jpg?raw=true",
                  "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ]}
                aboutUsDescription={`
                  Shining Yam opened its doors in Dallas, Texas, in December 2024, bringing together a vibrant array of flavors by featuring exceptional recipes from various cuisines, whether they are contemporary creations or cherished classics. We pride ourselves on using fresh ingredients sourced from local organic farms. Our selection caters to all palates, from hearty meals to lighter options. What truly sets us apart is our dedication to exceptional service, ensuring every guest feels welcomed and valued during their visit. At Shining Yam, you're not just enjoying delicious food; you're joining a community that cherishes quality and exceptional taste in every dish.
                `}                        
                onButtonClick={openCredit}
                onGridImageClick={(index) => console.log(`Grid image ${index + 1} clicked!`)}
                onGridImageHover={(index) => console.log(`Grid image ${index + 1} hovered!`)}
                chronicleButtonHoverColor="var(--theme-color-2)"
                chronicleButtonBorderRadius="var(--general-rounding)"
                chronicleButtonCustomBackground="var(--background)"
                chronicleButtonCustomForeground="var(--foreground)"
              />
            </SectionContainer>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  </>
  );
}
export default Page;