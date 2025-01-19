'use client'
import Image from 'next/image';
import style from './Infracoes.module.css';
import exampleInfringementPhoto from '../../../assets/imagensForTheSite/exampleInfringementPhoto.jpg';
import ButtonsHooks from '@/hooks/ButtonsHooks';
import ModalComponent from '@/components/Modal';

export default function infracoes() {
    const {editAndDeleteInfringement} = ButtonsHooks();
    return (
        <>
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
            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: ABC1D23</h1>
                    <p>Velocidade: 60 KM/H</p>
                    <p>Quadra e lote: Q1 L1</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`ABC1D23`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: DEF2G34</h1>
                    <p>Velocidade: 75 KM/H</p>
                    <p>Quadra e lote: Q2 L2</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`DEF2G34`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: GHI3J45</h1>
                    <p>Velocidade: 90 KM/H</p>
                    <p>Quadra e lote: Q3 L3</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`GHI3J45`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: JKL4M56</h1>
                    <p>Velocidade: 85 KM/H</p>
                    <p>Quadra e lote: Q4 L4</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`JKL4M56`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: MNO5P67</h1>
                    <p>Velocidade: 95 KM/H</p>
                    <p>Quadra e lote: Q5 L5</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`MNO5P67`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: PQR6S78</h1>
                    <p>Velocidade: 65 KM/H</p>
                    <p>Quadra e lote: Q6 L6</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`PQR6S78`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: STU7V89</h1>
                    <p>Velocidade: 110 KM/H</p>
                    <p>Quadra e lote: Q7 L7</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`STU7V89`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: VWX8Y90</h1>
                    <p>Velocidade: 70 KM/H</p>
                    <p>Quadra e lote: Q8 L8</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`VWX8Y90`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: YZA9B01</h1>
                    <p>Velocidade: 80 KM/H</p>
                    <p>Quadra e lote: Q9 L9</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`YZA9B01`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: CDE0F12</h1>
                    <p>Velocidade: 120 KM/H</p>
                    <p>Quadra e lote: Q10 L10</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`CDE0F12`)}}>EDITAR / DELETAR</button>
            </div>
            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: ABC1D23</h1>
                    <p>Velocidade: 60 KM/H</p>
                    <p>Quadra e lote: Q1 L1</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`ABC1D23`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: DEF2G34</h1>
                    <p>Velocidade: 75 KM/H</p>
                    <p>Quadra e lote: Q2 L2</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`DEF2G34`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: GHI3J45</h1>
                    <p>Velocidade: 90 KM/H</p>
                    <p>Quadra e lote: Q3 L3</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`GHI3J45`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: JKL4M56</h1>
                    <p>Velocidade: 85 KM/H</p>
                    <p>Quadra e lote: Q4 L4</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`JKL4M56`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: MNO5P67</h1>
                    <p>Velocidade: 95 KM/H</p>
                    <p>Quadra e lote: Q5 L5</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`MNO5P67`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: PQR6S78</h1>
                    <p>Velocidade: 65 KM/H</p>
                    <p>Quadra e lote: Q6 L6</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`PQR6S78`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: STU7V89</h1>
                    <p>Velocidade: 110 KM/H</p>
                    <p>Quadra e lote: Q7 L7</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`STU7V89`)}}>EDITAR / DELETAR</button>
            </div>

            <div className={style.cardInfringementDiv}>
                <div className='driverInformations'>
                    <h1>Placa: VWX8Y90</h1>
                    <p>Velocidade: 70 KM/H</p>
                    <p>Quadra e lote: Q8 L8</p>
                </div>
                <Image src={exampleInfringementPhoto} width={200} alt={`Foto da infração junto da placa do veículo`} quality={100} />
                <button>Visualizar infração completa</button>
                <button onClick={() => {editAndDeleteInfringement(`VWX8Y90`)}}>EDITAR / DELETAR</button>
            </div>
        </section>
        </>
    )
}