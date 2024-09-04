

let ele = document.createElement("div") ;
let head = document.createElement("header") ;
let content = document.createElement("div");
let foot = document.createElement("footer");

let insidehead = document.createElement("div");
let valueinsidehead = document.createTextNode("Elzero");
let valuefoot = document.createTextNode("copyright 2024");

//loop :-

for (i=1; i<19; i++) {
let product = document.createElement ("div");
let insidepro = document.createElement("span");

insidepro.innerHTML= ` ${[i]} <div> Product </div> `

product.className= `product `;

content.appendChild(product);
product.appendChild(insidepro);

product.style.cssText = " border-radius: 8px; cursor:pointer; min-width: 120px; min-height: 80px; background-color: #fff;display: flex;justify-content: center;align-items: center;";
insidepro.style.cssText = "    display: flex;flex-direction: column;align-items: center; font-size: 20px;font-weight: bold;" ;
}
//...............................................................

let insidehead2 = document.createElement("div"); 
let valueinsidehead2= document.createElement=("div")

// add ("P") in HTML ... 

insidehead2.innerHTML="<p>Home</p> <p>About</p> <p>Service</p> <p>Contant</p> " ;

// css style ...

ele.style.cssText = "padding :0px; margin :0px;";
head.style.cssText ="display: flex ; align-items: center ; justify-content: space-between ;" ;
insidehead2.style.cssText ="display: flex ; gap: 20px; cursor: pointer;" ;
insidehead.style.cssText = "color :green ; font-size : 25px ; font-weight: bold; ";
content.style.cssText = " padding: 10px; background-color: #ccc;  display: grid;grid-template-columns: repeat(3, 1fr);gap: 10px; ";
foot.style.cssText = "display: flex; height: 40px; justify-content: center;font-size: 22px;background-color: #4CAF50;color: white;height: 45px;" ;

// create class name ...

head.className = "web-head" ;
insidehead2.className = "web-head2";
content.className = "content";

// appended child ...

ele.appendChild(head);
ele.appendChild(content);
ele.appendChild(foot);
insidehead.appendChild(valueinsidehead);
head.appendChild(insidehead);
head.appendChild(insidehead2);
foot.appendChild(valuefoot);

// add main element to body ...

document.body.prepend(ele);







