'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const INSTAGRAM_IMAGES = [
  { id: 1, src: '/images/instagram/image1.jpg', alt: 'Instagram post 1' },
  { id: 2, src: '/images/instagram/image2.jpg', alt: 'Instagram post 2' },
  { id: 3, src: '/images/instagram/image3.jpg', alt: 'Instagram post 3' },
  { id: 4, src: '/images/instagram/image4.jpg', alt: 'Instagram post 4' },
  { id: 5, src: '/images/instagram/image5.jpg', alt: 'Instagram post 5' },
];

const INSTAGRAM_LINK = 'https://www.instagram.com/block.istry?utm_source=qr&igsh=MXVmcHhpNXkxNzJvcw==';

const Instagram = () => {
  return (
    <section className="instagram-block mb-10 md:pt-20 pt-10">
      <div className="container">
        <header className="heading text-center">
          <h2 className="heading3">Blockistry On Instagram</h2>
          <p className="mt-3">#Blockistry</p>
        </header>

        <div className="list-instagram md:mt-10 mt-6">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              680: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
          >
            {INSTAGRAM_IMAGES.map((image) => (
              <SwiperSlide key={image.id}>
                <Link
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item relative block rounded-[32px] overflow-hidden aspect-square"
                >
                  <Image
                    src={image.src}
                    width={300}
                    height={300}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <span className="icon-instagram text-2xl text-black hover:text-white" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Instagram;