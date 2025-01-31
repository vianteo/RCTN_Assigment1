import React from "react";
import './tableCurrency.css';

export default function TableCurrency(){
    return(
        <> <h1 id="coba">terpanggil</h1>
                    <table class="table" >
            <thead>
                <tr>
                <th className="cobain" scope="col">#</th>
                <th style ={{background:"rgb(255, 165, 0)"}} scope="col">Currency</th>
                <th scope="col">WeBuy</th>
                <th scope="col">ExhangeRate</th>
                <th scope="col">WeSell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>

        </>
    )
}