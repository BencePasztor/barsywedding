import portofolio_1 from "@/public/portofolio_1.png"
import portofolio_2 from "@/public/portofolio_2.png"
import portofolio_3 from "@/public/portofolio_3.png"
import portofolio_4 from "@/public/portofolio_4.png"
import portofolio_5 from "@/public/portofolio_5.png"
import portofolio_6 from "@/public/portofolio_6.png"
import portofolio_7 from "@/public/portofolio_7.png"
import { StaticImageData } from "next/image"

type NavLinkItem = {
    name: string,
    url: string
}

export const NAV_LINKS: NavLinkItem[] = [
    {
        name: "Szolgáltatásaim",
        url: "/#services"
    },
    {
        name: "Rólam",
        url: "/#about"
    },
    {
        name: "Portfólió",
        url: "/#portfolio"
    },
    {
        name: "Ajánlatkérés",
        url: "/#contact"
    },
]

type ServiceItem = {
    title: string,
    description: string
}

export const SERVICES: ServiceItem[] = [
    {
        title: 'Lorem Ipsum',
        description: 'Suspendisse efficitur, justo id consectetur maximus, est ex pellentesque elit.'
    },
    {
        title: 'Dolor Sit',
        description: 'Suspendisse efficitur, justo id consectetur maximus, est ex pellentesque elit.'
    },
    {
        title: 'Mauris pharetra',
        description: 'Suspendisse efficitur, justo id consectetur maximus, est ex pellentesque elit.'
    }
]

type PortfolioImage = {
    src: string | StaticImageData,
    alt: string
}

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
    {
        src: portofolio_1,
        alt: 'Feldíszített asztal'
    },
    {
        src: portofolio_2,
        alt: 'Díszes asztal lufikkal'
    },
    {
        src: portofolio_3,
        alt: 'Pillangós asztali dísz'
    },
    {
        src: portofolio_4,
        alt: 'Feldíszített asztal'
    },
    {
        src: portofolio_5,
        alt: 'Feldíszített asztal'
    },
    {
        src: portofolio_6,
        alt: 'Feldíszített asztal'
    },
    {
        src: portofolio_7,
        alt: 'Feldíszített asztal'
    }
]