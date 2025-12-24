import styles from './NavigationButtons.module.css';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <div className={styles.navigationButtons}>
      <button onClick={onPrev} className={`${styles.navButton} ${styles.navButtonPrev}`} aria-label="Предыдущий слайд">
      <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7H13V23H11V7Z" fill="white" fillOpacity="0.5"/>
<path d="M13 7L13 5.5L19 5.5V7L13 7Z" fill="white" fillOpacity="0.5"/>
<path d="M13 24.5V23H19V24.5H13Z" fill="white" fillOpacity="0.5"/>
<path d="M49 7H51V23H49V7Z" fill="white" fillOpacity="0.5"/>
<path d="M43 7L43 5.5L49 5.5V7H43Z" fill="white" fillOpacity="0.5"/>
<path d="M43 24.5L43 23H49V24.5H43Z" fill="white" fillOpacity="0.5"/>
<path d="M25.3242 14L30.0029 9.7168L30.0029 7L23.0029 13.4902L23.0029 16.5098L30.0029 23L30.0029 20.374L25.1934 16L39.2158 16L39.2158 14L25.3242 14Z" fill="white"/>
</svg>


      </button>
      <button onClick={onNext} className={styles.navButton} aria-label="Следующий слайд">
      <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7H13V23H11V7Z" fill="white" fillOpacity="0.5"/>
<path d="M13 7L13 5.5L19 5.5V7L13 7Z" fill="white" fillOpacity="0.5"/>
<path d="M13 24.5V23H19V24.5H13Z" fill="white" fillOpacity="0.5"/>
<path d="M49 7H51V23H49V7Z" fill="white" fillOpacity="0.5"/>
<path d="M43 7L43 5.5L49 5.5V7H43Z" fill="white" fillOpacity="0.5"/>
<path d="M43 24.5L43 23H49V24.5H43Z" fill="white" fillOpacity="0.5"/>
<path d="M36.8945 14L32.2158 9.7168L32.2158 7L39.2158 13.4902L39.2158 16.5098L32.2158 23L32.2158 20.374L37.0254 16L23.0029 16L23.0029 14L36.8945 14Z" fill="white"/>
</svg>


      </button>
    </div>
  );
}

