
//Fitrar Produtos
function buscarProdutos(data){
    let palavraChave = document.querySelector(".search-input").value
    let produtosEncontrados = []
    for (let i = 0; i< data.length; i++){
        if(data[i].nameItem.includes(palavraChave)){
            produtosEncontrados.push(data[i])
        }
    }
    return produtosEncontrados
}
document.querySelector(".search-button").addEventListener("click", function apertou(e){
     produtoFiltrado = buscarProdutos(data)
    adicionarProdutos(produtoFiltrado)    
})


let quantidadeProdutosCarrinho = 0
let somaTotal = 0
//Adicionar a array na tela
function adicionarProdutos(lista){  
    let listaProdutos = document.querySelector(".main-cards")
    listaProdutos.innerHTML = ""
    for(let i = 0; i < lista.length; i++ ){
        let li = document.createElement("li")
        li.classList.add('li')
        li.id = lista[i].id  //Criando um ID pra LI
        
        let img = document.createElement("img"); 
        img.src = lista[i].img
        img.classList.add("imgProduto")

        let tag = document.createElement('p')
        tag.innerHTML = lista[i].tag
        tag.classList.add('tag')

        let nomeItem = document.createElement('h2')
        nomeItem.innerHTML = lista[i].nameItem
        nomeItem.classList.add('h2')

        let descricao = document.createElement('p')
        descricao.innerHTML = lista[i].description
        descricao.classList.add('p')

        let valor = document.createElement('p')
        valor.innerHTML = `R$ ${lista[i].value}`
        valor.classList.add('p')

        let botao = document.createElement('button')
        botao.innerHTML = `Adicionar ao Carrinho`
        botao.id = lista[i].id 
        botao.classList.add('productButton')  

        botao.addEventListener('click', function adicionarNoCarrinho(e){
           quantidadeProdutosCarrinho++
           document.querySelector("#quantidade").innerHTML = `${quantidadeProdutosCarrinho}`
            
           somaTotal += data[i].value
           document.querySelector("#valorTotal").innerHTML = `R$ ${somaTotal},00` 

            let idProduto  = parseInt(e.target.id)
            let  produto = procurarID(idProduto)
            let produtoCarrinho = adicionarCarrinho(produto) 
            document.querySelector(".cart-list").append(produtoCarrinho)
            
            document.querySelector(".cart-empty").style.display = "none"
        })
        
        
        li.append(img, tag, nomeItem, descricao, valor, botao)
      
        listaProdutos.append(li)
        
    } 
}

function procurarID(id){    
    for(let i = 0; i< data.length; i++){   
        if(data[i].id == id){ 
            return data[i]
        }
    }
}
//Adicionar no carrinho
function adicionarCarrinho(data){
        let li = document.createElement("li")
        li.classList.add('li_Carrinho')
        li.id = `c_${data.id }`
        
        let img = document.createElement("img"); 
        img.src = data.img
        img.classList.add("img_Carrinho")

        let div = document.createElement("div")
        div.classList.add("div_Carrinho")

        let nomeItem = document.createElement('h2')
        nomeItem.innerHTML = data.nameItem
        nomeItem.classList.add('h2')

        let valor = document.createElement('p')
        valor.innerHTML = `R$ ${data.value}`
        valor.classList.add('p')

        let botao = document.createElement('button')
        botao.innerHTML = `Remover Produto`
        botao.id = `r_${data.id }` 
        botao.classList.add('productButton')  

        botao.addEventListener("click", function remover(e){
            quantidadeProdutosCarrinho-- 
           document.querySelector("#quantidade").innerHTML = `${quantidadeProdutosCarrinho}`

            let listPath = e.composedPath()
            listPath[2].remove()


            somaTotal -= data.value
           document.querySelector("#valorTotal").innerHTML = `R$ ${somaTotal},00` 
            
           if(quantidadeProdutosCarrinho===0){
            document.querySelector(".cart-empty").style.display = "block"
           }
          
        })

      
        div.append(nomeItem, valor, botao)
        li.append(img, div)
      
        return li
}
// Filtragem ao clicar em acessórios no header-menu
function filtrarAcessorios(lista){
    let listaAcessorios = []

    for(let i = 0; i <lista.length; i++){
        if(lista[i].tag == "Livros"){
            listaAcessorios.push(lista[i])    
        }
    }
    return listaAcessorios
}
filtrarAcessorios(data)

document.querySelector("#filtrarAcessorios").addEventListener('click', function  (e){
    const filtrandoAcessorios = filtrarAcessorios(data)
    adicionarProdutos(filtrandoAcessorios)
})

// Filtragem ao clicar em Camisetas no header-menu

function filtrarCamisetas(lista){
    let listaCamisetas = []

    for(let i = 0; i <lista.length; i++){
        if(lista[i].tag == "Acessórios"){
            listaCamisetas.push(lista[i])
        }
    }
    return listaCamisetas
}
filtrarCamisetas(data)

document.querySelector("#filtrarCamisetas").addEventListener('click', function  (e){
    const filtrandoCamisetas = filtrarCamisetas(data)
    adicionarProdutos(filtrandoCamisetas)
})

// Permitir todos os produtos ao clicar em todos no header-menu
function permitirTudo(){
    let listaTotal = data

    return listaTotal
}
permitirTudo()
document.querySelector("#permitirTodos").addEventListener('click', function  (e){
    const permitindoTudo = permitirTudo()
    adicionarProdutos(permitindoTudo)
})

    
adicionarProdutos(data)



