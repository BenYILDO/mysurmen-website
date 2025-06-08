export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
  category: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret AI Asistanı",
    description: "Müşteri sorularını anlayan, ürün önerileri yapan ve satış sürecini optimize eden yapay zeka asistanı. 7/24 müşteri desteği sağlıyor.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["OpenAI GPT", "Webhook", "No-Code Platform", "API Integration"],
    results: ["85% Müşteri Memnuniyeti", "40% Satış Artışı", "60% Destek Maliyeti Azalması"],
    category: "AI Agent",
    slug: "e-ticaret-ai-asistani"
  },
  {
    id: 2,
    title: "Otomatik İçerik Üretim Sistemi",
    description: "Blog yazıları, sosyal medya içerikleri ve ürün açıklamalarını otomatik üreten AI destekli içerik yönetim sistemi.",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Claude AI", "Zapier", "Airtable", "WordPress"],
    results: ["10x Hızlı İçerik", "Tutarlı Marka Sesi", "SEO Optimizasyonu"],
    category: "No-Code",
    slug: "otomatik-icerik-uretim-sistemi"
  },
  {
    id: 3,
    title: "Akıllı CRM Sistemi",
    description: "Müşteri verilerini analiz eden, satış fırsatlarını tespit eden ve otomatik takip yapan yapay zeka destekli CRM çözümü.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Make.com", "HubSpot", "AI Analytics", "Custom Webhooks"],
    results: ["50% Daha Fazla Lead", "Otomatik Takip", "Akıllı Segmentasyon"],
    category: "AI Integration",
    slug: "akilli-crm-sistemi"
  },
  {
    id: 4,
    title: "Çok Dilli Müşteri Desteği",
    description: "25+ dilde müşteri sorularını anlayan ve yanıtlayan, ticket yönlendirmesi yapan akıllı destek sistemi.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["GPT-4", "Translation API", "Zendesk", "Custom Integration"],
    results: ["Global Müşteri Desteği", "Anında Yanıt", "Çok Dilli Destek"],
    category: "AI Agent",
    slug: "cok-dilli-musteri-destegi"
  },
  {
    id: 5,
    title: "Akıllı Envanter Yönetimi",
    description: "Stok seviyelerini tahmin eden, otomatik sipariş veren ve tedarik zincirini optimize eden AI destekli envanter sistemi.",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Machine Learning", "Bubble", "API Integrations", "Predictive Analytics"],
    results: ["30% Stok Azalması", "Otomatik Sipariş", "Tahmin Doğruluğu %95"],
    category: "No-Code",
    slug: "akilli-envanter-yonetimi"
  },
  {
    id: 6,
    title: "Sosyal Medya Otomasyon Botu",
    description: "İçerik planlama, paylaşım zamanlaması ve engagement analizi yapan kapsamlı sosyal medya yönetim sistemi.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Social Media APIs", "Zapier", "AI Content Generation", "Analytics"],
    results: ["5x Engagement Artışı", "Otomatik Paylaşım", "Analitik Raporlama"],
    category: "AI Integration",
    slug: "sosyal-medya-otomasyon-botu"
  }
];