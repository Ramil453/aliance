'use client';

import { useState } from 'react';
import ActionButton from './ActionButton';
import styles from './TrustStoriesBlock.module.css';

const stories = [
  {
    id: 1,
    name: 'А.П. Марков',
    position: 'Депутат Государственной думы',
    text: 'А.П. Марков благодарит компанию АЛЬЯНС-А в лице Управляющего директора Худайбергенова Анвара Александровича за высокий профессионализм и добросовестное исполнение служебных обязанностей на объекте Four Seasons Москва',
    pdfLink: '#',
  },
  {
    id: 2,
    name: 'А.М. Голик',
    position: 'Начальник ОЛРР по Одинцовскому району ГУ Росгвардии по МО',
    text: 'А.П. Марков благодарит компанию АЛЬЯНС-А в лице Управляющего директора Худайбергенова Анвара Александровича за высокий профессионализм и добросовестное исполнение служебных обязанностей на объекте Four Seasons Москва',
    pdfLink: '#',
  },
];

interface TrustStoriesBlockProps {
  id?: string;
}

export default function TrustStoriesBlock({ id }: TrustStoriesBlockProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedStories = showAll ? stories : stories.slice(0, 2);

  return (
    <div id={id} className={styles.trustStoriesBlock}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          ИСТОРИИ ДОВЕРИЯ
          <span className={styles.titleSecondLine}>И СОТРУДНИЧЕСТВА</span>
        </h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.storiesList}>
        {displayedStories.map((story) => (
          <div key={story.id} className={styles.storyItem}>
            <div className={styles.storyHeader}>
              <div className={styles.storyName}>{story.name}</div>
              <div className={styles.storyPosition}>{story.position}</div>
            </div>
            <p className={styles.storyText}>{story.text}</p>
            <a href={story.pdfLink} className={styles.pdfLink}>[.PDF]</a>
            <div className={styles.storyDivider}></div>
          </div>
        ))}
      </div>

      {stories.length > 1 && (
        <div className={styles.showMoreContainer}>
         <ActionButton onClick={() => setShowAll(true)}>Показать ещё</ActionButton>
        </div>
      )}
    </div>
  );
}







