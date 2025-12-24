'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  category: string;
  number: string;
  color: string;
  description?: string;
}

const services: Service[] = [
  { 
    id: 1, 
    title: 'Постовая охрана', 
    category: 'Сервисная охрана', 
    number: '0.1', 
    color: '#FF6B6B',
    description: 'Профессиональная охрана объектов с постоянным присутствием сотрудников'
  },
  { 
    id: 2, 
    title: 'Контрольно-пропускной пункт', 
    category: 'Сервисная охрана', 
    number: '0.2', 
    color: '#4ECDC4',
    description: 'Контроль доступа и пропускной режим на объектах'
  },
  { 
    id: 3, 
    title: 'Охрана организаций и предприятий', 
    category: 'Сервисная охрана', 
    number: '0.3', 
    color: '#45B7D1',
    description: 'Комплексная охрана бизнес-объектов'
  },
  { 
    id: 4, 
    title: 'Охрана промышленных объектов', 
    category: 'Сервисная охрана', 
    number: '0.4', 
    color: '#96CEB4',
    description: 'Специализированная охрана производственных площадок'
  },
  { 
    id: 5, 
    title: 'Охрана мероприятий', 
    category: 'Сервисная охрана', 
    number: '0.5', 
    color: '#FFEAA7',
    description: 'Обеспечение безопасности на публичных мероприятиях'
  },
  { 
    id: 6, 
    title: 'Reception Service', 
    category: 'Сервисная охрана', 
    number: '0.6', 
    color: '#DDA15E',
    description: 'Консьерж-сервис и прием посетителей'
  },
  { 
    id: 7, 
    title: 'Охрана жилых комплексов и частных домов', 
    category: 'Пультовая охрана', 
    number: '0.7', 
    color: '#BC6C25',
    description: 'Круглосуточная охрана жилых объектов'
  },
  { 
    id: 8, 
    title: 'Тревожная сигнализация для бизнеса', 
    category: 'Пультовая охрана', 
    number: '0.8', 
    color: '#6C5CE7',
    description: 'Системы тревожной сигнализации с мониторингом'
  },
  { 
    id: 9, 
    title: 'Вооруженная мобильная группа', 
    category: 'Пультовая охрана', 
    number: '0.9', 
    color: '#A29BFE',
    description: 'Быстрое реагирование на тревожные сигналы'
  },
  { 
    id: 10, 
    title: 'Личное сопровождение', 
    category: 'Сопровождение', 
    number: '0.10', 
    color: '#FD79A8',
    description: 'Персональная охрана и сопровождение'
  },
  { 
    id: 11, 
    title: 'Безопасность на мероприятиях', 
    category: 'Сопровождение', 
    number: '0.11', 
    color: '#FDCB6E',
    description: 'Организация безопасности на корпоративных мероприятиях'
  },
  { 
    id: 12, 
    title: 'Водитель–сопровождающий', 
    category: 'Сопровождение', 
    number: '0.12', 
    color: '#E17055',
    description: 'Услуги водителя с функциями охраны'
  },
  { 
    id: 13, 
    title: 'Сопровождение грузов', 
    category: 'Сопровождение', 
    number: '0.13', 
    color: '#00B894',
    description: 'Охрана и сопровождение грузоперевозок'
  },
];

const categories = [
  { id: 'all', label: 'Все услуги' },
  { id: 'Сервисная охрана', label: 'Сервисная охрана' },
  { id: 'Пультовая охрана', label: 'Пультовая охрана' },
  { id: 'Сопровождение', label: 'Сопровождение' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const servicesListRef = useRef<HTMLDivElement>(null);
  const colorStripRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageSectionRef = useRef<HTMLDivElement>(null);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    if (!servicesListRef.current || !colorStripRef.current || !imageSectionRef.current) return;

    const serviceElements = serviceRefs.current.filter(ref => ref !== null) as HTMLDivElement[];
    if (serviceElements.length === 0) return;

    const colorStrip = colorStripRef.current;
    const imageSection = imageSectionRef.current;

    gsap.set(colorStrip, { y: 0 });
    gsap.set(imageSection, { opacity: 0, visibility: 'hidden' });

    const firstServiceElement = serviceElements[0];
    const lastServiceElement = serviceElements[serviceElements.length - 1];

    if (firstServiceElement && lastServiceElement && servicesListRef.current) {
      setTimeout(() => {
        gsap.set(imageSection, {
          opacity: 1,
          visibility: 'visible',
        });
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const firstColorItem = colorStrip.firstElementChild as HTMLElement;
            if (!firstColorItem) {
              console.error('❌ Не найден первый элемент colorItem');
              return;
            }
            
            const rect = firstColorItem.getBoundingClientRect();
            const imageHeight = rect.height;
            
            gsap.set(imageSection, {
              opacity: 0,
              visibility: 'hidden',
            });
            
            const totalHeight = filteredServices.length * imageHeight;
            
            if (colorStrip) {
              colorStrip.style.height = `${totalHeight}px`;
            }

            const startY = 0;
            const endY = -(filteredServices.length - 1) * imageHeight;

            gsap.set(colorStrip, { y: startY, clearProps: 'transform' });

            const getImageBottom = () => {
              const imageRect = imageSection.getBoundingClientRect();
              return imageRect.top + imageRect.height;
            };
            
            console.log('🔧 Настройка анимации:');
            console.log('🔧 Реальная высота квадрата:', imageHeight, 'px');
            console.log('🔧 imageBottom (начальная):', getImageBottom(), 'px');
            console.log('🔧 startY:', startY, 'endY:', endY);
            console.log('🔧 Количество услуг:', filteredServices.length);

            const masterAnimation = gsap.timeline({ paused: true })
              .to(colorStrip, { 
                y: endY, 
                duration: 1, 
                ease: 'none',
                immediateRender: false
              });

            ScrollTrigger.create({
              trigger: firstServiceElement,
              start: () => `top ${getImageBottom()}px`,
              endTrigger: lastServiceElement,
              end: () => `bottom ${getImageBottom()}px`,
              animation: masterAnimation,
              scrub: true,
              invalidateOnRefresh: true,
              onEnter: () => {
                gsap.set(colorStrip, { y: startY });
                masterAnimation.progress(0);
                gsap.set(imageSection, {
                  opacity: 1,
                  visibility: 'visible',
                });
              },
              onEnterBack: () => {
                gsap.set(colorStrip, { y: startY });
                masterAnimation.progress(0);
                gsap.set(imageSection, {
                  opacity: 1,
                  visibility: 'visible',
                });
              },
              onLeave: () => {
                gsap.set(imageSection, {
                  opacity: 0,
                  visibility: 'hidden',
                });
              },
              onLeaveBack: () => {
                gsap.set(imageSection, {
                  opacity: 0,
                  visibility: 'hidden',
                });
              },
              onUpdate: (self) => {
                const progress = Math.max(0, Math.min(1, self.progress));
                const expectedY = startY + (endY - startY) * progress;
                const actualY = gsap.getProperty(colorStrip, 'y');
                const diff = Math.abs(Number(actualY) - expectedY);
                
                const currentIndex = Math.min(
                  Math.floor(progress * filteredServices.length),
                  filteredServices.length - 1
                );
                const currentService = filteredServices[currentIndex];
                
                console.log(`📊 Прогресс: ${Math.round(progress * 100)}% | Услуга: ${currentIndex + 1} (${currentService?.title || 'N/A'}) | Ожидаемый Y: ${Math.round(expectedY)}px | Фактический Y: ${Math.round(Number(actualY))}px | Разница: ${Math.round(diff)}px`);
                
                if (diff > 1) {
                  console.warn(`⚠️ Рассинхронизация обнаружена! Разница: ${Math.round(diff)}px`);
                }
              },
            });
          });
        });
      });
    }


    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredServices]);

  return (
    <div className={styles.servicesPage}>
      <Navigation />
      
      <Link href="/" className={styles.backButton}>назад</Link>

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <span className={styles.number}>[13]</span>
          <h1 className={styles.title}>УСЛУГИ</h1>
        </div>

        <div className={styles.description}>
          <p>
            Мы предлагаем профессиональные услуги охраны
            и консьерж-сервиса для компаний разных отраслей.
            Каждый проект строится на глубоком понимании
            бизнес-процессов и отраслевых требований. Доверив
            нам безопасность, вы получаете партнера, который
            работает на результат и обеспечивает стабильность
            вашего бизнеса.
          </p>
        </div>
      </div>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {activeCategory === category.id && <span className={styles.filterDot}></span>}
            {category.label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.servicesGrid} ref={servicesListRef}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className={styles.serviceCard}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceTitle}>"{service.title}"</div>
                  <div className={styles.serviceNumber}>[ {service.number} ]</div>
                </div>
                <div className={styles.serviceCategory}>
                  <span className={styles.categoryDot}>•</span>
                  {service.category}
                </div>
                {service.description && (
                  <div className={styles.serviceDescription}>{service.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.imageSection} ref={imageSectionRef}>
          <div className={styles.frameWrapper}>
            <div className={styles.frame}>
              <div className={styles.frameBorder}></div>
              <div className={styles.imageWrapper}>
                <div ref={colorStripRef} className={styles.colorStrip}>
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className={styles.colorItem}
                      style={{ backgroundColor: service.color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactBlock />
      <Footer />
    </div>
  );
}
