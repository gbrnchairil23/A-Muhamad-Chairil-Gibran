export default function getAllProducts() {
    return [
      {
        id: 'AYAM-ICIKIWIR-FOOD-001',
        slug: 'ayam-geprek-icikiwir-lv1--lv7',
        name: "Ayam Geprek Icikiwir Lv 1 - Lv 7",
        category: 'Food',
        price: 15_490,
        stock: 100,
        imageUrl: '/assets/images/ayamgeprek.png',
        description: `Ayam yang dibaluri dengan tepung dan digoreng dengan sangat sempurna tak lupa sambal yang dapat dipilih tingkat kepedasannya.`
      },
      {
        id: 'TEH-DEPOK-BVRG-002',
        slug: 'es-teh-kobok-khas-depok',
        name: "Es Teh Kobok Khas Depok",
        category: 'Beverage',
        price: 5949,
        stock: 26,
        imageUrl: `/assets/images/esteh.png`,
        description: `Seduhan teh bercampur dengan manisnya gula dan dinginnya es, menghasilkan minuman yang sangat menyegarkan.`
      },
      {
        id: 'NASI-GORENG-FOOD-003',
        slug: 'nasi-goreng-ikan-sambelle',
        name: "Nasi Giselle (Nasi Goreng Ikan Sambelle)",
        category: 'Food',
        price: 19_490,
        stock: 0,
        imageUrl: `/assets/images/nasgor.png`,
        description: `Ini bukan giselle aespa yaa melainkan nasi goreng yang diberi potongan ikan tuna dan dibubuhkan dengan sambel diatasnya.`
      },
      {
        id: 'KARI-AYAM-FOOD-004',
        slug: 'karina-ayam-nangka',
        name: "Karina (Kari Ayam Nangka)",
        category: 'Food',
        price: 18_490,
        stock: 100,
        imageUrl: `/assets/images/kari.png`,
        description: `Kuah santan yang medok dan gurih bercampur dengan daging ayam dan nangka muda yang lembut membuat baputar di mulut, bagoyang di lidah.`
      },
      {
        id: 'ES-TELER-BVRG-005',
        slug: 'es-teler',
        name: "Es Teler",
        category: 'Beverage',
        price: 20_490,
        stock: 10,
        imageUrl: `/assets/images/esteler.png`,
        description: `Campuran buah nangka, kelapa, dan alpukat berpadu dengan susu uht, kental manis dan es yang membuat kesegaran tiada tara.`
      },
    ]
  }