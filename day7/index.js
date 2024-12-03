//select

const h1Ele = document.getElementById("heading");
console.log(heading);

//new content varible;
const newContent = "---------12345-------";

//Assing Value to Teg:

h1Ele.innerText = newContent;

const divEle = document.getElementsByClassName("title");

//            0  1  2  3  ,......
// divEle.innertext = "Third Div Teg";

for(let i = 0; i < divEle.length; i++) {
    if (1 % 2===0) {
divEle[i].innerText = "even";
} else {
    //odd index
divEle[i].innerText = "odd";
}
}