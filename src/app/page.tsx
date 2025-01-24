import ButtonSection from "@/components/Buttons/ButtonSection";
import ModalComponent from "@/components/Modal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home(): React.ReactNode {
  return (
    <>
    <Header></Header>
    <main>
      <ModalComponent></ModalComponent>
      <ButtonSection></ButtonSection>
    </main>
    <Footer></Footer>
    </>
  );
}