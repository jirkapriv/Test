const button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");
const block = document.getElementById("block");
const imge = document.getElementById("imge");



button1.onclick = () =>{
    let pog = input1.value;
    document.body.style.backgroundImage = `url("${pog}")`;
    
    };


block.onmouseover = () =>{

    let move = 20;
    block.style.left = `${move}px`;


};

imge.onclick = () =>{

imge.style.width = 50 +"px"
imge.style.height = 50 +"px"
};