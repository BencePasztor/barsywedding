import ServiceList from "@/components/sections/services/ServiceList"
import SectionTitle from '@/components/SectionTitle'

const Services = () => {
    return (
        <section id="services" className="my-8 scroll-m-4">
            <SectionTitle>Szolgáltatásaim</SectionTitle>
            <div className="relative px-4 py-8 overflow-hidden bg-fixed bg-cover bg-parallax before:bg-primary-500/30 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:-z-10 isolate">
                <ServiceList />
            </div>
        </section>
    )
}

export default Services