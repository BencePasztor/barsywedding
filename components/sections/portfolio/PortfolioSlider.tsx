'use client'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { PORTFOLIO_IMAGES } from '@/lib/constants';

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
            {PORTFOLIO_IMAGES.map(({ src, alt }, index) => (
                <SwiperSlide key={index} className="lg:!w-96 !w-64 aspect-square">
                    <Image className="object-cover w-full h-full" src={src} alt={alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PortfolioSlider