'use client'
import Image from 'next/image';
import style from './Infracoes.module.css';
import exampleInfringementPhoto from '../../../assets/imagensForTheSite/exampleInfringementPhoto.jpg';
import ButtonsHooks from '@/hooks/ButtonsHooks';
import ModalComponent from '@/components/Modal';
import Header from '@/components/Header';

export default function infracoes() {
    const {editAndDeleteInfringement, showTheFullInfringement} = ButtonsHooks();
    const infringements: Array<{plate: string, speed: string, location: string}> = [
        { plate: 'ABC1D23', speed: '54 KM/H', location: 'Q1 L1' },
        { plate: 'XYZ9Z88', speed: '70 KM/H', location: 'Q2 L2' },
        { plate: 'DEF4G56', speed: '80 KM/H', location: 'Q3 L3' },
        { plate: 'LMN7H56', speed: '50 KM/H', location: 'Q4 L4' },
        { plate: 'JKL0P12', speed: '65 KM/H', location: 'Q5 L5' },
        { plate: 'GHI1J23', speed: '55 KM/H', location: 'Q6 L6' },
        { plate: 'TUV9X80', speed: '85 KM/H', location: 'Q7 L7' },
        { plate: 'PQR2S44', speed: '40 KM/H', location: 'Q8 L8' },
        { plate: 'STU3D98', speed: '95 KM/H', location: 'Q9 L9' },
        { plate: 'VWX5K34', speed: '75 KM/H', location: 'Q10 L10' },
        { plate: 'YZA1C00', speed: '60 KM/H', location: 'Q11 L11' },
        { plate: 'LMN2P55', speed: '65 KM/H', location: 'Q12 L12' },
        { plate: 'BCT6M43', speed: '50 KM/H', location: 'Q13 L13' },
        { plate: 'OPQ8R12', speed: '85 KM/H', location: 'Q14 L14' },
        { plate: 'XYZ0W12', speed: '40 KM/H', location: 'Q15 L15' },
        { plate: 'WXY5L00', speed: '80 KM/H', location: 'Q16 L16' },
        { plate: 'UVW9X15', speed: '70 KM/H', location: 'Q17 L17' },
        { plate: 'NOP2K67', speed: '90 KM/H', location: 'Q18 L18' },
        { plate: 'TUV7C12', speed: '65 KM/H', location: 'Q19 L19' },
        { plate: 'JKL5R44', speed: '50 KM/H', location: 'Q20 L20' }
      ];

    return (
        <>
        <Header></Header>
        <ModalComponent></ModalComponent>
        <section className={style.searchAndFilterSection}>
                <form className={style.searchForm}>
                    <input type="text" placeholder="Busque por placa.." required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
                    <button type='submit'>🔎</button>
                </form>
            <div className={style.filterDiv}>
                <select id="speedFilter" name="speedFilter">
                    <option value="withoutFilter">Sem filtro</option>
                    <option value="40-60">40 - 60 km/h</option>
                    <option value="60-80">60 - 80 km/h</option>
                    <option value="80-100">80 - 100 km/h</option>
                    <option value="100-120">100 - 120 km/h</option>
                </select>
            </div>
        </section>
        <section className={style.infringementSection}>
            {infringements.map((infringement, index) => (
                <div className={style.cardInfringementDiv} key={index}>
                <div className='driverInformations'>
                    <h1>Placa: {infringement.plate}</h1>
                    <p>Velocidade: {infringement.speed}</p>
                    <p>Quadra e lote: {infringement.location}</p>
                </div>
                <Image
                    src={exampleInfringementPhoto}
                    width={200}
                    alt={`Foto da infração junto da placa ${infringement.plate}`}
                    quality={100}
                />
                <button onClick={() => showTheFullInfringement(index.toString())}>Visualizar infração completa</button>
                <button onClick={() => editAndDeleteInfringement(infringement.plate)}>EDITAR / DELETAR</button>
                </div>
            ))}
        </section>
        </>
    )
}