import Image from 'next/image';
import Navigation from '../components/Navigation';
import styles from './page.module.css';

export default function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <Navigation />
      
      <div className={styles.topLeft}>
        <p className={styles.description}>
         <span>  Мы подбираем решения для бизнеса, которые <br /></span> реально работают. Свяжитесь с нами, и мы определим <br /> оптимальные меры безопасности под ваши задачи.
        </p>
        <ul className={styles.contactList}>
          <li>
            <a href="tel:+79995557788" className={styles.contactLink}>+7 999 555-77-88</a>
          </li>
          <li>
            <a href="mailto:compay.mail@mail.ru" className={styles.contactLink}>compay.mail@mail.ru</a>
          </li>
          <li>
            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Telegram</a>
          </li>
          <li>
            <a href="https://wa.me/79995557788" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Whats App</a>
          </li>
        </ul>
      </div>

      <div className={styles.topRight}>
        <a href="#" className={styles.requisites}>рекивизиты</a>
      </div>

      <div className={styles.centerSection}>
        <Image
          src="/1280/A-A.svg"
          alt="A-A Logo"
          width={600}
          height={400}
          className={styles.logoImage}
        />
      </div>

      <div className={styles.rightSection}>
        <Image
          src="/1280/page_cont_pic.png"
          alt="Contact"
          width={400}
          height={500}
          className={styles.contactPic}
        />
      </div>

      <div className={styles.bottomLeft}>
        <div className={styles.address}>
          123557, город Москва, Большой Тишинский пер, <br /> д. 26 к. 13-14, этаж 1 помещ. XII офис 4Г
        </div>
      </div>

      <div className={styles.bottomRight}>
        <a href="#" className={styles.licenses}>лицензии</a>
      </div>
    </div>
  );
}

