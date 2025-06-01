"use client";
import React from "react";
import Image from "next/image";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Benefit from "@/components/Home1/Benefit";
import Instagram from "@/components/Home1/Instagram";
import Footer from "@/components/Footer/Footer";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/blockistry.pk",
  instagram: "https://www.instagram.com/block.istry?utm_source=qr&igsh=MXVmcHhpNXkxNzJvcw==",
};

const ABOUT_IMAGES = [
  {
    src: "/images/instagram/image1.jpg",
    alt: "Blockistry product showcase",
    width: 2000,
    height: 3000,
  },
  {
    src: "/images/logo.jpg",
    alt: "Blockistry logo",
    width: 2000,
    height: 3000,
  },
  {
    src: "/images/instagram/image3.jpg",
    alt: "Blockistry craftsmanship",
    width: 2000,
    height: 3000,
  },
];

const AboutUs = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      
      <header className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="About Us" subHeading="About Us" />
      </header>

      <main className="about md:pt-20 pt-10">
        <section className="about-us-block">
          <div className="container">
            <article className="flex items-center justify-center">
              <div className="content md:w-5/6 w-full">
                <h1 className="heading3 text-center">
                  Welcome to Blockistry{String.raw`'s`} World of Timeless Prints
                </h1>
                
                <p className="body1 text-center md:mt-7 mt-5">
                  In a world of fast fashion, we celebrate the artistry of
                  traditional block printing. Blockistry stands at the
                  intersection of heritage and modernity, offering unique
                  designs that tell stories through vibrant colors and intricate
                  patterns. Each piece in our collection carries the legacy of
                  centuries-old craftsmanship, reimagined for today{String.raw`'s`} discerning woman.
                </p>
                
                <p className="body1 text-center mt-5">
                  Inspired by Pakistan{String.raw`'s`} rich textile heritage, we
                  breathe new life into this ancient art form. Our mission is
                  simple: to share the beauty of block printing with the world
                  while supporting local artisans and sustainable practices.
                  Whether you{String.raw`'re`} a fashion enthusiast or appreciate handmade quality,
                  we invite you to explore our story through every stitch and print.
                </p>
                
                <p className="body1 text-center mt-5">
                  Join our creative journey on{" "}
                  <a
                    href={SOCIAL_LINKS.facebook}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>{" "}
                  and{" "}
                  <a
                    href={SOCIAL_LINKS.instagram}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram (@block.istry)
                  </a>{" "}
                  to discover the magic behind each collection.
                </p>
              </div>
            </article>

            <div className="grid sm:grid-cols-3 gap-8 md:pt-20 pt-10">
              {ABOUT_IMAGES.map((image, index) => (
                <div key={index} className="relative rounded-3xl overflow-hidden aspect-[2/3]">
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Benefit props="md:pt-20 pt-10" />
      <Instagram />
      <Footer />
    </>
  );
};

export default AboutUs;