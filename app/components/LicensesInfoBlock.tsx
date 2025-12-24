'use client';

import { useState } from 'react';
import styles from './LicensesInfoBlock.module.css';
import ActionButton from './ActionButton';

const filters = [
  { id: 'all', label: 'Все проекты', active: true },
  { id: 'organizations', label: 'Организации и предприятия' },
  { id: 'residential', label: 'Жилые комплексы' },
  { id: 'medical', label: 'Медицинские комплексы' },
  { id: 'children', label: 'Детская безопасность' },
];

const projects = [
  {
    id: 1,
    name: 'Специализированный Дом ребенка №3 (психоневрологический) Фрунзенского района',
    status: 'Завершён',
    type: 'Медицинский комплекс / Детская безопасность',
    filterId: 'medical',
    year: '2024',
    description: 'Предоставление медицинской, образовательной и воспитательной помощи детям раннего возраста без попечения родителей с психоневрологическими диагнозами, поражениями ЦНС или врожденными аномалиями развития',
    contracts: 5,
    years: 1,
  },
  {
    id: 2,
    name: 'Дворец детского (юношеского) творчества Фрунзенского района Санкт-Петербурга',
    status: 'Действующий',
    type: 'Образовательная организация / Детская безопасность',
    filterId: 'children',
    year: '2024 / Н.В.',
    description: 'Образовательная деятельность по различным направлениям (занятия в кружках и студиях, мастер-классы, мероприятия для детей, научно-исследовательская деятельность)',
    contracts: 5,
    years: 2,
  },
  {
    id: 3,
    name: 'Детский городской многопрофильный клинический специализированный центр высоких медицинских технологий',
    status: 'Действующий',
    type: 'Медицинский комплекс / Детская безопасность',
    filterId: 'medical',
    year: '2024 / 2025',
    description: 'Предоставление медицинской помощи детям',
    contracts: 5,
    years: 1,
  },
  {
    id: 4,
    name: 'Автобаза Правительства Ленинградской области',
    status: 'Завершён',
    type: 'Транспортная организация',
    filterId: 'organizations',
    year: '2024 / 2025',
    description: 'Обеспечение транспортного обслуживания государственных органов Ленинградской области',
    contracts: 5,
    years: 1,
  },
  {
    id: 5,
    name: 'Культурно-досуговый центр «Ижорский»',
    status: 'Завершён',
    type: 'Правительственная организация',
    filterId: 'organizations',
    year: '2025',
    description: 'Организация и проведение массовых культурных и спортивных мероприятий, направленных на вовлечение населения в активный досуг, а также строительство культурно-массовых объектов',
    contracts: 5,
    years: 1,
  },
  {
    id: 6,
    name: 'Детская художественная школа Санкт-Петербурга',
    status: 'Завершён',
    type: 'Образовательная организация / Детская безопасность',
    filterId: 'children',
    year: '2025',
    description: 'Преподавание дисциплин (рисунок, живопись, композиция, скульптура, история искусств и декоративно-прикладное искусство) для развития творческого мышления у детей',
    contracts: 5,
    years: 1,
  },
  {
    id: 7,
    name: 'Детская городская клиническая больница №5 им. Н.Ф. Филатова',
    status: 'Действующий',
    type: 'Медицинский комплекс / Детская безопасность',
    filterId: 'medical',
    year: '2025 / Н.В.',
    description: 'Оказание медицинских услуг различной направленности детям',
    contracts: 5,
    years: 1,
  },
  {
    id: 8,
    name: 'Детская школа искусств им. М.А.Балакирева',
    status: 'Завершён',
    type: 'Образовательная организация / Детская безопасность',
    filterId: 'children',
    year: '2025',
    description: 'Развитие творческих способностей детей в различных областях искусства: музыка, изобразительное искусство, хореография и другие',
    contracts: 5,
    years: 1,
  },
  {
    id: 9,
    name: 'Психоневрологический диспансер № 6',
    status: 'Завершён',
    type: 'Медицинский комплекс',
    filterId: 'medical',
    year: '2025',
    description: 'Диагностика, лечение и профилактика психических расстройств, а также реабилитация пациентов и оказанием им психосоциальной помощи',
    contracts: 5,
    years: 1,
  },
];

interface LicensesInfoBlockProps {
  id?: string;
}

export default function LicensesInfoBlock({ id }: LicensesInfoBlockProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filterId === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMore = filteredProjects.length > 3;

  return (
    <div id={id} className={styles.licensesInfoBlock}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ГРУППА КОМПАНИЙ «АЛЬЯНС»:</h2>
          <h3 className={styles.subtitle}>БЕЗОПАСНОСТЬ В ДЕЙСТВИИ</h3>
          <p className={styles.description}>
            РЕАЛЬНЫЕ ПРИМЕРЫ НАДЕЖНОЙ ЗАЩИТЫ И СЕРВИСА<br />
            ДЛЯ КОМПАНИЙ РАЗЛИЧНЫХ МАСШТАБОВ
          </p>
        </div>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setExpandedProjects([]);
                setShowAll(false);
              }}
            >
              {activeFilter === filter.id && <span className={styles.filterDot}></span>}
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.projectsList}>
          {displayedProjects.map((project) => {
            const isExpanded = expandedProjects.includes(project.id);
            return (
              <div key={project.id}>
                <div 
                  className={`${styles.projectRow} ${isExpanded ? styles.projectRowExpanded : ''}`}
                  onClick={() => {
                    if (isExpanded) {
                      setExpandedProjects(expandedProjects.filter(id => id !== project.id));
                    } else {
                      setExpandedProjects([...expandedProjects, project.id]);
                    }
                  }}
                >
                  <div className={styles.projectName}>{project.name}</div>
                  <div className={styles.projectStatus}>{project.status}</div>
                  <div className={styles.projectType}>{project.type}</div>
                  <div className={styles.projectYear}>{project.year}</div>
                  <button 
                    className={styles.expandButton} 
                    aria-label={isExpanded ? "Свернуть" : "Развернуть"}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isExpanded) {
                        setExpandedProjects(expandedProjects.filter(id => id !== project.id));
                      } else {
                        setExpandedProjects([...expandedProjects, project.id]);
                      }
                    }}
                  >
                    <svg width="61" height="30" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 7H13V23H11V7Z" fill="white" fillOpacity="0.5"/>
                      <path d="M13 7L13 5.5L19 5.5V7L13 7Z" fill="white" fillOpacity="0.5"/>
                      <path d="M13 24.5V23H19V24.5H13Z" fill="white" fillOpacity="0.5"/>
                      <path d="M49 7H51V23H49V7Z" fill="white" fillOpacity="0.5"/>
                      <path d="M43 7L43 5.5L49 5.5V7H43Z" fill="white" fillOpacity="0.5"/>
                      <path d="M43 24.5L43 23H49V24.5H43Z" fill="white" fillOpacity="0.5"/>
                      <path d="M32 20.8916L36.2832 16.2129H39L32.5098 23.2129H29.4902L23 16.2129H25.626L30 21.0225V7H32V20.8916Z" fill="white"/>
                    </svg>
                  </button>
                </div>
                {isExpanded && (
                  <div className={styles.projectDetail}>
                    <div className={styles.detailContent}>
                      {project.description && (
                        <p className={styles.detailDescription}>{project.description}</p>
                      )}
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>{project.contracts || 5}</div>
                        <div className={styles.statLabel}>количество исполненных контрактов</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>{project.years || 1}</div>
                        <div className={styles.statLabel}>{project.years === 1 ? 'год совместной работы' : 'года совместной работы'}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {hasMore && !showAll && (
          <div className={styles.footer}>
            <ActionButton onClick={() => setShowAll(true)}>(Показать ещё)</ActionButton>
          </div>
        )}
      </div>
    </div>
  );
}


