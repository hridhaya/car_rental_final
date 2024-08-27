import Download from "@/components/Download/download";
import FAQ from "@/components/Faq/faq";
import Footer from "@/components/Footer/footer";
import Location from "@/components/Location/location";
import Promo from "@/components/Promo/promo";
import Navbar from "@/components/NavBar/navBar";
import QuickBook from "@/components/QuickBook/quickBook";
import ScrollingBanner from "@/components/ScrollingBanner/scrollingBanner";
import Subscribe from "@/components/Subscribe/subscribe";
import PopularCars from "@/components/PopularCars/popularCars";
import RentOrLease from "@/components/RentOrLease/rentOrLeash";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollingBanner />
      <QuickBook />
      <Promo />
      <PopularCars />
      <Download />
      <Subscribe />
      <RentOrLease />
      <Location />
      <FAQ />
      <Footer />
    </main>
  );
}
