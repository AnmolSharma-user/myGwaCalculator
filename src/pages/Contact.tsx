import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:mygwacalculator.com@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Message from GWA Calculator Contact Form"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Email Client Opened!",
      description: "Your default email client has been opened with the message. Please send the email to complete your inquiry."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – GWA Calculator Support & Inquiries</title>
        <meta name="description" content="Have questions or need help with GWA calculation? Contact the GWA Calculator team for support, feedback, or partnership inquiries." />
        <meta name="keywords" content="contact, GWA Calculator, support, help, academic tool, student questions, Philippines" />
        <link rel="canonical" href="https://mygwacalculator.com/contact" />
        <meta property="og:title" content="Contact Us – GWA Calculator Support & Inquiries" />
        <meta property="og:description" content="Have questions or need help with GWA calculation? Contact the GWA Calculator team for support, feedback, or partnership inquiries." />
        <meta property="og:url" content="https://mygwacalculator.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 my-[30px]">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about GWA calculation or need help with our tool? We're here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-6 w-6 text-academic-blue" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          type="text" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Enter your full name" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="Enter your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        type="text" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="What is this regarding?" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us how we can help you..." 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-academic-blue hover:bg-academic-blue-dark text-white py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-academic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-academic-blue font-medium">mygwacalculator.com@gmail.com</p>
                      <p className="text-sm text-gray-600">Send us an email anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Reference */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Answers</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Looking for immediate answers? Check our FAQ section for common questions about GWA calculation.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-academic-blue-light">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-academic-blue-dark mb-2">Response Time</h3>
                  <p className="text-sm text-academic-blue-dark">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please email us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
