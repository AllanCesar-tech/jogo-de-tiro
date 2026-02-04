let canvas = document.getElementById("idCanvas")
let nave = {
ctx: canvas.getContext("2d"),
imagem: document.getElementById("nave"),
x: 0,
y: 350,



desenha(x,y) {
    nave.ctx.clearRect(nave.x, nave.y, 35, 44)
    nave.x = x
    nave.y = y
    nave.ctx.drawImage(nave.imagem,x,y)

}

}


function moveNave(event) {
nave.desenha(event.offsetX, 350);
}