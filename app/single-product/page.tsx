
import React from 'react'
import Topbar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import SingleProductSection1 from '../components/SingleProductSection1'
import SingleProductSection2 from '../components/SingleProductSection2'
import SingleProductSection3 from '../components/SingleProductSection3'
import ShopCartLikes from '../components/shopCartLikes'
import ShopCartSwiper from '../components/ShopCartSwiper'
import FeatureList from '../components/FeatureList'
import NewsLetterSection from '../components/NewsLetterSection'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import Navigation from '../components/Navigation'

function page() {
  const navigationItems = [
    { label: 'Home', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Cell Phone', href: '#' },
    { label: 'Accessories', href: '#' },
  ];
  return (
    <>
    <div >
      <Topbar/>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <div>
        <Navigation items={navigationItems} />
       <SingleProductSection1/>
       <SingleProductSection2/>
       {/* <SingleProductSection3/>  */}
       {/* <ShopCartLikes
            heading="Related Prodcuts"
            backgroundColor="#fff"
          /> */}
           {/* <ShopCartLikes
            heading="You may also like"
            backgroundColor="#fff"
          /> */}
           {/* <div className='border-b border-gray-300 pb-14'>
           <ShopCartSwiper heading="Recently Viewed Items" />
        </div> */}
        {/* <div className='flex items-center justify-center my-14'>
          <Image
            src={"/assets/imgs/page/product/banner-ads.png"}
            alt="Banner13promax"
            width={900}
            height={100}

          />
        </div> */}
        {/* <FeatureList />
        <NewsLetterSection />
        <Footer1 />
        <Footer2 /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default page