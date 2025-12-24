import Image from 'next/image';
import styles from './ArsenalBlock.module.css';

const arsenalItems = [
  {
    id: 1,
    title: 'ПИСТОЛЕТ',
    subtitle: 'макарова',
    image: '/arsenal/image.png',
  },
  {
    id: 2,
    title: 'НАРУЧНИКИ',
    image: '/arsenal/image-1.png',
  },
  {
    id: 3,
    title: 'ДУБИНКА',
    subtitle: 'резиновая',
    image: '/arsenal/image-2.png',
  },
  {
    id: 4,
    title: 'ФОНАРИК',
    image: '/arsenal/image-3.png',
  },
  {
    id: 5,
    title: 'РАЦИЯ',
    subtitle: 'модель',
    image: '/arsenal/image-4.png',
  },
  {
    id: 6,
    title: 'МЕТАЛЛОДЕТЕКТОР',
    image: '/arsenal/image-5.png',
  },
];

interface ArsenalBlockProps {
  id?: string;
}

export default function ArsenalBlock({ id }: ArsenalBlockProps) {
  return (
    <div id={id} className={styles.arsenalBlock}>
      <h2 className={styles.title}>АРСЕНАЛ</h2>
      <div className={styles.grid}>
        {arsenalItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.orangeOverlay}></div>
            </div>
            <div className={styles.text}>
              <span className={styles.titleText}>{item.title}</span>
              {item.subtitle && (
                <span className={styles.subtitleText}>{item.subtitle}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




