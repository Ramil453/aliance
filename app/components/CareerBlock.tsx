import Image from 'next/image';
import styles from './CareerBlock.module.css';
import ActionButton from './ActionButton';

export default function CareerBlock() {
  return (
		<div className={styles.careerBlock}>
			<div className={styles.container}>
				<div className={styles.titleSection}>
					<h2 className={styles.mainTitle}>Группа компаний «Альянс»:</h2>
					<h3 className={styles.subtitle}>Сильная команда. надёжная работа</h3>
					<h2 className={styles.hideText} style={{ width: '70%' }}>
						Наша компания обеспечивает стабильность и комфортные
					</h2>
					<h3
						className={styles.hideText}
						style={{ marginTop: '-10px', marginBottom: '10px' }}
					>
						условия для работы
					</h3>
				</div>

				<p className={styles.benefits}>
					Гарантированные выплаты, карьерный рост, <br /> система бонусов
				</p>
				<p className={styles.hideText} style={{ width: '60%' }}>
					а также гарантированные выплаты и систему денежных вонаграждений
				</p>

				<div className={styles.imagesSection}>
					<Image
						src='/slide.png'
						alt='Career slide'
						width={731}
						height={100}
						className={styles.slideImage}
					/>
					<Image
						src='/1280/pic_1.png'
						alt='Career picture'
						width={600}
						height={400}
						className={styles.picImage}
					/>
					<Image
						src='/career.png'
						alt='Career picture'
						width={600}
						height={400}
						className={styles.hideImg}
					/>
				</div>
				<div className={styles.callToActionContainer}>
					<p className={styles.callToAction}>
						Присоединяйтесь к нам и развивайтесь вместе с командой
					</p>
					<p className={styles.hideDescription}>
						Присоединяйтесь к нам и станьте частью надёжной команды
						профессионалов
					</p>
					<div className={styles.buttonContainer}>
						<ActionButton>Построить карьеру</ActionButton>
					</div>
				</div>
			</div>
		</div>
	)
}

