import React from 'react';

const ProductSection = () => {
    const styles = {
        cardOne: {
            backgroundImage: 'url("/assets/imgs/page/homepage1/banner-1.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '350px',
            '@media (max-width: 768px)': {
                height: '250px', // Reduced height on mobile screens
            },
        },
        cardTwo: {
            backgroundImage: 'url("/assets/imgs/page/homepage1/banner-2.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '350px',
            '@media (max-width: 768px)': {
                height: '250px', // Reduced height on mobile screens
            },
        },
        cardThree: {
            backgroundImage: 'url("/assets/imgs/page/homepage1/banner-3.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '350px',
            '@media (max-width: 768px)': {
                height: '250px', // Reduced height on mobile screens
            },
        },
    };

    return (
        <section className="pt-2 bg-white lg:mr-9">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between lg:-my-4">
                    <div className="w-full md:w-5/12 lg:w-1/4 mb-4 px-2">
                        <div className="relative" style={styles.cardOne}>
                            {/* Custom styling applied */}
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 lg:w-1/3 mb-4 px-2">
                        <div className="relative" style={styles.cardTwo}>
                            {/* Custom styling applied */}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 mb-4 px-2">
                        <div className="relative" style={styles.cardThree}>
                            {/* Custom styling applied */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
