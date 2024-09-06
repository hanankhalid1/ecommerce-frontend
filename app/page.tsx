import React from "react";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";
import ProductSection from "./components/ProductSection";
import BestSellers from "./components/BestSeller";
import TrendingComponent from "./components/TrendingComponent";
import LatestComponent from "./components/LatestDeal";
import BannerSection from "./components/BannerSection";
import LatestDeal from "./components/LatestDeal";
import ProductCard from "./components/prodcutCard";
import TopProducts from "./components/TopProducts";
import LowerBanner from "./components/LowerBanner";
import LatestNewsEvents from "./components/LatestNewsEvent";
import FeatureList from "./components/FeatureList";
import NewsletterSection from "./components/NewsLetterSection";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="">
          <BannerSection/>
          <CardSection />
          <ProductSection />
          <BestSellers
            heading="Best Sellers"
            subheading="Special products in this month."
            backgroundColor="#fff"
          />
          <LatestDeal />
       <LowerBanner /> 
          <BestSellers
            heading="Trending This Week"
            subheading="Special products in this month."
            backgroundColor="#f0f4f8"
          />
          <TopProducts />
          <LatestNewsEvents />
          <FeatureList/>
          <NewsletterSection/>
          <Footer1/>
          <Footer2/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
