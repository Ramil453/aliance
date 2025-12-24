'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ContactBlock.module.css';
import ActionButton from './ActionButton';

export default function ContactBlock() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    channel: '',
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const orgInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);

  const measureTextWidth = (text: string, input: HTMLInputElement | null): number => {
    if (!input || !text) return 0;
    const computedStyle = window.getComputedStyle(input);
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontFamily = computedStyle.fontFamily;
    span.style.fontSize = computedStyle.fontSize;
    span.style.fontWeight = computedStyle.fontWeight;
    span.style.fontStyle = computedStyle.fontStyle;
    span.style.letterSpacing = computedStyle.letterSpacing;
    span.style.textTransform = computedStyle.textTransform;
    span.style.whiteSpace = 'nowrap';
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  };

  const updateBracketPosition = (input: HTMLInputElement | null, wrapper: HTMLElement | null) => {
    if (!input || !wrapper) return;
    const text = input.value || input.placeholder;
    const width = measureTextWidth(text, input);
    wrapper.style.setProperty('--text-width', `${width}px`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const input = e.target as HTMLInputElement;
    const wrapper = input.closest(`.${styles.inputWrapper}`) as HTMLElement;
    
    if (input.name === 'name') {
      updateBracketPosition(nameInputRef.current, wrapper);
    } else if (input.name === 'organization') {
      updateBracketPosition(orgInputRef.current, wrapper);
    } else if (input.name === 'contact') {
      updateBracketPosition(contactInputRef.current, wrapper);
    }
  };

  useEffect(() => {
    const updateAllPositions = () => {
      if (nameInputRef.current) {
        const wrapper = nameInputRef.current.closest(`.${styles.inputWrapper}`) as HTMLElement;
        updateBracketPosition(nameInputRef.current, wrapper);
      }
      if (orgInputRef.current) {
        const wrapper = orgInputRef.current.closest(`.${styles.inputWrapper}`) as HTMLElement;
        updateBracketPosition(orgInputRef.current, wrapper);
      }
      if (contactInputRef.current) {
        const wrapper = contactInputRef.current.closest(`.${styles.inputWrapper}`) as HTMLElement;
        updateBracketPosition(contactInputRef.current, wrapper);
      }
    };

    const timer = setTimeout(updateAllPositions, 0);
    window.addEventListener('resize', updateAllPositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateAllPositions);
    };
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
		<div className={styles.contactBlock}>
			<div className={styles.container}>
				<div className={styles.leftSection}>
					<h2 className={styles.title}>
						Свя- <br /> зать <br />
						ся
					</h2>
					<h2 className={styles.hideTitle}>
						Связаться
					</h2>
					<p className={styles.description}>
						Заполните форму, <br /> и мы оперативно выйдем <br /> на связь и
						предложим <br /> оптимальные решения под задачи <br /> вашей
						компании
					</p>
					<div className={styles.flex}>
					<p className={styles.hideDescription} style={{ width: '45%' }}>
						ОСТАВЬТЕ СВОИ КОНТАКТНЫЕ ДАННЫЕ, НАША КОМАНДА СВЯЖЕТСЯ С ВАМИ В
						БЛИЖАЙШЕЕ ВРЕМЯ
					</p>

					</div>
				</div>

				<div className={styles.rightSection}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label className={styles.label}>ваше имя</label>
							<div className={styles.inputWrapper}>
								<input
									ref={nameInputRef}
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									onFocus={e => {
										const wrapper = e.target.closest(
											`.${styles.inputWrapper}`
										) as HTMLElement
										updateBracketPosition(nameInputRef.current, wrapper)
									}}
									onBlur={e => {
										const wrapper = e.target.closest(
											`.${styles.inputWrapper}`
										) as HTMLElement
										updateBracketPosition(nameInputRef.current, wrapper)
									}}
									placeholder='Имя'
									className={styles.input}
								/>
							</div>
						</div>

						<div className={styles.formGroup}>
							<label className={styles.label}>организация</label>
							<div className={styles.inputWrapper}>
								<input
									ref={orgInputRef}
									type='text'
									name='organization'
									value={formData.organization}
									onChange={handleChange}
									onFocus={e => {
										const wrapper = e.target.closest(
											`.${styles.inputWrapper}`
										) as HTMLElement
										updateBracketPosition(orgInputRef.current, wrapper)
									}}
									placeholder='ИНН / Название'
									className={styles.input}
								/>
							</div>
						</div>

						<div className={styles.formGroup}>
							<label className={styles.label}>контакт для связи</label>
							<div className={styles.inputWrapper}>
								<input
									ref={contactInputRef}
									type='text'
									name='contact'
									value={formData.contact}
									onChange={handleChange}
									onFocus={e => {
										const wrapper = e.target.closest(
											`.${styles.inputWrapper}`
										) as HTMLElement
										updateBracketPosition(contactInputRef.current, wrapper)
									}}
									placeholder='Email / Телефон '
									className={styles.input}
								/>
							</div>
						</div>

						<div className={styles.formGroup}>
							<label className={styles.label}>
								предпочтительный канал связи
							</label>
							<div className={styles.channels}>
								{['Telegram', 'Whats App', 'Email', 'Телефон'].map(channel => (
									<label key={channel} className={styles.channelLabel}>
										<input
											type='radio'
											name='channel'
											value={channel}
											checked={formData.channel === channel}
											onChange={handleChange}
											className={styles.radio}
										/>
										<span>{channel}</span>
									</label>
								))}
							</div>
						</div>

						<div className={styles.formFooter}>
							<svg
								width='136'
								height='60'
								viewBox='0 0 136 60'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M22 14H26V46H22V14Z' fill='white' fillOpacity='0.5' />
								<path
									d='M26 14L26 11L38 11V14L26 14Z'
									fill='white'
									fillOpacity='0.5'
								/>
								<path d='M26 49V46H38V49H26Z' fill='white' fillOpacity='0.5' />
								<path
									d='M110 14H114V46H110V14Z'
									fill='white'
									fillOpacity='0.5'
								/>
								<path
									d='M98 14L98 11L110 11V14H98Z'
									fill='white'
									fillOpacity='0.5'
								/>
								<path
									d='M98 49L98 46H110V49H98Z'
									fill='white'
									fillOpacity='0.5'
								/>
								<path
									d='M74.9798 20.4047L62.305 20.9647L58.4629 17.1226L77.5417 16.4024L81.8105 20.6713L81.0903 39.75L77.3759 36.0356L77.9926 23.0488L58.1625 42.8788L55.3341 40.0504L74.9798 20.4047Z'
									fill='white'
								/>
							</svg>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

