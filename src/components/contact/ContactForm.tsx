import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import ContactFormTooltip from "./ContactFormTooltip.tsx";
import ContactFormFeedback from "./ContactFormFeedback.tsx";
import "altcha";

const ContactForm = () => {
    const [sendStatus, setSendStatus] = useState<
        "idle" | "clientError" | "serverError" | "sent"
    >("idle");
    const [fetching, setFetching] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        // TODO ALTCHA
        setFetching(true);

        fetch("php/mail.php", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(() => {
                setSendStatus("sent");
                reset();
            })
            .catch(() => {
                setSendStatus("serverError");
            })
            .finally(() => setFetching(false));
    };

    return (
        <form
            className="d-grid grid-columns-1 grid-columns-md-2 gap-1 gap-md-2 max-width-md"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div>
                <label>Name</label>
                <div className="contact-input-wrap">
                    <input
                        autoComplete="name"
                        className="w-auto"
                        {...register("name", { required: "Name is required" })}
                        type="text"
                    />
                </div>
                <ContactFormTooltip
                    message={errors.name?.message as string | undefined}
                />
            </div>

            <div>
                <label>Email</label>
                <div className="contact-input-wrap">
                    <input
                        autoComplete="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email",
                            },
                        })}
                        type="email"
                    />
                </div>
                <ContactFormTooltip
                    message={errors.email?.message as string | undefined}
                />
            </div>

            <div className="grid-span-columns">
                <label>Message</label>
                <div className="contact-input-wrap">
                    <textarea
                        {...register("message", {
                            required: "Message cannot be empty",
                        })}
                        rows={4}
                    />
                </div>
                <ContactFormTooltip
                    message={errors.message?.message as string | undefined}
                />
            </div>
            <altcha-widget challengeurl="php/challenge.php"></altcha-widget>
            <button
                type="submit"
                className="small mt-1 mt-md-none grid-span-columns"
                disabled={fetching}
            >
                {fetching ? "Sending..." : "Send"}
            </button>
            <div className="d-grid grid-stack grid-span-columns">
                <ContactFormFeedback
                    message="There was a problem sending your message"
                    isError={true}
                    show={sendStatus === "serverError"}
                />
                <ContactFormFeedback
                    message="Your message was sent"
                    isError={false}
                    show={sendStatus === "sent"}
                />
            </div>
        </form>
    );
};
export default ContactForm;
