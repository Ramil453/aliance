'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './ContentBlock.module.css';

interface ContentBlockProps {
  title: string;
  content: string;
  id?: string;
}

export default function ContentBlock({ title, content, id }: ContentBlockProps) {
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const sentencesRef = useRef<HTMLSpanElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const container = contentInnerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sentencesRef.current.forEach((sentenceEl, index) => {
        if (!sentenceEl) return;
        const sentenceRect = sentenceEl.getBoundingClientRect();
        const sentenceCenter = sentenceRect.top + sentenceRect.height / 2;
        const distance = Math.abs(sentenceCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [content]);

  const sentences = content.replace(/\n/g, ' ').split(/([.!?]+)/).filter(s => s.trim().length > 0);
  const sentenceElements: string[] = [];
  
  for (let i = 0; i < sentences.length; i += 2) {
    if (sentences[i]) {
      sentenceElements.push(sentences[i] + (sentences[i + 1] || ''));
    }
  }

  return (
    <div id={id} className={styles.contentBlock}>
      <div className={styles.fadeTop}></div>
      <h2 className={styles.contentBlockTitle}>{title}</h2>
      <div ref={contentInnerRef} className={styles.contentInner}>
        <p className={styles.contentParagraph}>
          {sentenceElements.map((sentence, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) sentencesRef.current[index] = el;
              }}
              className={`${styles.sentence} ${activeIndex === index ? styles.sentenceActive : ''}`}
            >
              {sentence}
            </span>
          ))}
        </p>
      </div>
      <div className={styles.fadeBottom}></div>
    </div>
  );
}



