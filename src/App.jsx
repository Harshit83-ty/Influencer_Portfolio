import InfluencerNavbar from "./components/InfluencerNavbar";
import InfluencerFooter from "./components/InfluencerFooter";
import InfluencerHero from "./sections/InfluencerHero";
import SocialStats from "./sections/SocialStats";
import BrandCollaborations from "./sections/BrandCollaborations";
import ContentGallery from "./sections/ContentGallery";
import CollaborationPackages from "./sections/CollaborationPackages";
import Testimonials from "./sections/Testimonials";
import InfluencerContact from "./sections/InfluencerContact";

function App() {

  return (
    <div className="scroll-smooth">
      <InfluencerNavbar />
      <div id="hero"><InfluencerHero /></div>
      <div id="social"><SocialStats /></div>
      <div id="collaborations"><BrandCollaborations /></div>
      <div id="gallery"><ContentGallery /></div>
      <div id="packages"><CollaborationPackages /></div>
      <Testimonials />
      <div id="contact"><InfluencerContact /></div>
      <InfluencerFooter />
    </div>
  );
}

export default App;
