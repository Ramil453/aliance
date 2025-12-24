'use client';

import { useState } from 'react';
import styles from './VacanciesList.module.css';
import ActionButton from './ActionButton';

const filters = [
  { id: 'all', label: 'Все вакансии' },
  { id: 'security', label: 'Охрана' },
  { id: 'management', label: 'Руководящий состав' },
  { id: 'office', label: 'Офисная работа' },
  { id: 'junior', label: 'Молодым специалистам' },
];

const vacancies = [
  {
    id: 1,
    title: 'НАЧАЛЬНИК ОХРАНЫ ОБЪЕКТОВ',
    tags: ['Руководящий состав', 'Охрана'],
    payment: '100.000 ₽',
    location: 'Санкт-Петербург',
    experience: '3-5 лет',
    employment: 'Рабочая неделя',
    filterIds: ['management', 'security'],
  },
  {
    id: 2,
    title: 'ОПЕРАТИВНЫЙ ДЕЖУРНЫЙ',
    tags: ['Молодым специалистам'],
    payment: 'сдельная',
    location: 'удалённо',
    experience: 'от 1 года',
    employment: 'быть на связи по 12 часов ежедневно',
    filterIds: ['junior'],
  },
  {
    id: 3,
    title: 'СОТРУДНИК ОХРАНЫ',
    tags: ['Охрана'],
    payment: 'от 40.000 ₽',
    location: 'Санкт-Петербург',
    experience: 'без опыта',
    employment: 'Рабочая неделя/Смены/Вахты',
    filterIds: ['security'],
  },
];

export default function VacanciesList() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredVacancies = activeFilter === 'all' 
    ? vacancies 
    : vacancies.filter(vacancy => vacancy.filterIds.includes(activeFilter));

  const displayedVacancies = showAll ? filteredVacancies : filteredVacancies.slice(0, 3);
  const hasMore = filteredVacancies.length > 3;

  return (
    <div className={styles.vacanciesList}>
      <div className={styles.header}>
        <h2 className={styles.title}>ОТКРЫТЫЕ ВАКАНСИИ</h2>
        <div className={styles.description}>
          <p>
            Мы предлагаем стабильность, прозрачные условия и возможности для карьерного роста. Выберите позицию и присоединяйтесь к команде, которая задаёт стандарты в сфере безопасности.
          </p>
        </div>
      </div>

      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
            onClick={() => {
              setActiveFilter(filter.id);
              setExpandedVacancy(null);
              setShowAll(false);
            }}
          >
            {activeFilter === filter.id && <span className={styles.filterDot}>●</span>}
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.divider}></div>

      <div className={styles.vacanciesContainer}>
        {displayedVacancies.map((vacancy) => {
          const isExpanded = expandedVacancy === vacancy.id;
          return (
            <div key={vacancy.id} className={styles.vacancyWrapper}>
              <div 
                className={`${styles.vacancyRow} ${isExpanded ? styles.vacancyRowExpanded : ''}`}
                onClick={() => setExpandedVacancy(isExpanded ? null : vacancy.id)}
              >
                <div className={styles.tagsColumn}>
                  {vacancy.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.titleColumn}>
                  {vacancy.title}
                </div>
                
                <div className={styles.detailsColumn}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Оплата:</span>
                    <span className={styles.detailValue}>{vacancy.payment}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Локация:</span>
                    <span className={styles.detailValue}>{vacancy.location}</span>
                  </div>
                  {isExpanded && (
                    <>
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Опыт работы:</span>
                        <span className={styles.detailValue}>{vacancy.experience}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Тип занятости:</span>
                        <span className={styles.detailValue}>{vacancy.employment}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  className={styles.expandButton} 
                  aria-label={isExpanded ? "Свернуть" : "Развернуть"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedVacancy(isExpanded ? null : vacancy.id);
                  }}
                >
                  <span className={`${styles.plusIcon} ${isExpanded ? styles.active : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 0H13V9H11V0Z" fill="white" fillOpacity="0.5" />
                      <path d="M11 15H13V24H11V15Z" fill="white" fillOpacity="0.5" />
                      <path d="M24 11V13H15V11H24Z" fill="white" fillOpacity="0.5" />
                      <path d="M9 11V13H0L8.74279e-08 11H9Z" fill="white" fillOpacity="0.5" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && !showAll && (
        <div className={styles.footer}>
          <ActionButton onClick={() => setShowAll(true)}>Показать ещё</ActionButton>
        </div>
      )}
    </div>
  );
}




