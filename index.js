let countJs = document.getElementById("count-el");
let count = 0;
function increment() {
    count = count + 1;
    //console.log(count);
    countJs.innerHTML = count;
    //console.log(countJs)
}
let pen = document.getElementById("pe")
let ppen = ("Previous entries: ")
function save() {
      ppen = ppen + count + "-";
      pen.innerHTML = ppen;
}