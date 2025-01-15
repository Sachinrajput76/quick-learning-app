// app/layout.tsx
import React from 'react';
import Footer from './component/footer';
import Header from './component/headers';
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100">
          {/* Header */}
          <Header />
          <section className="h-[calc(100vh-120px)]">
            {children}
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
