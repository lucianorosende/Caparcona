const ROPAURL = "../data/ropa.json"

$.get(ROPAURL, (response, state) => {

    if(state === "success"){
        for (let i = 6; i <= 8; i++) {

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
                                                     <button type="button" class="btn btn-primary m-3">Comprar</button>
                                                    </ul>
        
                                            </div>
                                        </div>`) 
        
                                       
        }


    }

})