import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, CheckCircle, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ──────────────────────────────────────────────────────────────────────
// HOW TO SET UP (Free — no credit card, 250 messages/month):
//   1. Go to https://web3forms.com
//   2. Enter your email → click "Create Access Key"
//   3. Copy the key and paste it below replacing WEB3FORMS_ACCESS_KEY
// ──────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "facd65fb-c530-46f9-b2bf-269db0f02d60";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formData.subject || "GWA Calculator – New Contact Message",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      toast({ title: "Message failed", description: "Something went wrong. Please email us directly.", variant: "destructive" });
      setStatus("idle");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const faqs = [
    { q: "How do I calculate my GWA?", a: "Use our free GWA Calculator on the homepage — enter your grades and units per subject and we compute it instantly." },
    { q: "Is your GWA Calculator free?", a: "Yes, 100% free forever. No sign-up required." },
    { q: "Do you support all Philippine universities?", a: "Yes — the GWA formula works for UP, UST, PUP, DLSU, PLM, and all CHED-accredited universities." },
    { q: "Can I report a bug or suggest a feature?", a: "Absolutely — use the form above or email us directly. We read every message and respond within 24 hours." },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us – GWA Calculator Philippines</title>
        <meta name="description" content="Contact the GWA Calculator team for support, feedback, bug reports, or partnership inquiries. We respond within 24 hours." />
        <meta name="keywords" content="contact GWA Calculator, student support Philippines, GWA calculator feedback" />
        <link rel="canonical" href="https://mygwacalculator.com/contact" />
        <meta property="og:title" content="Contact Us – GWA Calculator Philippines" />
        <meta property="og:description" content="Get in touch with the GWA Calculator team. We're here to help Filipino students." />
        <meta property="og:url" content="https://mygwacalculator.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "ContactPage", "name": "Contact GWA Calculator", "url": "https://mygwacalculator.com/contact", "contactPoint": { "@type": "ContactPoint", "email": "mygwacalculator.com@gmail.com", "contactType": "customer support", "availableLanguage": ["English", "Filipino"] } })}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-28 pb-16 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">💬 We read every message</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question, found a bug, or want to suggest an improvement? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                    <Send className="h-5 w-5 text-blue-600" /> Send Us a Message
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Messages go directly to our team inbox. We reply within 24 hours.</p>
                </CardHeader>
                <CardContent className="pt-4">
                  {status === "success" ? (
                    <div className="text-center py-12">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">Thanks for reaching out. We'll reply within 24 hours.</p>
                      <Button variant="outline" onClick={() => setStatus("idle")}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot spam protection */}
                      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                          <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Juan dela Cruz" required className="h-11" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="juan@email.com" required className="h-11" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                        <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="e.g., Bug report / Feature request / General question" className="h-11" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message <span className="text-red-500">*</span></label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help you..." rows={6} required />
                      </div>
                      <Button type="submit" disabled={status === "sending"} className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base">
                        {status === "sending"
                          ? <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> Sending…</span>
                          : <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Send Message</span>}
                      </Button>
                      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                        By submitting, you agree to our <Link to="/privacy" className="underline hover:text-blue-500">Privacy Policy</Link>.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Us Directly</h3>
                      <a href="mailto:mygwacalculator.com@gmail.com" className="text-blue-600 dark:text-blue-400 text-sm hover:underline font-medium">mygwacalculator.com@gmail.com</a>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Best for urgent inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-600 dark:bg-blue-700 shadow-lg border-0 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Response Time</h3>
                      <p className="text-blue-100 text-sm">We reply within <strong>24 hours</strong> on business days. Bugs get same-day priority.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900 dark:text-white">Common Topics</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {["Bug reports & calculation errors", "Feature suggestions", "Partnership & collaboration", "Content corrections", "General GWA questions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-blue-600" /> Quick Answers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {faqs.map((faq, i) => (
                <Card key={i} className="bg-white dark:bg-gray-800 shadow-md border-0">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{faq.q}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
              More questions? <Link to="/faq" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Visit our full FAQ page →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
