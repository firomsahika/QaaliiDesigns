import Hero from "@/pages/Hero";
import CategoryNav from "./design/components/CategoryNav";
import datas from "./design/designDatas/CardData";
import { DesignCard } from "./design/components/DesignCard";
import { DesignCarousel } from "@/components/DesignCarousel";
import FeaturedDesigns from "@/pages/FeaturedDesign";
import DiscoverCategories from "@/pages/Categories";
import ExploreProjects from "@/pages/Projects";
import ProfileSlider from "@/pages/Designer";
import TestimonialPage from "@/pages/Testimony";
import AboutQaalii from "@/pages/About";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* 🟢 HERO SECTION */}
      <Hero />
      <AboutQaalii />
      <FeaturedDesigns />
      <DiscoverCategories />
      <ExploreProjects />
      <ProfileSlider />
      <TestimonialPage />
    </main>
  );
}
