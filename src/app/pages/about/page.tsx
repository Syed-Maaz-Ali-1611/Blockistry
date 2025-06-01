'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
// import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                               <div className="heading3 text-center">Welcome to Blockistry{String.raw`'s`} World of Timeless Prints</div>
<div className="body1 text-center md:mt-7 mt-5">
    In a world of fast fashion, we celebrate the artistry of traditional block printing. Blockistry stands at the intersection of heritage and modernity, offering unique designs that tell stories through vibrant colors and intricate patterns. Each piece in our collection carries the legacy of centuries-old craftsmanship, reimagined for today{String.raw`'s`} discerning woman.
</div>
<div className="body1 text-center mt-5">
    Inspired by Pakistan{String.raw`'s`} rich textile heritage, we breathe new life into this ancient art form. Our mission is simple: to share the beauty of block printing with the world while supporting local artisans and sustainable practices. Whether you{String.raw`'re`} a fashion enthusiast or appreciate handmade quality, we invite you to explore our story through every stitch and print.
</div>
<div className="body1 text-center mt-5">
    Join our creative journey on <a href="https://www.facebook.com/blockistry.pk" className="text-primary">Facebook</a> and <a href="https://www.instagram.com/block.istry?utm_source=qr&igsh=MXVmcHhpNXkxNzJvcw==" className="text-primary">Instagram (@block.istry)</a> to discover the magic behind each collection.
</div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            {/* <Newsletter props="bg-green md:mt-20 mt-10" /> */}
            <Instagram />
            {/* <Brand /> */}
            <Footer />
        </>
    )
}

export default AboutUs