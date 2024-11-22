import Image from "next/image";
import styles from "./page.module.css";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  const whatsappNumber = 6581717119
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Image
          className={styles.logo}
          src="/brandLogos/logo-no-background.svg"
          alt="Majulah Green Logo"
          layout="intrinsic"
          width={500} 
          height={370} 
          priority
        />
        <div className={styles.ctas}>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#0a3b3d"
              width={25}
              height={25}/>
            8171 7119
          </a>
          <a
            className={styles.primary}
            href="mailto:hello@majulahgreen.sg"
            target="_blank"
            rel="noopener noreferrer"
          >
          <EmailRoundedIcon
              />
            hello@majulahgreen.sg
          </a>
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
