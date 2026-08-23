import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-phones',
    name: 'Smartphones & Tablets',
    slug: 'smartphones',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80',
    itemCount: 42,
    description: 'Flagship 5G devices, foldables, iPads, and accessories from Apple, Samsung, Google & OnePlus.',
    popularBrands: ['Apple', 'Samsung', 'Google', 'Xiaomi']
  },
  {
    id: 'cat-laptops',
    name: 'Laptops & Computing',
    slug: 'laptops',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    itemCount: 38,
    description: 'Ultrabooks, M3/M4 MacBooks, AI PCs, and high-performance workstations for creators & pros.',
    popularBrands: ['Apple', 'Dell', 'Lenovo', 'ASUS', 'HP']
  },
  {
    id: 'cat-audio',
    name: 'Audio & Hi-Fi',
    slug: 'audio',
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    itemCount: 29,
    description: 'Active noise-cancelling headphones, true wireless earbuds, soundbars, and audiophile DACs.',
    popularBrands: ['Sony', 'Bose', 'Apple', 'Sennheiser', 'Marshall']
  },
  {
    id: 'cat-gaming',
    name: 'Gaming & VR',
    slug: 'gaming',
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
    itemCount: 34,
    description: 'PS5 Pro consoles, RTX 4090 gaming rigs, OLED monitors, mechanical keyboards & VR headsets.',
    popularBrands: ['Sony PlayStation', 'ASUS ROG', 'Razer', 'Logitech G', 'Meta']
  },
  {
    id: 'cat-cameras',
    name: 'Cameras & Drones',
    slug: 'cameras',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    itemCount: 21,
    description: 'Full-frame mirrorless bodies, cinema lenses, 4K action cams, and DJI 4K camera drones.',
    popularBrands: ['Sony', 'Canon', 'DJI', 'GoPro', 'Fujifilm']
  },
  {
    id: 'cat-tv',
    name: 'Smart TVs & Home Cinema',
    slug: 'tvs',
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    itemCount: 19,
    description: 'OLED 4K/8K displays, Dolby Atmos soundbars, laser projectors, and smart streaming boxes.',
    popularBrands: ['LG OLED', 'Samsung', 'Sony Bravia', 'Sonos']
  },
  {
    id: 'cat-wearables',
    name: 'Smartwatches & Wearables',
    slug: 'wearables',
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    itemCount: 26,
    description: 'Titanium adventure watches, health monitors, GPS sport bands, and smart rings.',
    popularBrands: ['Apple', 'Garmin', 'Samsung', 'Oura']
  },
  {
    id: 'cat-smarthome',
    name: 'Smart Home & Living',
    slug: 'smarthome',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    itemCount: 24,
    description: 'Robot vacuums with LiDAR, smart locks, ambient lighting systems, and security hubs.',
    popularBrands: ['Roborock', 'Philips Hue', 'Aqara', 'Google Nest']
  }
];
