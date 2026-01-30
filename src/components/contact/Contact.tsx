import { RefObject } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import ContactForm from "./ContactForm.tsx";

const Contact = ({ contactRef }: { contactRef: RefObject<HTMLDivElement> }) => (
    <SectionMaxWidth className="position-relative">
        <div ref={contactRef} className="scroll-margin" />
        <h1>Contact</h1>
        <p>Get in touch!</p>
        <ContactForm />
        <div className="bg-random" />
    </SectionMaxWidth>
);
export default Contact;
