class Nave {
    constructor(ctx,imagem) {
    this.ctx = ctx;
    this.imagem = imagem;
    this.x = 0;
    this.y = 350; }

    desenha(x, y) {
        this.ctx.clearRect(this.x,this.y,35,44);
        this.x = x;
        this.y = y;
        this.ctx.drawImage(this.imagem, x, y);
    }

    }


    let nave;

    function moveNave(event) {
    
        nave.desenha(event.offsetX , 350);
}

function iniciar() {
    let canvas = document.getElementById("myCanvas");
      let ctx = canvas.getContext("2d");
      let imagem = document.getElementById("nave");
      nave = new Nave(ctx,imagem);
}