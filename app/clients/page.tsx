'use client';

import { useRef } from 'react';
import Navigation from '../components/Navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNav, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigationButtons from '../components/NavigationButtons';
import IndustriesBlock from '../components/IndustriesBlock';
import ProjectsBlock from '../components/ProjectsBlock';
import ServicesBlock from '../components/ServicesBlock';
import FAQBlock from '../components/FAQBlock';
import TrustStoriesBlock from '../components/TrustStoriesBlock';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';
import styles from './page.module.css';

const slides = [
  {
    id: 1,
    columns: [
      {
        id: 1,
        title: '4',
        subtitle: 'ДЕПАРТАМЕНТА',
        description: '«Альянс» объединяет ключевые направления охраны и сервиса. Каждый департамент отвечает за своё направление, обеспечивая бизнесу комплексную защиту',
      },
      {
        id: 2,
        title: 'A-1',
        subtitle: 'СЕРВИСНАЯ ОХРАНА',
        descriptions: [
          'Физическая охрана объектов любого масштаба: от офисов до производственных площадок',
          'Подготовленный персонал и собственные технологии гарантируют высокий уровень безопасности',
        ],
      },
      {
        id: 3,
        title: 'A-2',
        subtitle: 'RECEPTION SERVICE',
        descriptions: [
          'Контроль доступа и сервис для гостей в одном решении',
          'Мы помогаем снизить затраты на персонал и создать комфортное первое впечатление',
        ],
      },
    ],
  },
  {
    id: 2,
    columns: [
      {
        id: 1,
        title: '4',
        subtitle: 'ДЕПАРТАМЕНТА',
        description: '«Альянс» объединяет ключевые направления охраны и сервиса. Каждый департамент отвечает за своё направление, обеспечивая бизнесу комплексную защиту',
      },
      {
        id: 2,
        title: '-3',
        subtitle: 'НА МЕРОПРИЯТИЯХ',
        descriptions: [
          'События любого формата: корпоративы, речи, концерты и фестивали',
          'Создаём индивидуальные планы для обеспечения безопасности гостей',
        ],
      },
      {
        id: 3,
        title: 'A-4',
        subtitle: 'ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ',
        descriptions: [
          'Круглосуточный мониторинг и сопровождение транспортных объектов и маршрутов',
          'Современное оборудование и опытные сотрудники гарантируют надёжную защиту',
        ],
      },
    ],
  },
];

export default function ClientsPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={styles.clientsPage}>
      <Navigation />
      
      <div className={styles.titleSection}>
        <div className={styles.titleLine}>
          <h1 className={styles.title}>НАДЁЖНЫЕ</h1>
        </div>
        <div className={styles.titleLine}>
          <h1 className={styles.title}>РЕШЕНИЯ</h1>
        </div>
        <div className={styles.titleLine}>
          <h1 className={styles.title}>В СФЕРЕ ОХРАНЫ</h1>
        </div>
      </div>

      <div className={styles.textGrid}>
        <div className={styles.textLeft}>
          Мы подбираем сотрудников для охраны и консьерж-
          сервиса — тех, кто будет соответствовать вашим
          требованиям по опыту, уровню ответственности
          и квалификации. Для каждого объекта формируем
          индивидуальное решение, обеспечивая надежную
          работу службы безопасности.
        </div>
        
        <div className={styles.textRight}>
          Наша задача — не просто найти персонал, а собрать
          команду, которой можно доверить контроль
          и безопасность на объекте. Мы тщательно проверяем
          каждого кандидата и сопровождаем процесс
          трудоустройства, чтобы вы получили готовое решение
          под ключ.
        </div>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[SwiperNav, Mousewheel]}
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.swiper}
          simulateTouch={true}
          allowTouchMove={true}
          touchEventsTarget="container"
          touchRatio={1}
          threshold={5}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: false,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slideContent}>
                {slide.columns.map((column) => (
                  <div key={column.id} className={styles.column}>
                    <div className={styles.columnTitle}>{column.title}</div>
                    <div className={styles.columnSubtitle}>{column.subtitle}</div>
                    {column.description && (
                      <div className={styles.columnDescription}>
                        <p>{column.description}</p>
                        <div className={styles.divider}></div>

                      </div>
                    )}
                    {column.descriptions && (
                      <div className={styles.columnDescriptions}>
                        {column.descriptions.map((desc, index) => (
                          <div key={index}>
                            <p>{desc}</p>
                            <div className={styles.divider}></div>

                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigationContainer}>
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>

        <IndustriesBlock />
        <ServicesBlock />
        <ProjectsBlock />
        <FAQBlock />
        <TrustStoriesBlock />
        <ContactBlock />
        <Footer />
      </div>
    );
  }
