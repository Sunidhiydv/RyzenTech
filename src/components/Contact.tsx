import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "4dc8c16d-87a2-47c6-a58a-35998463092d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full" data-aos="zoomIn">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get in Touch</h3>
        <form className="space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="6dc44209-01de-45c1-bb88-b8035311579b" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <input type="checkbox" name="botcheck" className="hidden" />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-blue-500 text-white py-3 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
