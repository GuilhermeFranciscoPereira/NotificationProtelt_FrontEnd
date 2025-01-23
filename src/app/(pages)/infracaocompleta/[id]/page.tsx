'use client'
import { useSearchByPlateContext } from "@/contexts/SearchByPlateContext";
import { useSearchByPrimaryKeyContext } from "@/contexts/SearchByPrimaryKey";
import Image from "next/image";
import VilaRealLogo from '../../../../assets/imagensForTheSite/VilaRealLogo.jpg';
import html2canvas from 'html2canvas';
import style from './InfracaoCompleta.module.css';
import Link from "next/link";

export default function infracaocompleta() {
    const {SearchByPrimaryKeyContent} = useSearchByPrimaryKeyContext();
    const {SearchByPlateContent} = useSearchByPlateContext();
    const dataChoosed = SearchByPrimaryKeyContent[0];

    function captureScreenshot() {
        const content = document.getElementById('sectionToCaptureScreen');
        if (content) {
            html2canvas(content).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'captura_de_tela.png';
            link.click();
            });
        }
    };

    return (
    <>
    <button className={style.buttonToCaptureTheScreen} onClick={() => captureScreenshot()}>Clique e tire print</button>
    <section id="sectionToCaptureScreen">
        <header className={style.header}>
            <Link href={'/infracoes'}>
                <Image src={VilaRealLogo} width={100} alt={`Foto do condomínio vila real`} quality={100}/>
            </Link>
            <h1>NOTIFICAÇÃO DE AUTUAÇÃO POR INFRAÇÃO DE VELOCIDADE MÁXIMA PERMITIDA</h1>
        </header>
        <main className={style.main}>

            <h2 className={style.IndicacaoDaAutuacao}>Indicação da autuação</h2>
            <div className={style.orgaoautuador}>
                <span className={style.label}>Órgão Autuador</span>
                <span className={style.value}>ASSOCIAÇÃO FAZENDA VILA REAL DE ITU</span>
            </div>
            <div className={style.codigoDoOrgao}>
                <span className={style.label}>Código do Órgão</span>
                <span className={style.value}>001</span>
            </div>
            <div className={style.autoDaInfracao}>
                <span className={style.label}>Auto da Infração</span>
                <span className={style.value}>{dataChoosed.autoDaInfracao}</span>
            </div>
            <div className={style.dataEnvio}>
                <span className={style.label}>Data Envio</span>
                <span className={style.value}>{dataChoosed.dataEnvio}</span>
            </div>

            <h2 className={style.IdentificacaoDoVeiculo}>Identificação do veículo</h2>
            <div className={style.placa}>
                <span className={style.label}>Placa</span>
                <span className={style.value}>{dataChoosed.placa}</span>
            </div>
            <div className={style.municipio}>
                <span className={style.label}>Município</span>
                <span className={style.value}>{dataChoosed.municipio}</span>
            </div>
            <div className={style.uf}>
                <span className={style.label}>UF</span>
                <span className={style.value}>{dataChoosed.uf}</span>
            </div>
            <div className={style.marcaModelo}>
                <span className={style.label}>Marca / Modelo</span>
                <span className={style.value}>{dataChoosed.marcaModelo}</span>
            </div>
            <div className={style.cor}>
                <span className={style.label}>Cor</span>
                <span className={style.value}>{dataChoosed.cor}</span>
            </div>
            <div className={style.especieTipo}>
                <span className={style.label}>Espécie / Tipo</span>
                <span className={style.value}>{dataChoosed.especieTipo}</span>
            </div>
            <div className={style.pais}>
                <span className={style.label}>País</span>
                <span className={style.value}>BR</span>
            </div>

            <h2 className={style.IdentificacaoDoLocalDaInfracao}>Identificação do local da infração</h2>
            <div className={style.localDaInfracao}>
                <span className={style.label}>Local da Infração</span>
                <span className={style.value}>{dataChoosed.localDaInfracao}</span>
            </div>
            <div className={style.municipio2}>
                <span className={style.label}>Município</span>
                <span className={style.value}>ITU</span>
            </div>
            <div className={style.uf2}>
                <span className={style.label}>UF</span>
                <span className={style.value}>SP</span>
            </div>
            <div className={style.codigoDoRadar}>
                <span className={style.label}>Código do Radar</span>
                <span className={style.value}>000001</span>
            </div>

            <h2 className={style.Condutor}>Condutor</h2>
            <div className={style.nome}>
                <span className={style.label}>Nome</span>
                <span className={style.value}>{dataChoosed.nomeCondutor}</span>
            </div>

            <h2 className={style.Responsavel}>Responsável</h2>
            <div className={style.proprietario}>
                <span className={style.label}>Proprietário</span>
                <span className={style.value}>{dataChoosed.proprietario}</span>
            </div>

            <h2 className={style.Destino}>Destino</h2>
            <div className={style.quadraELote}>
                <span className={style.label}>Quadra e Lote</span>
                <span className={style.value}>{dataChoosed.quadraLote}</span>
            </div>
            <div className={style.natureza}>
                <span className={style.label}>Natureza</span>
                <span className={style.value}>{dataChoosed.placa}{dataChoosed.naturezaDoVeiculo}</span>
            </div>

            <Image className={style.InfringementPhoto} src={`/uploads/${dataChoosed.placa}${dataChoosed.fotoInfracao}`} alt={`Foto da infração junto da placa do veículo`} width={200} height={200} quality={100}/>

            <h2 className={style.TipoDaInfracao}>Tipo da infração</h2>
            <div className={style.grauDaInfracao}>
                <span className={style.label}>Grau da infração</span>
                <span className={style.value}>{SearchByPlateContent.length}º <span style={{fontSize: "40px", fontWeight: "bolder"}}>NOTIFICAÇÃO</span></span>
            </div>
            <div className={style.descricaoDaInfracao}>
                <span className={style.label}>Descrição da infração:</span>
                <span className={style.value}>Transitar em velocidade superior a máxima permitida no condomínio.</span>
            </div>
            <div className={style.equipamentoUtilizado}>
                <span className={style.label}>Equipamento utilizado:</span>
                <span className={style.value} style={{textAlign: "end"}}>MEDIDOR DE VELOCIDADE (RADAR)</span>
            </div>
            <div className={style.marca}>
                <span className={style.label}>Marca:</span>
                <span className={style.value} style={{textAlign: "end"}}>SPD</span>
            </div>
            <div className={style.modelo}>
                <span className={style.label}>Modelo:</span>
                <span className={style.value} style={{textAlign: "end"}}>SPEED-SENSOR-FVR-01</span>
            </div>
            <div className={style.tipoDeMedicao}>
                <span className={style.label}>Tipo de Medição:</span>
                <span className={style.value} style={{textAlign: "end"}}>SENSOR DE VELOCIDADE</span>
            </div>
            <div className={style.limiteRegulamentado}>
                <span className={style.label}>Limite Regulamentado:</span>
                <span className={style.value} style={{textAlign: "end"}}>40 KM/H</span>
            </div>
            <div className={style.medicaoRealizada}>
                <span className={style.label}>Medição Realizada:</span>
                <span className={style.value} style={{textAlign: "end"}}>{dataChoosed.medicaoRealizadaKMH} KM/H</span>
            </div>
            <div className={style.dataHoraDaInfracao}>
                <span className={style.label}>Data / Hora da infração:</span>
                <span className={style.value} style={{textAlign: "end"}}>{dataChoosed.dataHoraDaInfracao}</span>
            </div>
            <div className={style.valor}>
                <span className={style.label}>Valor:</span>
                <span className={style.value} style={{textAlign: "end"}}>R$ {dataChoosed.valor},00</span>
            </div>
            <div className={style.recurso}>
                <span className={style.label}>Recurso:</span>
                <span className={style.value} style={{textAlign: "end"}}>Deve ser encaminhado para Administração através do e-mail:
                atendimento@fazendavilareal.com.br</span>
            </div>
            <div className={style.nothing}>
                <span className={style.label}></span>
                <span className={style.value} style={{padding: "10px"}}></span>
            </div>

            <h2 className={style.RegulamentoInterno}>Regulamento interno</h2>
            <div className={style.capVIItem2}>
                <span className={style.label} style={{color: "red"}}>CAP. VI – ITEM 2 – LETRA A:</span>
                <span className={style.value}>
                    •	A VELOCIDADE MÁXIMA PERMITIDA NAS DEPENDÊNCIAS DO LOTEAMENTO FECHADO É DE 40 KM/H, SEMPRE RESPEITADOS OS LIMITES DAS PLACAS DE SINALIZAÇÃO. A ADMINISTRAÇÃO PODERÁ A QUALQUER TEMPO ADOTAR MEDIDAS E/OU FORMAS DE AVALIAÇÃO MAIS VARIADAS E CONVENIENTES PARA CONTROLE DE VELOCIDADE.
                </span>
            </div>

            <h2 className={style.nota}>NOTA</h2>
            <div className={style.notaInformations}>
                <span className={style.value}>
                    <p style={{color: "red"}}>•	A VELOCIDADE REGISTRADA PELO RADAR É SEMPRE DE 4 KM/H A 5 KM/H ABAIXO DA VELOCIDADE REAL DO VEÍCULO.</p>
                    <p style={{color: "red"}}>•	O RADAR REGISTRA O EXCESSO DE VELOCIDADE NOS DOIS SENTIDOS DA VIA.</p>
                    <p>•	INFORMAMOS QUE AS IMAGENS AQUI APRESENTADAS SÃO EDITADAS DEVIDO AO TIPO COMPLETO DE APROXIMAÇÃO, PASSAGEM E AFASTAMENTO DO VEÍCULO POR APROXIMADAMENTE UM TEMPO DE 10 A 20 SEGUNDOS.</p>
                    <p>•	AS IMAGENS SÃO RESULTADO DE ANÁLISES POR AMOSTRAGEM E TÊM O MOMENTO EXATO DA OCORRÊNCIA DA INFRAÇÃO.</p>
                    <p>•	QUALQUER INDICAÇÃO DE FALHA NO REGISTRO DA VELOCIDADE, GERA O DESCARTE DA OCORRÊNCIA.</p>
                    <p>•	VOCÊ ESTÁ À DISPOSIÇÃO PARA CONSULTA E ANÁLISE CONSTANTE, CASO HAJA INTERESSE.</p>
                </span>
            </div>

            <h2 className={style.certificadoDeAfericao}>CERTIFICADO DE AFERIÇÃO</h2>
            <div className={style.certificado}>
                <span className={style.label}>Certificado Nº:</span>
                <span className={style.value}>0589-1501</span>
            </div>
            <div className={style.laboratorio}>
                <span className={style.label}>Laboratório:</span>
                <span className={style.value}>QUALIMETRO</span>
            </div>
        </main>
    </section>
    </>
    )
}