const generatedid = document.getElementById("genid");

const empname = document.getElementById("name");
const employeeid = document.getElementById("id");
const pay = document.getElementById("payment");

const id5 = document.getElementById("i5");
const name5 = document.getElementById("n5");
const job5 = document.getElementById("j5");
const pay5 = document.getElementById("p5");
const tenure5 = document.getElementById("t5");

const id6 = document.getElementById("i6");
const name6 = document.getElementById("n6");
const job6 = document.getElementById("j6");
const pay6 = document.getElementById("p6");
const tenure6 = document.getElementById("t6");

const id7 = document.getElementById("i7");
const name7 = document.getElementById("n7");
const job7 = document.getElementById("j7");
const pay7 = document.getElementById("p7");
const tenure7 = document.getElementById("t7");

const id8 = document.getElementById("i8");
const name8 = document.getElementById("n8");
const job8 = document.getElementById("j8");
const pay8 = document.getElementById("p8");
const tenure8 = document.getElementById("t8");

const id9 = document.getElementById("i9");
const name9 = document.getElementById("n9");
const job9 = document.getElementById("j9");
const pay9 = document.getElementById("p9");
const tenure9 = document.getElementById("t9");

const id10 = document.getElementById("i10");
const name10 = document.getElementById("n10");
const job10 = document.getElementById("j10");
const pay10 = document.getElementById("p10");
const tenure10 = document.getElementById("t10");

const id11 = document.getElementById("i11");
const name11 = document.getElementById("n11");
const job11 = document.getElementById("j11");
const pay11 = document.getElementById("p11");
const tenure11 = document.getElementById("t11");

const id12 = document.getElementById("i12");
const name12 = document.getElementById("n12");
const job12 = document.getElementById("j12");
const pay12 = document.getElementById("p12");
const tenure12 = document.getElementById("t12");

const id13 = document.getElementById("i13");
const name13 = document.getElementById("n13");
const job13 = document.getElementById("j13");
const pay13 = document.getElementById("p13");
const tenure13 = document.getElementById("t13");

let row = 1;
let res1= true;
let res2= true;
let res3= true;
let res4= true;
let res5= true;
let res6= true;
let res7= true;
let res8= true;
let res9= true;

function generate(){
    let a; let b; let result;
    let min1 = 10;
    let max1 = 99;
    let min2 = 2000;
    let max2 = 9999;
    let randomNum1 = Math.floor(Math.random() * (max1-min1)) + min1;
    let randomNum2 = Math.floor(Math.random() * (max2-min2)) + min2;
    a = randomNum1;
    b = randomNum2;
    result = "24R" + a+ "A" +b;
    generatedid.textContent = result;
}
function submit(){
    let job = document.getElementById("job").value;
    let tenure = document.getElementById("tenure").value;

    if(res1){
       id5.textContent = employeeid.value;
       name5.textContent = empname.value;
       pay5.textContent = "₹" + pay.value;
       job5.textContent = job;
       tenure5.textContent = tenure;
       res1 = false;
   }
    else if(res2){
       id6.textContent = employeeid.value;
       name6.textContent = empname.value;
       pay6.textContent = "₹" +pay.value;
       job6.textContent = job;
       tenure6.textContent = tenure;
       res2 = false;
   }
   else if(res3){
       id7.textContent = employeeid.value;
       name7.textContent = empname.value;
       pay7.textContent = "₹" +pay.value;
       job7.textContent = job;
       tenure7.textContent = tenure;
       res3 = false;
       }
   else if(res4){
       id8.textContent = employeeid.value;
       name8.textContent = empname.value;
       pay8.textContent = "₹" +pay.value;
       job8.textContent = job;
       tenure8.textContent = tenure;
       res4 = false;
   }
   else if(res5){
       id9.textContent = employeeid.value;
       name9.tex9Content = empname.value;
       pay9.textContent = "₹" +pay.value;
       job9.textContent = job;
       tenure9.textContent = tenure;
       res5 = false;
   }
   else if(res6){
       id10.textContent = employeeid.value;
       name10.textContent = empname.value;
       pay10.textContent = "₹" +pay.value;
       job10.textContent = job;
       tenure10.textContent = tenure;
       res6 = false;
   }
   else if(res7){
       id11.textContent = employeeid.value;
       name11.textContent = empname.value;
       pay11.textContent = "₹" +pay.value;
       job11.textContent = job;
       tenure11.textContent = tenure;
       res7 = false;
   }
   else if(res8){
       id12.textContent = employeeid.value;
       name12.textContent = empname.value;
       pay12.textContent = "₹" +pay.value;
       job12.textContent = job;
       tenure12.textContent = tenure;
       res8 = false;
   }
   else if(res9){
       id13.textContent = employeeid.value;
       name13.textContent = empname.value;
       pay13.textContent = "₹" +pay.value;
       job13.textContent = job;
       tenure13.textContent = tenure;
       res9 = false;
   }
}
function iq5(){
       id5.textContent = "";
       name5.textContent = "";
       pay5.textContent = "";
       job5.textContent = "";
       tenure5.textContent = "";
       res1 = true;
}
function iq6(){
       id6.textContent = "";
       name6.textContent = "";
       pay6.textContent = "";
       job6.textContent = "";
       tenure6.textContent = "";
       res2 = true;
}
function iq7(){
       id7.textContent = "";
       name7.textContent = "";
       pay7.textContent = "";
       job7.textContent = "";
       tenure7.textContent = "";
       res3 = true;
}
function iq8(){
       id8.textContent = "";
       name8.textContent = "";
       pay8.textContent = "";
       job8.textContent = "";
       tenure8.textContent = "";
       res4 = true;
}
function iq9(){
       id9.textContent = "";
       name9.textContent = "";
       pay9.textContent = "";
       job9.textContent = "";
       tenure9.textContent = "";
       res5 = true;
}
function iq10(){
       id10.textContent = "";
       name10.textContent = "";
       pay10.textContent = "";
       job10.textContent = "";
       tenure10.textContent = "";
       res6 = true;
}
function iq11(){
       id11.textContent = "";
       name11.textContent = "";
       pay11.textContent = "";
       job11.textContent = "";
       tenure11.textContent = "";
       res7 = true;
}
function iq12(){
       id12.textContent = "";
       name12.textContent = "";
       pay12.textContent = "";
       job12.textContent = "";
       tenure12.textContent = "";
       res8 = true;
}
function iq13(){
       id13.textContent = "";
       name13.textContent = "";
       pay13.textContent = "";
       job13.textContent = "";
       tenure13.textContent = "";
       res9 = true;
}