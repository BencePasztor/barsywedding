'use client'

import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { PORTFOLIO_IMAGES } from '@/lib/constants';

const PortfolioSlider = () => {

    const portfolioVariant = {
        hidden: {
            opacity: 0,
            x: -42
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            }
        }
    }

    return (
        <motion.div variants={portfolioVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
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
        </motion.div>
    )
}

export default PortfolioSlider