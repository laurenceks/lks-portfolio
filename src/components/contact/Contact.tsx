import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import ContactForm from "./ContactForm.tsx";

const Contact = () => (
    <SectionMaxWidth className="position-relative">
        <h1>Contact</h1>
        <p>Get in touch!</p>
        <ContactForm />
        <div className="bg-random" />
    </SectionMaxWidth>
);
export default Contact;
