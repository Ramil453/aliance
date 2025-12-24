import styles from './ActionButton.module.css';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function ActionButton({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'secondary'
}: ActionButtonProps) {
  const variantClass = styles[variant];
  
  return (
    <button 
      type={type} 
      className={`${styles.actionButton} ${variantClass}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

