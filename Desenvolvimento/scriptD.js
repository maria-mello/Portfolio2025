// MODAL DA ATT1
const modal = document.getElementById('modal'); // chama pelo id do html a div do modal 
const abrirModal = document.getElementById('abrirModal'); // chama pelo id do html a class do botão para abrir
const fecharModal = document.getElementById('fecharModal'); // chama pelo id do html a class do botão para fechar 

abrirModal.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
});
 
modal.addEventListener('click', (e) => {
    if (e.target === modal) { // Verifica se o clique foi fora da área de conteúdo
        modal.style.display = 'none';
    }
});


// MODAL DA ATT2
const modal1 = document.getElementById('modal1'); // chama pelo id do html a div do modal 
const abrirModal1 = document.getElementById('abrirModal1'); // chama pelo id do html a class do botão para abrir
const fecharModal1 = document.getElementById('fecharModal1'); // chama pelo id do html a class do botão para fechar 

abrirModal1.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal1.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal1.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal1.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal1.addEventListener('click', (e) => {
    if (e.target === modal1) { // Verifica se o clique foi fora da área de conteúdo
        modal1.style.display = 'none';
    }
});

function mostrarTrimestre(numero) {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
      if (secao.id === `trimestre${numero}`) {
        secao.classList.add('ativo');
      } else {
        secao.classList.remove('ativo');
      }
    });
  }

mostrarTrimestre('trimestre1');
