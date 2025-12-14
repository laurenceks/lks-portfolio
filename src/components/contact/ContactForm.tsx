import { FieldValues, useForm } from "react-hook-form";
import ContactFormTooltip from "./ContactFormTooltip.tsx";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log("Form submitted:", data);
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

            <button type="submit" className="small mt-1 mt-md-none">
                Send
            </button>
        </form>
    );
};
export default ContactForm;
