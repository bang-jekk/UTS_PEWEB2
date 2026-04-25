# 📌 UTS Pemrograman Web 2 - Task Manager API

## 📸 Hasil Testing (Postman)


![](./Screenshot(769).png)

![](./Screenshot(770).png)

![](./Screenshot(771).png)

![](./Screenshot(772).png)

![](./Screenshot(773).png)

![](./Screenshot(774).png)

![](./Screenshot(775).png)

![](./Screenshot(776).png)

---

## 👤 Identitas Mahasiswa
- **Nama**: Zainuddin Muhammad Zakiy  
- **NIM**: 23552011173  
- **Program Studi**: Teknik Informatika  

---

## 🏫 Institusi
PROGRAM STUDI TEKNIK INFORMATIKA  
FAKULTAS INDUSTRI KREATIF  
UNIVERSITAS TEKNOLOGI BANDUNG  
2026  

---

# 📖 Deskripsi Project
Project ini merupakan tugas UTS mata kuliah **Pemrograman Web 2**, dimana mahasiswa diminta untuk membangun sistem backend untuk aplikasi **Task Manager**.

Sistem ini mampu:
- Menyimpan data ke database PostgreSQL
- Melakukan validasi input
- Menangani error
- Mencatat aktivitas request (logging)

---

# 🗄️ Database (PostgreSQL)

Struktur tabel `tasks`:

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ⚙️ Teknologi yang Digunakan
- Node.js
- Express.js
- PostgreSQL
- Package `pg`
- Nodemon

---

# 🚀 Fitur Utama

## ✅ Middleware Logging
Mencatat:
- Method HTTP
- URL
- Waktu request

---

## ✅ Validasi Input (400)
- Field `title` tidak boleh kosong atau hanya spasi

---

## ✅ Error Handling (404)
- Jika data tidak ditemukan

---

## ✅ CRUD API
- Create
- Read
- Update
- Delete

---

# 🌐 Endpoint API

| Method | Endpoint        | Deskripsi                  |
|--------|---------------|---------------------------|
| GET    | /tasks        | Ambil semua data          |
| GET    | /tasks/:id    | Ambil data berdasarkan ID |
| POST   | /tasks        | Tambah data               |
| PUT    | /tasks/:id    | Update data               |
| DELETE | /tasks/:id    | Hapus data                |

---

# ▶️ Cara Menjalankan Project

1. Install dependencies:
```bash
npm install
```

2. Jalankan server:
```bash
npm start
```

3. Server berjalan di:
```
http://localhost:3000
```

---

# 📌 Catatan
- Pastikan PostgreSQL sudah aktif
- Database `task_manager` sudah dibuat
- Konfigurasi koneksi database sudah sesuai

---

# 🎯 Kesimpulan
Project ini berhasil mengimplementasikan:
- Backend API menggunakan Express
- Koneksi database PostgreSQL
- Validasi dan error handling
- Logging request
- CRUD API lengkap

---

# 🔥 Author
Zainuddin Muhammad Zakiy
