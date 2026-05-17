/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, Search, User, ChevronRight, Hourglass, Target, Lightbulb, Info, ArrowLeft, Triangle, Square, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type BodyShape = 'hourglass' | 'pear' | 'apple' | 'rectangle' | 'inverted_triangle';

interface ShapeInfo {
  name: string;
  enName: string;
  icon: React.ReactNode;
  description: string;
  strengths: string;
  focus: string;
  characteristics: string[];
  stylistNote: string;
  recommendations: {
    tag: string;
    name: string;
    desc: string;
    img: string;
  }[];
}

const SHAPE_DATA: Record<BodyShape, ShapeInfo> = {
  hourglass: {
    name: "Jam Pasir",
    enName: "Hourglass Shape",
    icon: <Hourglass size={64} className="text-brand-primary mb-4" strokeWidth={1.5} />,
    description: "Proporsi seimbang antara bahu dan pinggul dengan garis pinggang yang terdefinisi dengan jelas.",
    strengths: "Siluet proporsional dan garis pinggang yang menarik.",
    focus: "Tonjolkan lekuk tubuh alami tanpa berlebihan.",
    characteristics: [
      "Bahu dan pinggul memiliki lebar yang hampir sama.",
      "Garis pinggang terlihat sangat jelas (terdefinisi).",
      "Lekukan tubuh yang mengalir lembut."
    ],
    stylistNote: "Untuk bentuk tubuh Jam Pasir, kuncinya adalah **keseimbangan**. Hindari pakaian yang terlalu longgar (boxy) karena akan menyembunyikan garis pinggang Anda yang indah. Pilihlah bahan yang memiliki *drape* yang baik seperti sutra atau katun berkualitas tinggi.",
    recommendations: [
      {
        tag: "Atasan",
        name: "V-Neck Blouse",
        desc: "Kerah V memanjangkan garis leher dan mengimbangi lebar bahu dengan elegan.",
        img: "/assets/images/regenerated_image_1778855504791.png"
      },
      {
        tag: "Bawahan",
        name: "Celana Kulot",
        desc: "Potongan high-waist mengikuti lekuk pinggul dan memberikan kesan kaki lebih jenjang.",
        img: "/assets/images/regenerated_image_1778855509479.png"
      },
      {
        tag: "Luaran",
        name: "Tailored Blazer",
        desc: "Gunakan blazer yang terstruktur di pinggang untuk mempertahankan siluet jam pasir Anda.",
        img: "/assets/images/regenerated_image_1778855513111.png"
      }
    ]
  },
  pear: {
    name: "Pir",
    enName: "Pear Shape",
    icon: <Triangle size={64} className="text-brand-primary mb-4" strokeWidth={1.5} />,
    description: "Pinggul lebih lebar daripada bahu, menciptakan fokus visual pada bagian bawah tubuh.",
    strengths: "Pinggul yang feminin dan bahu yang cenderung mungil.",
    focus: "Seimbangkan proporsi dengan menambahkan volume pada bagian atas.",
    characteristics: [
      "Pinggul merupakan bagian terlebar dari tubuh.",
      "Pinggang terdefinisi dengan baik.",
      "Bahu lebih sempit dibanding pinggul."
    ],
    stylistNote: "Untuk bentuk Pir, gunakan atasan dengan detail (ruffles, pola, atau warna cerah) untuk menarik perhatian ke atas. Hindari celana yang terlalu ketat dengan detail berlebih di pinggul. Celana model *wide-leg* atau *straight* sangat cocok untuk Anda.",
    recommendations: [
      {
        tag: "Atasan",
        name: "Ruffle Shoulder Top",
        desc: "Detail pada bahu memberikan volume untuk menyeimbangkan pinggul yang lebar.",
        img: "/assets/images/regenerated_image_1778918657196.png"
      },
      {
        tag: "Bawahan",
        name: "A-Line Skirt",
        desc: "Rok potongan A menyamarkan bagian pinggul dan memberikan siluet yang mengalir.",
        img: "/assets/images/regenerated_image_1778918481712.png"
      },
      {
        tag: "Luaran",
        name: "Structured Jacket",
        desc: "Jaket yang berhenti tepat di atas pinggul membantu menciptakan struktur pada tubuh bagian atas.",
        img: "/assets/images/regenerated_image_1778918485282.png"
      }
    ]
  },
  apple: {
    name: "Apel",
    enName: "Apple Shape",
    icon: <Circle size={64} className="text-brand-primary mb-4" strokeWidth={1.5} />,
    description: "Bagian tengah tubuh (pinggang) cenderung lebih lebar dengan kaki yang biasanya ramping.",
    strengths: "Kaki yang indah dan proporsi dada yang biasanya berisi.",
    focus: "Alihkan perhatian dari bagian tengah ke arah wajah dan kaki.",
    characteristics: [
      "Bahu dan pinggul mungkin lebih sempit dari pinggang.",
      "Garis pinggang tidak terlalu terdefinisi.",
      "Cenderung membesarkan bagian tengah saat berat badan naik."
    ],
    stylistNote: "Fokus pada pakaian dengan potongan *empire waist* atau *tunic style*. Gunakan garis leher rendah seperti kerah V untuk memperpanjang tubuh. Pamerkan kaki Anda dengan rok atau celana yang pas untuk menarik mata ke bagian tubuh terbaik Anda.",
    recommendations: [
      {
        tag: "Atasan",
        name: "Empire Waist Tunic",
        desc: "Potongan di bawah dada memberikan ruang pada bagian perut dengan nyaman.",
        img: "/assets/images/regenerated_image_1778918489436.png"
      },
      {
        tag: "Bawahan",
        name: "Straight Leg Trousers",
        desc: "Menonjolkan kaki yang ramping tanpa membuat bagian tengah terlihat berat.",
        img: "/assets/images/regenerated_image_1778918493151.png"
      },
      {
        tag: "Luaran",
        name: "Long Cardigan",
        desc: "Siluet panjang vertikal menciptakan kesan tubuh yang lebih langsing dan jenjang.",
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  rectangle: {
    name: "Persegi Panjang",
    enName: "Rectangle Shape",
    icon: <Square size={64} className="text-brand-primary mb-4" strokeWidth={1.5} />,
    description: "Bahu, pinggang, dan pinggul memiliki lebar yang hampir sama, menciptakan siluet lurus.",
    strengths: "Proporsi yang seimbang dan tampilan yang atletis.",
    focus: "Ciptakan ilusi lekukan tubuh dan garis pinggang.",
    characteristics: [
      "Lebar bahu dan pinggul hampir identik.",
      "Pinggang tidak terlalu masuk (lurus).",
      "Tampilan siluet tampak 'kotak' atau atletis."
    ],
    stylistNote: "Gunakan sabuk untuk menciptakan garis pinggang secara artifisial. Potongan pakaian dengan volume di bagian atas dan bawah secara bersamaan akan membuat pinggang Anda tampak lebih kecil. Cobalah atasan *peplum* atau rok yang bervolume.",
    recommendations: [
      {
        tag: "Atasan",
        name: "Peplum Top",
        desc: "Memberikan volume pada pinggul sehingga menciptakan ilusi pinggang kecil.",
        img: "/assets/images/regenerated_image_1778918496473.png"
      },
      {
        tag: "Bawahan",
        name: "Paperbag Pants",
        desc: "Detail kerut di pinggang dengan sabuk sangat efektif menciptakan lekukan.",
        img: "/assets/images/regenerated_image_1778918500627.png"
      },
      {
        tag: "Luaran",
        name: "Belted Trench Coat",
        desc: "Gunakan ikat pinggang untuk menegaskan struktur tubuh dan siluet yang lebih feminin.",
        img: "/assets/images/regenerated_image_1778918503801.png"
      }
    ]
  },
  inverted_triangle: {
    name: "Segitiga Terbalik",
    enName: "Inverted Triangle",
    icon: <Triangle size={64} className="text-brand-primary mb-4 rotate-180" strokeWidth={1.5} />,
    description: "Bahu lebih lebar daripada pinggul, memberikan kesan atletis dan kuat pada tubuh bagian atas.",
    strengths: "Bahu yang tegas dan biasanya memiliki kaki yang ramping.",
    focus: "Tambahkan volume pada bagian bawah untuk menyeimbangkan bahu.",
    characteristics: [
      "Bahu atau dada secara signifikan lebih lebar dari pinggul.",
      "Pinggul cenderung sempit dan lurus.",
      "Proporsi tubuh mengecil ke arah bawah."
    ],
    stylistNote: "Hindari detail berlebih pada bahu (seperti padding atau epaulet). Gunakan bawahan yang melebar seperti rok *pleated* atau celana *flared* untuk menciptakan keseimbangan dengan bahu Anda. Kerah V atau leher rendah juga membantu menyempitkan bahu secara visual.",
    recommendations: [
      {
        tag: "Atasan",
        name: "Halter Neck Top",
        desc: "Memecah garis bahu yang lebar dan menciptakan tampilan yang lebih ramping di atas.",
        img: "/assets/images/regenerated_image_1778918507070.png"
      },
      {
        tag: "Bawahan",
        name: "Wide Leg Jeans",
        desc: "Volume ekstra di bawah mengimbangi lebarnya bahu secara instan.",
        img: "/assets/images/regenerated_image_1778918511172.png"
      },
      {
        tag: "Luaran",
        name: "Unstructured Cardigan",
        desc: "Potongan yang lemas menyamarkan garis bahu yang tajam tanpa menambah volume.",
        img: "/assets/images/regenerated_image_1778918514985.png"
      }
    ]
  }
};

export default function App() {
  const [measurements, setMeasurements] = useState({
    shoulder: '',
    waist: '',
    hips: ''
  });
  const [resultShape, setResultShape] = useState<BodyShape | null>(null);
  const [isCatalogView, setIsCatalogView] = useState(false);

  const handleViewCatalog = () => {
    setIsCatalogView(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCalculate = () => {
    const s = parseFloat(measurements.shoulder);
    const w = parseFloat(measurements.waist);
    const h = parseFloat(measurements.hips);

    if (isNaN(s) || isNaN(w) || isNaN(h)) return;

    let shape: BodyShape = 'rectangle';

    // Industry standard ratio analysis
    if (s > 1.05 * h) {
      shape = 'inverted_triangle';
    } else if (h > 1.05 * s) {
      shape = 'pear';
    } else if (Math.abs(s - h) / Math.max(s, h) < 0.05) {
      if (w < 0.8 * s && w < 0.8 * h) {
        shape = 'hourglass';
      } else if (w >= 0.95 * s || w >= 0.95 * h) {
        shape = 'apple';
      } else {
        shape = 'rectangle';
      }
    } else {
      if (w >= 0.9 * s && w >= 0.9 * h) {
        shape = 'apple';
      } else {
        shape = 'rectangle';
      }
    }

    setResultShape(shape);
    // Scroll to result
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isCatalogView) {
    return (
      <div className="min-h-screen bg-brand-surface">
        <nav className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <button 
              onClick={() => setIsCatalogView(false)}
              className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-brand-primary transition-colors"
            >
              <ArrowLeft size={16} /> Kembali
            </button>
            <span className="text-xl font-serif tracking-widest font-semibold text-brand-on-surface">VELOURA</span>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-20">
          <header className="text-center mb-24">
            <span className="text-xs font-sans font-semibold tracking-[0.3em] text-brand-primary uppercase mb-6 block">the veloura catalog</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Panduan Gaya Semua Bentuk Tubuh</h1>
            <p className="max-w-2xl mx-auto text-brand-on-surface-variant leading-relaxed">
              Temukan karakter dan rekomendasi pakaian terbaik untuk setiap jenis siluet tubuh. Elegansi dimulai dari pemahaman diri.
            </p>
          </header>
          
          <div className="space-y-40">
            {(Object.entries(SHAPE_DATA) as [BodyShape, ShapeInfo][]).map(([key, data]) => (
              <section key={key} className="relative">
                <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-brand-outline-variant/30 pb-10 mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif">{data.name}</h2>
                  <span className="text-sm font-bold tracking-widest text-brand-on-surface-variant/40 uppercase font-sans">/ {data.enName}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-brand-surface-container flex items-center justify-center text-brand-primary">
                      {React.cloneElement(data.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <p className="text-lg leading-relaxed">{data.description}</p>
                    <div className="bg-white p-6 rounded-xl border border-brand-outline-variant/20">
                      <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-brand-primary">Kunci Penataan</h4>
                      <p className="text-sm text-brand-on-surface-variant leading-loose">{data.focus}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {data.recommendations.map((rec, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-4 group"
                      >
                        <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm relative">
                          <img src={rec.img} alt={rec.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                              {rec.tag}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-brand-primary transition-colors">{rec.name}</h3>
                        <p className="text-sm text-brand-on-surface-variant leading-relaxed italic">"{rec.desc}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        <footer className="py-20 bg-brand-surface-container text-center mt-40">
          <p className="text-sm font-bold tracking-widest uppercase text-brand-on-surface-variant opacity-60">
            © 2026 VELOURA ATELIER. Elevating Personal Elegance.
          </p>
        </footer>
      </div>
    );
  }

  const currentData = resultShape ? SHAPE_DATA[resultShape] : null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-6">
              <button className="p-2 -ml-2 hover:bg-brand-surface-container rounded-full transition-colors">
                <Menu size={20} className="text-brand-on-surface" />
              </button>
              <span className="text-2xl font-serif tracking-widest font-semibold text-brand-on-surface">VELOURA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              <a href="#" className="text-sm font-medium tracking-wider hover:text-brand-primary transition-colors">DISCOVER</a>
              <a href="#analyze-section" className="text-sm font-medium tracking-wider hover:text-brand-primary transition-colors">ANALYZE</a>
              <a href="#outfit-section" className="text-sm font-medium tracking-wider hover:text-brand-primary transition-colors">STYLE</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-brand-surface-container rounded-full transition-colors">
                <Search size={20} />
              </button>
              <div className="w-8 h-8 rounded-full bg-brand-surface-container border border-brand-outline-variant flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&q=80&w=1920" 
              alt="Silk Background" 
              className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-brand-surface/40 to-brand-surface"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-xs font-sans font-semibold tracking-[0.3em] text-brand-primary uppercase mb-6 block">
              Personalized Style Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-on-surface mb-8 leading-tight">
              Temukan Gaya Terbaikmu
            </h1>
            <p className="text-lg text-brand-on-surface-variant leading-relaxed mb-10 max-w-2xl mx-auto">
              Kami membantu Anda memahami proporsi tubuh unik Anda untuk menciptakan lemari pakaian yang memancarkan kepercayaan diri dan keanggunan abadi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#analyze-section"
                className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all active:scale-[0.98] inline-block"
              >
                Mulai Analisis
              </a>
              <button 
                onClick={handleViewCatalog}
                className="w-full sm:w-auto px-10 py-4 border border-brand-outline text-brand-on-surface font-medium rounded-lg hover:bg-brand-surface-container transition-all"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </motion.div>
        </section>

        {/* Measurement Tool Section */}
        <section id="analyze-section" className="py-24 bg-brand-surface-container/50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Kenali Bentuk Tubuhmu</h2>
              <p className="text-brand-on-surface-variant">Langkah pertama menuju gaya yang sempurna adalah pengukuran yang akurat.</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-outline-variant/30 flex flex-col md:flex-row">
              {/* Image side */}
              <div className="md:w-1/2 p-1 bg-brand-surface-container">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
                  <img 
                    src="/assets/images/regenerated_image_1778854561406.png" 
                    alt="Body Measurement Guide" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                  {/* Measurement overlays removed */}

                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg border border-brand-outline-variant/30">
                    <div className="flex gap-3">
                      <div className="shrink-0 text-brand-primary pt-1">
                        <Info size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-primary tracking-wider uppercase mb-1">Tips Pengukuran</p>
                        <p className="text-xs text-brand-on-surface-variant">Gunakan meteran kain dan ukur secara mendatar untuk hasil terbaik (cm).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form side */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-brand-on-surface uppercase">Lebar Bahu (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="Contoh: 38"
                        className="w-full h-14 bg-brand-surface border border-brand-outline-variant/40 rounded-lg px-4 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                        value={measurements.shoulder}
                        onChange={(e) => setMeasurements({...measurements, shoulder: e.target.value})}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-brand-on-surface-variant">CM</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-brand-on-surface uppercase">Lingkar Pinggang (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="Contoh: 70"
                        className="w-full h-14 bg-brand-surface border border-brand-outline-variant/40 rounded-lg px-4 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                        value={measurements.waist}
                        onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-brand-on-surface-variant">CM</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-brand-on-surface uppercase">Lingkar Pinggul (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="Contoh: 95"
                        className="w-full h-14 bg-brand-surface border border-brand-outline-variant/40 rounded-lg px-4 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                        value={measurements.hips}
                        onChange={(e) => setMeasurements({...measurements, hips: e.target.value})}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-brand-on-surface-variant">CM</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCalculate}
                    className="w-full py-4 bg-brand-primary text-white font-semibold rounded-lg tracking-widest uppercase hover:bg-opacity-90 transition-all active:scale-[0.98]"
                  >
                    Lihat Hasil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Result Section */}
        <AnimatePresence>
          {resultShape && currentData && (
            <motion.section 
              id="result-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-24"
            >
              <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif">Hasil Analisis Anda</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Shape Card */}
                  <div className="lg:w-5/12 bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant/30 flex flex-col items-center text-center">
                    <div className="w-48 h-64 bg-white rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-brand-surface-container-high/50">
                      <div className="flex flex-col items-center">
                        {currentData.icon}
                        <h3 className="text-2xl font-serif">{currentData.name}</h3>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-brand-on-surface-variant uppercase">{currentData.enName}</p>
                      </div>
                    </div>
                    <div className="mt-auto border-t border-brand-outline-variant/30 pt-6">
                      <p className="text-sm italic text-brand-on-surface-variant leading-relaxed">
                        "{currentData.description}"
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-7/12 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 bg-white rounded-xl border border-brand-outline-variant/30 flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-brand-surface-container flex items-center justify-center text-brand-primary">
                          <Target size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold mb-1">Kekuatan</p>
                          <p className="text-xs text-brand-on-surface-variant leading-relaxed">{currentData.strengths}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-white rounded-xl border border-brand-outline-variant/30 flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-brand-surface-container flex items-center justify-center text-brand-primary">
                          <Lightbulb size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold mb-1">Fokus Gaya</p>
                          <p className="text-xs text-brand-on-surface-variant leading-relaxed">{currentData.focus}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-brand-outline-variant/30 p-8">
                      <h4 className="text-xs font-bold tracking-[0.2em] text-brand-on-surface-variant uppercase mb-6 border-b border-brand-outline-variant/30 pb-4">Karakteristik Kunci</h4>
                      <ul className="space-y-4">
                        {currentData.characteristics.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-brand-on-surface">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Outfit Recommendations */}
        <section id="outfit-section" className="py-24 bg-brand-surface-container/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Rekomendasi Outfit</h2>
                <p className="text-brand-on-surface-variant">Pilihan kurasi untuk menonjolkan bentuk tubuh {currentData ? currentData.name : 'Anda'}.</p>
              </div>
              <button 
                onClick={handleViewCatalog}
                className="hidden sm:flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-brand-on-surface border-b border-brand-on-surface pb-1 group"
              >
                Lihat Semua Katalog
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(currentData || SHAPE_DATA.hourglass).recommendations.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative shadow-lg shadow-brand-on-surface/5">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute bottom-6 left-6 px-4 py-1 bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{item.name}</h3>
                  <p className="text-sm text-brand-on-surface-variant leading-relaxed font-italic italic">"{item.desc}"</p>
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={handleViewCatalog}
              className="flex sm:hidden items-center justify-center gap-2 text-sm font-bold tracking-wider uppercase text-brand-on-surface border border-brand-outline-variant mt-10 py-4 rounded-lg w-full"
            >
              Lihat Semua Katalog
            </button>
          </div>
        </section>

        {/* Stylist Note */}
        <section className="pb-32 pt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-brand-surface-container/60 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-brand-outline-variant/20 italic">
              <div className="shrink-0 w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-xl shadow-brand-primary/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase not-italic">Catatan Stylist</p>
                <div 
                  className="text-brand-on-surface leading-loose text-lg" 
                  dangerouslySetInnerHTML={{ 
                    __html: (currentData || SHAPE_DATA.hourglass).stylistNote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-brand-surface-container border-t border-brand-outline-variant/30 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-brand-on-surface-variant opacity-60">
          © 2026 VELOURA ATELIER. Elevating Personal Elegance.
        </p>
      </footer>
    </div>
  );
}
