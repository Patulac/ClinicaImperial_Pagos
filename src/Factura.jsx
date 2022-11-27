import "./Estilos.css"
function Factura() {
     return (<div className="Contenido">


          <div>
               <div className="servicio">

                    <p>
                         <h2>
                              Factura
                         </h2>
                    </p>


                    <table >

                         <tr>
                              <th>SERVICIO</th>
                              <th colspan="10">VALOR</th>
                         </tr>
                         <tr>
                              <td>Lorem ipsum</td>
                              <td>000.000</td>
                              <tr>

                              </tr>

                              <td>Lorem ipsum</td>
                              <td>000.000</td>
                         </tr>
                         <tr>

                              <td>000.000</td>
                              <td>Total a pagar </td>

                         </tr>
                    </table>

                    <div>

                         <div className="botones">
                              <button id="Generar">
                                   Generar
                              </button>

                              <button id="Pagar2">
                                   Pagar
                              </button>  
                         </div>
                    </div>
               </div>
          </div>
          <div className="botones">
               <a id='pse' href="https://clinicapse.s3.amazonaws.com/index.html
">PSE</a>
               <a id='tarjeta' href="https://clinicatarjeta.s3.amazonaws.com/index.html
npm run dev
">Tarjeta Crédito</a>
          </div>
     </div>
     )
}

export default Factura