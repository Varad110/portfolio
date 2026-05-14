import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "motion/react";
function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    identity: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const templateParams = {
      from_name: formData.identity,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send email to YOU
      await emailjs.send(
        import.meta.env.VITE_serviceId,
        import.meta.env.VITE_contactUsTemplateId,
        templateParams,
        import.meta.env.VITE_emailjsPublicKey,
      );

      // Send auto reply to USER
      await emailjs.send(
        import.meta.env.VITE_serviceId,
        import.meta.env.VITE_autoReplyTemplateId,
        templateParams,
        import.meta.env.VITE_emailjsPublicKey,
      );

      toast.success("Message sent successfully 🚀");

      setFormData({
        identity: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="Contact"
      className="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-10 justify-center items-center"
    >
      <div className="flex flex-col md:flex-row md:max-w-8xl justify-center items-center w-full gap-5">
        {/* Left Section */}

        <div className="w-full md:w-[50%]">
          <div className="flex flex-col px-3 py-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full "
            >
              <h1 className="jetbrains-mono-bold text-3xl">
                Let's build something extraordinary
              </h1>

              <p className="py-3 font-light text-md md:text-lg">
                Currently open to high-impact projects and innovative teams.
                Reach out to discuss architecture, development, or creative
                collaboration.
              </p>

              <a
                href="mailto:varadgujarathi120@gmail.com"
                className="inline-flex items-center mt-3 text-white gap-1 hover:text-blue-300 w-fit transition duration-300 ease-in-out"
              >
                <span className="rounded border p-1 mr-2 md:mr-4">
                  <Mail size={20} />
                </span>

                <span>varadgujarathi120@gmail.com</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full "
            >
              <div className="inline-flex items-center mt-3 text-white gap-1 hover:text-green-300 w-fit transition duration-300 ease-in-out">
                <span className="rounded border p-1 mr-2 md:mr-4">
                  <MapPin size={20} />
                </span>

                <span>Nanded, Maharashtra</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-5 py-6 flex flex-col items-center md:w-[50%] bg-gray-900/50 shadow-lg shadow-gray-700 rounded-lg border border-gray-700"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap md:flex-row gap-3 md:items-center w-full"
          >
            <div className="w-full flex flex-col md:flex-row gap-3">
              {/* Name */}
              <div className="w-full md:w-[50%] flex flex-col">
                <label
                  className="jetbrains-mono-normal text-sm"
                  htmlFor="identity"
                >
                  Identity
                </label>

                <input
                  id="identity"
                  value={formData.identity}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-300 px-2 py-2 rounded-lg mt-2"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="w-full md:w-[50%] flex-col flex">
                <label
                  className="jetbrains-mono-normal text-sm"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-300 px-2 py-2 rounded-lg mt-2"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full flex flex-row">
              <div className="w-full flex-col flex">
                <label
                  className="jetbrains-mono-normal text-sm"
                  htmlFor="subject"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-800 text-gray-300 px-2 py-2 rounded-lg mt-2"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full flex-col flex">
              <label
                className="jetbrains-mono-normal text-sm"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-gray-800 text-gray-300 px-2 py-2 rounded-lg mt-2"
                placeholder="Message"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex flex-col w-full justify-center items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
