
const ROPAURL = "../data/ropa.json"

    


export default function renderClothing(){
    
    
    $.get(ROPAURL, (response, state) => {
        
        let value = JSON.parse(localStorage.getItem('CartValue')) || [];
        let names = JSON.parse(localStorage.getItem('addToCart')) || [];
        let totalPaying = JSON.parse(localStorage.getItem('totalPaying')) || [];
        let tableTop = JSON.parse(localStorage.getItem('tableTop')) || [];
        let total = 0;

        localStorage.setItem("addToCart", JSON.stringify(names));
        localStorage.setItem("CartValue", JSON.stringify(value));
        localStorage.setItem("totalPaying", JSON.stringify(totalPaying));
        localStorage.setItem('tableTop', JSON.stringify(tableTop));
        
        if(state === "success"){
            
            

            for (let i = 0; i < response.dataropa.length; i++) {
                
                

                if(i >= 0 && i <= 2){
                $("#container-camisas").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                                                <div class="card mt-3" style="width: 18rem;">
                                                    <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                             <h5 class="card-title">${response.dataropa[i].title}</h5>
                                                                <p class="card-text">${response.dataropa[i].info}</p>
                                                            </div>
                                                        <ul class="list-group list-group-flush">
                                                         <li class="list-group-item">${response.dataropa[i].sexo}</li>
                                                        <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                      
             
                }  
                 
                else if(i >= 3 && i <= 5){
                    $("#container-remeras").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                                                <div class="card mt-3" style="width: 18rem;">
                                                    <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                             <h5 class="card-title">${response.dataropa[i].title}</h5>
                                                                <p class="card-text">${response.dataropa[i].info}</p>
                                                            </div>
                                                        <ul class="list-group list-group-flush">
                                                         <li class="list-group-item">${response.dataropa[i].sexo}</li>
                                                        <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                }
                else if(i >= 6 && i <= 8){
                    $("#container-musculosas").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                    <div class="card mt-3" style="width: 18rem;">
                        <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                 <h5 class="card-title">${response.dataropa[i].title}</h5>
                                    <p class="card-text">${response.dataropa[i].info}</p>
                                </div>
                            <ul class="list-group list-group-flush">
                             <li class="list-group-item">${response.dataropa[i].sexo}</li>
                            <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                             <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                            </ul>
    
                    </div>
                        </div>`) 
                }
                else if(i >= 9 && i <= 11){
                    $("#container-abrigos").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                                                <div class="card mt-3" style="width: 18rem;">
                                                    <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                             <h5 class="card-title">${response.dataropa[i].title}</h5>
                                                                <p class="card-text">${response.dataropa[i].info}</p>
                                                            </div>
                                                        <ul class="list-group list-group-flush">
                                                         <li class="list-group-item">${response.dataropa[i].sexo}</li>
                                                        <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                }
                else if(i >= 12 && i <= 14){
                    $("#container-buzos").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                                                <div class="card mt-3" style="width: 18rem;">
                                                    <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                             <h5 class="card-title">${response.dataropa[i].title}</h5>
                                                                <p class="card-text">${response.dataropa[i].info}</p>
                                                            </div>
                                                        <ul class="list-group list-group-flush">
                                                         <li class="list-group-item">${response.dataropa[i].sexo}</li>
                                                        <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                }
                else if(i >= 15 && i <= 17){
                    $("#container-polleras").append(`<div class=" col-xl-4 col-md-6 d-flex justify-content-center Bebas">
                                                <div class="card mt-3" style="width: 18rem;">
                                                    <img src="${response.dataropa[i].img}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                             <h5 class="card-title">${response.dataropa[i].title}</h5>
                                                                <p class="card-text">${response.dataropa[i].info}</p>
                                                            </div>
                                                        <ul class="list-group list-group-flush">
                                                         <li class="list-group-item">${response.dataropa[i].sexo}</li>
                                                        <li class="list-group-item">$${response.dataropa[i].precio} ARS</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                }

                
                $(`#${response.dataropa[i].id}`).click(() => {
                       

                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: `Agregaste: ${response.dataropa[i].title} al carrito`,
                        showConfirmButton: false,
                        timer: 1000
                      })
    
                    
                    
                    let topContainer = `<tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                        </tr>`
                      
                    localStorage.setItem("tableTop", JSON.stringify(topContainer));
                    
                        
                     let drawer =  `
                                    
                                        <tr id="idR${response.dataropa[i].id}">
                                                 <td>
                                                                  <div class="cart-info Bebas">
                                                                      <img class="size" src="${response.dataropa[i].img}" alt="">
                                                                      <div>
                                                                        <p>${response.dataropa[i].title}</p>
                                                                        <small>Precio: $${response.dataropa[i].precio} ARS</small>
                                                                        <br>
                                                                        <button id=id${response.dataropa[i].id} type="button" class="btn btn-success">Remover</button>
                                                                      </div>
                                                                  </div>
                                                 </td>
                                                 <td><input type="number" value="1">
                                                 </td>
                                                 <td>$${response.dataropa[i].precio} ARS
                                                 </td>
                                               </tr>
                                     
                     
                  `;

                  let adder = JSON.parse(localStorage.getItem("addToCart"));

                  adder.push(drawer);
                
                  localStorage.setItem("addToCart", JSON.stringify(adder));

                  let itemValue = JSON.parse(localStorage.getItem("CartValue"));

                  itemValue.push(parseInt(`${response.dataropa[i].precio}`))

                  localStorage.setItem("CartValue", JSON.stringify(itemValue));

                  let array = JSON.parse(localStorage.getItem("CartValue")); 
                  
                  const sumWithInitial = array.reduce(
                    (previousValue, currentValue) => previousValue + currentValue,
                    total);
                  
                  let taxIva = parseInt(sumWithInitial * 1.21);  

                  let base = `<table class="total-price">
                        <tr>
                        <td>Subtotal</td>
                        <td>$${sumWithInitial} ARS</td>
                        </tr>
                        <tr>
                        <td>Impuesto IVA (21%)</td>
                        <td id="table-foot">$${taxIva} ARS</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td id="table-foot">$${taxIva} ARS</td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><button id="buy" type="button" class="btn btn-success">Comprar</button></td>
                        </tr>
                        </table>`
                      
                 localStorage.setItem("totalPaying", JSON.stringify(base));
  
                 return false;
                 
                });
            }
                
                
                
                

                    


                                   
        }

    

       
    
        for(let j = 0; j < response.dataropa.length; j++){

        $(`#id${response.dataropa[j].id}`).click(() => {

        
            
            $(`#idR${response.dataropa[j].id}`).html("");
           
            
            // no se me ocurrio manera de eliminar todo cuando no existe ningun item en el carrito
            if(document.getElementById(`idR${response.dataropa[j].id}`).innerHTML = ""){

                localStorage.clear();
                $("#top-table").html("")
                $("#cart-container").html("");
                $("#table-foot").html("");
            }

        })
        }
        return false;    

    })

    


    $("#top-table").html(JSON.parse(localStorage.getItem("tableTop")))   
    $("#cart-container").html(JSON.parse(localStorage.getItem("addToCart")));
    $("#table-foot").html(JSON.parse(localStorage.getItem("totalPaying")));
    

    $("#buy").click(() => {

       Swal.fire(
                   
           'Gracias por tu compra!',
           'Esperamos que lo disfrutes!',
           'success'
           
       )
       localStorage.clear();
       $("#top-table").html("")
       $("#cart-container").html("");
       $("#table-foot").html("");
       
    })

    $("#Clean").click(() =>{ 
       localStorage.clear();
       $("#top-table").html("")
       $("#cart-container").html("");
       $("#table-foot").html("");
    })
    
          
}
        
        
        
        


                 

                    

                  
                
                
                  
                  
                    

        
            

                  
                    
                    
                  
              
               
                
                

                    
                    
    
         
     
         

