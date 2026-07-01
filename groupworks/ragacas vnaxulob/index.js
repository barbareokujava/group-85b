const start = document.getElementById("start");
const envelope = document.querySelector(".envelope");
const flowers = document.getElementById("flowers");

start.onclick = ()=>{

flowers.classList.add("show");

setTimeout(()=>{
envelope.classList.add("open");
},1000);

}