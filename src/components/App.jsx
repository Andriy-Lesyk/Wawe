import Header from './Header/Header';
import AboutSchoool from './AboutSchool/AboutSchoool';
import GetFromSchool from './GetFromSchool/GetFromSchool';
import GetTop from './GetTop/GetTop';
import DontHesitate from './DontHesitate/DontHesitate';
import Video from './Video/Video';
import Blog from './Blog/Blog';
import OurTeam from './OurTeam/OurTeam';
import Servicies from './Servicies/Servicies';
import Map from './Map/Map';
import Application from './Application/Application';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <AboutSchoool />
      <GetFromSchool />
      <GetTop />
      <DontHesitate />
      <Video />
      <Blog />
      <OurTeam />
      <Servicies />
      <Map />
      <Application />
      <Footer />
    </div>
  );
};
