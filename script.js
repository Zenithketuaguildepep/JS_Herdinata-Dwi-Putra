// STRING
let nama = "Herdinata Dwi Putra";
console.log("Nama (String):", nama);  // Menampilkan nilai string di console
alert("Nama: " + nama);               // Menampilkan nilai string dengan alert

// NUMBER
let usia = 21;
console.log("Usia (Number):", usia);  // Menampilkan nilai number di console
alert("Usia: " + usia);               // Menampilkan nilai number dengan alert

// BOOLEAN
let adalahSiswa = true;
console.log("Apakah Siswa (Boolean):", adalahSiswa); // Menampilkan nilai boolean di console
alert("Apakah Siswa: " + adalahSiswa);               // Menampilkan nilai boolean dengan alert

// ARRAY
let hobi = ["Membaca", "Pemrograman", "Bermain Game"];
console.log("Hobi (Array):", hobi);       // Menampilkan array di console
alert("Hobi: " + hobi.join(", "));        // Menampilkan array dalam bentuk string di alert

// OBJECT
let siswa = {
    nama: "Herdinata Dwi Putra",
    usia: 21,
    adalahSiswa: true,
    hobi: ["Membaca", "Pemrograman", "Bermain Game"]
};
console.log("Siswa (Object):", siswa);    // Menampilkan object di console
alert("Siswa: Nama - " + siswa.nama + ", Usia - " + siswa.usia);