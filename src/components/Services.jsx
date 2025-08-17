import React from "react";

const services = [
  {
    icon: "🌿",
    title: "Herbal Consultations",
    desc: "Personalized herbal consultations with our certified herbalists to address your specific health concerns and create tailored treatment plans.",
    features: ["Initial Assessment", "Custom Formulations", "Follow-up Care", "Lifestyle Guidance"],
    gradient: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: "⚕️",
    title: "Wellness Programs",
    desc: "Comprehensive wellness programs designed to promote vitality, boost immunity, and restore natural balance to your body systems.",
    features: ["Immune Support", "Detox Programs", "Energy Enhancement", "Stress Management"],
    gradient: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200"
  },
  {
    icon: "💊",
    title: "Natural Treatments",
    desc: "Effective natural treatments using the power of herbs, acupuncture, and traditional healing methods for various health conditions.",
    features: ["Herbal Medicine", "Acupuncture", "Cupping Therapy", "Moxibustion"],
    gradient: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    icon: "💆‍♀️",
    title: "Therapeutic Massage",
    desc: "Relaxing and therapeutic massage sessions that combine traditional techniques with herbal oils for complete mind-body wellness.",
    features: ["Swedish Massage", "Deep Tissue", "Herbal Oil Therapy", "Stress Relief"],
    gradient: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  },
  {
    icon: "📋",
    title: "Personalized Health Plans",
    desc: "Customized health plans tailored to your unique wellness goals, incorporating diet, exercise, and herbal supplementation.",
    features: ["Nutrition Guidance", "Exercise Plans", "Herbal Supplements", "Progress Tracking"],
    gradient: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    icon: "🌱",
    title: "Herbal Education",
    desc: "Educational workshops and consultations to help you understand herbal medicine and incorporate natural remedies into your daily life.",
    features: ["Workshops", "Herb Identification", "Home Remedies", "Safety Guidelines"],
    gradient: "from-lime-400 to-emerald-500",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200"
  }
];

/** Services Section */
export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-lg mb-8">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-emerald-700 to-teal-600 bg-clip-text text-transparent mb-8">
            Holistic Healing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the power of natural medicine with our comprehensive range of holistic services, 
            designed to restore balance and promote wellness from the inside out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group relative ${service.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border ${service.borderColor} hover:border-opacity-60 overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Service Icon */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <span className="text-4xl filter drop-shadow-lg">{service.icon}</span>
              </div>

              {/* Service Title */}
              <h3 className="relative text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="relative text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>

              {/* Service Features */}
              <div className="relative space-y-4">
                <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">
                  What's Included:
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`relative mt-8 w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl`}>
                <span className="flex items-center justify-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Begin Your Wellness Journey
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with our herbal medicine experts and discover how natural healing 
                can transform your health, energy, and overall quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 font-bold px-10 py-5 rounded-2xl text-lg hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
                  Start Consultation
                </button>
                <button className="border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
