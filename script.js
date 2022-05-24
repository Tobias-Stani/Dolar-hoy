let divDolar = document.getElementById("divDolar");

// llamamos a la api

setInterval(() => {
  fetch("https://criptoya.com/api/dolar")
    .then((response) => response.json())
    .then((datos) => {
      let { oficial, blue, ccb, ccl, mep, solidario } = datos;
      divDolar.innerHTML = `

    <div class="layout col-lg-4 col-md-12 mb-4">

        <div class="card m-4 shadow-lg p-3 mb-5 bg-body rounded" style="width: 20rem;">
          <div class="card-body">
            <h2 class="card-title card-header-first text-center titulo">Dolar</h2>
            <p class="card-text fs-4 text-center">$ ${oficial} Pesos</p>
          </div>
        </div>

        <div class="card m-4 shadow-lg p-3 mb-5 bg-body rounded" style="width: 20rem;">
          <div class="card-body">
            <h2 class="card-title card-header-first text-center titulo">Dolar Blue</h2>
            <p class="card-text fs-4 text-center">$ ${blue} Pesos</p>
          </div>
        </div>

        <div class="card m-4 shadow-lg p-3 mb-5 bg-body rounded" style="width: 20rem;">
          <div class="card-body">
            <h2 class="card-title card-header-first text-center titulo">Dolar Ccl</h2>
            <p class="card-text fs-4 text-center">$ ${ccl} Pesos</p>
          </div>
        </div>

        <div class="card m-4 shadow-lg p-3 mb-5 bg-body rounded" style="width: 20rem;">
          <div class="card-body">
            <h2 class="card-title card-header-first text-center titulo">Dolar Solidario</h2>
            <p class="card-text fs-4 text-center">$ ${solidario} Pesos</p>
          </div>
        </div>

        <div class="card m-4 shadow-lg p-3 mb-5 bg-body rounded" style="width: 20rem;">
          <div class="card-body">
            <h2 class="card-title card-header-first text-center titulo">Dolar Ccb</h2>
            <p class="card-text fs-4 text-center">$ ${ccb} Pesos</p>
          </div>
        </div>
        
    </div>

 

        `;
    })

    .catch((error) => console.error(error));
}, 100);
