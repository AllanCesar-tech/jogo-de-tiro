let canvas = document.getElementById("idCanvas")
let nave = {
ctx: canvas.getContext("2d"),
imagem: document.getElementById("nave"),
px: 0,
py: 350,
destinoX: 0,

    apaga() {
        nave.ctx.clearRect(this.px, nave.py, 35,44)
    },

    desenha() {
        nave.ctx.drawImage(this.imagem,this.px,this.py)
    },

    move() { //A função muda as cordenadas do obejto para serem desenhados ou apagados
        if(this.destinoX == this.px) {return}
        this.apaga()
        if(this.destinoX > this.px) {this.px += 2}
        else {this.px -= 2}
        this.desenha()
},

posicao(x) { // a cordenada do mouse vira o destino da nave
this.destinoX = x +(x%2)
}

}

function executaCiclo() {
    nave.move()
}

function iniciar() { // executa a função a cada 5 milisegundos
window.setInterval(executaCiclo,5)
}

function posicao(event) { // passa as cordenadas do mouse para o metodo
nave.posicao(event.offsetX);
}