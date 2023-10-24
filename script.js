const elementos = document.querySelectorAll(".faq button");



function eventoPerguntas(elemento){
    elemento.addEventListener('click', () =>{
        const resposta = elemento.nextElementSibling;
        resposta.classList.toggle('ativo')

        elementos.forEach(botao => {
            if (botao !== elemento) {
                botao.nextElementSibling.classList.remove('ativo');
            }
        });

        elemento.classList.toggle('ativo');

        elementos.forEach(title => {
            if (title !== elemento){
                title.classList.remove('ativo')
            }
        })
        
    });
}

elementos.forEach(eventoPerguntas);
