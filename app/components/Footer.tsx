'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceItem from './ServiceItem';
import styles from './Footer.module.css';

const services = [
	{
		id: 0,
		label: 'бизнесу',
		serviceText: 'охрана организаций /',
		imageSrc: '/service_1.png',
		imageAlt: 'Сервисная охрана',
		imageWidth: 362,
		imageHeight: 200,
	},
	{
		id: 1,
		label: 'бизнесу',
		serviceText: 'RECEPTION SERVICE',
		imageSrc: '/service_2.png',
		imageAlt: 'Reception Service',
		imageWidth: 362,
		imageHeight: 277,
	},
	{
		id: 2,
		label: 'всем',
		serviceText: 'БЕЗОПАСНОСТЬ НА МЕРОПРИЯТИЯХ /',
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
]

export default function Footer() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
		<div className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.services}>
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

				<div className={styles.navigation}>
					<div className={styles.navSection}>
						<h3 className={styles.navTitle}>Сайт</h3>
						<div className={styles.navItems}>
							<div className={styles.navItem}>Главная</div>
							<div className={styles.navItem}>О компании</div>
							<div className={styles.navItem}>Услуги</div>
							<div className={styles.navItem}>Клиентам</div>
							<div className={styles.navItem}>Вакансии</div>
						</div>
					</div>
					<div className={styles.navSection}>
						<h3 className={styles.navTitle}>Контакты</h3>
						<div className={styles.navItems}>
							<div className={styles.navItem}>+7 999 555-77-88</div>
							<div className={styles.navItem}>a9701090979@gmail.com</div>
							<div className={styles.navItem}>Telegram</div>
							<div className={styles.navItem}>Whats App</div>
							<Link href='/contacts' className={styles.navItem}>
								Контакты
							</Link>
						</div>
						<div className={styles.footerBotto}>
							<div className={styles.footerBottomText}>
								ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
							</div>
							<div className={styles.footerBottomText}>
								ЛИЦЕНЗИИ НА ОСУЩЕСТВЛЕНИЕ ПРОФЕССИОНАЛЬНОЙ ДЕЯТЕЛЬНОСТИ
							</div>
							<div className={styles.footerBottomText}>
								ДИЗАЙН: <span> Lisa R</span>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.titleContainer}>
				<h1 className={styles.title}>АЛЬЯНС</h1>
				<p className={styles.titleSubtitle}>ТМ</p>
				<div className={styles.titleLetter}>A</div>
			</div>

			<div className={styles.footerBottom}>
				<div className={styles.footerBottomText}>
					ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
				</div>
				<div className={styles.footerBottomText}>
					ЛИЦЕНЗИИ НА ОСУЩЕСТВЛЕНИЕ ПРОФЕССИОНАЛЬНОЙ ДЕЯТЕЛЬНОСТИ
				</div>
				<div className={styles.footerBottomText}>
					ДИЗАЙН: <span> Lisa R</span>{' '}
				</div>
			</div>
		</div>
	)
}

