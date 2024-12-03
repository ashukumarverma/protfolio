import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: [value] });
  };

  // service_43xlqu5

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_43xlqu5",
        "template_895w4br",
        {
          from_name: form.name,
          to_name: "Ashutosh",
          from_email: form.email,
          to_email: "ashukumar3436@gmail.com",
          message: form.message,
        },
        "wxFcYVITstDMcMtae"
      );
      setLoading(false);
      alert("Your message has been sent!");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    console.log(form);
    formRef.current;
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col justify-center items-center border border-black-500 rounded-md">
        <div className="w-full h-12 bg-gradient-to-r from-black-500 to-black-300 rounded-md flex items-center px-5 gap-2">
          <div className="w-5 h-5 rounded-full bg-red-600"></div>
          <div className="w-5 h-5 rounded-full bg-yellow-600"></div>
          <div className="w-5 h-5 rounded-full bg-green-600"></div>
        </div>
        <div className="contact-container mb-20">
          <h3 className="head-text">Contact me</h3>
          <p className="text-lg text-white-600 mt-3 ">
            Looking to build new website, improve your existing plateform, bring
            any project to life? I&apos;m here to help.
          </p>

          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="Ashutosh Kumar"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="ashu@gmail.com"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                type="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                required
                rows={5}
                placeholder="Hi, I have an offer for you..."
              />
            </label>
            <button className="field-btn" type="submit">
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;