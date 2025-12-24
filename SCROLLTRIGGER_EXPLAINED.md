# Как считаются позиции в ScrollTrigger

## Основная логика

ScrollTrigger считает позиции относительно **двух элементов**:

1. **TRIGGER** - элемент, который указан в `trigger:` (блок услуги)
2. **VIEWPORT** - видимая область экрана браузера

## Формат позиций

```
start: 'triggerPosition viewportPosition'
```

### Позиции триггера (элемента услуги):
- `top` - верх элемента
- `center` - центр элемента  
- `bottom` - низ элемента

### Позиции viewport (экрана):
- `top` - верх экрана
- `center` - центр экрана
- `bottom` - низ экрана
- `80%` - 80% от верха экрана
- `20%` - 20% от верха экрана

## Примеры

### Пример 1: Первая картинка
```typescript
ScrollTrigger.create({
  trigger: firstServiceElement,  // ← ЭТО БЛОК ПЕРВОЙ УСЛУГИ
  start: 'top bottom',           // ← когда ВЕРХ блока достигает НИЗА экрана
  end: 'top center',             // ← когда ВЕРХ блока достигает ЦЕНТРА экрана
});
```

**Визуально:**
```
┌─────────────────┐  ← Верх экрана (viewport top)
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│  ┌───────────┐  │  ← Низ экрана (viewport bottom)
│  │ УСЛУГА 1  │  │  ← Когда ВЕРХ этого блока здесь → start: 'top bottom'
│  │           │  │
│  │           │  │
│  └───────────┘  │
└─────────────────┘
```

### Пример 2: Остальные картинки
```typescript
ScrollTrigger.create({
  trigger: serviceElement,      // ← ЭТО БЛОК КОНКРЕТНОЙ УСЛУГИ
  start: 'top center',          // ← когда ВЕРХ блока достигает ЦЕНТРА экрана
  end: 'bottom center',         // ← когда НИЗ блока достигает ЦЕНТРА экрана
});
```

**Визуально:**
```
┌─────────────────┐
│                 │
│                 │
│  ┌───────────┐  │  ← Центр экрана (viewport center)
│  │ УСЛУГА 2  │  │  ← Когда ВЕРХ этого блока здесь → start: 'top center'
│  │           │  │
│  │           │  │
│  │           │  │
│  └───────────┘  │  ← Когда НИЗ этого блока здесь → end: 'bottom center'
│                 │
└─────────────────┘
```

## Где в коде находятся эти элементы

### Первая услуга:
```typescript
// Строка 169
const firstServiceElement = serviceElements[0];  // ← Первый элемент из списка услуг

// Строка 314-321 в JSX
<div className={styles.serviceCard}>  // ← Это и есть trigger элемент
  <div className={styles.serviceContent}>
    <div className={styles.serviceTitle}>"{service.title}"</div>
    ...
  </div>
</div>
```

### Остальные услуги:
```typescript
// Строка 193-194
serviceElements.forEach((serviceElement, index) => {
  // serviceElement - это каждый блок услуги из списка
  // Это тот же <div className={styles.serviceCard}> из JSX
```

## Как изменить момент срабатывания

### Чтобы картинка появлялась раньше:
```typescript
start: 'top bottom',    // Когда верх услуги только появляется снизу
// или
start: 'top 90%',       // Когда верх услуги на 90% от верха экрана
```

### Чтобы картинка появлялась позже:
```typescript
start: 'top center',    // Когда верх услуги в центре экрана
// или
start: 'top 30%',       // Когда верх услуги на 30% от верха экрана
```

### Чтобы анимация была быстрее:
```typescript
start: 'top bottom',
end: 'top 60%',        // Меньше расстояние между start и end = быстрее
```

### Чтобы анимация была медленнее:
```typescript
start: 'top bottom',
end: 'bottom top',     // Больше расстояние между start и end = медленнее
```

