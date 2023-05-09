function carregar() {
    var msg = window.document.getElementById('msg')
    var minhaImagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        minhaImagem.src = "manhanovo.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        //boa tarde
        minhaImagem.src = "tardenova.png"
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        minhaImagem.src = "noitenova.png"
        document.body.style.background = '#515154'
    }
}

