let con1 = document.querySelector(".doing .con1");
let con2 = document.querySelector(".doing1 .con2");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
console.log(con1,con2,num1,num2);
let input = document.querySelector(".main input");  

let arr1,arr2;
    arr1 = localStorage.arr1 ? localStorage.arr1.split(",") : [];
    arr2 = localStorage.arr2 ? localStorage.arr2.split(",") : [];

input.onkeydown = function(e){
    if(e.keyCode==13 && input.value != ""){
        arr1.unshift(input.value);
        input.value = "";
        update()
    }
}
function update(){
    localStorage.arr1 = arr1.join(",");
    localStorage.arr2 = arr2.join(",");
    con1.innerHTML = "";
    con2.innerHTML = "";
    num1.innerHTML = arr1.length;
    num2.innerHTML = arr2.length;
    arr1.forEach((v,i)=>{ 
        let box = document.createElement("div");
        let do_list = document.createElement("div");
        do_list.className = "do_list";
        let input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","input");
// console.dir(input)
        input.onclick = function (){
            arr1.splice(i,1);
            arr2.unshift(v);
            update();
        }
        let p = document.createElement('p');
        p.innerHTML = v;
// console.dir(p.innerHTML);
        p.onclick = function (){
            let input1 = document.createElement("input");
            input1.setAttribute("type","text");
            input1.value = p.innerText;
            p.innerHTML = "";
            p.appendChild(input1);
            input1.focus();
            input1.onblur = function(){
                p.innerText = input1.value;
                v = p.innerText;
            }  

        }
        let del = document.createElement('div');
        del.className = "del";
        del.onclick = function (){
            arr1.splice(i,1);
            update()
        }
        do_list.appendChild(input,p,del);
        do_list.appendChild(p);
        do_list.appendChild(del);
        box.appendChild(do_list);
        con1.appendChild(box);
    })
    arr2.forEach((v,i)=>{ 
        let box1 = document.createElement("div");
        let do_list = document.createElement("div");
        do_list.className = "do_list";
        let input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","input");
        input.setAttribute("checked","checked")
        input.onclick = function (){
            arr2.splice(i,1);
            arr1.unshift(v);
            update();
        }
        let p = document.createElement('p');
        p.innerHTML = v;
        p.onclick = function (){
            let input1 = document.createElement("input");
            input1.setAttribute("type","text");
            input1.value = p.innerText;
            p.innerHTML = "";
            p.appendChild(input1);
            input1.focus();
            input1.onblur = function(){
                p.innerText = input1.value;
                v = p.innerText;
            }
           
        }
        let del = document.createElement('div');
        del.className = "del";
        del.onclick = function (){
            arr2.splice(i,1);
            update()
        }
        do_list.appendChild(input,p,del);
        do_list.appendChild(p);
        do_list.appendChild(del);
        box1.appendChild(do_list);
        con2.appendChild(box1);   
    })
}
update();