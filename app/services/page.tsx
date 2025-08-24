import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Crown, Star, Palette, Camera, Heart, Clock, CheckCircle } from 'lucide-react';

export default function Services() {
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
              <Link href="/services" className="text-rose-500 font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif text-gray-800 mb-6">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From intimate gatherings to grand celebrations, I offer a complete range of makeup services tailored to make you look and feel absolutely stunning.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bridal Makeup */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bridal makeup service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Crown className="h-5 w-5 text-rose-500" />
                    <span className="font-semibold text-gray-800">Most Popular</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif text-gray-800 mb-4">Bridal Makeup</h3>
                <p className="text-gray-600 mb-6">
                  Your wedding day deserves perfection. I create timeless, elegant looks that photograph beautifully and last throughout your celebration.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Pre-wedding consultation & trial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">HD makeup for photography</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Touch-up kit included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Hair styling available</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-800">₹15,000</span>
                    <span className="text-gray-600"> onwards</span>
                  </div>
                  <Link href="/contact" className="bg-rose-500 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Glam Events */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Glam event makeup service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold text-gray-800">Premium</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif text-gray-800 mb-4">Glam Events</h3>
                <p className="text-gray-600 mb-6">
                  Red carpet ready looks for parties, galas, anniversaries, and special celebrations. Bold, glamorous, and unforgettable.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Dramatic eye makeup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Contouring & highlighting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Long-lasting formula</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">False lashes included</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-800">₹8,000</span>
                    <span className="text-gray-600"> onwards</span>
                  </div>
                  <Link href="/contact" className="bg-purple-500 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Natural Makeup */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Natural makeup service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="h-5 w-5 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Natural Glam</h3>
                </div>
                <p className="text-gray-600 mb-4">Effortless beauty for everyday elegance, professional shoots, and casual events.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹4,000</span>
                  <Link href="/contact" className="text-green-500 font-medium hover:text-green-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>

            {/* Party Makeup */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Party makeup service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Party Makeup</h3>
                </div>
                <p className="text-gray-600 mb-4">Fun, vibrant looks perfect for birthdays, cocktail parties, and night outs.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹5,000</span>
                  <Link href="/contact" className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>

            {/* Photoshoot Makeup */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Photoshoot makeup service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Camera className="h-5 w-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Photoshoot</h3>
                </div>
                <p className="text-gray-600 mb-4">Camera-ready makeup for professional shoots, portfolios, and social media content.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹6,000</span>
                  <Link href="/contact" className="text-blue-500 font-medium hover:text-blue-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>

            {/* Engagement Makeup */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373731/pexels-photo-3373731.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Engagement makeup service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="h-5 w-5 text-rose-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Engagement</h3>
                </div>
                <p className="text-gray-600 mb-4">Romantic, elegant looks for your engagement ceremony and pre-wedding events.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹7,000</span>
                  <Link href="/contact" className="text-rose-500 font-medium hover:text-rose-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>

            {/* Corporate Events */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373742/pexels-photo-3373742.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corporate event makeup service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Palette className="h-5 w-5 text-indigo-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Corporate</h3>
                </div>
                <p className="text-gray-600 mb-4">Professional, polished looks for business events, conferences, and corporate functions.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹4,500</span>
                  <Link href="/contact" className="text-indigo-500 font-medium hover:text-indigo-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>

            {/* Makeup Lessons */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3373750/pexels-photo-3373750.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Makeup lessons service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Makeup Lessons</h3>
                </div>
                <p className="text-gray-600 mb-4">Learn professional techniques with personalized one-on-one makeup tutorials.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">₹3,000</span>
                  <Link href="/contact" className="text-yellow-500 font-medium hover:text-yellow-600 transition-colors">
                    Book →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Package Deals</h2>
            <p className="text-xl text-gray-600">Save more with our specially curated packages</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-8 w-8" />
                <h3 className="text-2xl font-serif">Bridal Package</h3>
              </div>
              <p className="mb-6 opacity-90">Complete bridal experience including trial, wedding day, and reception makeup</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Pre-wedding trial session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Wedding day makeup & hair</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Reception touch-up</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Complimentary makeup kit</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold">₹25,000</span>
                  <span className="text-sm opacity-75 line-through ml-2">₹30,000</span>
                </div>
                <Link href="/contact" className="bg-white text-rose-500 px-6 py-3 rounded-full font-medium hover:bg-rose-50 transition-colors">
                  Book Package
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-8 w-8" />
                <h3 className="text-2xl font-serif">Event Series</h3>
              </div>
              <p className="mb-6 opacity-90">Perfect for multiple events - engagement, sangeet, and wedding functions</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>3 different makeup looks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Hair styling included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Touch-up services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Priority booking</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold">₹20,000</span>
                  <span className="text-sm opacity-75 line-through ml-2">₹24,000</span>
                </div>
                <Link href="/contact" className="bg-white text-purple-500 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors">
                  Book Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">How I ensure you look absolutely stunning</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Discuss your vision, preferences, and event details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-500">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Trial Session</h3>
              <p className="text-gray-600 text-sm">Test the look and make adjustments as needed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Final Look</h3>
              <p className="text-gray-600 text-sm">Perfect application on your special day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-500">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Touch-ups</h3>
              <p className="text-gray-600 text-sm">Ensure you look flawless throughout the event</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Ready to Book Your Session?</h2>
          <p className="text-xl text-rose-100 mb-8">Let's discuss your vision and create the perfect look for your special occasion</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-rose-500 px-8 py-4 rounded-full font-medium hover:bg-rose-50 transition-colors">
              Book Consultation
            </Link>
            <a href="tel:+919876543210" className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-rose-500 transition-colors">
              Call Now
            </a>
          </div>
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
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
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