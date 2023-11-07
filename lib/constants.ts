import PortfolioImage from "@/public/portfolio_image.png"
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