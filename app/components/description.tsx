import Image from "next/image";
import { useState } from "react";

function Description() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="px-14 flex flex-col items-center">
      <p className="text-[#425A8B] text-sm py-2">
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
      </p>

      {isVisible && (
        <>
          <p className="text-[#425A8B] text-sm py-2">
            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country. It is a paradisematic country, in which
          </p>

          <div className="w-full">
            <Image
              src="/product/product-banner.jpg"
              alt=""
              width={1400}
              height={600}
              className=""
            />
          </div>
          <p className="text-[#425A8B] text-sm py-2">
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>
          <div className="w-full">
            <Image
              src="/product/product-banner-2.jpg"
              alt=""
              width={1400}
              height={600}
              className=""
            />
          </div>
          <p className="text-[#425A8B] text-sm py-2">
            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.
          </p>
        </>
      )}
      <button
        onClick={toggleVisible}
        className="m-4 py-1 md:px-2 md:py-2 lg:px-14 border-[1px] w-1/6 border-[#2a2f38] text-[#293345] font-bold hover:bg-[#425A8B] hover:text-white rounded"
      >
        {isVisible ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Description;
