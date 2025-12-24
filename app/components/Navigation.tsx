'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'ГЛАВНАЯ' },
    { href: '/clients', label: 'КЛИЕНТАМ' },
    { href: '/vacancies', label: 'ВАКАНСИИ' },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link, index) => (
        <div key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <Link 
            href={link.href} 
            className={`${styles.link} ${pathname === link.href ? styles.linkActive : ''}`}
          >
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}

