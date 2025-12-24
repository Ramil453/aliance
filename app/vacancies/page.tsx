import Navigation from '../components/Navigation';
import VacanciesList from '../components/VacanciesList';
import BenefitsBlock from '../components/BenefitsBlock';
import ArsenalBlock from '../components/ArsenalBlock';
import TeamReviewsBlock from '../components/TeamReviewsBlock';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function VacanciesPage() {
  return (
    <div className={styles.vacanciesPage}>
      <Navigation />
      
      <div className={styles.heroSection}>
        <div className={styles.titleSection}>
          <div className={styles.titleLine}>
            <h1 className={styles.title}>РАБОТА</h1>
          </div>
          <div className={styles.titleLine}>
            <h1 className={styles.title}>В КОМПАНИИ</h1>
          </div>
          <div className={styles.titleLine}>
            <h1 className={styles.title}>АЛЬЯНС</h1>
          </div>
        </div>

        <div className={styles.textSection}>
          <div className={styles.textBlock}>
            <p>
              Добро пожаловать на страницу для соискателей нашего охранного агентства! Мы ищем ответственных и целеустремленных людей, готовых стать частью нашей команды. У нас вы получите своевременную и честную оплату труда, что позволяет вам сосредоточиться на выполнении своих обязанностей.
            </p>
          </div>
          
          <div className={styles.textBlock}>
            <p>
              Мы обеспечиваем комфортные условия работы и гибкий подход со стороны руководства, чтобы каждый сотрудник чувствовал себя ценным членом команды. Кроме того, мы предлагаем обучение и возможности карьерного роста, чтобы вы могли развиваться вместе с нами. Присоединяйтесь к нам и откройте новые горизонты в сфере безопасности!
            </p>
          </div>
        </div>
      </div>

      <VacanciesList />
      <BenefitsBlock />
      <ArsenalBlock />
      <TeamReviewsBlock />
      <ContactBlock />
      <Footer />
    </div>
  );
}







