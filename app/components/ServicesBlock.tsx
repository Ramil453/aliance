'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ServicesBlock.module.css';
import NavigationButtons from './NavigationButtons';
import ActionButton from './ActionButton';

const services = [
  {
    id: 1,
    title: 'Охрана организаций',
    code: 'REC',
  },
  {
    id: 2,
    title: 'Охрана мероприятий',
    code: 'REC',
  },
  {
    id: 3,
    title: 'Пост КПП',
    code: 'REC',
  },
  {
    id: 4,
    title: 'Охрана ЖК',
    code: 'REC',
  },
  {
    id: 5,
    title: 'Охрана промышленных объектов',
    code: 'REC',
  },
];

export default function ServicesBlock() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
		<div className={styles.servicesBlock}>
			<div className={styles.header}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>ПРОФЕССИОНАЛЬНАЯ</h2>
					<h2 className={styles.title}>БЕЗОПАСНОСТЬ БИЗНЕСА</h2>
					<h2 className={styles.hideText}>ПОПУЛЯРНЫЕ</h2>
					<h2 className={styles.hideText}>УСЛУГИ</h2>
				</div>
				<ActionButton>Подобрать услугу</ActionButton>
			</div>

			<Swiper
				modules={[Navigation, Mousewheel]}
				spaceBetween={15}
				slidesPerView={4}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				className={styles.swiper}
				simulateTouch={true}
				allowTouchMove={true}
				touchEventsTarget='container'
				touchRatio={1}
				threshold={5}
				mousewheel={{
					forceToAxis: true,
					sensitivity: 1,
					releaseOnEdges: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 'auto',
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 'auto',
						spaceBetween: 15,
					},
					1280: {
						slidesPerView: 'auto',
						spaceBetween: 15,
					},
				}}
			>
				{services.map(service => (
					<SwiperSlide key={service.id}>
						<div className={styles.serviceCard}>
							<div className={styles.serviceHeader}>
								<Image
									src='/1280/icons/rec.svg'
									alt='rec'
									width={30}
									height={9}
									className={styles.recIcon}
								/>
							</div>
							<div className={styles.serviceTitle}>{service.title}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

<div className={styles.none}>

			<div
				className={styles.navigationContainer}
			>
				<NavigationButtons onPrev={handlePrev} onNext={handleNext} />
			</div>
</div>
		</div>
	)
}

