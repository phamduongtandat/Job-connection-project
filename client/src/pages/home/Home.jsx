


import FeatureSection from './FeatureSection';
import FieldsSection from './FieldsSection';
import HeroSection from './HeroSection';
import HotestJobs from './HotestJobs';
import TestimonialSection from './TestimonialSection';

const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <HotestJobs />
      <FieldsSection />
      <FeatureSection />
      <TestimonialSection />



    </div>
  );
};

export default Home;
