// Lógica para mostrar o link Admin apenas se você estiver logado
// Por enquanto, ele apenas verifica se existe um parâmetro no link para teste
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get('admin');

if (isAdmin === 'true') {
    const nav = document.getElementById('menu-nav');
    const adminLink = document.createElement('a');
    adminLink.href = "admin.html";
    adminLink.innerText = "PAINEL ADMIN";
    adminLink.classList.add("gold-link");
    nav.appendChild(adminLink);
}
// Lógica do Slider Automático
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // Remove a classe active do slide atual
    slides[currentSlide].classList.remove('active');
    
    // Passa para o próximo (volta ao primeiro se for o último)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Adiciona a classe active ao novo slide
    slides[currentSlide].classList.add('active');
}

// Inicia a troca automática a cada 7000ms (5 segundos)
if (slides.length > 0) {
    setInterval(showNextSlide, 7000);
}
