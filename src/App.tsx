// src/App.tsx
import React from 'react';
import Listing from './components/Listing';
import { ListingItem } from './types';
import './index.css';

const demoItems: ListingItem[] = [
  {
    listing_id: 708099714,
    url: 'https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api',
    MainImage: { url_570xN: 'https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg' },
    title: 'Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400',
    currency_code: 'USD',
    price: '15.99',
    quantity: 1,
    is_digital: false
  },
  {
    listing_id: 225003193,
    url: 'https://www.etsy.com/listing/225003193/hippo-floating-charm-for-floating?utm_source=netoapi&utm_medium=api&utm_campaign=api',
    MainImage: { url_570xN: 'https://i.etsystatic.com/8835185/r/il/657b78/736963546/il_570xN.736963546_g5ze.jpg' },
    title: 'Hippo Floating Charm for Floating Lockets-Purple Hippo-Gift Ideas for Women',
    currency_code: 'USD',
    price: '2.00',
    quantity: 2,
    is_digital: false
  },
  {
    listing_id: 708099692,
    url: 'https://www.etsy.com/listing/708099692/unicorn-square-coaster-for-the-4x4-hoop?utm_source=netoapi&utm_medium=api&utm_campaign=api',
    MainImage: { url_570xN: 'https://i.etsystatic.com/13524812/r/il/19c58c/1945232576/il_570xN.1945232576_1lyl.jpg' },
    title: 'Unicorn Square Coaster for the 4x4 hoop size',
    currency_code: 'GBP',
    price: '2.50',
    quantity: 100,
    is_digital: true
  }
];

export default function App() {
  return (
    <>
      <h1 style={{ marginBottom: 24, fontSize: 24, fontWeight: 600 }}>Etsy Listing Grid (Props + TS)</h1>
      <Listing items={demoItems} />
    </>
  );
}
