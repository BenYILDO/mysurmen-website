import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Mail, Linkedin, Twitter, ArrowDown, Code, Palette, Smartphone, Bot, Zap, Brain, Layers, Workflow, Sparkles, ChevronRight, Play, Users, TrendingUp, Filter, Calendar, Tag } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';

function Home() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agent Development",
      description: "Özel yapay zeka ajanları geliştiriyorum. İş süreçlerinizi otomatikleştiren, müşteri hizmetlerini iyileştiren ve verimliliği artıran akıllı çözümler.",
      features: ["Chatbot Geliştirme", "Süreç Otomasyonu", "Akıllı Asistanlar", "Veri Analizi"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "No-Code Çözümler",
      description: "Kod yazmadan güçlü uygulamalar ve iş akışları oluşturuyorum. Hızlı, esnek ve maliyet-etkin dijital dönüşüm çözümleri.",
      features: ["Web Uygulamaları", "Mobil Uygulamalar", "İş Akışları", "Entegrasyonlar"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Entegrasyonu",
      description: "Mevcut sistemlerinize yapay zeka entegre ediyorum. GPT, Claude ve diğer AI modellerini iş süreçlerinizle harmanlıyorum.",
      features: ["API Entegrasyonu", "Özel AI Modelleri", "Veri İşleme", "Akıllı Raporlama"]
    }
  ];

  const stats = [
    { number: "50+", label: "Tamamlanan Proje", icon: <Layers className="w-6 h-6" /> },
    { number: "25+", label: "Mutlu Müşteri", icon: <Users className="w-6 h-6" /> },
    { number: "90%", label: "Süreç Otomasyonu", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Asistan Desteği", icon: <Bot className="w-6 h-6" /> }
  ];

  const projectCategories = [
    { id: 'all', label: 'Tümü' },
    { id: 'AI Agent', label: 'AI Agent' },
    { id: 'No-Code', label: 'No-Code' },
    { id: 'AI Integration', label: 'AI Entegrasyon' }
  ];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const latestBlogPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Floating AI Elements */}
          <div className="absolute top-32 right-32 animate-bounce-slow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-bounce-slow delay-1000">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">AI & No-Code Uzmanı</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Yapay Zeka ile
              </span>
              <br />
              <span className="text-white">Geleceği İnşa Ediyorum</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              No-code platformları ve yapay zeka teknolojilerini kullanarak işletmenizi dijital dönüşüme hazırlıyorum. 
              <span className="text-blue-400 font-semibold"> Kod yazmadan güçlü çözümler</span> üretiyorum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Projelerimi İncele
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 rounded-2xl text-white font-semibold hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300"
              >
                Ücretsiz Konsültasyon
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Hakkımda
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Yapay zeka ve no-code teknolojileri konusunda uzmanlaşmış bir geliştiriciyim. 
              İşletmelerin dijital dönüşüm yolculuğunda rehberlik ediyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">Misyonum</h3>
                <p className="text-gray-300 leading-relaxed">
                  Karmaşık teknolojileri basit, erişilebilir çözümlere dönüştürüyorum. 
                  Her işletmenin yapay zeka ve otomasyonun gücünden faydalanabileceğine inanıyorum.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">Yaklaşımım</h3>
                <p className="text-gray-300 leading-relaxed">
                  Önce dinliyorum, sonra analiz ediyorum ve en uygun teknolojiyi seçiyorum. 
                  Her proje için özelleştirilmiş, sürdürülebilir çözümler geliştiriyorum.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:scale-105 transition-all duration-300">
                <Code className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">No-Code Geliştirme</h4>
                <p className="text-gray-300 text-sm">Hızlı ve esnek uygulama geliştirme</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:scale-105 transition-all duration-300">
                <Bot className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">AI Entegrasyonu</h4>
                <p className="text-gray-300 text-sm">Akıllı sistemler ve otomatizasyon</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                <Workflow className="w-12 h-12 text-cyan-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Süreç Otomasyonu</h4>
                <p className="text-gray-300 text-sm">İş akışlarını optimize etme</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:scale-105 transition-all duration-300">
                <Brain className="w-12 h-12 text-pink-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">AI Stratejisi</h4>
                <p className="text-gray-300 text-sm">Yapay zeka dönüşüm danışmanlığı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Hizmetlerim
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel yapay zeka ve no-code çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <ChevronRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Gerçek projeler, gerçek sonuçlar
            </p>

            {/* Project Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => filterProjects(category.id)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white'
                      : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Sonuçlar</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Detayları Gör
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Son Blog Yazıları
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI ve No-Code dünyasından güncel içerikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestBlogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Tüm Blog Yazıları
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Birlikte Çalışalım
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Projenizi hayata geçirmek için ücretsiz konsültasyon alın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">İletişime Geçin</h3>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl hover:from-gray-700/50 hover:to-gray-600/30 transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">E-posta</div>
                    <div className="text-gray-400 text-sm">your.email@example.com</div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl hover:from-gray-700/50 hover:to-gray-600/30 transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-gray-400 text-sm">Profesyonel Profil</div>
                  </div>
                </a>
                
                <a
                  href="https://twitter.com/yourhandle"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl hover:from-gray-700/50 hover:to-gray-600/30 transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Twitter className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Twitter</div>
                    <div className="text-gray-400 text-sm">@yourhandle</div>
                  </div>
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600/50 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600/50 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Proje Konusu"
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600/50 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Projeniz hakkında detaylar..."
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600/50 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Ücretsiz Konsültasyon Al
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;