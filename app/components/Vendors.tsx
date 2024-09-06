import Image from "next/image";

function Vendors() {
    return (
        <>
            <div className="px-14">
                <div className="flex flex-ro">
                    <div className="flex flex-row">
                        <Image
                            src="/assets/imgs/page/product/futur.png"
                            alt="Vendor Logo"
                            width={100}
                            height={100}
                        />

                    </div>
                    <div className=" ml-9">
                        <h6 className="">
                            <a href="shop-vendor-single.html" className="text-[#425A8B] font-extrabold">
                                Future Tech.
                            </a>
                        </h6>
                        <div >
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Image
                                        key={index}
                                        className="w-4 h-4 space-x-2"
                                        src="/template/icons/star.svg"
                                        alt="Star"
                                        width={16}
                                        height={16}
                                        
                                    />
                                ))}
                            </div>
                        </div>
                        <span> (32 reviews)</span>
                    </div>
                </div>
                <ul className="mt-6">
                    <li className="flex items-center mb-4">
                        <Image
                            src="/assets/imgs/page/product/icon-location.svg"
                            alt="Location Icon"
                            width={24}
                            height={24}
                        />
                        <strong className="ml-2">Address:</strong>
                        <span className="ml-2">5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                    </li>
                    <li className="flex items-center">
                        <Image
                            src="/assets/imgs/page/product/icon-contact.svg"
                            alt="Contact Icon"
                            width={24}
                            height={24}
                        />
                        <strong className="ml-2">Contact Seller:</strong>
                        <span className="ml-2">(+91) - 540-025-553</span>
                    </li>
                </ul>
                <div className="flex mt-6">
                    <div className="mr-8">
                        <p className="font-xs   text-[#0ba9ed]">Rating</p>
                        <h4 className="text-3xl text-[#42518b]">92%</h4>
                    </div>
                    <div className="mr-8">
                        <p className="font-xs  text-[#0ba9ed]">Ship on time</p>
                        <h4 className="text-3xl text-[#42518b]">100%</h4>
                    </div>
                    <div>
                        <p className="font-xs  text-[#0ba9ed]">Chat response</p>
                        <h4 className="text-3xl text-[#42518b]">89%</h4>
                    </div>
                </div>
                <p className="mt-4 mb-4 text-[#8c9ec5]">
                    Noodles &amp; Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles &amp; Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield,
                    Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017. In late 2018, there were 460 Noodles &amp; Company locations across 29 states and Washington, D.C.
                </p>
                <p className="mt-2 mb-4 text-[#8c9ec5]">
                    Proin congue dapibus rhoncus. Curabitur ipsum orci, malesuada in porttitor a, porttitor quis diam. Nunc at arcu ut turpis facilisis volutpat. Proin tristique, mauris non gravida dignissim, purus mauris malesuada tellus, in tincidunt orci enim eget ligula. Quisque bibendum, ipsum id malesuada placerat, purus felis vehicula risus, vel fringilla justo erat ullamcorper ligula. Fusce congue ullamcorper ligula, at commodo turpis molestie vel.
                </p>
            </div>
        </>
    );
}

export default Vendors;
