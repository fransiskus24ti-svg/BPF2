import VisitorLayout from "../layouts/VisitorLayout";

import HeroSection from "../components/visitor/HeroSection";
import AboutSection from "../components/visitor/AboutSection";
import FavoriteMenu from "../components/visitor/FavoriteMenu";
import Testimonials from "../components/visitor/Testimonials";

const Home = () => {
  return (
    <VisitorLayout>
      <HeroSection />
      <AboutSection />
      <FavoriteMenu />
      <Testimonials />
    </VisitorLayout>
  );
};

export default Home;