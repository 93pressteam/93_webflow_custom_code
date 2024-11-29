export function initSupportPage() {

// Перевіряємо, чи це сторінка "Vacancies"
const path = window.location.pathname;
const pageIndicator = '/support';
if (path !== pageIndicator) {
    console.log("Це не сторінка Support. Логіка не завантажується.");
    return;
}

    console.log("Support page scripts loaded");
    
    // Додайте специфічну логіку для сторінки Support
}
