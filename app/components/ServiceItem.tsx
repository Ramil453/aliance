'use client';

import Image from 'next/image';
import styles from './ServiceItem.module.css';

interface ServiceItemProps {
  label: string;
  serviceText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  isActive: boolean;
  hasActiveHover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ServiceItem({
  label,
  serviceText,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  isActive,
  hasActiveHover,
  onMouseEnter,
  onMouseLeave,
}: ServiceItemProps) {
  return (
    <div
      className={`${styles.serviceItem} ${hasActiveHover && !isActive ? styles.inactive : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label} <span className={styles.serviceText}>{serviceText}</span>
      {isActive && (
        <div className={styles.serviceImage}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
    </div>
  );
}







