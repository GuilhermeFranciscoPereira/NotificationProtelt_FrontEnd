'use client';
import styles from '@/app/(pages)/infracaocompleta/[id]/InfracaoCompleta.module.css';
import useInfracaoCompletaHook from '@/hooks/Pages/useInfracaoCompletaHook';
import VilaRealLogo from '@/assets/imagensForTheSite/VilaRealLogo.jpg';
import Image from "next/image";
import Link from "next/link";

export default function infracaocompleta(): React.ReactNode {
    const {captureScreenshot, SearchByIdContent, platePosition, dateFormated, dateAndHourFormated} = useInfracaoCompletaHook();
    
    return (
    <>
    <button className={styles.buttonToCaptureTheScreen} onClick={() => captureScreenshot('sectionToCaptureScreen')}>Clique e tire print</button>
    <section id="sectionToCaptureScreen">
        <header className={styles.header}>
            <Link href={'/infracoes'}>
                <Image src={VilaRealLogo} width={100} alt={`Foto do condomínio vila real`} quality={100}/>
            </Link>
            <h1>NOTIFICAÇÃO DE AUTUAÇÃO POR INFRAÇÃO DE VELOCIDADE MÁXIMA PERMITIDA</h1>
        </header>
        <main className={styles.main}>

            <h2 className={styles.IndicacaoDaAutuacao}>Indicação da autuação</h2>
            <div className={styles.orgaoautuador}>
                <span className={styles.label}>Órgão Autuador</span>
                <span className={styles.value}>ASSOCIAÇÃO FAZENDA VILA REAL DE ITU</span>
            </div>
            <div className={styles.codigoDoOrgao}>
                <span className={styles.label}>Código do Órgão</span>
                <span className={styles.value}>001</span>
            </div>
            <div className={styles.autoDaInfracao}>
                <span className={styles.label}>Auto da Infração</span>
                <span className={styles.value}>{SearchByIdContent[0]?.autoDaInfracao}</span>
            </div>
            <div className={styles.dataEnvio}>
                <span className={styles.label}>Data Envio</span>
                <span className={styles.value}>{dateFormated}</span>
            </div>

            <h2 className={styles.IdentificacaoDoVeiculo}>Identificação do veículo</h2>
            <div className={styles.placa}>
                <span className={styles.label}>Placa</span>
                <span className={styles.value}>{SearchByIdContent[0]?.placa}</span>
            </div>
            <div className={styles.municipio}>
                <span className={styles.label}>Município</span>
                <span className={styles.value}>{SearchByIdContent[0]?.municipio}</span>
            </div>
            <div className={styles.uf}>
                <span className={styles.label}>UF</span>
                <span className={styles.value}>{SearchByIdContent[0]?.uf}</span>
            </div>
            <div className={styles.marcaModelo}>
                <span className={styles.label}>Marca / Modelo</span>
                <span className={styles.value}>{SearchByIdContent[0]?.marcaModelo}</span>
            </div>
            <div className={styles.cor}>
                <span className={styles.label}>Cor</span>
                <span className={styles.value}>{SearchByIdContent[0]?.cor}</span>
            </div>
            <div className={styles.especieTipo}>
                <span className={styles.label}>Espécie / Tipo</span>
                <span className={styles.value}>{SearchByIdContent[0]?.especieTipo}</span>
            </div>
            <div className={styles.pais}>
                <span className={styles.label}>País</span>
                <span className={styles.value}>BR</span>
            </div>

            <h2 className={styles.IdentificacaoDoLocalDaInfracao}>Identificação do local da infração</h2>
            <div className={styles.localDaInfracao}>
                <span className={styles.label}>Local da Infração</span>
                <span className={styles.value}>{SearchByIdContent[0]?.localDaInfracao}</span>
            </div>
            <div className={styles.municipio2}>
                <span className={styles.label}>Município</span>
                <span className={styles.value}>ITU</span>
            </div>
            <div className={styles.uf2}>
                <span className={styles.label}>UF</span>
                <span className={styles.value}>SP</span>
            </div>
            <div className={styles.codigoDoRadar}>
                <span className={styles.label}>Código do Radar</span>
                <span className={styles.value}>000001</span>
            </div>

            <h2 className={styles.Condutor}>Condutor</h2>
            <div className={styles.nome}>
                <span className={styles.label}>Nome</span>
                <span className={styles.value}>{SearchByIdContent[0]?.nomeCondutor}</span>
            </div>

            <h2 className={styles.Responsavel}>Responsável</h2>
            <div className={styles.proprietario}>
                <span className={styles.label}>Proprietário</span>
                <span className={styles.value}>{SearchByIdContent[0]?.proprietario}</span>
            </div>

            <h2 className={styles.Destino}>Destino</h2>
            <div className={styles.quadraELote}>
                <span className={styles.label}>Quadra e Lote</span>
                <span className={styles.value}>{SearchByIdContent[0]?.quadraLote}</span>
            </div>
            <div className={styles.natureza}>
                <span className={styles.label}>Natureza</span>
                <span className={styles.value}>{SearchByIdContent[0]?.naturezaDoVeiculo}</span>
            </div>

            <Image className={styles.InfringementPhoto} src={`/uploads/${SearchByIdContent[0].fotoInfracao}`} alt={`Foto da infração junto da placa do veículo`} width={200} height={200} quality={100}/>

            <h2 className={styles.TipoDaInfracao}>Tipo da infração</h2>
            <div className={styles.grauDaInfracao}>
                <span className={styles.label}>Grau da infração</span>
                <span className={styles.value}>{platePosition}º <span style={{fontSize: "40px", fontWeight: "bolder"}}>NOTIFICAÇÃO</span></span>
            </div>
            <div className={styles.descricaoDaInfracao}>
                <span className={styles.label}>Descrição da infração:</span>
                <span className={styles.value}>Transitar em velocidade superior a máxima permitida no condomínio.</span>
            </div>
            <div className={styles.equipamentoUtilizado}>
                <span className={styles.label}>Equipamento utilizado:</span>
                <span className={styles.value} style={{textAlign: "end"}}>MEDIDOR DE VELOCIDADE (RADAR)</span>
            </div>
            <div className={styles.marca}>
                <span className={styles.label}>Marca:</span>
                <span className={styles.value} style={{textAlign: "end"}}>SPD</span>
            </div>
            <div className={styles.modelo}>
                <span className={styles.label}>Modelo:</span>
                <span className={styles.value} style={{textAlign: "end"}}>SPEED-SENSOR-FVR-01</span>
            </div>
            <div className={styles.tipoDeMedicao}>
                <span className={styles.label}>Tipo de Medição:</span>
                <span className={styles.value} style={{textAlign: "end"}}>SENSOR DE VELOCIDADE</span>
            </div>
            <div className={styles.limiteRegulamentado}>
                <span className={styles.label}>Limite Regulamentado:</span>
                <span className={styles.value} style={{textAlign: "end"}}>40 KM/H</span>
            </div>
            <div className={styles.medicaoRealizada}>
                <span className={styles.label}>Medição Realizada:</span>
                <span className={styles.value} style={{textAlign: "end"}}>{SearchByIdContent[0]?.medicaoRealizadaKMH} KM/H</span>
            </div>
            <div className={styles.dataHoraDaInfracao}>
                <span className={styles.label}>Data / Hora da infração:</span>
                <span className={styles.value} style={{textAlign: "end"}}>{dateAndHourFormated}</span>
            </div>
            <div className={styles.valor}>
                <span className={styles.label}>Valor:</span>
                <span className={styles.value} style={{textAlign: "end"}}>R$ {SearchByIdContent[0]?.valor},00</span>
            </div>
            <div className={styles.recurso}>
                <span className={styles.label}>Recurso:</span>
                <span className={styles.value} style={{textAlign: "end"}}>Deve ser encaminhado para Administração através do e-mail:
                atendimento@fazendavilareal.com.br</span>
            </div>
            <div className={styles.nothing}>
                <span className={styles.label}></span>
                <span className={styles.value} style={{padding: "10px"}}></span>
            </div>

            <h2 className={styles.RegulamentoInterno}>Regulamento interno</h2>
            <div className={styles.capVIItem2}>
                <span className={styles.label} style={{color: "red"}}>CAP. VI – ITEM 2 – LETRA A:</span>
                <span className={styles.value}>
                    •	A VELOCIDADE MÁXIMA PERMITIDA NAS DEPENDÊNCIAS DO LOTEAMENTO FECHADO É DE 40 KM/H, SEMPRE RESPEITADOS OS LIMITES DAS PLACAS DE SINALIZAÇÃO. A ADMINISTRAÇÃO PODERÁ A QUALQUER TEMPO ADOTAR MEDIDAS E/OU FORMAS DE AVALIAÇÃO MAIS VARIADAS E CONVENIENTES PARA CONTROLE DE VELOCIDADE.
                </span>
            </div>

            <h2 className={styles.nota}>NOTA</h2>
            <div className={styles.notaInformations}>
                <span className={styles.value}>
                    <p style={{color: "red"}}>•	A VELOCIDADE REGISTRADA PELO RADAR É SEMPRE DE 4 KM/H A 5 KM/H ABAIXO DA VELOCIDADE REAL DO VEÍCULO.</p>
                    <p style={{color: "red"}}>•	O RADAR REGISTRA O EXCESSO DE VELOCIDADE NOS DOIS SENTIDOS DA VIA.</p>
                    <p>•	INFORMAMOS QUE AS IMAGENS AQUI APRESENTADAS SÃO EDITADAS DEVIDO AO TIPO COMPLETO DE APROXIMAÇÃO, PASSAGEM E AFASTAMENTO DO VEÍCULO POR APROXIMADAMENTE UM TEMPO DE 10 A 20 SEGUNDOS.</p>
                    <p>•	AS IMAGENS SÃO RESULTADO DE ANÁLISES POR AMOSTRAGEM E TÊM O MOMENTO EXATO DA OCORRÊNCIA DA INFRAÇÃO.</p>
                    <p>•	QUALQUER INDICAÇÃO DE FALHA NO REGISTRO DA VELOCIDADE, GERA O DESCARTE DA OCORRÊNCIA.</p>
                    <p>•	VOCÊ ESTÁ À DISPOSIÇÃO PARA CONSULTA E ANÁLISE CONSTANTE, CASO HAJA INTERESSE.</p>
                </span>
            </div>

            <h2 className={styles.certificadoDeAfericao}>CERTIFICADO DE AFERIÇÃO</h2>
            <div className={styles.certificado}>
                <span className={styles.label}>Certificado Nº</span>
                <span className={styles.value}>0589-1501</span>
            </div>
            <div className={styles.laboratorio}>
                <span className={styles.label}>Laboratório:</span>
                <span className={styles.value}>QUALIMETRO</span>
            </div>
        </main>
    </section>
    </>
    )
}