import ButtonSection from "@/components/Buttons/ButtonSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home(): React.ReactNode {
  return (
    <>
    <Header></Header>
    <main>
      <ButtonSection></ButtonSection>
    </main>
    <Footer></Footer>
    </>
  );
}