'use client';

import { useState } from 'react';
import ServiceItem from './ServiceItem';
import ActionButton from './ActionButton';
import styles from './Hero.module.css';

const services = [
  {
    id: 0,
    label: 'бизнесу',
    serviceText: 'СЕРВИСНАЯ ОХРАНА /',
    imageSrc: '/service_1.png',
    imageAlt: 'Сервисная охрана',
    imageWidth: 362,
    imageHeight: 200,
  },
  {
    id: 1,
    label: 'бизнесу',
    serviceText: 'RECEPTION SERVICE /',
    imageSrc: '/service_2.png',
    imageAlt: 'Reception Service',
    imageWidth: 362,
    imageHeight: 277,
  },
  {
    id: 2,
    label: 'всем',
    serviceText: 'БЕЗОПАСТНОСТЬ НА МЕРОПРИЯТИЯХ /',
    imageSrc: '/service_3.png',
    imageAlt: 'Безопасность на мероприятиях',
    imageWidth: 362,
    imageHeight: 277,
  },
  {
    id: 3,
    label: 'Всем',
    serviceText: 'ТРАНСПОРТНАЯ БЕЗОПАСНОСТЬ',
    imageSrc: '/service_4.png',
    imageAlt: 'Транспортная безопасность',
    imageWidth: 362,
    imageHeight: 277,
  },
];

export default function Hero() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
		<>
			<div className={styles.hero}>
				<div style={{ marginBottom: '15%' }}>
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>АЛЬЯНС</h1>
						<p className={styles.titleSubtitle}>ГРУППА КОМПАНИЙ</p>
						<div className={styles.titleLetter}>A</div>
					</div>

					<div className={styles.textGrid}>
						<div className={styles.textLeft}>
							Мы специализируемся на предоставлении высококвалифицированных
							специалистов в сферах охраны и консьерж-сервиса.
						</div>
						<div className={styles.hideTextLeft} style={{ width: '68%' }}>
							Обеспечиваем ваш комфорт и безопасность, предоставляя
							профессиональных сотрудников в сфере охраны и консьерж-сервиса.
						</div>

						<div className={styles.textRight}>
							Наша команда экспертов тщательно отбирает кандидатов, основываясь
							на глубоком понимании потребностей вашего бизнеса и специфики
							отрасли. <br />
							<a className={styles.phone} href='tel:+79995557788'>
								+7 999 555-77-88
							</a>
							<a className={styles.about} href='tel:+79995557788'>
								О КОМПАНИИ
							</a>
						</div>
						<div className={styles.hideTextRight} style={{ width: '68%' }}>
							Мы тщательно подбираем персонал, исходя из задач вашего бизнеса и
							требований отрасли. Позвоните, и мы подберем персонал именно для
							вас. <br />
							<a className={styles.phone} href='tel:+79995557788'>
								+7 999 555-77-88
							</a>
						</div>
					</div>
				</div>

				<div className={styles.bottomSection}>
					<div
						className={`${styles.services} ${
							activeService !== null ? styles.hasActive : ''
						}`}
					>
						{services.map(service => (
							<ServiceItem
								key={service.id}
								label={service.label}
								serviceText={service.serviceText}
								imageSrc={service.imageSrc}
								imageAlt={service.imageAlt}
								imageWidth={service.imageWidth}
								imageHeight={service.imageHeight}
								isActive={activeService === service.id}
								hasActiveHover={activeService !== null}
								onMouseEnter={() => setActiveService(service.id)}
								onMouseLeave={() => setActiveService(null)}
							/>
						))}
					</div>

					<div className={styles.buttons}>
						<div className={styles.aboutBtn}>

						<ActionButton variant='secondary'>О компании</ActionButton>
						</div>
						<div className={styles.btn}>

						<ActionButton variant='accent'>Оставить заявку</ActionButton>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

