let yaw = prompt('Yawinizi qeyd edin!');
let reqem = 20 ;
if(yaw >=reqem){
   alert('duzgundur')
}else{

    alert('sehvdir')
}

function chek() {

    let show = document.getElementById('show')
    let inp = document.getElementById('inp')
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let alpb = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let symbol = ['*', '+', '-', '/', '!', '&', ':', '@', '#', '%'];
    let newArray = alpb.concat(numbers, symbol);
    let rnd;
    let data = " ";
    for (let i = 0; i < inp.value; i++) {
        rnd = Math.floor(Math.random() * newArray.length);
        data += newArray[rnd];
    }
    show.innerHTML = data;
}
