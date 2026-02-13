// Exemplo de lógica para mostrar o link apenas para você
auth.onAuthStateChanged(user => {
    if (user && user.email === "seu-email-admin@teste.com") {
        const nav = document.querySelector('nav');
        const adminLink = document.createElement('a');
        adminLink.href = "admin.html";
        adminLink.innerText = "PAINEL ADMIN";
        adminLink.classList.add("gold-link");
        nav.appendChild(adminLink);
    }
});
