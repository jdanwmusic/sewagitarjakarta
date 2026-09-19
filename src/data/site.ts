// =====================================================================
// KONFIGURASI UMUM SITUS — SEWA GITAR JAKARTA
// =====================================================================
// Edit file ini untuk mengubah info kontak, alamat, atau paket harga.
// =====================================================================

import { waLink } from "./guitars";

export const siteConfig = {
  name: "SEWA GITAR JAKARTA",
  domain: "sewagitarjakarta.jdanwmusic.workers.dev",
  url: "https://sewagitarjakarta.jdanwmusic.workers.dev",
  phoneDisplay: "0877-4851-4337",
  email: "jdanwmusic@gmail.com",
  address: {
    line1: "Jl. Semanan Pintu Air No. 37,",
    line2: "Duri Kosambi,",
    line3: "Cengkareng,",
    line4: "Jakarta Barat",
    full: "Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Semanan+Pintu+Air+No.+37+Duri+Kosambi+Cengkareng+Jakarta+Barat",
  serviceArea: "Jakarta & Tangerang",
};

export const waGeneral = waLink("Halo SEWA GITAR JAKARTA, saya ingin menyewa gitar.");
export const waArea = waLink(
  "Halo SEWA GITAR JAKARTA, saya tanya layanan area Jakarta Tangerang."
);
export const waFinal = waLink(
  "Halo SEWA GITAR JAKARTA, saya butuh gitar untuk disewa."
);

export interface PricingPlan {
  id: string;
  label: string;
  duration: string;
  price: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  waUrl: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "harian",
    label: "HARIAN",
    duration: "24 JAM",
    price: "Rp 100.000",
    features: [
      "Berlaku untuk semua jenis gitar",
      "Durasi sewa 24 jam penuh",
      "Siap pakai & terawat",
    ],
    ctaLabel: "Pilih Paket 24 JAM",
    waUrl: waLink(
      "Halo SEWA GITAR JAKARTA, saya ingin sewa paket 24 Jam (Rp100.000)."
    ),
  },
  {
    id: "mingguan",
    label: "MINGGUAN",
    duration: "1 MINGGU",
    price: "Rp 300.000",
    badge: "LEBIH HEMAT",
    features: [
      "Berlaku untuk semua jenis gitar",
      "Lebih hemat untuk latihan/projek",
      "Perpanjangan mudah via WhatsApp",
    ],
    ctaLabel: "Pilih Paket 1 MINGGU",
    waUrl: waLink(
      "Halo SEWA GITAR JAKARTA, saya ingin sewa paket 1 Minggu (Rp300.000)."
    ),
  },
  {
    id: "bulanan",
    label: "BULANAN",
    duration: "1 BULAN",
    price: "Rp 1.000.000",
    badge: "PALING HEMAT",
    features: [
      "Berlaku untuk semua jenis gitar",
      "Solusi terbaik jangka panjang",
      "Nilai ekonomis maksimal",
    ],
    ctaLabel: "Pilih Paket 1 BULAN",
    waUrl: waLink(
      "Halo SEWA GITAR JAKARTA, saya ingin sewa paket 1 Bulan (Rp1.000.000)."
    ),
  },
];

export interface HowToStep {
  number: string;
  title: string;
  description: string;
}

export const howToSteps: HowToStep[] = [
  {
    number: "01",
    title: "Pilih Instrumen",
    description:
      "Lihat katalog dan pilih gitar elektrik, akustik, atau bass yang sesuai.",
  },
  {
    number: "02",
    title: "Hubungi via WhatsApp",
    description:
      "Tanyakan ketersediaan dan informasikan durasi sewa yang dibutuhkan.",
  },
  {
    number: "03",
    title: "Bayar Deposit",
    description: "DP 50% via transfer bank atau e-wallet untuk konfirmasi.",
  },
  {
    number: "04",
    title: "Terima atau Ambil",
    description:
      "Gitar dikirim atau diambil langsung di lokasi usaha Duri Kosambi.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Berapa harga sewa gitar?",
    answer:
      "Harga sewa gitar mulai dari Rp 100.000 untuk paket 24 jam. Tersedia juga paket mingguan Rp 300.000 dan bulanan Rp 1.000.000.",
  },
  {
    question: "Apakah semua gitar Rp100.000 per 24 jam?",
    answer:
      "Ya, tarif Rp 100.000 per 24 jam berlaku flat untuk semua jenis gitar — elektrik, akustik, maupun bass.",
  },
  {
    question: "Apakah ada deposit?",
    answer:
      "Ya, setiap penyewaan memerlukan pembayaran DP (deposit) sebesar 50% untuk konfirmasi pemesanan.",
  },
  {
    question: "Berapa deposit yang harus dibayar?",
    answer:
      "Deposit yang perlu dibayarkan adalah 50% dari total biaya sewa, dibayarkan via transfer bank atau e-wallet.",
  },
  {
    question: "Apakah bisa dikirim?",
    answer:
      "Bisa. Kami melayani pengantaran untuk area Jabodetabek. Silakan tanyakan detail pengantaran ke area Anda via WhatsApp.",
  },
  {
    question: "Area mana saja yang dilayani?",
    answer:
      "Kami melayani area Jakarta dan Tangerang, dengan cakupan pengantaran Jabodetabek.",
  },
  {
    question: "Apakah bisa mengambil langsung?",
    answer:
      "Bisa. Anda dapat mengambil langsung gitar yang disewa di workshop kami di Duri Kosambi, Cengkareng, Jakarta Barat.",
  },
  {
    question: "Di mana lokasi workshop?",
    answer:
      "Workshop kami berlokasi di Jl. Semanan Pintu Air No. 37, Duri Kosambi, Cengkareng, Jakarta Barat.",
  },
  {
    question: "Apakah bisa sewa mingguan?",
    answer:
      "Bisa. Tersedia paket sewa 1 minggu dengan harga Rp 300.000, berlaku untuk semua jenis gitar.",
  },
  {
    question: "Apakah bisa sewa bulanan?",
    answer:
      "Bisa. Tersedia paket sewa 1 bulan dengan harga Rp 1.000.000, cocok untuk kebutuhan jangka panjang.",
  },
  {
    question: "Bagaimana cara mengecek ketersediaan gitar?",
    answer:
      "Cara paling cepat adalah menghubungi kami via WhatsApp dan menyebutkan gitar yang ingin disewa beserta tanggal penggunaannya.",
  },
  {
    question: "Apakah bisa memperpanjang masa sewa?",
    answer:
      "Bisa. Perpanjangan masa sewa dapat dilakukan dengan mudah melalui konfirmasi via WhatsApp sebelum masa sewa berakhir.",
  },
];
