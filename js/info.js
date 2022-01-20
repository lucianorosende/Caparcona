const holder = [];
const holder2 = [];
const holder3 = [];
const holder4 = [];


// hice 5 partes del nav porque el resto tiene svgs 
for(let i = 1; i < 6; i++){

    holder.push(document.getElementById(`n${i}`).innerHTML);
    
}

// todos los h1 a 6

for(let i = 1; i < 5; i++){

    holder2.push(document.getElementById(`t${i}`).innerHTML);

}

// relojes y precios

for(let i = 1; i < 9; i++){

    holder3.push(document.getElementById(`r${i}`).innerHTML);

}

// info de camisas



for(let i = 1; i < 4; i++){

    holder4.push(document.getElementById(`c${i}`).innerHTML);
    
    
    

}


console.log(holder);
console.log(holder2);
console.log(holder3);
console.log(holder4);


// este es para hacerlo con classname , usando un for of


// const classesH = document.getElementsByClassName("card-title");

// for(const classHolder of classesH){

//     console.log(classHolder.innerHTML);

// }



