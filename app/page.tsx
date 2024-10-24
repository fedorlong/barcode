import Header from "@/components/header/Header";
import BarcodeGenerator from "@/components/home/BarcodeGenerator";
import BarcodeTypes from "@/components/home/BarcodeTypes";
import SiteIntro from "@/components/home/SiteIntro";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <SiteIntro />
        <BarcodeGenerator />
        <BarcodeTypes />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
