import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="min-w-0">
            <div className="font-bold text-2xl mb-2">
              <span className="text-medium-spring-green-500">Abduljabar </span>Asaju
            </div>
            <p className="text-slate-300 max-w-md">
              Building scalable web and mobile products with strong architecture,
              practical execution, and user-focused interfaces.
            </p>
          </div>
          
          <div className="grid w-full grid-cols-2 gap-8 sm:gap-16 md:w-auto">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-300 hover:text-amber-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: 'https://github.com/Jabarteley' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abduljabar-asaju-4a9825265' },
                  { name: 'Portfolio', url: 'https://web-portfolio-abduljabar.vercel.app/' },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-amber-500 transition-colors"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Abduljabar Asaju. All rights reserved.
          </p>

          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-start">
            <a
              href="/Abduljabar_Asaju_Resume.pdf"
              download
              className="text-slate-400 hover:text-medium-spring-green-500 transition-colors"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-medium-spring-green-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
