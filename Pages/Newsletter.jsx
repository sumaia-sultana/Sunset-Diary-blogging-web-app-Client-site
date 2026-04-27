import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';
import { CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }

    toast.success('Subscribed successfully 🚀');
    setEmail(user?.email || '');
  };

  return (
      <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 drop-shadow-sm">
              Get product updates <br className="hidden md:block" /> straight to your inbox
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Join thousands of readers who get high-quality blogs, product insights, and updates every week.
            </p>

            <ul className="space-y-4 text-gray-700 text-lg font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5F7E] flex-shrink-0" />
                <span>Weekly curated content</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5F7E] flex-shrink-0" />
                <span>No spam, unsubscribe anytime</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5F7E] flex-shrink-0" />
                <span>Early access to new features</span>
              </li>
            </ul>
          </div>

          {/* Right Form Card */}
          <div className="bg-gradient-to-br from-[#FF5F7E] via-[#ff7669] to-[#FF9E80] text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Decorative background elements inside the card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Subscribe Now</h3>

              <form onSubmit={handleSubscribe} className="space-y-5">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#FF5F7E] hover:bg-gray-50 transition-all duration-300 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/80 text-sm mt-5 text-center">
                We care about your data in our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" aria-label="Toast notifications" />
    </section>
  );
};

export default Newsletter;
