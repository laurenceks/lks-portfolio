import { RefObject } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import ContactForm from "./ContactForm.tsx";

const Contact = ({ contactRef }: { contactRef: RefObject<HTMLDivElement> }) => (
    <SectionMaxWidth className="position-relative">
        <h1>Contact</h1>
        <p>Get in touch!</p>
        <ContactForm />
        <div ref={contactRef} className="bg-random" />
    </SectionMaxWidth>
);
export default Contact;
