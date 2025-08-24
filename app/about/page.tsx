import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-serif text-gray-800">Shreya Verma</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-rose-500 font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-800 mb-6">About Shreya</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate makeup artist dedicated to enhancing natural beauty and creating unforgettable looks for life's most precious moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-gray-800">My Journey</h2>
                <p className="text-gray-600 leading-relaxed">
                  With over 8 years of experience in the beauty industry, I've had the privilege of working with hundreds of clients, each with their unique style and vision. My journey began with a simple passion for art and beauty, which evolved into a professional career dedicated to making every woman feel confident and radiant.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe that makeup is not just about covering imperfections, but about enhancing your natural features and bringing out your inner glow. Whether it's your wedding day, a special event, or just because you deserve to feel beautiful, I'm here to create a look that's uniquely you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <Users className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <Clock className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shreya Verma - Professional Makeup Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Certified</div>
                <div className="text-xs text-gray-600">Professional Artist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">My Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Enhance Natural Beauty</h3>
              <p className="text-gray-600">I believe in enhancing what you already have, not masking it. Every face tells a unique story.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Personalized Approach</h3>
              <p className="text-gray-600">Every client is different, and so should be their makeup. I tailor each look to your personality and occasion.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quality & Precision</h3>
              <p className="text-gray-600">Using only premium products and techniques to ensure your look stays flawless throughout your special day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Specialized techniques for every occasion</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Bridal Makeup</h3>
              <p className="text-gray-600 text-sm">Traditional & contemporary bridal looks</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Glam Events</h3>
              <p className="text-gray-600 text-sm">Red carpet & party makeup</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">N</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Natural Look</h3>
              <p className="text-gray-600 text-sm">Everyday elegance & professional shoots</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Special FX</h3>
              <p className="text-gray-600 text-sm">Creative & artistic makeup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Let's Create Magic Together</h2>
          <p className="text-xl text-rose-100 mb-8">Ready to discover your most beautiful self? Book a consultation and let's bring your vision to life.</p>
          <Link href="/contact" className="bg-white text-rose-500 px-8 py-4 rounded-full font-medium hover:bg-rose-50 transition-colors inline-block">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-rose-400" />
                <span className="text-2xl font-serif">Shreya Verma</span>
              </div>
              <p className="text-gray-400">Professional makeup artist creating beautiful looks for every occasion.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +91 98765 43210</p>
                <p>✉️ shreya@makeupstudio.com</p>
                <p>📍 Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shreya Verma Makeup Artist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}