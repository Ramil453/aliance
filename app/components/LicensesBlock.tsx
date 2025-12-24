import styles from './LicensesBlock.module.css';

interface LicensesBlockProps {
  id?: string;
}

export default function LicensesBlock({ id }: LicensesBlockProps) {
  return (
    <div id={id} className={styles.licensesBlock}>
      <h2 className={styles.title}>ДОВЕРИЕ НА ОСНОВАНИИ <span>ОФИЦИАЛЬНЫХ ЛИЦЕНЗИЙ:</span></h2>
      <p className={styles.description}>
        ОТКРЫТО ПОДТВЕРЖДАЕМ ЗАКОННОСТЬ И КАЧЕСТВО НАШЕЙ РАБОТЫ ДОКУМЕНТАМИ ГОСУДАРСТВЕННОГО ОБРАЗЦА И ОФИЦИАЛЬНЫМИ РЕКВИЗИТАМИ
      </p>
      
      <div className={styles.detailsList}>
        <div className={styles.detailItem}>
          <div className={styles.detailText}>ООО «400 "Альянс-А"»</div>
        </div>
        
        <div className={styles.detailItem}>
          <div className={styles.separator}></div>
          <div className={styles.detailText}>ИНН: 9701090979</div>
        </div>
        
        <div className={styles.detailItem}>
          <div className={styles.separator}></div>
          <div className={styles.detailText}>ОГРН: 5177746050422</div>
        </div>
        
        <div className={styles.detailItem}>
          <div className={styles.separator}></div>
          <div className={styles.detailText}>
            123557, г. Москва, вн. тер. г. муниципальный округ Пресненский, пер. Большой Тишинский, д. 26, к. 13-14, этаж 1 помещ. XII офис 4Г
          </div>
        </div>
        
        <div className={styles.detailItem}>
          <div className={styles.separator}></div>
          <div className={styles.detailText}>
            <span>Выписка из реестра лицензий на осуществление частной охранной деятельности</span>
            <span className={styles.pdfLink}>[.PDF]</span>
          </div>
          <div className={styles.separator}></div>

        </div>
      </div>
    </div>
  );
}



