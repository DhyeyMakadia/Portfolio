import React from "react";
import { Button } from "../Button";
import { ProfileDetails } from "../../utils/data";

export const Contact = () => {
  const handleSayHello = () => {
    window.location.href = `mailto:${ProfileDetails.personal.EMAIL}`;
  };
  return (
    <section
      id="contact"
      className="container flex flex-col justify-center items-center text-center"
    >
      <h5 className="heading">What's Next?</h5>
      <h1>Get in Touch</h1>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button text="Say Hello!" onClick={handleSayHello} className="mt-5" />
    </section>
  );
};
