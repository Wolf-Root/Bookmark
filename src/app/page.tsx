import DownloadSection from "@/components/Sections/DownloadSection";
import FeaturesSection from "@/components/Sections/FeaturesSection";
import HeroSection from "@/components/Sections/HeroSection";
import QuestionsSection from "@/components/Sections/QuestionsSection";
import ContactSection from "../components/Sections/ContactSection";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component="main">
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <QuestionsSection />
      <ContactSection />
    </Box>
  );
}
