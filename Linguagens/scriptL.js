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

// MODAL DA ATT3
const modal2 = document.getElementById('modal2'); // chama pelo id do html a div do modal 
const abrirModal2 = document.getElementById('abrirModal2'); // chama pelo id do html a class do botão para abrir
const fecharModal2 = document.getElementById('fecharModal2'); // chama pelo id do html a class do botão para fechar 

abrirModal2.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal2.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal2.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal2.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
});
 
modal2.addEventListener('click', (e) => {
    if (e.target === modal2) { // Verifica se o clique foi fora da área de conteúdo
        modal2.style.display = 'none';
    }
}); 

// MODAL DA ATT4
const modal3 = document.getElementById('modal3'); // chama pelo id do html a div do modal 
const abrirModal3 = document.getElementById('abrirModal3'); // chama pelo id do html a class do botão para abrir
const fecharModal3 = document.getElementById('fecharModal3'); // chama pelo id do html a class do botão para fechar 

abrirModal3.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal3.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal3.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal3.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal3.addEventListener('click', (e) => {
    if (e.target === modal3) { // Verifica se o clique foi fora da área de conteúdo
        modal3.style.display = 'none';
    }
});

// MODAL DA ATT5
const modal4 = document.getElementById('modal4'); // chama pelo id do html a div do modal 
const abrirModal4 = document.getElementById('abrirModal4'); // chama pelo id do html a class do botão para abrir
const fecharModal4 = document.getElementById('fecharModal4'); // chama pelo id do html a class do botão para fechar 

abrirModal4.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal4.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal4.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal4.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal4.addEventListener('click', (e) => {
    if (e.target === modal4) { // Verifica se o clique foi fora da área de conteúdo
        modal4.style.display = 'none';
    }
});

// MODAL DA ATT6
const modal5 = document.getElementById('modal5'); // chama pelo id do html a div do modal 
const abrirModal5 = document.getElementById('abrirModal5'); // chama pelo id do html a class do botão para abrir
const fecharModal5 = document.getElementById('fecharModal5'); // chama pelo id do html a class do botão para fechar 

abrirModal5.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal5.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal5.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal5.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal5.addEventListener('click', (e) => {
    if (e.target === modal5) { // Verifica se o clique foi fora da área de conteúdo
        modal5.style.display = 'none';
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

// MODAL DA ATT7
const modal6 = document.getElementById('modal6'); // chama pelo id do html a div do modal 
const abrirModal6 = document.getElementById('abrirModal6'); // chama pelo id do html a class do botão para abrir
const fecharModal6 = document.getElementById('fecharModal6'); // chama pelo id do html a class do botão para fechar

abrirModal6.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal6.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal6.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal6.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal6.addEventListener('click', (e) => {
    if (e.target === modal6) { // Verifica se o clique foi fora da área de conteúdo
        modal6.style.display = 'none';
    }
});

// MODAL DA ATT8
const modal7 = document.getElementById('modal7'); // chama pelo id do html a div do modal 
const abrirModal7 = document.getElementById('abrirModal7'); // chama pelo id do html a class do botão para abrir
const fecharModal7 = document.getElementById('fecharModal7'); // chama pelo id do html a class do botão para fechar

abrirModal7.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal7.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal7.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal7.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal7.addEventListener('click', (e) => {
    if (e.target === modal7) { // Verifica se o clique foi fora da área de conteúdo
        modal7.style.display = 'none';
    }
});

// MODAL DA ATT9
const modal8 = document.getElementById('modal8'); // chama pelo id do html a div do modal 
const abrirModal8 = document.getElementById('abrirModal8'); // chama pelo id do html a class do botão para abrir
const fecharModal8 = document.getElementById('fecharModal8'); // chama pelo id do html a class do botão para fechar

abrirModal8.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal8.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal8.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal8.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal8.addEventListener('click', (e) => {
    if (e.target === modal8) { // Verifica se o clique foi fora da área de conteúdo
        modal8.style.display = 'none';
    }
});

// MODAL DA ATT 10 (TERCEIRO TRIMESTRE)
const modal9 = document.getElementById('modal9'); // chama pelo id do html a div do modal 
const abrirModal9 = document.getElementById('abrirModal9'); // chama pelo id do html a class do botão para abrir
const fecharModal9 = document.getElementById('fecharModal9'); // chama pelo id do html a class do botão para fechar

abrirModal9.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal9.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal9.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal9.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal9.addEventListener('click', (e) => {
    if (e.target === modal9) { // Verifica se o clique foi fora da área de conteúdo
        modal9.style.display = 'none';
    }
});

// MODAL DA ATT 11 (TERCEIRO TRIMESTRE)
const modal10 = document.getElementById('modal10'); // chama pelo id do html a div do modal 
const abrirModal10 = document.getElementById('abrirModal10'); // chama pelo id do html a class do botão para abrir
const fecharModal10 = document.getElementById('fecharModal10'); // chama pelo id do html a class do botão para fechar

abrirModal10.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal10.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal10.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal10.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal10.addEventListener('click', (e) => {
    if (e.target === modal10) { // Verifica se o clique foi fora da área de conteúdo
        modal10.style.display = 'none';
    }
});

// MODAL DA ATT 12 (TERCEIRO TRIMESTRE)
const modal11 = document.getElementById('modal11'); // chama pelo id do html a div do modal 
const abrirModal11 = document.getElementById('abrirModal11'); // chama pelo id do html a class do botão para abrir
const fecharModal11 = document.getElementById('fecharModal11'); // chama pelo id do html a class do botão para fechar

abrirModal11.addEventListener('click', () =>{ // adiciona um evento  ao clicar no botão
    modal11.style.display = 'flex'; // e nesse evento o modal abre o css que foi criado para ele e o 'display: none;' é substituido pelo 'flex;'
});

fecharModal11.addEventListener('click', () =>{ // adiciona um evento ao clicar no botão
    modal11.style.display = 'none'; // nesse evento o 'display: flex;' que tinha sido incluso é trocado de volta pelo 'display: none;'
}); 
 
modal11.addEventListener('click', (e) => {
    if (e.target === modal11) { // Verifica se o clique foi fora da área de conteúdo
        modal11.style.display = 'none';
    }
});