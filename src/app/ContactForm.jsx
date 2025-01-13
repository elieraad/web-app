import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "Website Development",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Invalid email format";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: validationError,
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: "",
    });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: `${formData.subject} - ${formData.projectType}`,
        message: formData.message,
      };

      await emailjs.send(
        "service_j8jqgeh",
        "template_t1cf9md",
        templateParams,
        "MgcX3FIwAK5Guq8BG"
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Thank you! We will get back to you within 48 hours.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        projectType: "Website Development",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <form className="space-y-6">
      {(status.submitted || status.error) && (
        <Alert
          variant={status.error ? "destructive" : "default"}
          className={
            status.error
              ? "bg-red-900/20 border-red-900/50 text-white"
              : "bg-green-900/20 border-green-900/50 text-white"
          }
        >
          {status.error ? (
            <AlertCircle className="h-4 w-4" />
          ) : (
            <CheckCircle color="green" className="h-4 w-4" />
          )}
          <AlertTitle>{status.error ? "Failed" : "Success"}</AlertTitle>
          <AlertDescription>{status.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+961 XX XXX XXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Brief subject of your inquiry"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Type</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>Digital Experience Design</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          disabled={status.submitting}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full transition-all duration-300 ${
            status.submitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:opacity-90"
          }`}
        >
          {status.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
