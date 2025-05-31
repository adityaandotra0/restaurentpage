"use client";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChronicleButton from '@/components/chronicle-button/ChronicleButton'
import StructuredBlock from '@/components/structured-block/StructuredBlock'
import SectionContainer from '@/components/section-container/SectionContainer'
import DicedGrid from '@/components/about-us-section/DicedGrid';

interface AboutUsSectionProps {
  desktopThreshold?: number;
  aboutUsImages: string[];
  aboutUsDescription: string;
  buttonText?: string;
  onButtonClick?: () => void;
  desktopPadding?: { left: string; right: string; top: string; bottom: string };
  mobilePadding?: { left: string; right: string; top: string; bottom: string };
  spaceBelowDesktop?: string;
  spaceBelowMobile?: string;
  imageOuterBorderRadius?: string;
  dicedGridContainerWidth?: string;
  twoImageBreakpoint?: number;
  oneImageBreakpoint?: number;
  onGridImageClick?: (index: number) => void;
  onGridImageHover?: (index: number) => void;
  dicedGridViewportHeightMultiplier?: number;
  dicedGridSizeAdjustment?: number;
  chronicleButtonHoverColor?: string;
  chronicleButtonWidth?: string;
  chronicleButtonOutlined?: boolean;
  chronicleButtonOutlinePaddingAdjustment?: string;
  chronicleButtonBorderRadius?: string;
  chronicleButtonOutlinedBackgroundOnHover?: string;
  chronicleButtonCustomBackground?: string;
  chronicleButtonCustomForeground?: string;
  sectionTextFontSize?: {
    desktop: string;
    mobile: string;
  };
}

const TwoImageGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 24px;
`;

const SquareImage = styled.img`
  width: calc(50% - 12px);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 15px;
`;

const SingleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 24px;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: min(60%, 658px) 1fr;
  gap: 24px;
  align-items: center;
`;

const ImageGridWrapper = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
`;

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  desktopThreshold = 768,
  aboutUsImages,
  aboutUsDescription,
  buttonText = "Credit",
  onButtonClick = () => {},
  desktopPadding = { left: '0px', right: '0px', top: '0px', bottom: '0px' },
  mobilePadding = { left: '0px', right: '0px', top: '0px', bottom: '0px' },
  spaceBelowDesktop = "65px",
  spaceBelowMobile = "20px",
  imageOuterBorderRadius = "15px",
  dicedGridContainerWidth = "min(60%, 658px)",
  twoImageBreakpoint = 1200,
  oneImageBreakpoint = 600,
  onGridImageClick,
  onGridImageHover,
  dicedGridViewportHeightMultiplier = 0.8,
  dicedGridSizeAdjustment = -96,
  chronicleButtonHoverColor,
  chronicleButtonWidth,
  chronicleButtonOutlined,
  chronicleButtonOutlinePaddingAdjustment,
  chronicleButtonBorderRadius,
  chronicleButtonOutlinedBackgroundOnHover,
  chronicleButtonCustomBackground,
  chronicleButtonCustomForeground,
  sectionTextFontSize = {
    desktop: "20px",
    mobile: "1rem"
  }
}) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setViewportWidth(sectionRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopThreshold]);

  const renderImages = () => {
    if (viewportWidth < oneImageBreakpoint) {
      return (
        <SingleImage 
          src={aboutUsImages[0]} 
          alt="About Us" 
          style={{ aspectRatio: '2 / 1', borderRadius: imageOuterBorderRadius }} 
        />
      );
    } else if (viewportWidth < twoImageBreakpoint) {
      return (
        <TwoImageGrid>
          <SquareImage src={aboutUsImages[3]} alt="About Us Image One" style={{ borderRadius: imageOuterBorderRadius }} />
          <SquareImage src={aboutUsImages[1]} alt="About Us Image Two" style={{ borderRadius: imageOuterBorderRadius }} />
        </TwoImageGrid>
      );
    } else {
      return (
        <DicedGrid 
          images={aboutUsImages} 
          onGridImageClick={onGridImageClick}
          onGridImageHover={onGridImageHover}
          viewportHeightMultiplier={dicedGridViewportHeightMultiplier}
          gridSizeAdjustment={dicedGridSizeAdjustment}
        />
      );
    }
  };

  return (
    <div ref={sectionRef} style={{ marginBottom: viewportWidth >= desktopThreshold ? spaceBelowDesktop : spaceBelowMobile }}>
      <SectionContainer
        desktopPadding={desktopPadding}
        mobilePadding={mobilePadding}
        desktopVersionBottomThreshold={desktopThreshold}
      >
        {viewportWidth >= twoImageBreakpoint ? (
          <BentoGrid style={{ gridTemplateColumns: `${dicedGridContainerWidth} 1fr` }}>
            <ImageGridWrapper>{renderImages()}</ImageGridWrapper>
            <TextContainer>
              <StructuredBlock
                textColor="var(--background)"
                desktopPadding={{ left: "0", right: "0", top: "0", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize={sectionTextFontSize.desktop}
                mobileFontSize={sectionTextFontSize.mobile}
                overrideInternalCheck={true}
                externalMobileViewValue={viewportWidth < desktopThreshold}
              >
                {aboutUsDescription}
              </StructuredBlock>
              <ChronicleButton 
                text={buttonText}
                onClick={onButtonClick}
                hoverColor={chronicleButtonHoverColor}
                width={chronicleButtonWidth}
                outlined={chronicleButtonOutlined}
                outlinePaddingAdjustment={chronicleButtonOutlinePaddingAdjustment}
                borderRadius={chronicleButtonBorderRadius}
                outlinedButtonBackgroundOnHover={chronicleButtonOutlinedBackgroundOnHover}
                customBackground={chronicleButtonCustomBackground}
                customForeground={chronicleButtonCustomForeground}
              />
            </TextContainer>
          </BentoGrid>
        ) : (
          <div>
            {renderImages()}
            <TextContainer>
              <StructuredBlock
                textColor="var(--background)"
                desktopPadding={{ left: "0", right: "0", top: "0", bottom: "20" }}
                mobilePadding={{ left: "0", right: "0", top: "20", bottom: "20" }}
                desktopFontSize={sectionTextFontSize.desktop}
                mobileFontSize={sectionTextFontSize.mobile}
                overrideInternalCheck={true}
                externalMobileViewValue={viewportWidth < desktopThreshold}
              >
                {aboutUsDescription}
              </StructuredBlock>
              <ChronicleButton 
                text={buttonText}
                onClick={onButtonClick}
                hoverColor={chronicleButtonHoverColor}
                width={chronicleButtonWidth}
                outlined={chronicleButtonOutlined}
                outlinePaddingAdjustment={chronicleButtonOutlinePaddingAdjustment}
                borderRadius={chronicleButtonBorderRadius}
                outlinedButtonBackgroundOnHover={chronicleButtonOutlinedBackgroundOnHover}
                customBackground={chronicleButtonCustomBackground}
                customForeground={chronicleButtonCustomForeground}
              />
            </TextContainer>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

export default AboutUsSection;