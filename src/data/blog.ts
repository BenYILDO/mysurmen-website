export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2024'te Yapay Zeka ile İş Süreçlerini Nasıl Dönüştürürüz?",
    slug: "2024-yapay-zeka-is-surecleri-donusum",
    excerpt: "Yapay zeka teknolojilerinin iş dünyasında yarattığı devrim ve 2024 yılında beklenen trendler. AI ile süreç otomasyonu nasıl yapılır?",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI",
    tags: ["yapay-zeka", "otomasyon", "dijital-donusum", "is-surecleri"],
    date: "15 Aralık 2024",
    readTime: "8 dk okuma",
    author: "AI Solutions",
    seoTitle: "2024 Yapay Zeka Trendleri ve İş Süreçleri Dönüşümü",
    seoDescription: "2024'te yapay zeka ile iş süreçlerini nasıl optimize edebilirsiniz? AI trendleri ve pratik uygulamalar."
  },
  {
    id: 2,
    title: "No-Code Platformları ile 10 Dakikada Uygulama Geliştirme",
    slug: "no-code-10-dakika-uygulama-gelistirme",
    excerpt: "Kod yazmadan profesyonel uygulamalar nasıl geliştirilir? En popüler no-code araçları ve pratik örnekler.",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "No-Code",
    tags: ["no-code", "uygulama-gelistirme", "hizli-prototip", "bubble"],
    date: "12 Aralık 2024",
    readTime: "6 dk okuma",
    author: "AI Solutions",
    seoTitle: "No-Code ile Hızlı Uygulama Geliştirme Rehberi",
    seoDescription: "No-code platformları kullanarak nasıl hızlı ve etkili uygulamalar geliştirebilirsiniz? Adım adım rehber."
  },
  {
    id: 3,
    title: "ChatGPT API ile Özel AI Asistanı Oluşturma",
    slug: "chatgpt-api-ozel-ai-asistani",
    excerpt: "OpenAI API kullanarak işletmenize özel AI asistanları nasıl oluşturulur? Pratik örnekler ve kod snippetleri.",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI",
    tags: ["chatgpt", "openai-api", "ai-asistan", "entegrasyon"],
    date: "10 Aralık 2024",
    readTime: "12 dk okuma",
    author: "AI Solutions",
    seoTitle: "ChatGPT API ile Özel AI Asistanı Geliştirme",
    seoDescription: "ChatGPT API kullanarak işletmenize özel AI asistanları nasıl oluşturursunuz? Detaylı rehber ve örnekler."
  },
  {
    id: 4,
    title: "Zapier ile İş Akışı Otomasyonu: Başlangıç Rehberi",
    slug: "zapier-is-akisi-otomasyon-rehberi",
    excerpt: "Zapier kullanarak tekrarlayan görevleri nasıl otomatikleştirirsiniz? En kullanışlı entegrasyonlar ve ipuçları.",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Otomasyon",
    tags: ["zapier", "otomasyon", "is-akisi", "entegrasyon"],
    date: "8 Aralık 2024",
    readTime: "7 dk okuma",
    author: "AI Solutions",
    seoTitle: "Zapier ile İş Akışı Otomasyonu Nasıl Yapılır?",
    seoDescription: "Zapier kullanarak iş süreçlerinizi nasıl otomatikleştirirsiniz? Başlangıç rehberi ve pratik örnekler."
  },
  {
    id: 5,
    title: "2024'ün En İyi No-Code Araçları Karşılaştırması",
    slug: "2024-en-iyi-no-code-araclari",
    excerpt: "Bubble, Webflow, Airtable ve diğer popüler no-code platformlarının detaylı karşılaştırması ve hangisini seçmelisiniz?",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "No-Code",
    tags: ["no-code", "karsilastirma", "bubble", "webflow", "airtable"],
    date: "5 Aralık 2024",
    readTime: "10 dk okuma",
    author: "AI Solutions",
    seoTitle: "2024'ün En İyi No-Code Platformları Karşılaştırması",
    seoDescription: "Hangi no-code platformunu seçmelisiniz? 2024'ün en popüler araçlarının detaylı karşılaştırması."
  },
  {
    id: 6,
    title: "AI ile Müşteri Hizmetlerini Geliştirme Stratejileri",
    slug: "ai-musteri-hizmetleri-gelistirme",
    excerpt: "Yapay zeka destekli chatbot'lar ve otomatik yanıt sistemleri ile müşteri memnuniyetini nasıl artırırsınız?",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI",
    tags: ["ai", "musteri-hizmetleri", "chatbot", "otomasyon"],
    date: "3 Aralık 2024",
    readTime: "9 dk okuma",
    author: "AI Solutions",
    seoTitle: "AI ile Müşteri Hizmetlerini Geliştirme Rehberi",
    seoDescription: "Yapay zeka ile müşteri hizmetlerinizi nasıl geliştirirsiniz? Chatbot ve otomasyon stratejileri."
  },
  {
    id: 7,
    title: "Veri Analizi için AI Araçları: Başlangıç Rehberi",
    slug: "veri-analizi-ai-araclari-rehberi",
    excerpt: "Büyük veri setlerini analiz etmek için AI araçları nasıl kullanılır? Pratik örnekler ve araç önerileri.",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Teknoloji",
    tags: ["veri-analizi", "ai", "big-data", "machine-learning"],
    date: "1 Aralık 2024",
    readTime: "11 dk okuma",
    author: "AI Solutions",
    seoTitle: "AI ile Veri Analizi: Başlangıç Rehberi",
    seoDescription: "Yapay zeka araçları ile veri analizi nasıl yapılır? Başlangıç rehberi ve pratik örnekler."
  },
  {
    id: 8,
    title: "E-ticaret için AI Destekli Ürün Önerisi Sistemleri",
    slug: "e-ticaret-ai-urun-onerisi-sistemleri",
    excerpt: "E-ticaret sitelerinde AI kullanarak kişiselleştirilmiş ürün önerileri nasıl oluşturulur? Satışları artıran stratejiler.",
    content: "Blog post content here...",
    coverImage: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI",
    tags: ["e-ticaret", "ai", "urun-onerisi", "kisisellestime"],
    date: "28 Kasım 2024",
    readTime: "8 dk okuma",
    author: "AI Solutions",
    seoTitle: "E-ticaret için AI Destekli Ürün Önerisi Sistemleri",
    seoDescription: "E-ticaret sitenizde AI ile ürün önerisi sistemi nasıl kurulur? Satışları artıran stratejiler."
  }
];