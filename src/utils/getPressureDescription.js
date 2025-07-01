export function getPressureDescription(value) {
    if (value > 760) return "Повышенное";
    if (value > 740) return "Нормальное";
    return "Пониженное"
}