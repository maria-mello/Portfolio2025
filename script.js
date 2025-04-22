// Animação na rolagem da navbar
document.querySelectorAll('.nav a').forEach(link => { // seleciona todos os links a; e pra cada linha será executado o que estiver entre as chaves;
    link.addEventListener('click', // adiciona o evento do clique;
        function(e) {
        e.preventDefault(); // impede que o navegador siga a transição do próprio link;
        const targetId = this.getAttribute('href').substring(1); // pega o valor atribuído, nesse caso o ID;
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) { // verifica se a seção existe antes de rodar; 
            targetSection.scrollIntoView({ //faz a página rolar até a seção;
                behavior: 'smooth', // ativa o "efeito" suave;
                block: 'start' // faz a rolagem ficar no topo da página;
            });
        }
    });
});

