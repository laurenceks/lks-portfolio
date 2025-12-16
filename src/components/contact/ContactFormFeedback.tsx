import { IoCheckmarkCircle, IoWarningOutline } from "react-icons/io5";

const ContactFormFeedback = ({
    message,
    isError,
    show,
}: {
    message: string | undefined;
    isError: boolean;
    show: boolean;
}) => (
    <div
        className={`contact-feedback-container d-flex align-items-center grid-span-columns position-relative hidden-transition`}
    >
        <div
            className={`contact-feedback position-relative hidden-transition ${
                isError ? "error" : "no-error"
            } ${show ? "shown" : "hidden"}`}
        >
            <div className="d-flex align-items-center mw-100">
                <div className="contact-tooltip-icon">
                    {isError ? <IoWarningOutline /> : <IoCheckmarkCircle />}
                </div>
                <p>{message}</p>
            </div>
        </div>
    </div>
);
export default ContactFormFeedback;
