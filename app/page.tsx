import Header from "@/components/header/Header";
import BarcodeGenerator from "@/components/home/BarcodeGenerator";
import BarcodeTypes from "@/components/home/BarcodeTypes";
import SiteIntro from "@/components/home/SiteIntro";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', minHeight: '100vh', position: 'fixed', zIndex: 1, padding: '120px 24px 160px 24px', pointerEvents: 'none' }}>
        <div style={{
          zIndex: 3,
          width: '100%',
          maxWidth: '640px',
          backgroundImage: 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)',
          position: 'absolute',
          height: '100%',
          filter: 'blur(100px) saturate(150%)',
          top: '80px',
          opacity: 0.15,
        }}></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <SiteIntro />
          <BarcodeGenerator />
          <BarcodeTypes />
          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
}
