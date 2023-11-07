'use client'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import PortfolioImage from "@/public/portfolio_image.png"
import Image from 'next/image';

// TODO: Fill with real pictures
const IMAGES = [
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
    {
        src: PortfolioImage,
        alt: 'teszt'
    },
]

const PortfolioSlider = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                modifier: 2,
            }}
            modules={[EffectCoverflow]}
        >
            {IMAGES.map(({ src, alt }, index) => (
                <SwiperSlide key={index} className="lg:!w-96 !w-64 aspect-square">
                    <Image className="w-full h-full object-cover" src={src} alt={alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PortfolioSlider