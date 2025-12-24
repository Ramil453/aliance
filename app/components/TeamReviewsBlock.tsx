'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNav, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigationButtons from './NavigationButtons';
import styles from './TeamReviewsBlock.module.css';

const testimonials = [
  {
    id: 1,
    name: 'КОНСТАНТИН ШУМИЛОВ',
    position: 'НАЧАЛЬНИК ОХРАНЫ',
    years: '3,5',
    employeeNumber: '1-50',
    image: '/people_1.png',
    review: 'Работа в частном охранном агентстве «Альянс-А» позволяет развивать профессиональные навыки и обеспечивать высокий уровень безопасности клиентов. Наша команда состоит из опытных специалистов, готовых быстро реагировать на вызовы. Я горжусь тем, что руковожу таким сплоченным коллективом, стремящимся к совершенству.',
  },
  {
    id: 2,
    name: 'АРТУР СОЛОВЬЕВ',
    position: 'ДИРЕКТОР ПО БЕЗОПАСТНОСТИ',
    years: '2',
    employeeNumber: '2-50',
    image: '/people_2.png',
    review: 'Работа в частном охранном агентстве «Альянс-А» позволяет развивать профессиональные навыки и обеспечивать высокий уровень безопасности клиентов. Наша команда состоит из опытных специалистов, готовых быстро реагировать на вызовы. Я горжусь тем, что руковожу таким сплоченным коллективом, стремящимся к совершенству.',
  },
];

export default function TeamReviewsBlock() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={styles.teamReviewsBlock}>
      <h2 className={styles.title}>МЫ ГОДИМСЯ ЛЮДЬМИ  <span>КОТОРЫЕ РАБОТАЮТ У НАС</span> </h2>
      
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[SwiperNav, Mousewheel]}
          spaceBetween={40}
          slidesPerView={1.3}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={styles.slideContent}>
                <div className={styles.leftSection}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={400}
                      height={500}
                      className={styles.employeeImage}
                    />
                    <Image
                      src="/setka.png"
                      alt="Grid overlay"
                      width={412}
                      height={380}
                      className={styles.setkaOverlay}
                    />
                    <div className={styles.badge}>
                      [ {testimonial.employeeNumber} СОТРУДНИК ]
                    </div>
                    <div className={styles.nameBox}>
                      <div className={styles.name}>{testimonial.name}</div>
                      <div className={styles.position}>{testimonial.position}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.rightSection}>
                  <div className={styles.slideNumber}>{index + 1}]</div>
                  <h3 className={styles.yearsTitle}>
                    РАБОТАЕТ В КОМПАНИИ {testimonial.years} ГОДА
                  </h3>
                  <div className={styles.reviewContainer}>
                  <div className={styles.reviewLabel}>[ отзыв</div>
                    <p className={styles.reviewText}>{testimonial.review}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigationContainer}>
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </div>
  );
}

