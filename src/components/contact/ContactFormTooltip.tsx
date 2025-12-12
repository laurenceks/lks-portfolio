import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

const ContactFormTooltip = ({ message }: { message: string | undefined }) => {
    const [messageText, setMessageText] = useState(message);
    useEffect(() => {
        if (message) {
            setMessageText(message);
        }
    }, [message]);
    return (
        <CSSTransition
            in={!!message}
            timeout={400}
            unmountOnExit
            classNames={""}
        >
            <div className="contact-tooltip d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <div className="contact-tooltip-icon">
                        <IoWarningOutline />
                    </div>
                    <p>{messageText}</p>
                </div>
            </div>
        </CSSTransition>
    );
};
export default ContactFormTooltip;
