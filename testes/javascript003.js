let canvas = document.getElementById("idCanvas")
let nave
class Nave {
    constructor(imagem) {
        this.imagem = imagem
        this.ctx = canvas.getContext("2d")
        this.px = 0
        this.py = 350
        this.destinoX = 0
    }

    apaga() {
        this.ctx.clearRect(this.px, this.py, 35,44)
    }

    desenha() {
        this.ctx.drawImage(this.imagem,this.px,this.py)
    }

    move() { //A função muda as cordenadas do obejto para serem desenhados ou apagados
        if(this.destinoX == this.px) {return}
        this.apaga()
        if(this.destinoX > this.px) {this.px += 2}
        else {this.px -= 2}
        this.desenha()
}

posicao(x) { // a cordenada do mouse vira o destino da nave
this.destinoX = x +(x%2)
}
    
}



function executaCiclo() {
    nave.move()
}

function iniciar() { // executa a função a cada 5 milisegundos
    let imagem = document.getElementById("nave")
    nave = new Nave(imagem)
    window.setInterval(executaCiclo,5)
}

function posicao(event) { // passa as cordenadas do mouse para o metodo
nave.posicao(event.offsetX);
}