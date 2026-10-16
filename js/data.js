/**
 * PT Garuda Mitra Equipment - Centralized Data Store
 * Single Source of Truth for Catalog, Services, Projects, and Testimonials
 */

const COMPANY_INFO = {
  name: "PT Garuda Mitra Equipment",
  brand: "Garuda Mitra Equipment",
  tagline: "Reliable Equipment. Stronger Projects.",
  established: 2018,
  location: "Semarang, Jawa Tengah, Indonesia",
  address: "Jl. Industri Raya No. 88, Kawasan Industri Terpadu, Semarang, Jawa Tengah 50100, Indonesia",
  phone: "+62 851-6817-4679",
  whatsapp: "+62 851-6817-4679",
  whatsappRaw: "6285168174679",
  defaultWaMessage: "kak aku udah  liat porto web nya aku mau order web disini dong",
  email: "info@garudamitraequi.co.id",
  hours: {
    weekday: "Senin – Jumat, 08.00 – 17.00 WIB",
    saturday: "Sabtu, 08.00 – 13.00 WIB",
    emergency: "24/7 Dukungan Operasional Darurat"
  },
  serviceAreas: [
    "Jawa Tengah",
    "Jawa Barat",
    "Jawa Timur",
    "D.I. Yogyakarta"
  ]
};

const EQUIPMENT_CATALOG = [
  {
    id: "excavator-pc200",
    name: "Excavator PC200",
    category: "Excavator",
    capacity: "20 Ton",
    dailyPrice: 3500000,
    monthlyPrice: 65000000,
    dailyPriceFormatted: "Rp3.500.000",
    monthlyPriceFormatted: "Rp65.000.000",
    isBestSeller: true,
    image: "assets/images/excavator-pc200.jpg",
    description: "Excavator kelas 20 ton yang cocok untuk pekerjaan konstruksi, penggalian tanah, pembangunan jalan, drainase, dan pemindahan material.",
    specifications: {
      operatingWeight: "20.500 kg (20 Ton)",
      bucketCapacity: "0.93 - 1.0 m³",
      enginePower: "110 kW / 148 HP @ 2000 rpm",
      maxDiggingDepth: "6.620 mm",
      maxReach: "9.875 mm",
      fuelTank: "400 Liter",
      condition: "Unit prima, servis berkala ATPM"
    },
    features: [
      "Kapasitas kerja optimal untuk berbagai skala proyek",
      "Sistem hidrolik responsif dan hemat konsumsi BBM",
      "Kabin operator ber-AC dengan perlindungan ROPS/FOPS",
      "Pilihan sewa unit saja atau lengkap dengan operator bersertifikasi",
      "Dukungan teknisi standby di area proyek"
    ],
    applications: ["Konstruksi Gedung", "Galian Tanah & Drainase", "Proyek Jalan Tol", "Pemindahan Material"]
  },
  {
    id: "bulldozer-d65",
    name: "Bulldozer D65",
    category: "Bulldozer",
    capacity: "16 – 20 Ton",
    dailyPrice: 4200000,
    monthlyPrice: 78000000,
    dailyPriceFormatted: "Rp4.200.000",
    monthlyPriceFormatted: "Rp78.000.000",
    isBestSeller: false,
    image: "assets/images/bulldozer-d65.jpg",
    description: "Bulldozer untuk pekerjaan perataan tanah, pembukaan lahan, pemindahan material, dan pekerjaan infrastruktur.",
    specifications: {
      operatingWeight: "19.500 kg (19.5 Ton)",
      bladeCapacity: "3.89 - 5.61 m³ (Semi-U Blade)",
      enginePower: "153 kW / 205 HP @ 1950 rpm",
      groundPressure: "54.0 kPa",
      fuelTank: "415 Liter",
      ripper: "Multi-shank ripper opsional",
      condition: "Unit terawat dan siap kerja berat"
    },
    features: [
      "Tenaga dorong kuat untuk pembukaan lahan (land clearing)",
      "Transmisi hidrostatis mulus dengan manuver presisi",
      "Blade baja tahan aus untuk material berbatu dan tanah keras",
      "Tersedia operator spesialis pematangan lahan",
      "Inspeksi harian sebelum serah terima unit"
    ],
    applications: ["Land Clearing", "Pematangan Lahan", "Perataan Tanah", "Proyek Infrastruktur"]
  },
  {
    id: "wheelloader-wa200",
    name: "Wheel Loader WA200",
    category: "Wheel Loader",
    capacity: "Sekitar 2 m³ (Bucket)",
    dailyPrice: 3800000,
    monthlyPrice: 70000000,
    dailyPriceFormatted: "Rp3.800.000",
    monthlyPriceFormatted: "Rp70.000.000",
    isBestSeller: false,
    image: "assets/images/wheelloader-wa200.jpg",
    description: "Wheel loader untuk pemindahan material seperti pasir, tanah, batu, dan material konstruksi lainnya.",
    specifications: {
      operatingWeight: "10.200 kg",
      bucketCapacity: "Sekitar 2.0 m³",
      enginePower: "94 kW / 126 HP @ 2000 rpm",
      dumpClearance: "2.840 mm",
      fuelTank: "175 Liter",
      speed: "Maksimal 38.5 km/h",
      condition: "Ban dan hidrolik prima"
    },
    features: [
      "Siklus pemuatan cepat (cycle time efisien)",
      "Radius putar kompak memudahkan manuver di batching plant",
      "Sistem penggerak 4-roda stabil di berbagai medan",
      "Visibilitas kabin 360 derajat untuk keselamatan maksimal",
      "Perawatan rutin fluida dan filter"
    ],
    applications: ["Batching Plant", "Quarry & Tambang Pasir", "Stokpile Material", "Loading Dump Truck"]
  },
  {
    id: "dumptruck-10roda",
    name: "Dump Truck 10 Roda",
    category: "Dump Truck",
    capacity: "Sekitar 20 Ton",
    dailyPrice: 2800000,
    monthlyPrice: 52000000,
    dailyPriceFormatted: "Rp2.800.000",
    monthlyPriceFormatted: "Rp52.000.000",
    isBestSeller: false,
    image: "assets/images/dumptruck-10roda.jpg",
    description: "Dump truck untuk mendukung pengangkutan tanah, pasir, batu, dan material proyek.",
    specifications: {
      configuration: "6x4 (10 Roda)",
      grossVehicleWeight: "30.000 kg",
      payloadCapacity: "Sekitar 20 Ton / 24 m³",
      enginePower: "280 - 320 HP Turbo Intercooler",
      dumpMechanism: "Hydraulic multi-stage telescopic hoist",
      fuelTank: "300 Liter",
      condition: "Kondisi ban tebal dan hidrolik prima"
    },
    features: [
      "Bak material berdaya tahan tinggi (hardox-grade)",
      "Kaki-kaki dan suspensi kokoh untuk rute tanah dan aspal",
      "Tersedia armada tunggal maupun konvoi proyek",
      "Sopir berpengalaman rute tambang dan jalan raya",
      "Surat-surat KIR dan izin operasional lengkap"
    ],
    applications: ["Pengangkutan Tanah Galian", "Distribusi Pasir & Agregat", "Proyek Jalan & Tol", "Disposal Material"]
  },
  {
    id: "forklift-3ton",
    name: "Forklift 3 Ton",
    category: "Forklift",
    capacity: "3 Ton (Kapasitas Angkat)",
    dailyPrice: 1500000,
    monthlyPrice: 28000000,
    dailyPriceFormatted: "Rp1.500.000",
    monthlyPriceFormatted: "Rp28.000.000",
    isBestSeller: false,
    image: "assets/images/forklift-3ton.jpg",
    description: "Forklift untuk mendukung pemindahan dan penataan material di gudang, pabrik, dan area industri.",
    specifications: {
      liftingCapacity: "3.000 kg (3 Ton)",
      liftingHeight: "3.000 - 4.500 mm (Mast 2/3 stage)",
      enginePower: "Diesel / Electric Eco-friendly",
      forkLength: "1.220 mm (Adjustable side-shift)",
      turningRadius: "2.400 mm",
      condition: "Unit mulus siap kerja indoor maupun outdoor"
    },
    features: [
      "Dilengkapi side-shifter untuk akurasi penempatan palet",
      "Manuver lincah di lorong gudang sempit",
      "Lampu keselamatan LED dan buzzer mundur otomatis",
      "Pilihan sistem diesel bertenaga atau baterai listrik bebas emisi",
      "Operator bersertifikat SIO Kemenaker jika diperlukan"
    ],
    applications: ["Logistik Pergudangan", "Pabrik & Manufaktur", "Bongkar Muat Kontainer", "Depot Material Industri"]
  }
];

const COMPANY_STATS = [
  { value: 8, suffix: "+", label: "Tahun Pengalaman", desc: "Berpengalaman sejak 2018 melayani berbagai sektor" },
  { value: 50, suffix: "+", label: "Unit Alat Berat", desc: "Armada lengkap dan terawat siap mobilisasi" },
  { value: 120, suffix: "+", label: "Proyek Didukung", desc: "Proyek konstruksi, jalan, dan industri selesai lancar" },
  { value: 85, suffix: "+", label: "Klien Korporasi", desc: "Dipercaya kontraktor BUMN hingga swasta nasional" },
  { value: 15, suffix: "+", label: "Kota Terjangkau", desc: "Cakupan di Jateng, Jabar, Jatim, dan D.I. Yogyakarta" },
  { value: 98, suffix: "%", label: "Kepuasan Pelanggan", desc: "Komitmen tinggi terhadap keandalan & uptime unit" }
];

const SERVICES_LIST = [
  {
    id: "rental",
    title: "Heavy Equipment Rental",
    desc: "Penyewaan alat berat untuk kebutuhan proyek jangka pendek maupun jangka panjang.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
  },
  {
    id: "operator",
    title: "Equipment with Operator",
    desc: "Pilihan penyewaan unit beserta operator berpengalaman dan memiliki sertifikasi keselamatan.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
  },
  {
    id: "long-term",
    title: "Long-Term Rental",
    desc: "Solusi penyewaan untuk proyek dengan durasi beberapa bulan hingga tahunan.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
  },
  {
    id: "delivery",
    title: "Equipment Delivery",
    desc: "Layanan pengiriman alat berat ke lokasi proyek sesuai kesepakatan.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>`
  },
  {
    id: "maintenance",
    title: "Maintenance Support",
    desc: "Pemeriksaan dan perawatan unit secara berkala.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
  },
  {
    id: "consultation",
    title: "Project Consultation",
    desc: "Konsultasi untuk menentukan jenis alat berat sesuai kebutuhan pekerjaan.",
    icon: `<svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`
  }
];

const INDUSTRIES_LIST = [
  {
    id: "construction",
    title: "Construction",
    desc: "Pembangunan gedung dan fasilitas konstruksi.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
  },
  {
    id: "mining",
    title: "Mining",
    desc: "Dukungan pemindahan material dan pekerjaan pertambangan.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" /></svg>`
  },
  {
    id: "plantation",
    title: "Plantation",
    desc: "Pembukaan lahan dan persiapan area perkebunan.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>`
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    desc: "Pembangunan dan pemeliharaan jalan serta fasilitas umum.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>`
  },
  {
    id: "industrial",
    title: "Industrial",
    desc: "Dukungan operasional kawasan industri dan pemindahan material.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`
  },
  {
    id: "land-dev",
    title: "Land Development",
    desc: "Persiapan dan pengembangan lahan untuk pembangunan.",
    icon: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>`
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Unit Terawat",
    desc: "Pemeriksaan dan perawatan unit dilakukan secara berkala."
  },
  {
    title: "Operator Berpengalaman",
    desc: "Dukungan operator yang memahami kebutuhan operasional proyek."
  },
  {
    title: "Harga Transparan",
    desc: "Informasi harga dan ketentuan sewa disampaikan secara jelas."
  },
  {
    title: "Respons Cepat",
    desc: "Tim siap membantu konsultasi kebutuhan alat berat."
  },
  {
    title: "Armada Beragam",
    desc: "Berbagai jenis unit untuk kebutuhan proyek yang berbeda."
  },
  {
    title: "Dukungan Proyek",
    desc: "Bantuan dalam menentukan alat berat yang sesuai dengan pekerjaan."
  }
];

const COMPANY_TIMELINE = [
  {
    year: "2018",
    title: "Awal Perjalanan",
    desc: "Memulai bisnis dengan satu unit excavator."
  },
  {
    year: "2020",
    title: "Pengembangan Armada",
    desc: "Menambah berbagai jenis alat berat untuk memenuhi kebutuhan proyek."
  },
  {
    year: "2022",
    title: "Perluasan Layanan",
    desc: "Mulai melayani proyek di luar Jawa Tengah."
  },
  {
    year: "2024",
    title: "100+ Proyek",
    desc: "Mencapai lebih dari 100 proyek yang telah didukung."
  },
  {
    year: "2026",
    title: "Terus Bertumbuh",
    desc: "Mengembangkan armada dan layanan untuk menjadi mitra alat berat pilihan."
  }
];

const PROJECTS_PORTFOLIO = [
  {
    id: "tol-jateng",
    name: "Pembangunan Jalan Tol Jawa Tengah",
    location: "Semarang, Jawa Tengah",
    year: "2025",
    unit: "Excavator PC200 dan Dump Truck",
    duration: "8 Bulan",
    category: "Infrastruktur",
    image: "assets/images/project-tollroad.jpg",
  },
  {
    id: "kawasan-industri-kendal",
    name: "Pengembangan Kawasan Industri",
    location: "Kendal, Jawa Tengah",
    year: "2025",
    unit: "Bulldozer D65 dan Wheel Loader",
    duration: "5 Bulan",
    category: "Industri",
    image: "assets/images/project-industrial.jpg",
  },
  {
    id: "land-clearing-banyumas",
    name: "Land Clearing Perkebunan",
    location: "Banyumas, Jawa Tengah",
    year: "2024",
    unit: "Excavator PC200 dan Bulldozer D65",
    duration: "3 Bulan",
    category: "Perkebunan",
    image: "assets/images/project-landclearing.jpg",
  },
  {
    id: "pergudangan-semarang",
    name: "Pembangunan Area Pergudangan",
    location: "Semarang, Jawa Tengah",
    year: "2024",
    unit: "Excavator, Wheel Loader, dan Dump Truck",
    duration: "6 Bulan",
    category: "Konstruksi",
    image: "assets/images/project-warehouse.jpg",
    desc: "Dukungan penuh penimbunan dan pemadatan tanah area pergudangan logistik."
  }
];

const TESTIMONIALS = [
  {
    name: "Andi Pratama",
    title: "Project Manager — PT Karya Infrastruktur",
    image: "assets/images/client-andi.jpg",
    quote: "Unit yang dikirim sesuai dengan kebutuhan proyek dan kondisi alat sangat baik. Tim Garuda Mitra juga responsif ketika kami membutuhkan bantuan.",
    rating: 5
  },
  {
    name: "Rina Maharani",
    title: "Procurement — PT Nusantara Properti",
    image: "assets/images/client-rina.jpg",
    quote: "Proses penyewaan cukup mudah dan komunikasinya jelas. Sangat membantu untuk kebutuhan proyek dengan waktu yang cukup padat.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    title: "Site Manager — PT Bina Konstruksi",
    quote: "Kami sudah beberapa kali menggunakan unit mereka. Pelayanannya konsisten dan unit selalu mendapatkan maintenance.",
    image: "assets/images/client-budi.jpg",
    rating: 5
  }
];

const FAQ_LIST = [
  {
    q: "Apakah alat berat bisa disewa harian?",
    a: "Ya, beberapa unit tersedia untuk penyewaan harian dengan minimum durasi sesuai ketentuan."
  },
  {
    q: "Apakah tersedia operator?",
    a: "Ya, tersedia pilihan penyewaan unit beserta operator sesuai kebutuhan proyek."
  },
  {
    q: "Apakah melayani proyek di luar kota?",
    a: "Ya, layanan tersedia di sejumlah wilayah di Pulau Jawa. Pengiriman ke lokasi lainnya dapat dikonsultasikan terlebih dahulu."
  },
  {
    q: "Apakah bisa menyewa dalam jangka panjang?",
    a: "Ya, tersedia pilihan penyewaan mingguan, bulanan, hingga kontrak proyek."
  },
  {
    q: "Apakah harga sudah termasuk pengiriman?",
    a: "Biaya pengiriman bergantung pada lokasi proyek, jenis unit, dan kesepakatan penyewaan."
  },
  {
    q: "Bagaimana cara melakukan pemesanan?",
    a: "Hubungi tim Garuda Mitra Equipment melalui WhatsApp atau formulir konsultasi di website."
  }
];
