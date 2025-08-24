import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Star, Heart, Phone, Mail, Instagram } from 'lucide-react';

export default function Home() {
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
              <Link href="/about" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
                  Beauty That
                  <span className="text-rose-500 block">Speaks Volumes</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional makeup artistry for your most precious moments. From bridal elegance to glamorous events, I create looks that enhance your natural beauty.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-rose-500 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-600 transition-colors text-center">
                  View Services
                </Link>
                <Link href="/contact" className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-medium hover:bg-rose-500 hover:text-white transition-colors text-center">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-rose-200 to-purple-200 p-8">
                <img
                  src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional makeup artist at work"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-rose-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Signature Services</h2>
            <p className="text-xl text-gray-600">Crafting beauty for every occasion</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bridal makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-serif">Bridal Makeup</h3>
                </div>
              </div>
              <p className="text-gray-600">Your dream wedding look, perfectly crafted for your special day</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Glam event makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-serif">Glam Events</h3>
                </div>
              </div>
              <p className="text-gray-600">Red carpet ready looks for parties, galas, and special occasions</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Natural makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-serif">Natural Glam</h3>
                </div>
              </div>
              <p className="text-gray-600">Effortless beauty for everyday elegance and professional shoots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by brides and beauty enthusiasts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"Shreya made me feel like a princess on my wedding day. Her attention to detail and artistic vision is unmatched!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-rose-600 font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Priya Sharma</p>
                  <p className="text-gray-500 text-sm">Bride</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"Professional, talented, and so easy to work with. My makeup looked flawless for the entire event!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ananya Gupta</p>
                  <p className="text-gray-500 text-sm">Event Client</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"Shreya has an incredible eye for what works best for each person. I've never felt more confident!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Riya Patel</p>
                  <p className="text-gray-500 text-sm">Regular Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-rose-100 mb-8">Book your consultation today and let's create something beautiful together</p>
          <Link href="/contact" className="bg-white text-rose-500 px-8 py-4 rounded-full font-medium hover:bg-rose-50 transition-colors inline-block">
            Get In Touch
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
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Phone className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
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