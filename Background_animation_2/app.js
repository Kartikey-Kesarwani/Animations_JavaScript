const container = document.getElementsByClassName("container")[0];
const box = document.getElementsByClassName("box");

for(var i=0; i < 400;i++){
    container.innerHTML += "<div class='box'></div>"
    box[i].style.animationDelay = `${i*0.05}s`

}