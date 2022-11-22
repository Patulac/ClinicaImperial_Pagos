import "./Estilos.css"
function Factura(){
    return( 
        <div className="ContenidoFactura">
             <div className="Factura">
             <table>
                 <caption>Factura</caption>
                 <tr>
                <td></td>
                <th>SERVICIO</th>
                <th>VALOR</th>
                </tr>
                 <tr>
                    <th>/</th>
                    <td>Number</td>
                    <td>Number</td>
                    <td>Number</td>
                    <td>Number</td>
                    </tr>
                     
                    <tr>
                    <th>/</th>
                       <td>C 1</td>
                       <td>C 2</td>
                       <td>C 3</td>
                       <td>Total a Pagar</td>
                       

                </tr>
                 </table>
             </div>
        </div>
    ) 

}
export default Factura