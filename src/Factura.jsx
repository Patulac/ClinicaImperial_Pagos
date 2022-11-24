import "./Estilos.css"
function Factura(){
    return (<div className="Factura">

     
     <div className="ContenidoFactura">
        <div>
                              
     <p>
        <h1>
        Factura 
        </h1>
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

             <button id="PSE">
                  PSE
                  </button>
                  <button>
             <button id="Tarjetas Credito" >
                  Tarjetas Credito
             </button>
             </button>
             </div>
             </div>
             </div>
             </div>
             </div>
            )                                
}
               
export default Factura