export const data = {
    bride: {
        L: {
            id: 2,
            name: 'Donny Rahardika S.Kom',
            child: 'Putra ke Dua',
            father: 'Rustam (alm)',
            mother: 'Sudarti',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 1,
            name: 'Kurnia Lita Hanari S.Kom',
            child: 'Putri ke Dua',
            father: 'Uri',
            mother: 'Siti Hanna',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'November',
            date: '30',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: '10.00'
            }
        },
        reception: {
            year: '2025',
            month: 'November',
            date: '30',
            day: 'Kamis',
            hours: {
                start: '11.00',
                finish: '16.00'
            }
        },
        address: 'Ruang AULA Sekolah Menengah Atas Al-HUDA, Cengakreng Barat, Kota Jakarta Barat.'
    },

    link: {
        calendar: 'https://calendar.app.google/7LiLjB7M1FXPkrMC7',
        map: 'https://maps.app.goo.gl/onGVbDjntyA3uhun6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Donny Rahardika',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Kurnia Lita Hanari',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzTcfk7XpdEO96bhEnL4uNSPu_CwewjKqIGdhWkmS3Gm45RGGldR7ZIaw77DMYZmRq-/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
