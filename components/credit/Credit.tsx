"use client";
import React, { useState, useEffect } from 'react';

interface CreditProps {
  onClose: () => void;
}

const Credit: React.FC<CreditProps> = ({ onClose }) => {
  const [textSize, setTextSize] = useState("0.98rem");

  useEffect(() => {
    const handleResize = () => {
      setTextSize(window.innerWidth < 768 ? "0.76rem" : "0.98rem");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="credit-container">
      <div className="credit-content">
        <h2>Credit</h2>
        <p className="credit-intro">
          The existence of this project (at least in its current form) wouldn't have been possible without the following:
        </p>
        <ul className="credit-list">
          <li>
            <a href="https://codepen.io/Haaguitos/pen/OJrVZdJ" target="_blank" rel="noopener noreferrer" className="credit-link">
              Chronicle Button
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/Haaguitos" target="_blank" rel="noopener noreferrer" className="credit-link">
              Haaguitos
            </a>
          </li>
          <li>
            <a href="https://ui.aceternity.com/components/hero-highlight" target="_blank" rel="noopener noreferrer" className="credit-link">
              Hero Highlight
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Aceternity UI
            </a>
          </li>
          <li>
            <a href="https://ui.aceternity.com/components/animated-testimonials" target="_blank" rel="noopener noreferrer" className="credit-link">
              Animated Testimonials
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Aceternity UI
            </a>
          </li>
          <li>
            <a href="https://ui.aceternity.com/components/bento-grid" target="_blank" rel="noopener noreferrer" className="credit-link">
              Bento Grid
            </a>{" "}
            by{" "}
            <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Aceternity UI
            </a>
          </li>
          <li>
            <a href="https://animata.design/docs/list/reveal-image" target="_blank" rel="noopener noreferrer" className="credit-link">
              Reveal images
            </a>{" "}
            by{" "}
            <a href="https://animata.design/" target="_blank" rel="noopener noreferrer" className="credit-link">
              ANIMATA
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Juxtoposed/pen/xxQNozB" target="_blank" rel="noopener noreferrer" className="credit-link">
              Vercel app border hover effect
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="credit-link">
              Juxtoposed
            </a>
          </li>
          <li>
            <a href="https://codepen.io/kristen17/pen/bGxEqqj" target="_blank" rel="noopener noreferrer" className="credit-link">
              Travel section #tailwind #slick.js
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/kristen17" target="_blank" rel="noopener noreferrer" className="credit-link">
              Kristen
            </a>
          </li>
          <li>
            <a href="https://codepen.io/utilitybend/pen/VwBRNwm" target="_blank" rel="noopener noreferrer" className="credit-link">
              Named scroll-timeline vertical
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/utilitybend" target="_blank" rel="noopener noreferrer" className="credit-link">
              utilitybend
            </a>
          </li>
          <li>
            <a href="https://codepen.io/zzznicob/pen/GRPgKLM" target="_blank" rel="noopener noreferrer" className="credit-link">
              JTB studios - Link
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/zzznicob" target="_blank" rel="noopener noreferrer" className="credit-link">
              Nico
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ash_creator/pen/JjZReNm" target="_blank" rel="noopener noreferrer" className="credit-link">
              チェックしないと押せないボタン
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/ash_creator" target="_blank" rel="noopener noreferrer" className="credit-link">
              あしざわ - Webクリエイター
            </a>
          </li>
          <li>
            <a href="https://codepen.io/jkantner/pen/OJKZxpv" target="_blank" rel="noopener noreferrer" className="credit-link">
              Toolbars With Sliding Selection
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/jkantner" target="_blank" rel="noopener noreferrer" className="credit-link">
              Jon Kantner
            </a>
          </li>
          <li>
            <a href="https://codepen.io/yudizsolutions/pen/YzgXvZJ" target="_blank" rel="noopener noreferrer" className="credit-link">
              Gsap Slider
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/yudizsolutions" target="_blank" rel="noopener noreferrer" className="credit-link">
              Yudiz Solutions Limited
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Neal-Simari/pen/wvLvGQp" target="_blank" rel="noopener noreferrer" className="credit-link">
              Untitled
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/Neal-Simari" target="_blank" rel="noopener noreferrer" className="credit-link">
              Neal Simari
            </a>
          </li>
          <li>
            <a href="https://codepen.io/t_afif/pen/LEPBYvK" target="_blank" rel="noopener noreferrer" className="credit-link">
              Inverted border-radius using CSS mask II
            </a>{" "}
            by{" "}
            <a href="https://codepen.io/t_afif" target="_blank" rel="noopener noreferrer" className="credit-link">
              Temani Afif
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@ilyapavlov" target="_blank" rel="noopener noreferrer" className="credit-link">
              Ilya Pavlov
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/woman-standing-beside-lights-xE87C_OvVO4" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@bavepictures" target="_blank" rel="noopener noreferrer" className="credit-link">
              Bave Pictures
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/man-in-gray-crew-neck-t-shirt-standing-beside-white-wall-MbYgpI1D-cA" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@seteph" target="_blank" rel="noopener noreferrer" className="credit-link">
              Allef Vinicius
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/closed-eye-woman-wearing-brown-hat-YbzfTr0pwLE" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://www.pexels.com/@doraklimova/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Dasha Klimova
            </a>{" "}
            from{" "}
            <a href="https://www.pexels.com/photo/shakshuka-with-bread-on-table-9928336/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Pexels
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://www.pexels.com/@n-voitkevich/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Nataliya Vaitkevich
            </a>{" "}
            from{" "}
            <a href="https://www.pexels.com/photo/bread-food-salad-healthy-6275096/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Pexels
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@ahungryblonde_" target="_blank" rel="noopener noreferrer" className="credit-link">
              Sara Dubler
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/salad-on-white-ceramic-bow-l-T_dY6AzzVXU" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://www.pexels.com/@nicola-barts/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Nicola Barts
            </a>{" "}
            from{" "}
            <a href="https://www.pexels.com/photo/berries-with-purple-cream-7937351/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Pexels
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://www.pexels.com/@n-voitkevich/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Nataliya Vaitkevich
            </a>{" "}
            from{" "}
            <a href="https://www.pexels.com/photo/shakshouka-falafel-hummus-and-pita-breads-on-the-table-6275158/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Pexels
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@_carolineattwood" target="_blank" rel="noopener noreferrer" className="credit-link">
              Caroline Attwood
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/grilled-fish-cooked-vegetables-and-fork-on-plate-bpPTlXWTOvg" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@pkddapacific" target="_blank" rel="noopener noreferrer" className="credit-link">
              Prasanta Kr Dutta
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-blue-bowl-filled-with-meat-and-veggies-yu8eJpRvlS8" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@shootdelicious" target="_blank" rel="noopener noreferrer" className="credit-link">
              Eiliv Aceron
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/cooked-food-on-black-bowl-ZuIDLSz3XLg" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@5amramen" target="_blank" rel="noopener noreferrer" className="credit-link">
              Frank from 5 AM Ramen
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-bowl-of-soup-with-an-egg-on-top-egzPIj_8MFA" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@tatography" target="_blank" rel="noopener noreferrer" className="credit-link">
              Tatev Arsh
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-stack-of-pancakes-with-blueberries-and-blackberries-on-a-plate--FYsnChGhbI" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@bakdandraw" target="_blank" rel="noopener noreferrer" className="credit-link">
              Bakd&Raw by Karolin Baitinger
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-white-plate-topped-with-a-green-salad-9cKxdFXg5Xs" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@amir_v_ali" target="_blank" rel="noopener noreferrer" className="credit-link">
              amirali mirhashemian
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/stainless-steel-bowl-with-food-K9oKpOebg84" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@disguise_truth" target="_blank" rel="noopener noreferrer" className="credit-link">
              Anastasia Zhenina
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/brown-pie-on-black-tray-Oc5l87aG_kA" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@eaterscollective" target="_blank" rel="noopener noreferrer" className="credit-link">
              Eaters Collective
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/pesto-pasta-with-sliced-tomatoes-served-on-white-ceramic-plate-12eHC6FxPyg" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@anetvob" target="_blank" rel="noopener noreferrer" className="credit-link">
              Aneta Voborilova
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/cupcakes-with-white-icing-on-top-RQYAbzjCK6k" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@j_zhao" target="_blank" rel="noopener noreferrer" className="credit-link">
              Jason Zhao
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/zebra-on-green-grass-field-during-daytime-pwIH-koqkc4" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@hayleyryczek" target="_blank" rel="noopener noreferrer" className="credit-link">
              Hayley Ryczek
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/bread-on-white-ceramic-plate-HQ22vVXhWcc" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@karinkim" target="_blank" rel="noopener noreferrer" className="credit-link">
              Karin Kim
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-variety-of-sushi-is-displayed-on-a-platter-eTMBxAvc9mc" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            Photo by{" "}
            <a href="https://unsplash.com/@apostolosv" target="_blank" rel="noopener noreferrer" className="credit-link">
              Apostolos Vamvouras
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/woman-in-white-tank-top-wearing-black-sunglasses---pqqDoAdGo" target="_blank" rel="noopener noreferrer" className="credit-link">
              Unsplash
            </a>
          </li>
          <li>
            <a href="https://coolors.co/palette/0d0a0b-454955-f3eff5-72b01d-3f7d20" target="_blank" rel="noopener noreferrer" className="credit-link">
              Color Palette
            </a>
          </li>
          <li>
            <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="credit-link">
              Perplexity
            </a>
          </li>
          <li>
            <a href="https://chat.mistral.ai/chat" target="_blank" rel="noopener noreferrer" className="credit-link">
              Le Chat
            </a>
          </li>
        </ul>
        <div className="button-container">
          <div className="normalButton">
            <button onClick={onClose} className="normalButton__button">
              OK
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .normalButton {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 20px;
        }
        .normalButton__button {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 49px;
          font-size: 16px;
          border-radius: var(--general-rounding);
          font-weight: bold;
          background-color: var(--background);
          border: none;
          color: var(--foreground);
          cursor: pointer;
        }
        .normalButton__button:hover {
          background-color: var(--theme-color-2);
        }
        .credit-container {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10010;
          background-color: rgba(0, 0, 0, 0.7);
          padding-top: 69px;
        }
        .credit-content {
          width: 84vw;
          max-width: 540px;
          max-height: calc(76vh - 69px);
          overflow-y: auto;
          background: var(--answer-background);
          border-radius: 3px;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          border: 1px solid #262626;
          color: var(--background);
        }
        h2 {
          margin: 5px 0 15px;
          color: var(--background);
          font-size: 1.5rem;
          font-weight: bold;
        }
        .credit-intro {
          margin: 10px 0;
          line-height: 1.4;
          font-size: ${textSize};
          text-align: center;
        }
        .credit-list {
          margin: 10px 0;
          padding-left: 20px;
          text-align: left;
          align-self: flex-start;
        }
        .credit-list li {
          margin-bottom: 10px;
          line-height: 1.4;
          font-size: ${textSize};
        }
        .credit-link {
          color: var(--background);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .credit-link:hover {
          color: var(--theme-color-2);
        }
        .credit-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--background);
          transform: scaleX(1);
          transition: transform 0.3s ease;
        }
        .credit-link:hover::after {
          transform: scaleX(0);
        }
        .button-container {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Credit;
