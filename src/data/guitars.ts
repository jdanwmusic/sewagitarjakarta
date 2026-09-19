// =====================================================================
// DATA GITAR — SEWA GITAR JAKARTA
// =====================================================================
// Ini adalah SATU-SATUNYA file yang perlu Anda edit untuk:
//  - Menambah gitar baru
//  - Mengubah harga
//  - Mengubah deskripsi
//  - Mengubah foto
//  - Mengubah status tersedia / tidak tersedia
//  - Menambah kategori
//
// Setelah mengedit file ini, seluruh halaman (homepage, katalog, detail
// produk, dan structured data SEO) akan otomatis ikut ter-update.
//
// CARA MENAMBAH GITAR BARU:
// 1. Siapkan foto gitar, taruh di folder /public/images/guitars/
// 2. Salin (copy) salah satu blok objek gitar di bawah ini
// 3. Ganti nilainya sesuai gitar baru Anda
// 4. Pastikan "slug" unik (tidak sama dengan gitar lain) — slug ini
//    yang menjadi alamat URL halaman detail, contoh: /gitar/nama-slug
// 5. Buat file halaman baru di src/pages/gitar/nama-slug.astro
//    (silakan salin dari file gitar lain yang sudah ada, isinya sangat
//    pendek karena semua data diambil dari file ini)
// =====================================================================

export type GuitarCategory = "Elektrik" | "Akustik" | "Bass";

export interface Guitar {
  /** Digunakan di URL: /gitar/{slug} — harus unik, huruf kecil, pakai tanda "-" */
  slug: string;
  /** Nama yang ditampilkan di seluruh halaman */
  name: string;
  /** Kategori: "Elektrik" | "Akustik" | "Bass" */
  category: GuitarCategory;
  /** Deskripsi singkat, tampil di card & halaman detail */
  description: string;
  /** Catatan tambahan opsional, tampil di halaman detail (mis. status ketersediaan khusus) */
  note?: string;
  /** Harga sewa 24 jam, dalam format tampilan Rupiah */
  price: string;
  /** Nama file foto di /public/images/guitars/ */
  image: string;
  /** true = tersedia untuk disewa, false = sedang tidak tersedia */
  available: boolean;
  /** Cocok untuk apa saja — tampil sebagai daftar di halaman detail */
  suitableFor: string[];
}

export const WHATSAPP_NUMBER = "6287748514337";

/** Membuat link WhatsApp dengan pesan otomatis */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Link WhatsApp khusus untuk menanyakan ketersediaan sebuah gitar */
export function waLinkForGuitar(guitar: Guitar): string {
  return waLink(
    `Halo SEWA GITAR JAKARTA, saya ingin menyewa ${guitar.name}. Apakah unit tersedia?`
  );
}

export const guitars: Guitar[] = [
  {
    slug: "parker-pm10",
    name: "Parker PM10",
    category: "Elektrik",
    description:
      "Gitar elektrik Parker PM10 siap disewa untuk kebutuhan rekaman, latihan, atau panggung.",
    price: "Rp 100.000",
    image: "parker-pm10.jpg",
    available: true,
    suitableFor: ["Rekaman", "Latihan", "Panggung"],
  },
  {
    slug: "gitar-elektrik",
    name: "Gitar Elektrik",
    category: "Elektrik",
    description:
      "Siap menemani sesi rekaman, panggung, maupun latihan band Anda dengan performa pickup maksimal.",
    price: "Rp 100.000",
    image: "gitar-elektrik.jpg",
    available: true,
    suitableFor: ["Rekaman", "Panggung", "Latihan Band"],
  },
  {
    slug: "gitar-akustik",
    name: "Gitar Akustik",
    category: "Akustik",
    description:
      "Suara jernih dan resonansi natural, ideal untuk kafe, akustikan santai, atau latihan di rumah.",
    price: "Rp 100.000",
    image: "gitar-akustik.jpg",
    available: true,
    suitableFor: ["Kafe / Akustikan", "Latihan di Rumah", "Content Creator"],
  },
  {
    slug: "odlair-vega-od411",
    name: "Odlair Vega OD411",
    category: "Akustik",
    description:
      "Gitar akustik elektrik Odlair Vega OD411 — siap disewa untuk rekaman, latihan, atau panggung.",
    note: "Status ketersediaan: tanyakan.",
    price: "Rp 100.000",
    image: "odlair-vega-od411.jpg",
    available: true,
    suitableFor: ["Rekaman", "Latihan", "Panggung"],
  },
  {
    slug: "mudis-acoustic",
    name: "Gitar Akustik Mudis",
    category: "Akustik",
    description:
      "Gitar akustik Mudis siap disewa. Menurut informasi owner, dilengkapi EQ untuk rekaman dan panggung.",
    price: "Rp 100.000",
    image: "mudis-acoustic.jpg",
    available: true,
    suitableFor: ["Rekaman", "Panggung", "Latihan"],
  },
  {
    slug: "gitar-bass",
    name: "Gitar Bass",
    category: "Bass",
    description:
      "Low-end bertenaga dan solid untuk melengkapi rhythm section band atau kebutuhan recording Anda.",
    price: "Rp 100.000",
    image: "gitar-bass.jpg",
    available: true,
    suitableFor: ["Rhythm Section Band", "Recording", "Latihan"],
  },
];

export const categories: GuitarCategory[] = ["Elektrik", "Akustik", "Bass"];

export function getGuitarBySlug(slug: string): Guitar | undefined {
  return guitars.find((g) => g.slug === slug);
}
