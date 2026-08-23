import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-iphone16promax',
    name: 'Apple iPhone 16 Pro Max 256GB - Desert Titanium (UAE Spec)',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    categorySlug: 'smartphones',
    price: 5099,
    originalPrice: 5399,
    discountPercent: 6,
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The pinnacle of smartphone innovation featuring the A18 Pro chip, Grade 5 Titanium finish, 48MP Fusion camera system with 5x optical zoom, and groundbreaking Camera Control button.',
    highlights: [
      'A18 Pro chip with 6-core GPU',
      '6.9-inch Super Retina XDR display with ProMotion 120Hz',
      '48MP Fusion Camera + 48MP Ultra Wide + 5x Telephoto',
      'Official Apple UAE 2-Year Warranty & FaceTime Enabled'
    ],
    specs: {
      'Display': '6.9" OLED Super Retina XDR (2868 x 1320 px)',
      'Processor': 'Apple A18 Pro Bionic (3nm)',
      'Storage': '256GB NVMe',
      'Battery': 'Up to 33 hours video playback',
      'Connectivity': '5G, Wi-Fi 7, Bluetooth 5.3, USB-C 3.0',
      'Weight': '227 grams'
    },
    tags: ['Flagship', '5G', 'Apple', 'OLED', 'Bestseller'],
    colors: [
      { name: 'Desert Titanium', hex: '#c5b59e' },
      { name: 'Natural Titanium', hex: '#9e9992' },
      { name: 'White Titanium', hex: '#ecebe7' },
      { name: 'Black Titanium', hex: '#3b3b3e' }
    ]
  },
  {
    id: 'prod-macbookpro-m3',
    name: 'Apple MacBook Pro 16" M3 Max (36GB Unified Memory / 1TB SSD)',
    brand: 'Apple',
    category: 'Laptops & Computing',
    categorySlug: 'laptops',
    price: 13999,
    originalPrice: 14999,
    discountPercent: 7,
    rating: 4.95,
    reviewsCount: 88,
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for high-end rendering, machine learning modeling, and 8K multi-stream editing with Liquid Retina XDR screen and up to 22 hours battery endurance.',
    highlights: [
      'Apple M3 Max 14-core CPU & 30-core GPU',
      'Liquid Retina XDR display with 1600 nits peak HDR',
      '36GB Unified Memory + 1TB High-speed SSD',
      'Three Thunderbolt 4 ports, HDMI 2.1, SDXC slot, MagSafe 3'
    ],
    specs: {
      'Display': '16.2-inch Liquid Retina XDR (3456 x 2234)',
      'Chip': 'Apple M3 Max (14-core CPU, 30-core GPU)',
      'Memory': '36GB Unified RAM',
      'Storage': '1TB PCIe Gen 4 SSD',
      'Keyboard': 'Backlit Magic Keyboard with Touch ID (Eng/Arabic)',
      'Warranty': '2-Year Official Apple Middle East'
    },
    tags: ['MacBook', 'M3 Max', 'Apple', 'Creator Workstation'],
    colors: [
      { name: 'Space Black', hex: '#2e2e30' },
      { name: 'Silver', hex: '#e3e4e5' }
    ]
  },
  {
    id: 'prod-sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Midnight Blue',
    brand: 'Sony',
    category: 'Audio & Hi-Fi',
    categorySlug: 'audio',
    price: 1199,
    originalPrice: 1499,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    stockCount: 42,
    isFeatured: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Industry-leading noise cancellation powered by two processors and eight microphones. Ultra-comfortable lightweight design and crystal-clear hands-free calling with AI voice pickup.',
    highlights: [
      'Integrated Processor V1 + HD Noise Cancelling Processor QN1',
      'Up to 30-hour battery life with quick 3-min charge for 3 hours playback',
      'Multipoint connection lets you pair two Bluetooth devices simultaneously',
      'LDAC codec support for Hi-Res Wireless Audio'
    ],
    specs: {
      'Driver Unit': '30mm, Carbon Fiber Composite Dome',
      'Frequency Response': '4Hz - 40,000Hz (Hi-Res Audio)',
      'Battery Life': '30 Hours (NC ON) / 40 Hours (NC OFF)',
      'Bluetooth': 'Version 5.2 with LDAC, AAC, SBC',
      'Weight': '250g'
    },
    tags: ['ANC', 'Hi-Res Audio', 'Sony', 'Wireless', 'Hot Deal'],
    colors: [
      { name: 'Midnight Blue', hex: '#1b263b' },
      { name: 'Silver Platinum', hex: '#d3d3d3' },
      { name: 'Black', hex: '#111111' }
    ]
  },
  {
    id: 'prod-ps5-pro',
    name: 'Sony PlayStation 5 Pro 2TB Console (UAE Official Edition)',
    brand: 'Sony',
    category: 'Gaming & VR',
    categorySlug: 'gaming',
    price: 3399,
    originalPrice: 3599,
    discountPercent: 6,
    rating: 4.9,
    reviewsCount: 195,
    inStock: true,
    stockCount: 14,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience next-level fidelity with PlayStation Spectral Super Resolution (PSSR), advanced Ray Tracing at 60/120fps, and massive built-in 2TB ultra-fast NVMe storage.',
    highlights: [
      'PlayStation Spectral Super Resolution (AI-driven upscaling)',
      'Advanced Ray Tracing with 67% more Compute Units',
      '2TB Custom High-Speed Internal SSD',
      'Includes DualSense Wireless Controller + Astro Bot pre-installed'
    ],
    specs: {
      'GPU': 'Upgraded RDNA Architecture (~16.7 TFLOPs)',
      'Storage': '2TB Ultra-High Speed SSD',
      'Video Output': 'Up to 8K, 4K 120Hz with VRR',
      'Audio': 'Tempest 3D AudioTech',
      'Warranty': '2-Year Official Sony Middle East Warranty'
    },
    tags: ['Console', 'PS5 Pro', '4K 120fps', 'Ray Tracing', 'Gaming'],
    colors: [
      { name: 'Classic White & Obsidian', hex: '#f0f0f0' }
    ]
  },
  {
    id: 'prod-s24ultra',
    name: 'Samsung Galaxy S24 Ultra 512GB 5G with Galaxy AI - Titanium Violet',
    brand: 'Samsung',
    category: 'Smartphones & Tablets',
    categorySlug: 'smartphones',
    price: 4499,
    originalPrice: 5099,
    discountPercent: 12,
    rating: 4.85,
    reviewsCount: 210,
    inStock: true,
    stockCount: 22,
    isFeatured: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Titanium shield frame with Corning Gorilla Armor anti-reflective glass, built-in S Pen, 200MP camera system, and integrated Galaxy AI for live call translation and Circle to Search.',
    highlights: [
      'Snapdragon 8 Gen 3 for Galaxy',
      'Dynamic AMOLED 2X flat display with 2600 nits peak brightness',
      '200MP Main + 50MP 5x Optical Periscope + S Pen embedded',
      'Galaxy AI suite: Live Translate, Note Assist & Generative Edit'
    ],
    specs: {
      'Display': '6.8" QHD+ Dynamic AMOLED 2X (1-120Hz)',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5000mAh with 45W Fast Charging',
      'Durability': 'IP68 Water & Dust Resistance'
    },
    tags: ['Galaxy AI', '200MP', 'Samsung', '5G', 'S Pen'],
    colors: [
      { name: 'Titanium Violet', hex: '#63536b' },
      { name: 'Titanium Gray', hex: '#777571' },
      { name: 'Titanium Black', hex: '#2e2d2c' },
      { name: 'Titanium Yellow', hex: '#e3dcb5' }
    ]
  },
  {
    id: 'prod-dji-mini4pro',
    name: 'DJI Mini 4 Pro Fly More Combo Plus (with DJI RC 2 Remote Screen)',
    brand: 'DJI',
    category: 'Cameras & Drones',
    categorySlug: 'cameras',
    price: 4199,
    originalPrice: 4699,
    discountPercent: 11,
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    stockCount: 11,
    isFeatured: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Under 249g ultra-compact drone with Omnidirectional Active Obstacle Sensing, 4K/60fps HDR True Vertical Shooting, and 20km FHD video transmission with DJI RC 2.',
    highlights: [
      '4K/60fps HDR & 4K/100fps Slow Motion',
      '10-bit D-Log M & HLG color profiles',
      'Up to 45 minutes flight time per Plus battery (3 batteries included)',
      'Omnidirectional Active Obstacle Avoidance for safe Dubai desert & city shoots'
    ],
    specs: {
      'Weight': '< 249 g standard / 290g with Plus battery',
      'Sensor': '1/1.3-inch CMOS, f/1.7 aperture',
      'Video Resolution': '4K HDR at 60fps / Slow-mo 4K 100fps',
      'Transmission': 'DJI O4 HD 20km',
      'In the box': 'Drone, DJI RC 2, 3 Plus Batteries, Charging Hub, Shoulder Bag'
    },
    tags: ['4K Video', 'DJI Drone', 'Fly More Combo', 'Creators'],
    colors: [
      { name: 'Aerospace Gray', hex: '#cfd2d6' }
    ]
  },
  {
    id: 'prod-lg-oled-c4',
    name: 'LG 65-inch OLED evo C4 4K Smart TV with α9 AI Processor Gen7',
    brand: 'LG OLED',
    category: 'Smart TVs & Home Cinema',
    categorySlug: 'tvs',
    price: 6899,
    originalPrice: 8499,
    discountPercent: 19,
    rating: 4.92,
    reviewsCount: 114,
    inStock: true,
    stockCount: 7,
    isFeatured: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Self-lit pixels deliver infinite contrast and 100% color volume. Features Brightness Booster, 144Hz native refresh rate for gaming, and Dolby Vision & Dolby Atmos.',
    highlights: [
      'α9 AI Processor Gen7 for 4K AI super upscaling',
      '144Hz native refresh rate with G-Sync and FreeSync Premium',
      '4 x HDMI 2.1 ports with full 48Gbps bandwidth',
      'webOS 24 with 5 years guaranteed OS updates'
    ],
    specs: {
      'Screen Size': '65 Inch (165 cm)',
      'Panel Type': 'OLED evo 4K Ultra HD (3840 x 2160)',
      'Refresh Rate': '144Hz Variable',
      'HDR Format': 'Dolby Vision / HDR10 / HLG',
      'Audio Output': '40W 2.2 Channel with Dolby Atmos',
      'Mount': 'Free Dubai Wall Mount & Installation'
    },
    tags: ['OLED', '4K 144Hz', 'LG evo', 'Home Cinema', 'Gaming TV'],
    colors: [
      { name: 'Obsidian Black', hex: '#1c1c1c' }
    ]
  },
  {
    id: 'prod-asus-rog-strix-g16',
    name: 'ASUS ROG Strix G16 Gaming Laptop (Intel Core i9-14900HX / RTX 4080 / 32GB RAM)',
    brand: 'ASUS ROG',
    category: 'Gaming & VR',
    categorySlug: 'gaming',
    price: 9499,
    originalPrice: 10499,
    discountPercent: 10,
    rating: 4.88,
    reviewsCount: 64,
    inStock: true,
    stockCount: 9,
    isFeatured: false,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Extreme esports performance with 14th Gen Intel Core i9, NVIDIA GeForce RTX 4080 (175W max TGP), ROG Nebula Display (2.5K 240Hz), and Conductonaut Extreme liquid metal cooling.',
    highlights: [
      'Intel Core i9-14900HX (24 cores, up to 5.8 GHz)',
      'NVIDIA GeForce RTX 4080 12GB GDDR6 with MUX Switch + NVIDIA Advanced Optimus',
      '16" ROG Nebula Display, QHD+ 16:10 (2560 x 1600), 240Hz, 3ms, 100% DCI-P3',
      'Tri-Fan technology and full-surround heatsink'
    ],
    specs: {
      'CPU': 'Intel Core i9-14900HX',
      'GPU': 'NVIDIA GeForce RTX 4080 Laptop GPU 12GB (175W TGP)',
      'Display': '16" 240Hz IPS Nebula (2560x1600) 500 nits',
      'Memory': '32GB DDR5 5600MHz (expandable to 64GB)',
      'Storage': '1TB PCIe 4.0 NVMe M.2 SSD',
      'OS': 'Windows 11 Home'
    },
    tags: ['RTX 4080', 'i9 14th Gen', '240Hz', 'ASUS ROG', 'High End Gaming'],
    colors: [
      { name: 'Eclipse Gray', hex: '#3d3f43' }
    ]
  },
  {
    id: 'prod-apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium - Orange Ocean Band',
    brand: 'Apple',
    category: 'Smartwatches & Wearables',
    categorySlug: 'wearables',
    price: 3199,
    originalPrice: 3399,
    discountPercent: 6,
    rating: 4.9,
    reviewsCount: 168,
    inStock: true,
    stockCount: 15,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Built for endurance athletes, outdoor adventurers, and water sports lovers. Features ultra-bright 3000-nit display, S9 SiP with Double Tap gesture, precision dual-frequency GPS, and up to 72 hours battery.',
    highlights: [
      'Aerospace-grade 49mm titanium case with raised sapphire crystal',
      'Double tap gesture for easy one-handed interactions',
      'Depth gauge and water temperature sensor to 40m',
      'Siren produces 86-decibel sound pattern audible up to 180 meters'
    ],
    specs: {
      'Case Material': 'Grade 5 Natural Titanium',
      'Display': '49mm Always-On Retina LTPO OLED (3000 nits)',
      'Chip': 'Apple S9 SiP with 4-core Neural Engine',
      'Battery': 'Up to 36 hours normal use / 72 hours Low Power Mode',
      'Water Resistance': '100m Water Resistant / EN13319 Dive Certified'
    },
    tags: ['Apple Watch', 'Ultra 2', 'Titanium', 'GPS Cellular', 'Diving'],
    colors: [
      { name: 'Titanium Natural with Orange Band', hex: '#d17838' },
      { name: 'Titanium Natural with Midnight Band', hex: '#1c2333' }
    ]
  },
  {
    id: 'prod-marshall-stanmore-3',
    name: 'Marshall Stanmore III Bluetooth Home Speaker - Vintage Black & Brass',
    brand: 'Marshall',
    category: 'Audio & Hi-Fi',
    categorySlug: 'audio',
    price: 1499,
    originalPrice: 1799,
    discountPercent: 17,
    rating: 4.85,
    reviewsCount: 89,
    inStock: true,
    stockCount: 20,
    isFeatured: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Heavyweight home audio speaker re-engineered with an even wider soundstage. Classic Marshall rock n roll design with analog brass control knobs, Bluetooth 5.2, and 3.5mm & RCA inputs.',
    highlights: [
      'Re-engineered stereo soundstage with angled tweeters',
      'Dynamic Loudness balances tonal balance at every volume level',
      'Analog bass, treble, and volume brass controls',
      'Next-generation Bluetooth 5.2 with LE Audio readiness'
    ],
    specs: {
      'Amplifiers': 'One 50W Class D for woofer + Two 15W Class D for tweeters',
      'Max Sound Pressure': '97 dB @ 1 m',
      'Frequency Range': '45–20,000 Hz',
      'Connectivity': 'Bluetooth 5.2, 3.5mm AUX, RCA Input',
      'Dimensions': '350 x 203 x 188 mm, 4.25 kg'
    },
    tags: ['Marshall', 'Bluetooth Speaker', 'Vintage Audio', 'Hi-Fi'],
    colors: [
      { name: 'Black & Brass', hex: '#222222' },
      { name: 'Cream & Brass', hex: '#e8e2d5' }
    ]
  },
  {
    id: 'prod-roborock-s8maxv',
    name: 'Roborock S8 MaxV Ultra Robot Vacuum & Mop with FlexiArm & 10,000Pa',
    brand: 'Roborock',
    category: 'Smart Home & Living',
    categorySlug: 'smarthome',
    price: 4899,
    originalPrice: 5499,
    discountPercent: 11,
    rating: 4.88,
    reviewsCount: 53,
    inStock: true,
    stockCount: 12,
    isFeatured: false,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The ultimate autonomous cleaning station with 8-in-1 RockDock Ultra (60°C hot water mop washing, auto-drying, heated air, and detergent dispenser), FlexiArm corner cleaning, and built-in "Hello Rocky" voice assistant.',
    highlights: [
      '10,000Pa Extreme HyperForce Suction',
      'FlexiArm side brush reaches into 100% of internal corners',
      'VibraRise 3.0 Sonic Mopping at 4000 scrubs/min',
      'Reactive AI 2.0 Obstacle Recognition with built-in camera'
    ],
    specs: {
      'Suction Power': '10,000 Pa',
      'Dock Functions': 'Hot Water Washing (60°C), Auto Dust Empty, Heated Air Dry, Auto Refill',
      'Battery': '5200mAh (Cleans up to 300 sqm on single charge)',
      'Navigation': 'PreciSense LiDAR + RGB Camera with AI',
      'Voice Assistant': 'Built-in "Hello Rocky" + Alexa/Google/Siri shortcuts'
    },
    tags: ['Smart Home', 'Robot Vacuum', 'Roborock', 'AI Automation'],
    colors: [
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Arctic White', hex: '#fafafa' }
    ]
  },
  {
    id: 'prod-sony-a7iv',
    name: 'Sony Alpha 7 IV Full-Frame Mirrorless Camera Body (33MP / 4K 60p 10-bit)',
    brand: 'Sony',
    category: 'Cameras & Drones',
    categorySlug: 'cameras',
    price: 8499,
    originalPrice: 9299,
    discountPercent: 9,
    rating: 4.93,
    reviewsCount: 97,
    inStock: true,
    stockCount: 6,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The all-around hybrid benchmark with 33MP Exmor R sensor, BIONZ XR processing engine, Real-time Eye AF for Humans/Animals/Birds in photo & video, and S-Cinetone color profile.',
    highlights: [
      '33MP Full-Frame Exmor R Back-Illuminated CMOS sensor',
      '4K 60p 10-bit 4:2:2 recording with full pixel readout',
      '759-point phase-detection AF covering 94% of image area',
      'Side-opening vari-angle 3.0-type touch LCD screen'
    ],
    specs: {
      'Sensor': '35.9 x 23.9 mm Full-Frame Exmor R CMOS (33.0 Megapixels)',
      'ISO Range': '100–51,200 (Expandable to 50–204,800)',
      'Image Stabilization': '5-axis in-body optical stabilization (5.5 stops)',
      'Storage Slots': 'Dual Slot (Slot 1: CFexpress Type A / SD, Slot 2: SD UHS-II)',
      'Warranty': '2-Year Official Sony Middle East Warranty'
    },
    tags: ['Full Frame', 'Sony Alpha', '4K 60p', 'Cinema Hybrid', 'Photography'],
    colors: [
      { name: 'Magnesium Alloy Black', hex: '#202022' }
    ]
  },
  {
    id: 'prod-ipad-pro-m4',
    name: 'Apple iPad Pro 13" M4 Ultra Retina XDR Tandem OLED 256GB (Space Black)',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    categorySlug: 'smartphones',
    price: 5499,
    originalPrice: 5799,
    discountPercent: 5,
    rating: 4.94,
    reviewsCount: 128,
    inStock: true,
    stockCount: 16,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Impossibly thin 5.1mm design with groundbreaking Ultra Retina Tandem OLED display and next-generation M4 chip delivering extreme AI and graphics power.',
    highlights: [
      'Apple M4 chip with 9-core CPU and 10-core GPU',
      '13" Ultra Retina XDR Tandem OLED with 1000 nits full-screen brightness',
      'Supports Apple Pencil Pro and redesigned Magic Keyboard',
      'Landscape 12MP Ultra Wide front camera with Center Stage'
    ],
    specs: {
      'Display': '13-inch Ultra Retina XDR Tandem OLED (2752 x 2064)',
      'Processor': 'Apple M4 Chip (Next-Gen 3nm)',
      'Storage': '256GB NVMe',
      'Thickness': '5.1 mm (Thinnest Apple device ever)',
      'Audio': 'Four speaker sound system and studio-quality mics'
    },
    tags: ['iPad Pro', 'M4 OLED', 'Tablet', 'Apple', 'Pro Design'],
    colors: [
      { name: 'Space Black', hex: '#28282b' },
      { name: 'Silver', hex: '#e8e8e8' }
    ]
  },
  {
    id: 'prod-anker-prime-powerbank',
    name: 'Anker Prime 27,650mAh Power Bank (250W Output with Smart App Control)',
    brand: 'Anker',
    category: 'Accessories & Power',
    categorySlug: 'accessories',
    price: 649,
    originalPrice: 749,
    discountPercent: 13,
    rating: 4.88,
    reviewsCount: 154,
    inStock: true,
    stockCount: 35,
    isFeatured: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1609592424302-3c224b42323c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609592424302-3c224b42323c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Massive 27,650mAh capacity with 250W ultra-fast total output across 2 USB-C and 1 USB-A ports. Features real-time smart digital LCD display and Anker App Bluetooth optimization.',
    highlights: [
      '250W total multi-device output, charges MacBook Pro 16" to 50% in 28 mins',
      '27,650mAh airline-safe capacity for multiple full laptop & phone charges',
      'Smart Digital Display shows wattage, battery health, and charge times',
      'ActiveShield 2.0 temperature monitoring with 3,000,000 daily checks'
    ],
    specs: {
      'Capacity': '27,650mAh (99.54Wh TSA Airline Approved)',
      'Max Output': '250W Total (Single port up to 140W PD 3.1)',
      'Ports': '2 x USB-C (140W each) + 1 x USB-A (65W)',
      'Recharge Time': 'Full recharge in 37 mins with 170W dual-input',
      'Warranty': '24-Month Anker UAE Official Warranty'
    },
    tags: ['Power Bank', 'Anker Prime', '250W Fast Charge', 'Fast PD 3.1'],
    colors: [
      { name: 'Space Gray & Glass', hex: '#373d47' }
    ]
  }
];

export interface FeaturedProductCardItem {
  type: string; // e.g. 'Smartphone', 'Laptop', etc.
  product: Product;
  oneLineSpec: string;
  hasSaleBadge: boolean;
}

export const FEATURED_8_PRODUCTS: FeaturedProductCardItem[] = [
  {
    type: 'Smartphone',
    product: PRODUCTS.find(p => p.id === 'prod-iphone16promax') || PRODUCTS[0],
    oneLineSpec: '6.9" Super Retina XDR OLED • A18 Pro Chip • 48MP Fusion Camera',
    hasSaleBadge: false
  },
  {
    type: 'Laptop',
    product: PRODUCTS.find(p => p.id === 'prod-macbookpro-m3') || PRODUCTS[1],
    oneLineSpec: '16.2" Liquid Retina XDR • M3 Max 14-core • 36GB RAM / 1TB SSD',
    hasSaleBadge: false
  },
  {
    type: 'Wireless Headphones',
    product: PRODUCTS.find(p => p.id === 'prod-sony-wh1000xm5') || PRODUCTS[2],
    oneLineSpec: 'Industry-leading ANC • 30h Battery • Hi-Res LDAC Audio',
    hasSaleBadge: true // Red Sale Badge 1
  },
  {
    type: 'Smartwatch',
    product: PRODUCTS.find(p => p.id === 'prod-apple-watch-ultra-2') || PRODUCTS[7],
    oneLineSpec: '49mm Titanium Case • 3000 nits • Precision Dual-Frequency GPS',
    hasSaleBadge: false
  },
  {
    type: 'Tablet',
    product: PRODUCTS.find(p => p.id === 'prod-ipad-pro-m4') || PRODUCTS[0],
    oneLineSpec: '13" Ultra Retina Tandem OLED • Apple M4 Chip • 5.1mm Ultra-thin',
    hasSaleBadge: false
  },
  {
    type: 'Bluetooth Speaker',
    product: PRODUCTS.find(p => p.id === 'prod-marshall-stanmore-3') || PRODUCTS[8],
    oneLineSpec: '80W Stereo Soundstage • Bluetooth 5.2 & RCA • Analog Brass Knobs',
    hasSaleBadge: true // Red Sale Badge 2
  },
  {
    type: 'Gaming Console',
    product: PRODUCTS.find(p => p.id === 'prod-ps5-pro') || PRODUCTS[3],
    oneLineSpec: 'PlayStation Spectral Super Resolution (PSSR) • 2TB NVMe • 4K 120Hz',
    hasSaleBadge: false
  },
  {
    type: 'Power Bank',
    product: PRODUCTS.find(p => p.id === 'prod-anker-prime-powerbank') || PRODUCTS[0],
    oneLineSpec: '250W Total Output • 27,650mAh Capacity • Smart Digital LCD Display',
    hasSaleBadge: false
  }
];
