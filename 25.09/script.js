function chek(){
let show = document.getElementById("show");
let sual = document.getElementById("inp").value;
let sual1 = document.getElementById("inp1").value;
let sual2 = document.getElementById("inp2").value;
let button = document.getElementById("button")
let data = " ";
let tarix = new Date();
let il = tarix.getFullYear();
// let ay = tarix.getMonth();
// let gun = tarix.getDate();

for(let i = 0;i<sual2;i++){
data = il - sual2 

}
show.innerHTML = `Sizin ${data} yaşınız var.` ;


}