import logoRumoRadares from '@/assets/imagensForTheSite/RumoLogo.png';
import styles from '@/components/Footer/Footer.module.css';
import Image from "next/image";

export default function Footer(): React.ReactNode {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <Image src={logoRumoRadares} width={200} alt={`Logo da empresa Rumo radares`} quality={100}/>
                </div>
                <div className={styles.footerContact}>
                    <h3>Contate a Protelt Sistemas de Segurança</h3>
                    <ul>
                        <li><strong>Telefone: </strong>(11) 4813-8888</li>
                        <li><strong>Whatsapp: </strong>(11) 9 8546-0101</li>
                        <li><strong>Email: </strong><a href="mailto:suporte@protelt.com.br">suporte@protelt.com.br</a></li>
                        <li><strong>Endereço: </strong><a href="https://www.google.com/maps?q=R.+Maestro+Tristão+Mariano+da+Costa,+25+-+Vila+Nova,+Itu+-+SP,+13309-034" target="_blank" rel="noopener noreferrer">R. Maestro Tristão Mariano da Costa, 25 - Vila Nova, Itu - SP, 13309-034 </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; Sistema desenvolvido por: Lottus Sistemas</p>
            </div>
        </footer>
    )
}