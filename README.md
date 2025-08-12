# 🚀 Tugas React Part 4 – Dragon Ball App
## 📝 Deskripsi Proyek
Aplikasi ini dibuat menggunakan React + TypeScript dengan beberapa fitur modern seperti fetch API, pencarian dengan optimisasi, dark mode dengan context, dan global state management menggunakan Zustand.
Data karakter diambil dari [Dragon Ball API](https://dragonball-api.com/api/characters).

---
### ✨ Fitur Utama
1. Fetch Data Karakter Dragon Ball
Menggunakan useEffect untuk mengambil data dari API.

- Menampilkan nama dan gambar setiap karakter.

- Styling menggunakan TailwindCSS + komponen dari Shadcn UI.
URL API: https://dragonball-api.com/api/characters.

2. Pencarian dengan Optimisasi useMemo
Input search untuk memfilter karakter berdasarkan nama.
Menggunakan useMemo agar pencarian lebih efisien dan tidak re-render berlebihan.
</br>

3. Dark Mode dengan useContext + Shadcn
Menggunakan ThemeContext untuk menyimpan state tema (light / dark).

- Tombol toggle untuk mengganti tema.

- Mengaplikasikan tema pada background & teks menggunakan TailwindCSS (dark: class).

4. Global State Management dengan Zustand
State counter dibuat menggunakan Zustand.

- Counter bisa increment, decrement, dan reset.

- State global membuat counter dapat diakses dari berbagai komponen.

### 📂 Struktur Folder
``` bash
src/
├── components/
│   ├── CharacterCard.tsx       # Komponen untuk menampilkan karakter
│   ├── SearchBar.tsx           # Komponen input pencarian
│   └── CounterZustand.tsx      # Counter global dengan Zustand
├── context/
│   └── ThemeContext.tsx        # Context untuk Dark/Light mode
├── store/
│   └── counterStore.ts         # Store Zustand
└── App.tsx                     # Entry utama aplikasi
```
---
### 🛠️ Teknologi yang Digunakan
- React + TypeScript

- TailwindCSS

- Shadcn UI

- Zustand

- TanStack Query (opsional jika ingin pengelolaan data lebih baik)

- Bun sebagai build tool

---
### 🚀 Cara Menjalankan Project
1. Clone Repository
```bash
bun install
```
2.Jalankan Project
```bash
bun dev
```

---
### 📸 Screenshot
##### Halaman Utama – Light Mode
![Light Mode](/docs/images/light-mode.png)

##### Halaman Utama – Dark Mode
![Dark Mode](/docs/images/dark-mode.png)

##### Fitur Pencarian
![Search Fitur](/docs/images/search-fitur.png)


