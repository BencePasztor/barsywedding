import SectionTitle from '@/components/SectionTitle'
import PortfolioSlider from '@/components/sections/portfolio/PortfolioSlider'

const Portfolio = () => {
    return (
        <section id="portfolio" className="p-4 my-8 scroll-m-4 max-w-screen-xl w-full mx-auto">
            <SectionTitle>Korábbi munkáim</SectionTitle>
            <PortfolioSlider />
        </section>
    )
}

export default Portfolio