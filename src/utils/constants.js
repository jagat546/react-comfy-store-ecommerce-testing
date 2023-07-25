import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission: Inspire & elevate your living experience with exceptional furniture, tailored to your style. Seamless shopping, exceptional service, & a space for your creativity to flourish. ",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our Vision: Your go-to destination for furniture & decor. Effortlessly discover & design dream living spaces. Exquisite collection, personalized customization, expert guidance - a delightful & rewarding experience.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Since 2023, ComfySloth's passion and dedication turn houses into homes with exceptional furniture worldwide. Embracing our legacy, we inspire and elevate living spaces for a brighter future.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
