const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);