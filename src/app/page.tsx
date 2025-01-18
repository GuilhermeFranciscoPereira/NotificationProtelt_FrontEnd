import ButtonSection from "@/components/Buttons/ButtonSection";
import Header from "@/components/Header"
import ModalComponent from "@/components/Modal";

export default function Home() {
  return (
    <>
    <Header></Header>
    <main>
      <ModalComponent></ModalComponent>
      <ButtonSection></ButtonSection>
    </main>
    </>
  );
}