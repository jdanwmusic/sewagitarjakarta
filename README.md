# SEWA GITAR JAKARTA — Website Rental Gitar

Website resmi SEWA GITAR JAKARTA dibangun dengan **Astro** (static site, JS minimal),
untuk penyewaan gitar elektrik, akustik, dan bass area Jakarta & Tangerang.

## Menjalankan Project

```bash
npm install
npm run dev        # jalankan di localhost:4321 untuk development
npm run build      # build ke folder dist/ untuk production
npm run preview    # preview hasil build production secara lokal
```

## Struktur Penting

```
src/
├── data/
│   ├── guitars.ts   ← EDIT DI SINI untuk tambah/ubah gitar, harga, foto, status
│   └── site.ts      ← info kontak, paket harga, langkah cara sewa, FAQ
├── components/      ← semua blok UI (Header, Hero, ProductCard, dst.)
├── layouts/
│   └── Layout.astro ← SEO meta, schema.org, head tag
├── pages/            ← setiap file = 1 halaman/URL
│   └── gitar/         ← 1 file .astro per gitar (sangat pendek, ambil data dari guitars.ts)
public/
└── images/guitars/   ← taruh foto asli gitar di sini (nama file harus sama persis
                         dengan kolom "image" di guitars.ts)
```

## Cara Menambah Gitar Baru

1. Taruh foto gitar di `/public/images/guitars/nama-file.jpg`
   (disarankan rasio 1:1, background bersih, foto utuh tidak terpotong)
2. Buka `src/data/guitars.ts`, salin salah satu blok objek gitar, ganti isinya.
   Pastikan `slug` unik — inilah yang menjadi alamat URL `/gitar/slug-anda`.
3. Salin salah satu file di `src/pages/gitar/` (misalnya `gitar-bass.astro`),
   simpan dengan nama `slug-anda.astro`, lalu ganti baris
   `getGuitarBySlug("gitar-bass")` menjadi `getGuitarBySlug("slug-anda")`
   dan sesuaikan judul/deskripsi SEO singkatnya.
4. Selesai — gitar baru otomatis muncul di homepage & katalog karena keduanya
   membaca langsung dari `guitars.ts`.

## Mengganti Foto Placeholder

Foto yang ada sekarang adalah ilustrasi sementara (bertuliskan "FOTO PRATINJAU").
Cukup timpa file dengan nama yang sama di `/public/images/guitars/` dengan foto
asli — tidak perlu mengubah kode apa pun.

## Mengubah Nomor WhatsApp / Kontak / Alamat

Semua ada di satu tempat: `src/data/site.ts` (bagian `siteConfig`) dan
`WHATSAPP_NUMBER` di `src/data/guitars.ts`.

## Mengubah Harga Paket Sewa

Buka `src/data/site.ts`, cari `pricingPlans` — ubah `price`, `duration`, atau
`features` sesuai kebutuhan. Pesan WhatsApp otomatis di setiap paket juga ada
di objek yang sama (`waUrl`).

## Deploy ke Cloudflare Pages

1. Push project ini ke repository GitHub/GitLab.
2. Di Cloudflare Pages, buat project baru → connect ke repo tersebut.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node version: 18 atau lebih baru.

Deploy selesai — Cloudflare akan otomatis build ulang setiap kali Anda push
perubahan (termasuk saat menambah gitar baru atau mengganti foto).
