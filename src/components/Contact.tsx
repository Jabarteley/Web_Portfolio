import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'hello@yourportfolio.com',
      link: 'mailto:hello@yourportfolio.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-slate-800 flex items-center justify-center text-amber-500 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-colors"
                    aria-label={`Connect on ${platform}`}
                  >
                    <span className="capitalize text-sm">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {submitResult && (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  submitResult.success
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}
              >
                {submitResult.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;