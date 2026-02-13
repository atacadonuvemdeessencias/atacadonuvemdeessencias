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
