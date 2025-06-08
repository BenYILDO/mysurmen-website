import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp, Zap, Target, CheckCircle, Clock, Award } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proje Bulunamadı</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Ana sayfaya dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Ana Sayfaya Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
                <span className="text-sm text-blue-300">{project.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <ExternalLink size={18} />
                  Canlı Demo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-xl text-white font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  <Github size={18} />
                  Kaynak Kod
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-700/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{result}</h3>
                <p className="text-gray-400">Başarı Metriği</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Proje Hedefi</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Bu projede müşterinin temel ihtiyacı, mevcut iş süreçlerini otomatikleştirmek ve yapay zeka teknolojilerini 
                  entegre ederek operasyonel verimliliği artırmaktı. Geleneksel yöntemlerle yapılan manuel işlemler zaman 
                  kaybına neden oluyor ve hata oranları yüksekti.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Çözüm Yaklaşımı</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    No-code platformları kullanarak hızlı prototipleme ve geliştirme süreci başlattım. 
                    Yapay zeka modellerini entegre ederek akıllı karar verme mekanizmaları oluşturdum.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">API entegrasyonları ile mevcut sistemlerle uyumlu çalışma</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Kullanıcı dostu arayüz tasarımı ve deneyim optimizasyonu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Gerçek zamanlı veri işleme ve analiz yetenekleri</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Ölçeklenebilir mimari ve güvenlik protokolleri</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Implementation */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Uygulama Süreci</h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Analiz ve Planlama</h3>
                    <p className="text-gray-300">
                      Mevcut iş süreçlerinin detaylı analizi ve teknoloji seçimi yapıldı. 
                      Proje roadmap'i ve milestone'lar belirlendi.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Prototip Geliştirme</h3>
                    <p className="text-gray-300">
                      No-code platformları kullanılarak hızlı prototip geliştirildi ve 
                      kullanıcı geri bildirimleri alındı.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">AI Entegrasyonu</h3>
                    <p className="text-gray-300">
                      Yapay zeka modelleri entegre edildi ve özelleştirilmiş algoritmalar geliştirildi.
                    </p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Test ve Optimizasyon</h3>
                    <p className="text-gray-300">
                      Kapsamlı testler yapılarak performans optimizasyonları gerçekleştirildi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6">Proje Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Tamamlanma Tarihi</div>
                      <div className="font-semibold">Aralık 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Proje Süresi</div>
                      <div className="font-semibold">6 Hafta</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Takım Büyüklüğü</div>
                      <div className="font-semibold">3 Kişi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6">Kullanılan Teknolojiler</h3>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4">Benzer Bir Proje Mi İstiyorsunuz?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Bu projeye benzer bir çözüme ihtiyacınız varsa, ücretsiz konsültasyon için iletişime geçin.
                </p>
                <Link
                  to="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  İletişime Geç
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Benzer Projeler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 backdrop-blur-sm">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{relatedProject.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;