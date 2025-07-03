"use client";

import React from 'react';
import { FAQSection } from './FAQSection';
import { Footer } from '../Footer/Footer';

export const FAQPage: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-black">
      <FAQSection />
      <Footer />
    </main>
  );
};

export default FAQPage;
