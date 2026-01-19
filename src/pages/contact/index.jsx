import { useRef, useState } from "react";
import PageSection from "../../layout/PageSection";

import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import Animate from "../../components/Animate";
import { Helmet } from "react-helmet";

import emailjs from "@emailjs/browser";
import FontIcon from "../../components/FontIcon";

import CONFIG from "../../config.json";
import LoadingButton from "../../components/LoadingButton";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Publishing Services",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title key="contact-title">
          Contact Us | SEO & Marketing Services | Blue Bridge Literary Agency
        </title>
        <meta
          key="contact-meta-description"
          name="description"
          content="Have a question about your marketing strategy? We're here to help. Reach out to the [Agency Name] team via phone, email, or chat. Let's discuss your goals."
        />
      </Helmet>
      <PageSection>
        <Animate animation="fadeIn">
          <Heading>Get In Touch</Heading>
        </Animate>

        <div className="mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Animate animation="slideUp">
            <div>
              <SubHeading>
                Ready to publish your <span className="text-gradient">Legacy?</span>
              </SubHeading>
              <p className="lg:text-xl text-slate-500 font-medium mt-5 mb-12 leading-relaxed max-w-lg">
                We provide the best business solutions for your company. Let's work together to
                achieve success.
              </p>

              <div className="space-y-6">
                <a
                  href={`tel:${CONFIG.phone}`}
                  className="flex items-center gap-4 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:rotate-12">
                    <FontIcon icon="call" size="md" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Office Line
                    </p>
                    <p className="text-md lg:text-xl  font-bold text-slate-900">{CONFIG.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONFIG.email}`}
                  className="flex items-center gap-4 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:-rotate-12">
                    <FontIcon icon="mail" size="md" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Direct Email
                    </p>
                    <p className="text-md lg:text-xl font-bold text-slate-900 truncate">
                      {CONFIG.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:rotate-6">
                    <FontIcon icon="location_on" size="md" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Visit Us
                    </p>
                    <p className="text-md lg:text-xl font-bold text-slate-900 whitespace-pre-wrap">
                      {CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
          <Animate animation="zoomIn" delay={400}>
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border border-white">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-main/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

                <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 placeholder:text-slate-300"
                        placeholder="John Doe"
                        required={true}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        aria-required={true}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 placeholder:text-slate-300"
                        placeholder="john@example.com"
                        required={true}
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                        name="service"
                        onChange={handleChange}
                        required={true}
                      >
                        <option>Publishing Services</option>
                        <option>Marketing Brilliance</option>
                        <option>Full Creative Consultation</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Your Story / Message
                    </label>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold h-40 resize-none text-slate-800 placeholder:text-slate-300"
                      name="message"
                      placeholder="Tell us about your project..."
                      onChange={handleChange}
                      required={true}
                    ></textarea>
                  </div>

                  <LoadingButton
                    type="submit"
                    isLoading={isSending}
                    className="gap-5 w-full bg-primary-main text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-slate-900 hover:shadow-slate-900/30 transition-all active:scale-95 duration-300 mt-4 group"
                  >
                    {isSending ? " sending..." : "Send Inquiry"}
                    <FontIcon icon="send" />
                  </LoadingButton>
                </form>
              </div>
            </div>
          </Animate>
        </div>
      </PageSection>
    </>
  );
};

export default Contact;
