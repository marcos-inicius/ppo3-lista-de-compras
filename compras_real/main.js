const listadiv = [];

const botao = document.getElementById("criarNomeBtn");
const listaContainer = document.getElementById("listas-container");
botao.addEventListener("click", function () {
    botao.disabled = true;
    const criarLista = document.createElement("div");
    criarLista.textContent = "aqui vai ser escolhido o nome da lista";
    criarLista.className = "criarLista";

    const nome = document.createElement("input");
    nome.placeholder = "nome da sua lista";

    const list = document.createElement("button");
    list.textContent = "Enviar";

    document.body.appendChild(criarLista);
    criarLista.appendChild(nome);
    criarLista.appendChild(list);


    list.addEventListener("click", function () {
        
        const nomeList = nome.value
        const lista = document.createElement("div");
        lista.className = "lista";
        
        lista.textContent = nomeList;
        const adcitem = document.createElement("button");
        adcitem.className = "adcitem";
        adcitem.textContent = "adcionar item";
        criarLista.remove();
        botao.disabled = false;


        adcitem.addEventListener("click", function () {
            const containeritme = document.createElement("div")
            const item = document.createElement("input");
            const qnt = document.createElement("input")
            const ok = document.createElement("button")
            containeritme.className = "containerItem"
            qnt.className = "qnt";
            ok.textContent = "OK";
            qnt.type = "number";
            qnt.placeholder = "99"
            item.placeholder = "nome do item"
            item.className = "item"


            lista.appendChild(containeritme);
            containeritme.appendChild(item);
            containeritme.appendChild(qnt)
            containeritme.appendChild(ok)
        });
        const btnremove = document.createElement("button");
        btnremove.textContent = "X";
        btnremove.className = "remove";
        btnremove.addEventListener("click", function () {
            const index = listadiv.indexOf(lista);
            if (index > -1) {
                listadiv.splice(index, 1);
            }
            lista.remove();
        });

        lista.appendChild(adcitem);
        lista.appendChild(btnremove);

        listaContainer.appendChild(lista);
        listadiv.push(lista);
    });
});






