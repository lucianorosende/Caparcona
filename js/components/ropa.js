
const ROPAURL = "../data/ropa.json"

    


export default function renderClothing(){
    
    
    $.get(ROPAURL, (response, state) => {
        let names = JSON.parse(localStorage.getItem('addToCart')) || []
        localStorage.setItem("addToCart", JSON.stringify(names));
        

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
                                                        <li class="list-group-item">${response.dataropa[i].precio}</li>
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
                                                        <li class="list-group-item">${response.dataropa[i].precio}</li>
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
                            <li class="list-group-item">${response.dataropa[i].precio}</li>
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
                                                        <li class="list-group-item">${response.dataropa[i].precio}</li>
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
                                                        <li class="list-group-item">${response.dataropa[i].precio}</li>
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
                                                        <li class="list-group-item">${response.dataropa[i].precio}</li>
                                                         <button type="button" id="${response.dataropa[i].id}" class="btn btn-primary m-3">Comprar</button>
                                                        </ul>
            
                                                </div>
                                            </div>`)
                }

                
                $(`#${response.dataropa[i].id}`).click(() => {
                    
                  
                    // let precio = currency(dataropa.precio);
                    // if($(`#${response.dataropa[i].id}`)){
                        
                     let drawer =  `<tr id="cart-container">
                    <td>
                      <div class="cart-info Bebas">
                          <img class="size" src="${response.dataropa[i].img}" alt="">
                          <div>
                            <p>${response.dataropa[i].title}</p>
                            <small>Precio: ${response.dataropa[i].precio}</small>
                            <br>
                            <a href="">Remover</a>
                          </div>
                      </div>
                    </td>
                    <td><input type="number" value="1">
                    </td>
                    <td>${response.dataropa[i].precio}
                    </td>
                  </tr>
                  `;
                    
                  
                  let adder = JSON.parse(localStorage.getItem("addToCart"));
                  adder.push(drawer);
                  localStorage.setItem("addToCart", JSON.stringify(adder));
                    
                    // localStorage.setItem("cartAdded", html);
                    
                    // JSON.parse(localStorage.getItem("addToCart")).push(html);
                    
                    

                    //   console.log(`este es el id del item ${response.dataropa[i].id} ${localStorage.getItem("addToCart")}`)
                    return false;
                    // }
                    
                  
                });
              
               

                

                    
                    
    
            }
                
                
                
                

                    


                                   
        }

            

    })
         
  

       
     $("#cart-container").html(JSON.parse(localStorage.getItem("addToCart")));
        
           
}

