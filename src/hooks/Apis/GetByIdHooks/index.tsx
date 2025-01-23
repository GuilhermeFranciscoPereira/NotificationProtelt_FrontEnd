import { useSearchByPrimaryKeyContext } from '@/contexts/SearchByPrimaryKey';
import { useRouter } from 'next/navigation';

export default function GetByIdHooks() {
  const {toSetSearchByPrimaryKeyContent} = useSearchByPrimaryKeyContext();
  const router = useRouter();

  async function handleSearchByID(id: number) {
    try {
      const response = await fetch(`http://localhost:7777/allInfringement/ID/${id}`, {
        method: 'POST',
      });
      const result = await response.json();
      console.log(`Todos os resultados do primeiro:`, result)
      toSetSearchByPrimaryKeyContent(result);
      router.push(`/infracaocompleta/${id}`)
    } catch (error) {
      alert(`Erro ao tentar acessar a infração completa, por favor, tente novamente! \nErro: ${error}`);
      console.log(`Erro ao tentar acessar a infração completa, por favor, tente novamente! \nErro: ${error}`);
    }
  }

  return {handleSearchByID};
}