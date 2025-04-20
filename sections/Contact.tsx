import { useFormspark } from "@formspark/use-formspark";
import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setSubmitted] = useState(false);

  const [submit, submitting] = useFormspark({ formId: "j11OLCNBc" });

  const onSubmit = handleSubmit(async (data) => {
    await submit(data);
    setSubmitted(true);
  });

  if (isSubmitted) {
    return (
      <div id={Section.Contact} className="lg:w-1/2">
        {getSectionHeading(Section.Contact)}

        <p className="text-lg leading-loose">
          Thank you for your message.
          <br />
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div id={Section.Contact} className="lg:w-1/2">
      {getSectionHeading(Section.Contact)}

      <form onSubmit={onSubmit} className="grid gap-8">
        <Input
          type="text"
          label="Full Name"
          className="md:w-3/4"
          hasError={!!errors.name}
          placeholder="Regina Phalange"
          description={errors.name?.message || "The one where you tell me your name"}
          {...register("name", { required: { value: true, message: "This is a required field" } })}
        />

        <Input
          type="email"
          className="md:w-3/4"
          label="Email Address"
          hasError={!!errors.email}
          placeholder="regina@centralperk.com"
          description={errors.email?.message || "The one where you tell me how I can contact you back"}
          {...register("email", {
            required: { value: true, message: "This is a required field" },
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
          })}
        />

        <Input
          type="textarea"
          label="Message"
          hasError={!!errors.message}
          placeholder="Type your message here"
          description={errors.message?.message || "The one where you tell me what I can do to help you"}
          {...register("message", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 10, message: "Your message must be at least 10 characters long" },
          })}
        />
      </form>

      <Button icon={FaPaperPlane} className="mt-8" onClick={onSubmit} disabled={submitting}>
        Send Message
      </Button>
    </div>
  );
};

export default Contact;
