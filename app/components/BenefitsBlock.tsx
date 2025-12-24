import Image from 'next/image';
import styles from './BenefitsBlock.module.css';
import ActionButton from './ActionButton';

const benefits = [
  { id: 1, title: 'ГАРАНТИРОВАННЫЕ ВЫПЛАТЫ В СРОК', number: '0.1' },
  { id: 2, title: 'СТАБИЛЬНЫЙ ГРАФИК', number: '0.2' },
  { id: 3, title: 'КОМФОРТНЫЕ УСЛОВИЯ НА РАБОЧЕМ МЕСТЕ', number: '0.3' },
  { id: 4, title: 'ПЕРСПЕКТИВЫ КАРЬЕРНОГО РОСТА', number: '0.4' },
  { id: 5, title: 'ВЫСОКИЙ УРОВЕНЬ ВАШЕЙ БЕЗОПАСНОСТИ', number: '0.5' },
];

export default function BenefitsBlock() {
  return (
    <div className={styles.benefitsBlock}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <p className={styles.description}>
            В нашей компании мы создаём условия для вашей уверенной работы и профессионального развития. Наша цель — стабильность, безопасность и реальные перспективы для каждого члена команды
          </p>
          <ActionButton>Подать заявку</ActionButton>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.benefitsList}>
            {benefits.map((benefit) => (
              <div key={benefit.id} className={styles.benefitItem}>
                <span className={styles.benefitTitle}>{benefit.title}</span>
                <span className={styles.benefitNumber}>[ {benefit.number} ]</span>
              </div>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/pic_2.png"
              alt="Security monitoring"
              width={800}
              height={600}
              className={styles.benefitImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}




