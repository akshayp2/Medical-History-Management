import BootstrapCarousel from './carousel';
import OurClient from './ourClient';
import Team from './team';
import OurServices from './ourServices';
import Address from './address';
function Home() {
return(
    <div>
    <BootstrapCarousel></BootstrapCarousel>
    <div className="container-fluid">
    <h3 className="row justify-content-center subheader p-2">Our client</h3>
    <div className="row justify-content-center">
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
    </div>
    </div>
    <Team></Team>
    <OurServices></OurServices>
    <Address></Address>
    </div>
);
}

export default Home;