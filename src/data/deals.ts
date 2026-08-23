import { DealItem, StoreLocation } from '../types';
import { PRODUCTS } from './products';

export const DEALS: DealItem[] = [
  {
    id: 'deal-sony-xm5',
    title: 'Dubai Weekend Flash Drop: Sony WH-1000XM5',
    subtitle: 'Save AED 300 + Free Premium Hard Case & Airline Adapter',
    badge: '20% OFF',
    discount: 'AED 300 OFF',
    endsInHours: 14,
    product: PRODUCTS.find(p => p.id === 'prod-sony-wh1000xm5') || PRODUCTS[2],
    stockSoldPercent: 78
  },
  {
    id: 'deal-lg-oled',
    title: 'Home Cinema Special: LG 65" OLED evo C4 4K',
    subtitle: 'Save AED 1,600 with Free Dubai Professional Wall Mounting',
    badge: 'SAVE AED 1,600',
    discount: '19% OFF',
    endsInHours: 28,
    product: PRODUCTS.find(p => p.id === 'prod-lg-oled-c4') || PRODUCTS[6],
    stockSoldPercent: 86
  },
  {
    id: 'deal-s24-ultra',
    title: 'Galaxy AI Bundle: Samsung S24 Ultra 512GB',
    subtitle: 'Save AED 600 + Free 45W Fast Charger & Clear Case',
    badge: '12% OFF',
    discount: 'AED 600 OFF',
    endsInHours: 9,
    product: PRODUCTS.find(p => p.id === 'prod-s24ultra') || PRODUCTS[4],
    stockSoldPercent: 91
  },
  {
    id: 'deal-marshall',
    title: 'Audiophile Edition: Marshall Stanmore III',
    subtitle: 'Save AED 300 on iconic British analog acoustics',
    badge: '17% OFF',
    discount: 'AED 300 OFF',
    endsInHours: 36,
    product: PRODUCTS.find(p => p.id === 'prod-marshall-stanmore-3') || PRODUCTS[8],
    stockSoldPercent: 64
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'store-dubai-mall',
    name: 'VB Electronics Flagship Store',
    mall: 'The Dubai Mall',
    area: 'Downtown Dubai',
    address: 'Level 2, Electronic Avenue (Near Dubai Ice Rink & Metro Link), Downtown Dubai, UAE',
    phone: '+971 4 330 8890',
    email: 'dubaimall@vbelectronics.ae',
    hours: 'Sun - Wed: 10:00 AM - 11:00 PM | Thu - Sat: 10:00 AM - 12:00 Midnight',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80',
    hasExpressPickup: true
  },
  {
    id: 'store-moe',
    name: 'VB Electronics Experience Centre',
    mall: 'Mall of the Emirates',
    area: 'Al Barsha 1',
    address: 'Ground Floor, Unit G-142 (Adjacent to Ski Dubai Entrance), Sheikh Zayed Rd, Dubai, UAE',
    phone: '+971 4 341 9920',
    email: 'moe@vbelectronics.ae',
    hours: 'Mon - Sun: 10:00 AM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    hasExpressPickup: true
  },
  {
    id: 'store-mirdif',
    name: 'VB Electronics Hub',
    mall: 'City Centre Mirdif',
    area: 'Mirdif',
    address: 'Level 1, North Galleria, Tripoli Street, Dubai, UAE',
    phone: '+971 4 284 3311',
    email: 'mirdif@vbelectronics.ae',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    hasExpressPickup: true
  }
];
