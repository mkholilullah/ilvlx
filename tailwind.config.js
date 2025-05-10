module.exports = {
    darkMode: 'class', // Mengaktifkan mode gelap berbasis kelas
    content: ['./views/**/*.html', './views/**/*.{html,js}'], // Gabungkan direktori sesuai struktur proyek
    theme: {
      extend: {
        fontSize: {
          'xxs': '10rem', // Ukuran font custom
          'xxl': '15rem',  // Contoh ukuran besar
          'huge': '25rem',    // Ukuran ekstra besar
          'mobile': '8rem',
          'slogan': '5rem'
        },
        fontFamily: {
          'playwrite': ['Playwrite AU SA', 'sans-serif'], // Menambahkan Playwrite AU SA
          'caveat': ['Caveat', 'serif'], // Menambahkan Playwrite AU SA
        },
      }, // Tambahkan konfigurasi tambahan di sini jika diperlukan
    },
    plugins: [], // Tambahkan plugin Tailwind CSS jika dibutuhkan
  };

//   npx tailwindcss -i ./public/css/input.css -o ./public/css/styles.css --watch
// npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

  
// module.exports = {
//     content: ['./views/**/*.html'],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
    
// };

// module.exports = {
//     darkMode: 'class', // Mengaktifkan mode gelap berbasis kelas
//     content: ['./src/**/*.{html,js}'], // Sesuaikan dengan struktur proyek Anda
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };


