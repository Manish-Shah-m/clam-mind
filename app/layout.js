import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyBanner from '@/components/SafetyBanner';

export const metadata = {
  title: 'Calm Mind — A gentle space for emotional well-being',
  description: 'A safe, non-judgmental space for understanding depression, reflecting on emotions, and finding gentle support.',
  keywords: 'mental health, depression support, emotional well-being, journaling, reflection',
  openGraph: {
    title: 'Calm Mind',
    description: 'A gentle space for emotional well-being',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SafetyBanner />
        <Header />
        <main style={{ minHeight: '70vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}