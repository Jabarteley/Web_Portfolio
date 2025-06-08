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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-bold text-2xl mb-2">
              <span className="text-amber-500">Port</span>folio
            </div>
            <p className="text-slate-300 max-w-md">
              Creating beautiful, functional digital experiences with an eye for detail
              and a passion for excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
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
                  { name: 'GitHub', url: 'https://github.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Twitter', url: 'https://twitter.com' },
                  { name: 'Dribbble', url: 'https://dribbble.com' },
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
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Abduljabar Asaju. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;