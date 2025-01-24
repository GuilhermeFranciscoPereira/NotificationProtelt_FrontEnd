import { useSearchByPrimaryKeyContext } from "@/contexts/SearchByPrimaryKey";
import useGetAllInfringiment from "@/hooks/Apis/useGetAllInfringiment";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";

export default function useInfracaoCompletaHook() {
  const { SearchByPrimaryKeyContent } = useSearchByPrimaryKeyContext();
  const {data} = useGetAllInfringiment()
  const router = useRouter();

  if(SearchByPrimaryKeyContent[0] == undefined) {
    router.push('/')
  }

  function captureScreenshot(elementId: string) {
    const content = document.getElementById(elementId);
    if (content) {
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "captura_de_tela.png";
        link.click();
      });
    }
  }
  
  const filteredData = data?.filter((item) => item.placa == SearchByPrimaryKeyContent[0]?.placa);
  const platePosition = filteredData &&  1 + filteredData.findIndex((item) => item.autoDaInfracao === SearchByPrimaryKeyContent[0]?.autoDaInfracao);

  const dateNotFormated = new Date(SearchByPrimaryKeyContent[0]?.dataEnvio);
  const dateFormated = `${String(dateNotFormated.getDate()).padStart(2, '0')}/${String(dateNotFormated.getMonth() + 1).padStart(2, '0')}/${dateNotFormated.getFullYear()}`;

  const dateAndHourNotFormated = new Date(SearchByPrimaryKeyContent[0]?.dataHoraDaInfracao);
  const dateAndHourFormated = `${String(dateAndHourNotFormated.getDate()).padStart(2, '0')}/${String(dateAndHourNotFormated.getMonth() + 1).padStart(2, '0')}/${dateAndHourNotFormated.getFullYear()} - ${String(dateAndHourNotFormated.getHours()).padStart(2, '0')}:${String(dateAndHourNotFormated.getMinutes()).padStart(2, '0')}`;

  return { captureScreenshot, SearchByPrimaryKeyContent, platePosition, dateFormated, dateAndHourFormated};
}