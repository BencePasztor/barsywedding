import ContactCard from "@/components/sections/contact/ContactCard"
import SectionTitle from "@/components/SectionTitle"

const Contact = () => {
    return (
        <section id="contact" className="p-4 my-8 scroll-m-4">
            <ContactCard>
                <SectionTitle className="mb-3">Ajánlatkérés</SectionTitle>
                <p className="text-sm text-center mb-3">Aliquam nibh urna, varius sit amet euismod aliquet, vehicula in nunc. Vivamus egestas id nisl vel hendrerit. Praesent quis feugiat mi. Etiam porta quis metus fermentum ullamcorper. Vestibulum tincidunt odio vitae nulla tempus consectetur.</p>
            </ContactCard>
        </section>
    )
}

export default Contact