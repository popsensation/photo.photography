'use client';
import React from 'react';

export const ProductEngine: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', padding: '40px 24px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '100px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4af37', marginBottom: '16px' }}>
          Coming Soon
        </p>
        <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
          Poster Photography
        </h1>
        <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto 40px' }}>
          Museum-quality archival printing on premium stocks. Upload your photo, choose your size. We take care of the rest.
        </p>
        <p style={{ color: '#444', fontSize: '13px' }}>
          Launching soon — fine art prints on Hahnemühle 308gsm
        </p>
      </div>
    </div>
  );
};
