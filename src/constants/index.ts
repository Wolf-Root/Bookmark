import { ElementType } from "react";

// Material UI Icon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavLinks: { name: string; icon: ElementType }[] = [
  {
    name: "Home",
    icon: HomeOutlinedIcon,
  },
  {
    name: "Features",
    icon: ChecklistOutlinedIcon,
  },
  {
    name: "Download",
    icon: FileDownloadOutlinedIcon,
  },
  {
    name: "FAQs",
    icon: QuizOutlinedIcon,
  },
  {
    name: "Contact",
    icon: AlternateEmailOutlinedIcon,
  },
];

const SocialMedia: { name: string; href: string; icon: ElementType }[] = [
  {
    name: "Github",
    href: "https://github.com/Wolf-Root",
    icon: GitHubIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wolf_r00t",
    icon: InstagramIcon,
  },
  {
    name: "X",
    href: "https://x.com/wolf_R00T",
    icon: XIcon,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/youssef-aboulkaram-7b25ab304",
    icon: LinkedInIcon,
  },
];

const Features: { img: string; title: string; subtitle: string }[] = [
  {
    img: "/imgs/feature1.svg",
    title: "Bookmarks in one click",
    subtitle:
      "Organize your bookmarks however you like. Our Simple drag-and-drop interface Gives you complete control over how you manage your favourite sites",
  },
  {
    img: "/imgs/feature2.svg",
    title: "Intelligent search",
    subtitle:
      "Our Powerful search feature will help you find saved sites in on time at all. No need to trawl through all your bookmarks.",
  },
  {
    img: "/imgs/feature3.svg",
    title: "Share your Bookmarks",
    subtitle:
      "Easily share your Bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const Cards: { img: string; name: string }[] = [
  {
    img: "/imgs/logo-chrome.svg",
    name: "Chrome",
  },
  {
    img: "/imgs/logo-firefox.svg",
    name: "Firefox",
  },
  {
    img: "/imgs/logo-opera.svg",
    name: "Opera",
  },
];

const Questions: { title: string; disc: string }[] = [
  {
    title: "What is a Bookmark?",
    disc: "A bookmark is a saved link to a webpage that allows you to quickly access it later without searching again.",
  },
  {
    title: "How Can I request a new browser?",
    disc: "You can request a new browser by downloading and installing it from its official website.",
  },

  {
    title: "Is there a mobile app?",
    disc: "Yes! Many browsers have mobile apps available for iOS and Android.",
  },

  {
    title: "What about other Cheomium browers?",
    disc: "Chromium-based browsers, like Brave, Edge, Opera, and Vivaldi, offer unique features while using the same engine as Chrome for fast and secure browsing.",
  },
];

export { NavLinks, SocialMedia, Features, Cards, Questions };
