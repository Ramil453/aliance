'use client';

import { useState } from 'react';
import ActionButton from './ActionButton';
import styles from './FAQBlock.module.css';

const faqItems = [
  {
    id: 1,
    question: 'КАК ОПРЕДЕЛЯЕТСЯ СТОИМОСТЬ ОХРАННЫХ УСЛУГ?',
    answer: 'Нам часто задают этот вопрос, и самый честный ответ на него: фиксированной ставки нет. Стоимость услуг нашего частного охранного агентства формируется индивидуально, исходя из конкретных задач и параметров вашего объекта. Почему мы действуем именно так? Потому что потребности бизнеса, офиса или мероприятия — уникальны. Охрана склада с материальными ценностями и охрана коттеджного поселка требуют разных решений, техники и уровня подготовки сотрудников.',
  },
  {
    id: 2,
    question: 'В КАКИХ РЕГИОНАХ МЫ ОБЕСПЕЧИВАЕМ БЕЗОПАСНОСТЬ?',
    answer: 'Текущие проекты есть в Санкт-Петербурге и Москве, но мы можем заключить договор и оказать охранные услуги в любом регионе России.',
  },
  {
    id: 3,
    question: 'КАКОВЫ СРОКИ ЗАПУСКА И ОКАЗАНИЯ УСЛУГ?',
    answer: '',
  },
  {
    id: 4,
    question: 'КАК ФОРМИРУЕТСЯ ИНДИВИДУАЛЬНЫЙ ПАКЕТ УСЛУГ БЕЗОПАСНОСТИ?',
    answer: '',
  },
  {
    id: 5,
    question: 'КТО БУДЕТ ВАШИМ ПЕРСОНАЛЬНЫМ КОНТАКТНЫМ ЛИЦОМ?',
    answer: '',
  },
];

export default function FAQBlock() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.faqBlock}>
      <div className={styles.header}>
        <h2 className={styles.title}>ВАЖНЫЕ ВОПРОСЫ –  <span> ЧЕСТНЫЕ ОТВЕТЫ</span></h2>
        <ActionButton>Заказать консультацию</ActionButton>
      </div>

      <div className={styles.faqList}>
        {faqItems.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${expandedId === item.id ? styles.active : ''}`}
              onClick={() => toggleQuestion(item.id)}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={`${styles.plusIcon} ${expandedId === item.id ? styles.active : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 0H13V9H11V0Z" fill="white" fill-opacity="0.5" />
  <path d="M11 15H13V24H11V15Z" fill="white" fill-opacity="0.5" />
  <path d="M24 11V13H15V11H24Z" fill="white" fill-opacity="0.5" />
  <path d="M9 11V13H0L8.74279e-08 11H9Z" fill="white" fill-opacity="0.5" />
</svg>
              </span>
            </button>
            {expandedId === item.id && item.answer && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}







