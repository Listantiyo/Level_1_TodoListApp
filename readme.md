# Todo List App

## Deskripsi
Aplikasi Todo List ini adalah API sederhana yang memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) untuk manajemen daftar tugas (todo). Aplikasi ini dibangun menggunakan Node.js dan beberapa library populer.

## Git Repository
[Level 1 TodoListApp](https://github.com/Listantiyo/Level_1_TodoListApp.git)

## Teknologi
- **Node.js**
- **Express**
- **UUIDv4**
- **Mongoose**
- **Body-parser**

## Struktur Folder dan File
todo-app/ <br/>
├── config/ <br/>
│ └── connectDB.js <br/> 
├── controllers/ <br/>
│ └── todoController.js <br/> 
├── routes/ <br/>
│ └── todoRoutes.js <br/> 
├── models/ <br/>
│ └── todoModel.js <br/> 
├── utils/ <br/>
│ └── validator.js <br/> 
├── app.js <br/>
└── package.json


## Skema Model Todo
```json
{
  "uuid": "string",
  "title": "string",
  "category": "string",
  "detail": "string"
}
```

## Fungsi
- Add Todo: Menambahkan tugas baru ke dalam daftar.
- Get Todos: Mengambil semua tugas atau tugas berdasarkan `_id`.
- Edit Todo: Mengedit tugas yang ada dalam daftar.
- Remove/Delete Todo: Menghapus tugas dari daftar.

## Instalasi

1. Clone repositori ini:
    ```bash
    git clone https://github.com/Listantiyo/Level_1_TodoListApp.git
2. Navigasi ke direktori proyek:
    ```bash
    cd Level_1_TodoListApp
3. Install dependensi:
    ```bash
    npm install
4. Jalankan aplikasi:
    ```bash
    npm start

## Pengujian Kasus
- **Tambah Data Baru**: Pastikan data baru yang ditambahkan tersimpan dengan benar di database.
- **Hapus Data yang Tidak Ada**: Pastikan program tetap aman dan tidak mengalami crash ketika mencoba menghapus data yang tidak ada.

## Standar Kode
- Gunakan ES6+ (arrow function, const/let).
- Format file dan variabel konsisten menggunakan camelCase.

## Lisensi
Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](https://mit-license.org/) untuk detail lebih lanjut.


### Penjelasan Struktur README.md

- **Judul dan Deskripsi**: Menyediakan informasi dasar tentang aplikasi.
- **Git Repository**: Menyediakan tautan ke repositori GitHub.
- **Teknologi**: Menyebutkan teknologi dan library yang digunakan.
- **Struktur Folder dan File**: Menyediakan gambaran tentang struktur proyek.
- **Skema Model Todo**: Menjelaskan struktur data untuk model Todo.
- **Fungsi**: Menyebutkan fungsi utama dari aplikasi.
- **Instalasi**: Menjelaskan langkah-langkah untuk mengkloning dan menjalankan aplikasi.
- **Pengujian Kasus**: Menyediakan informasi tentang pengujian yang perlu dilakukan.
- **Standar Kode**: Menyebutkan standar kode yang harus diikuti.
- **Lisensi**: Menyebutkan lisensi proyek.
