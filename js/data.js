/**
 * Carkhol Tenis Class - Data Configuration
 * File data ini memuat seluruh informasi website (Paket, Jadwal, Pelatih, FAQ, Galeri, Artikel, Aturan)
 * untuk mempermudah update/maintenance tanpa mengubah file HTML utama.
 */

const TENNIS_DATA = {
  academy: {
    name: "Carkhol Tenis Class",
    tagline: "Wujudkan Permainan Terbaikmu Bersama Pelatih Badash",
    subtagline: "Program pelatihan tenis terstruktur dari level Pemula (Beginner) hingga Mahir (Advanced). Didampingi pelatih berlisensi nasional & internasional dengan fasilitas standar kompetisi.",
    phone: "6288989748299",
    phoneDisplay: "+62 889-8974-8299",
    email: "rizaldymaulidanfirdaus@gmail.com",
    instagram: "@carkholclass.tennis",
    address: "Jl. Halim Perdana Kusuma No.1, Area Sawah/Kebun, Bilaporah, Kec. Socah, Kabupaten Bangkalan, Jawa Timur 69116",
    mapsUrl: "https://maps.app.goo.gl/7e6M4g6CWLcCTeWE6?g_st=ic",
    operatingHours: "Sabtu & Minggu: 18.00 - 21.00 WIB",
    promoText: "🔥 DISKON EARLY BIRD 20% UNTUK PENDAFTARAN BULAN INI!",
    stats: {
      students: "1.200+",
      experience: "12+",
      satisfaction: "99%",
      courts: "4",
      coaches: "6"
    }
  },

  coach: {
    name: "Rizaldy Maulidan Firdaus",
    title: "Head Coach & Founder Carkhol Tenis Class",
    image: "assets/images/zaldy.png?v=2",
    certification: "Badash & Pourkelapb Sadish",
    experience: "12+ Tahun Pengalaman Kepelatihan",
    bio: "Coach Zaldy memadukan pengalaman bertanding di tingkat nasional dengan pendekatan ilmiah modern berbasis bio-mekanika gerakan tenis dan ketahanan mental bertanding.",
    achievements: [
      "Medalis CHRISTOPHER RUNGKAT TENNIS GIRGUIT (TDP) 2018",
      "Porprov 2019",
      "Medalis Se-Madura 2017-2018",
      "Medalis Tunggal & Ganda Se-Kabupaten Bangkalan 2016"
    ],
    philosophy: "Tenis bukan sekadar memukul bola, tapi harmoni antara fokus mental, efisiensi footwork, ketajaman taktik, dan disiplin tinggi."
  },

  coaches: [
    {
      name: "Coach Zaldy, S.Or, CPT",
      title: "Head Coach & Founder",
      image: "assets/images/zaldy.png",
      certification: "ITF Level 2 Certified",
      shortBio: "12+ tahun pengalaman, mantan atlet nasional"
    },
    {
      name: "Coach Rina, CPT",
      title: "Senior Coach - Junior Program",
      image: "assets/images/zaldy.png",
      certification: "ITF Level 1 Certified",
      shortBio: "Spesialis program usia dini yang sabar & menyenangkan"
    },
    {
      name: "Coach Andi",
      title: "Performance Coach - Adult Competitive",
      image: "assets/images/zaldy.png",
      certification: "Former National Player & ITF Level 1",
      shortBio: "Mantan pemain nasional, spesialis match strategy"
    }
  ],

  packages: [
    {
      id: "pkg-privat",
      name: "Paket Privat",
      badge: "Paling Intensif",
      isPopular: false,
      level: "Semua Level (Pemula - Mahir)",
      duration: "120 Menit / Sesi",
      sessions: "1x Pertemuan",
      price: 200000,
      priceFormatted: "Rp 200.000",
      period: "Sesi",
      features: [
        "Pendampingan eksklusif 1 pelatih 1 peserta",
        "Fasilitas penggunaan raket, bola latihan & BallBoys",
        "Gratis sewa lapangan per sesi",
        "Evaluasi Setiap Sesi Latihan"
      ]
    },
    {
      id: "pkg-group",
      name: "Re-Club",
      badge: "Seru & Komunitas",
      isPopular: false,
      level: "Pemula & Menengah",
      duration: "120 Menit / Sesi",
      sessions: "1x Pertemuan",
      price: 50000,
      priceFormatted: "Rp 50.000",
      period: "Sesi",
      features: [
        "Kelas grup interaktif & penuh energi",
        "Latihan drill stroke, rally, dan game ganda",
        "Relasi sosial baru sesama pecinta tenis",
        "Termasuk bola & raket pinjaman (jika belum ada)",
        "Gratis sewa lapangan",
      ]
    }
  ],

  schedules: [
    { id: "sch-1", day: "Sabtu", time: "18.00 - 21.00 WIB", status: "Tersedia" },
    { id: "sch-2", day: "Minggu", time: "18.00 - 21.00 WIB", status: "Tersedia" }
  ],

  gallery: [
    { id: 1, type: "image", category: "action", title: "Dokumentasi Latihan 1", src: "assets/images/Dokumentasi 1.png" },
    { id: 2, type: "image", category: "coach", title: "Dokumentasi Latihan 2", src: "assets/images/Dokumentasi 2.png" },
    { id: 3, type: "image", category: "court", title: "Dokumentasi Latihan 3", src: "assets/images/Dokumentasi 3.png" },
    { id: 4, type: "image", category: "group", title: "Dokumentasi Latihan 4", src: "assets/images/Dokumentasi 4.png" },
    { id: 5, type: "image", category: "action", title: "Dokumentasi Latihan 5", src: "assets/images/Dokumentasi 5.png" },
    { id: 6, type: "image", category: "group", title: "Dokumentasi Latihan 6", src: "assets/images/Dokumentasi 6.png" }
  ],

  rules: [
    {
      title: "Ketentuan Pembayaran & Registrasi",
      content: "Pembayaran biaya kelas dilakukan secara penuh di awal sebelum sesi pertama dimulai. Konfirmasi pendaftaran berlaku setelah bukti transfer diterima admin. Metode pembayaran mendukung Transfer Bank BCA, QRIS, Cash."
    },
    {
      title: "Kebijakan Reschedule & Pembatalan Sesi",
      content: "Untuk kelas Privat & Re-Club, perubahan jadwal (reschedule) wajib diinfokan maksimal 24 jam sebelum sesi dimulai. Pembatalan mendadak kurang dari 24 jam dianggap sesi hangus (kecuali kendala cuaca buruk)."
    },
    {
      title: "Tata Tertib Kehadiran & Keterlambatan",
      content: "Peserta diharapkan hadir 10-15 menit sebelum waktu latihan untuk pemanasan mandiri. Waktu keterlambatan peserta tidak menambah durasi sesi latihan demi menjaga ketepatan jadwal peserta berikutnya."
    },
    {
      title: "Perlengkapan yang Wajib Dibawa",
      content: "Peserta wajib memakai sepatu tenis (court shoes khusus tenis), pakaian olahraga yang menyerap keringat, dan membawa handuk pribadi serta botol minum. Raket latihan disediakan gratis untuk peserta yang tidak memiliki raket. Untuk peserta berkelanjutan, disarankan memiliki raket sendiri sesuai rekomendasi coach."
    },
    {
      title: "Kebijakan Cuaca Buruk (Force Majeure)",
      content: "Jika terjadi hujan deras/lapangan tergenang saat sesi outdoor berlangsung kurang dari 30 menit, sesi akan di-reschedule penuh tanpa biaya tambahan. Jika sesi sudah berjalan >45 menit, sesi dianggap selesai. Indoor court tetap beroperasi selama hujan."
    },
    {
      title: "Kebijakan Privasi & Foto Kegiatan",
      content: "Carkhol Tenis Class kadang-kadang mendokumentasikan kegiatan latihan untuk keperluan marketing dan media sosial. Foto/video peserta akan ditampilkan tanpa nama lengkap."
    }
  ],

  faqs: [
    {
      q: "Saya benar-benar pemula yang belum pernah pegang raket. Apakah bisa bergabung?",
      a: "Sangat bisa! Lebih dari 60% murid Carkhol Tenis Class memulai dari nol. Kami menyediakan paket Privat & Semi-Privat khusus pemula dengan teknik dasar yang bertahap dan tidak intimidatif."
    },
    {
      q: "Apakah saya harus membawa raket sendiri saat latihan pertama?",
      a: "Tidak wajib. Kami menyediakan raket pinjaman gratis untuk peserta pemula pada 2 sesi pertama. Coach juga akan memberikan rekomendasi raket yang sesuai dengan postur dan gaya main Anda."
    },
    {
      q: "Bagaimana jika saya berhalangan hadir pada jadwal yang sudah ditentukan?",
      a: "Anda bisa mengajukan reschedule jadwal ke admin WhatsApp minimal 24 jam sebelum latihan. Kami akan carikan slot pengganti di hari lain sesuai ketersediaan pelatih & lapangan."
    },
    {
      q: "Di mana lokasi lapangan tempat latihan diadakan?",
      a: "Latihan berpusat di Jl. Halim Perdana Kusuma No.1, Area Sawah/Kebun, Bilaporah, Kec. Socah, Kabupaten Bangkalan, Jawa Timur 69116."
    },
    {
      q: "Apakah ada opsi pembayaran cicilan atau bayar per sesi?",
      a: "Untuk paket regular bulanan dibayarkan per 4 sesi. Namun tersedia juga opsi 'Trial Single Session' (Rp 400.000/sesi privat) jika Anda ingin mencoba 1 kali sesi terlebih dahulu."
    },
    {
      q: "Apakah ada batas umur untuk mendaftar?",
      a: "Tidak ada batas umur maksimal! Kami memiliki program khusus Kids (6-15 tahun), Dewasa, dan Senior (50+ tahun). Pendekatan pelatihan disesuaikan dengan kondisi fisik dan tujuan masing-masing peserta."
    },
    {
      q: "Berapa lama progress yang saya rasakan setelah mulai latihan rutin?",
      a: "Peningkatan umum terasa dalam 4-8 sesi pertama, tergantung frekuensi dan intensitas. Coach akan memberikan evaluasi bulanan dengan video untuk menunjukkan perkembangan teknik Anda."
    },
    {
      q: "Bisa kah saya memilih pelatih tertentu untuk privat?",
      a: "Bisa. Setiap paket privat tersedia untuk Coach Zaldy, Coach Rina, atau Coach Andi dengan tarif yang sama. Silakan sebutkan preferensi Anda saat pendaftaran."
    },
    {
      q: "Apakah tersedia paket latihan online jika saya tidak bisa ke lapangan?",
      a: "Saat ini kami fokus pada latihan tatap muka (offline) untuk hasil optimal. Namun, sesi konsultasi teknik via video call dan analisis rekaman latihan Anda tersedia sebagai tambahan."
    }
  ],

  testimonials: [
    {
      name: "Budi Santoso",
      role: "Pekerja Swasta (Level Pemula)",
      text: "Sangat puas berlatih di Carkhol Tenis Class! Coach Zaldy sabar banget mengoreksi stroke saya. Dari yang tadinya bolanya suka out terus, sekarang sudah bisa rally 20x lancar!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Siska Wijaya",
      role: "Ibu Rumah Tangga (Level Menengah)",
      text: "Program Semi-Privat bareng suami seru banget. Lapangannya bersih, pelatih tepat waktu dan penjelasannya ilmiah gampang dipahami. Recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Kevin Pratama",
      role: "Mahasiswa (Level Junior)",
      text: "Drill latihan grupnya menantang dan bikin stamina makin oke. Teman-teman latihannya asyik dan pelatih selalu berikan feed-back pasca sesi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Dina Rahayu",
      role: "Ibu dari Putri (Program Junior)",
      text: "Anak saya dari tadinya pengen main karena lihat di TV, sekarang jadi punya rutinitas olahraga yang sehat. Coach Rina luar biasa sabar dan anak saya selalu excited mau ke lapangan!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "PT. Nusantara Digital",
      role: "Corporate Outing Client",
      text: "Kami booking Corporate Team Building di Carkhol Tenis Class untuk outing kantor dan hasilnya超过预期! Tim HR dan karyawan semua happy. Turnamen internalnya bikin bonding lebih erat.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    }
  ],

  articles: [
    {
      id: 1,
      title: "5 Kesalahan Fatal Pemula Saat Belajar Servis Tenis & Cara Mengatasinya",
      date: "05 Agustus 2026",
      readTime: "4 min baca",
      summary: "Servis adalah satu-satunya pukulan yang sepenuhnya ada dalam kendalimu. Hindari Continental grip yang salah dan lontaran bola (toss) yang tidak konsisten.",
      image: "assets/images/hero.png"
    },
    {
      id: 2,
      title: "Panduan Memilih Sepatu Tenis yang Tepat Agar Bebas Cedera Pergelangan Kaki",
      date: "01 Agustus 2026",
      readTime: "5 min baca",
      summary: "Jangan gunakan sepatu lari (running shoes) di lapangan tenis! Pelajari pentingnya lateral support dan sol khusus hardcourt vs claycourt.",
      image: "assets/images/court.png"
    },
    {
      id: 3,
      title: "Tips Membangun Ketahanan Mental Saat Mengahadapi Game Point Ketat",
      date: "24 Juli 2026",
      readTime: "6 min baca",
      summary: "Ketenangan di poin-poin krusial membedakan pemain biasa dengan pemenang. Simak 3 teknik pernapasan dan fokus visual antara poin.",
      image: "assets/images/zaldy.png"
    },
    {
      id: 4,
      title: "Pentingnya Footwork: 10 Drill yang Bisa Dilakukan di Rumah Tanpa Court",
      date: "18 Juli 2026",
      readTime: "5 min baca",
      summary: "Kaki adalah fondasi setiap pukulan tenis. Tingkatkan kelincahan dan reaksi dengan latihan lompat tali, cone drill, dan ladder drill.",
      image: "assets/images/dokumentasi.png"
    },
    {
      id: 5,
      title: "Cara Memilih Raket Tenis Anak yang Tepat Berdasarkan Usia & Tingkat",
      date: "10 Juli 2026",
      readTime: "4 min baca",
      summary: "Raket yang terlalu berat bisa menyebabkan cedera pergelangan tangan. Pelajari standar panjang dan berat raket untuk usia 5, 8, 11, dan 14 tahun.",
      image: "assets/images/group.png"
    },
    {
      id: 6,
      title: "Nutrisi Sebelum dan Sesudah Latihan Tenis untuk Performa Optimal",
      date: "02 Juli 2026",
      readTime: "7 min baca",
      summary: "Karbohidrat kompleks 2 jam sebelum latihan dan protein 30 menit setelahnya adalah kunci recovery. Simak rekomendasi menu pra dan pasca latihan.",
      image: "assets/images/hero.png"
    }
  ]
};

if (typeof window !== "undefined") {
  window.TENNIS_DATA = TENNIS_DATA;
}
