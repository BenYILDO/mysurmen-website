import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, TrendingUp } from 'lucide-react';
import { blogPosts } from '../data/blog';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Yazısı Bulunamadı</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">Blog sayfasına dön</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Blog'a Dön
          </Link>

          {/* Post Meta */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
              <span className="text-sm text-blue-300">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Blog Yazısı
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-700/50 mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-invert max-w-none">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">Giriş</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Yapay zeka teknolojilerinin hızla geliştiği günümüzde, işletmeler dijital dönüşüm süreçlerinde 
                    yenilikçi çözümler aramaktadır. Bu yazıda, {post.title.toLowerCase()} konusunu detaylı bir şekilde 
                    inceleyeceğiz ve pratik uygulamalar sunacağız.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    No-code platformları ve yapay zeka entegrasyonları, geleneksel yazılım geliştirme süreçlerini 
                    kökten değiştirmektedir. Bu değişim, hem teknik hem de iş süreçleri açısından önemli fırsatlar 
                    yaratmaktadır.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-purple-400">Ana Konular</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-blue-400 mb-3">Teknoloji Analizi</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Mevcut teknolojilerin kapsamlı analizi ve gelecek trendleri hakkında detaylı bilgiler. 
                        Yapay zeka modellerinin iş süreçlerine entegrasyonu ve performans optimizasyonları.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Pratik Uygulamalar</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Gerçek dünya örnekleri ve case study'ler üzerinden pratik uygulamalar. 
                        Adım adım implementasyon rehberi ve best practice'ler.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">Sonuçlar ve Öneriler</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Elde edilen sonuçların analizi ve gelecek projeler için öneriler. 
                        ROI hesaplamaları ve sürdürülebilirlik stratejileri.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-400">Detaylı İnceleme</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Bu bölümde konuyu daha derinlemesine inceleyeceğiz. Yapay zeka ve no-code teknolojilerinin 
                    birleşimi, işletmelere benzersiz fırsatlar sunmaktadır. Bu fırsatları değerlendirmek için 
                    doğru strateji ve araçları seçmek kritik önem taşımaktadır.
                  </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">💡 Pro İpucu</h4>
                    <p className="text-gray-300 text-sm">
                      Proje başlangıcında küçük pilot uygulamalarla başlayarak, öğrenilen dersleri 
                      büyük ölçekli implementasyonlara aktarmak en etkili yaklaşımdır.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Sonuç olarak, teknolojik gelişmeleri yakından takip etmek ve sürekli öğrenme 
                    yaklaşımını benimser, başarılı dijital dönüşüm projelerinin temelini oluşturur.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 flex items-center gap-2"
                    >
                      <Tag className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Share */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Bu yazıyı beğendin mi?</h3>
                      <p className="text-gray-400 text-sm">Sosyal medyada paylaş ve arkadaşlarınla tartış</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                      Paylaş
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold mb-4">İçindekiler</h3>
                  <nav className="space-y-2">
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Giriş
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Ana Konular
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Detaylı İnceleme
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      Sonuç
                    </a>
                  </nav>
                </div>

                {/* Author Info */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold mb-4">Yazar Hakkında</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    AI ve No-Code teknolojileri konusunda uzman. 50+ başarılı proje deneyimi.
                  </p>
                  <Link
                    to="/#contact"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    İletişime Geç →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              İlgili Yazılar
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 backdrop-blur-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPost;