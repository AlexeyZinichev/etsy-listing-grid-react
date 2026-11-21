import React from 'react';

function formatPrice(value, currency) {
  if (value == null) return '';
  const v = parseFloat(value);
  if (isNaN(v)) return '';
  const n = Math.round(v * 100) / 100;
  switch (currency) {
    case 'USD': return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    case 'EUR': return `€${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    case 'GBP': return `£${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    default: return `${currency} ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}

function truncateTitle(title, limit = 50) {
  return title.length > limit ? title.slice(0, limit).trimEnd() + '…' : title;
}

function stockClass(quantity) {
  if (quantity == null) return 'stock-medium';
  return quantity <= 10 ? 'stock-low' : quantity <= 20 ? 'stock-medium' : 'stock-high';
}

export default function Listing({ items = [] }) {
  return (
    <div className="container">
      <div className="product-grid">
        {items.map(item => (
          <div key={item.listing_id} className="product-card" data-listing-id={item.listing_id}>
            {item.is_digital && <div className="digital-badge">Digital</div>}
            <a href={item.url} className="product-link" aria-label={item.title}>
              {item.MainImage?.url_570xN ? (
                <img src={item.MainImage.url_570xN} alt={item.title} className="product-image" onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/570x400/EFEFEF/DDD?text=No+Image'; }} />
              ) : (
                <div className="product-image placeholder">No Image</div>
              )}
            </a>
            <div className="product-info">
              <h3 className="product-title">{truncateTitle(item.title)}</h3>
              <div className="price-container">
                <div className="product-price">{formatPrice(item.price, item.currency_code)}</div>
                <span className={`stock-badge ${stockClass(item.quantity)}`}>{item.quantity ?? '—'} left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
