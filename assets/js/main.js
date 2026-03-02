// Language toggle functionality
let isEnglish = false;

function toggleLanguage() {
    isEnglish = !isEnglish;
    const body = document.body;

    if (isEnglish) {
        body.classList.add('lang-en');
        // Update all elements with data-en attribute
        updateLanguage('en');
    } else {
        body.classList.remove('lang-en');
        // Update all elements with data-zh attribute
        updateLanguage('zh');
    }
}

function updateLanguage(lang) {
    // Update text content
    const elements = document.querySelectorAll('[data-' + lang + ']');
    elements.forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            // Handle list items with newlines
            if (text.includes('\n')) {
                const items = text.split('\n').filter(item => item.trim());
                if (el.tagName === 'UL') {
                    el.innerHTML = items.map(item => `<li>${item.replace(/^[•\-\s]+/, '')}</li>`).join('');
                }
            } else {
                el.textContent = text;
            }
        }
    });
}

// Initialize with Chinese
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage('zh');
});
