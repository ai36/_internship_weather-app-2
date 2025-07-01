export function getVisibilityDescription(value) {
    if (value > 7) return "Высокая";
    if (value > 3) return "Нормальная";
    return "Низкая"
}