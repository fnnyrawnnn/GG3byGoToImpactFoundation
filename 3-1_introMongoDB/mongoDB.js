db.songs.insertMany([
     {
          title: "Tetap Dalam Jiwa",
          artist: "Isyana Sarasvati",
          album: "Explore!"
     },
     {
          title: "Menunggu Kamu",
          artist: "Anji",
          album: "Single"
     },
     {
          title: "Separuh Nafas",
          artist: "Dewa 19",
          album: "Pandawa Lima"
     },
     {
          title: "Mata Ke Hati",
          artist: "Hivi!",
          album: "Say Hi! To Hivi!"
     },
     {
          title: "Kasih Tak Sampai",
          artist: "Padi",
          album: "Save My Soul"
     },
     {
          title: "Aku Lelakimu",
          artist: "Virzha",
          album: "Satu"
     },
     {
          title: "Biarlah",
          artist: "Killing Me Inside",
          album: "One Reason"
     },
     {
          title: "Jatuh Cinta Lagi",
          artist: "Mulanya Disini",
          album: "Single"
     },
     {
          title: "Sampai Jumpa",
          artist: "Endank Soekamti",
          album: "Kolaborasoe"
     },
     {
          title: "Jika",
          artist: "Melly Goeslaw feat. Ari Lasso",
          album: "OST. Ada Apa Dengan Cinta?"
     }
]);

db.artists.insertMany([
     {
          name: "Isyana Sarasvati",
          birthDate: "2 May 1993",
          genre: "Pop"
     },
     {
          name: "Anji",
          birthDate: "24 March 1979",
          genre: "Pop"
     },
     {
          name: "Ari Lasso",
          birthDate: "17 January 1973",
          genre: "Pop/Rock"
     },
     {
          name: "Raisa",
          birthDate: "6 June 1990",
          genre: "Pop/R&B"
     },
     {
          name: "Glenn Fredly",
          birthDate: "30 September 1975",
          genre: "Pop/R&B/Soul"
     },
     {
          name: "Andmesh Kamaleng",
          birthDate: "12 August 1996",
          genre: "Pop"
     },
     {
          name: "Judika",
          birthDate: "31 August 1978",
          genre: "Pop/Rock"
     },
     {
          name: "Tulus",
          birthDate: "20 August 1987",
          genre: "Pop"
     },
     {
          name: "Agnes Monica",
          birthDate: "1 July 1986",
          genre: "Pop/R&B/Dance"
     },
     {
          name: "Bunga Citra Lestari",
          birthDate: "22 March 1983",
          genre: "Pop"
     }
]);

db.popular_songs.insertMany([
     {
          title: "Takkan Ada Cinta Yang Lain",
          playCount: 5000,
          period: "2021-2022"
     },
     {
          title: "Bertaut",
          playCount: 4800,
          period: "2020-2021"
     },
     {
          title: "Menunggu Kamu",
          playCount: 5500,
          period: "2019-2020"
     },
     {
          title: "Ruang Rindu",
          playCount: 6000,
          period: "2018-2019"
     },
     {
          title: "Separuh Nafas",
          playCount: 4500,
          period: "2017-2018"
     },
     {
          title: "Kangen",
          playCount: 5200,
          period: "2016-2017"
     },
     {
          title: "Mungkin Nanti",
          playCount: 5800,
          period: "2015-2016"
     },
     {
          title: "Jatuh Cinta Tak Ada Logika",
          playCount: 4900,
          period: "2014-2015"
     },
     {
          title: "Mungkin",
          playCount: 5100,
          period: "2013-2014"
     },
     {
          title: "Hampa",
          playCount: 5300,
          period: "2012-2013"
     }
]);