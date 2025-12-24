'use client';

import Navigation from '../components/Navigation';
import Image from 'next/image';
import ContentBlock from '../components/ContentBlock';
import LicensesBlock from '../components/LicensesBlock';
import LicensesInfoBlock from '../components/LicensesInfoBlock';
import ArsenalBlock from '../components/ArsenalBlock';
import TrustStoriesBlock from '../components/TrustStoriesBlock';
import Footer from '../components/Footer';
import styles from './page.module.css';

const menuItems = [
  { 
    id: 'history', 
    label: 'история компании',
    content: 'Компания «Альянс» была создана в октябре 2017 года, и за это время она зарекомендовала себя как надёжный партнёр в сфере охраны и кадровых решений.\nМы изначально поставили задачу изменить устоявшийся образ охранных услуг: вместо формального присутствия профессиональный сервис с человеческим лицом.\nНаши сотрудники всегда проходят тщательный отбор и обучение, безупречно выглядят, работают в форме или деловых костюмах, умеют грамотно общаться и быстро реагировать в нестандартных ситуациях.\nМы предлагаем современный подход: гибкость, лояльность и сервис, адаптированный под ваши реальные потребности. «Альянс» — это лицензированная охрана, высокое качество подбора и проверка персонала в долгосрочной перспективе.\nМы уверены в людях, с которыми работаем: это не просто охранники, а профессионалы, которым можно доверять. Внимание к деталям, клиентоориентированность и адекватное руководство позволяют нам создавать узнаваемый бренд и задавать новые стандарты на рынке.'
  },
  { 
    id: 'licenses', 
    label: 'лицензии',
  },
  { 
    id: 'projects', 
    label: 'наши проекты',
  },
  { 
    id: 'arsenal', 
    label: 'арсенал',
  },
  { 
    id: 'reviews', 
    label: 'отзывы клиентов',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Navigation />
      
      <div className={styles.heroSection}>
        <div className={styles.contentGrid}>
          <div className={styles.column1}>
            <a href="tel:+79995557788" className={styles.phone}>+7 999 555-77-88</a>
          </div>

          <div className={styles.column2}>
            <p className={styles.description}>
              Компания, основанная в 2017 году как охранное агентство, трансформировалась в кадровое, предлагающее инновационные решения подбора персонала.
            </p>
          </div>

          <div className={styles.column3}>
            <div className={styles.clientLinks}>
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className={styles.clientLink}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/about.png"
                alt="Company team"
                width={600}
                height={400}
                className={styles.heroImage}
              />
            </div>
          </div>

          <div className={styles.column4}>
            <a href="mailto:compay.mail@mail.ru" className={styles.email}>compay.mail@mail.ru</a>
          </div>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <div className={styles.scrollIndicator}>
              <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14H14V46H10V14Z" fill="white" fillOpacity="0.5"/>
                <path d="M14 14L14 11L26 11V14L14 14Z" fill="white" fillOpacity="0.5"/>
                <path d="M14 49V46H26V49H14Z" fill="white" fillOpacity="0.5"/>
                <path d="M98 14H102V46H98V14Z" fill="white" fillOpacity="0.5"/>
                <path d="M86 14L86 11L98 11V14H86Z" fill="white" fillOpacity="0.5"/>
                <path d="M86 49L86 46H98V49H86Z" fill="white" fillOpacity="0.5"/>
                <path d="M58 41.7842L66.5664 32.4248H72L59.0186 46.4248H52.9814L40 32.4248H45.2529L54 42.0439V14H58V41.7842Z" fill="white"/>
              </svg>
            </div>
            <h1 className={styles.logo}>АЛЬЯНС</h1>
            <p className={styles.logoSubtitle}>ТМ</p>
          </div>
        </div>

        <div className={styles.contentBlocks}>
          <ContentBlock
            key={menuItems[0].id}
            id={menuItems[0].id}
            title={menuItems[0].label}
            content={menuItems[0].content!}
          />
          <LicensesBlock id="licenses" />
          <LicensesInfoBlock id="projects" />
          <ArsenalBlock id="arsenal" />
          <TrustStoriesBlock id="reviews" />
          {menuItems.slice(1).filter(item => item.id !== 'arsenal' && item.id !== 'reviews' && item.id !== 'licenses' && item.id !== 'projects' && item.content).map((item) => (
            <ContentBlock
              key={item.id}
              id={item.id}
              title={item.label}
              content={item.content!}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}



