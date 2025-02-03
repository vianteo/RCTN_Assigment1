

import React, { useState, useEffect } from "react";
import './tableCurrency.css';

export default function TableCurrency() {
    const [currencyCAD, setCurrencyCAD] = useState(null);
    const [currencyEUR, setCurrencyEUR] = useState(null);
    const [currencyIDR, setCurrencyIDR] = useState(null);
    const [currencyJPY, setCurrencyJPY] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getdataAPI();
    }, []);

    async function getdataAPI() {
        try {
            let result = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0f2e1472a5cc457390765666390e3167');
            let dataresult = await result.json();
            console.log(dataresult.rates.CAD);
            setCurrencyCAD(dataresult.rates.CAD);
            console.log(dataresult.rates.EUR);
            setCurrencyEUR(dataresult.rates.EUR);
            console.log(dataresult.rates.IDR);
            setCurrencyIDR(dataresult.rates.IDR);
            console.log(dataresult.rates.JPY);
            setCurrencyJPY(dataresult.rates.JPY);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    function handleBuy(currencynow) {
        if (!currencynow) return '-'; // handle case where the currency is not yet loaded
        let buyvalue = Number(currencynow) * 0.05;
        let Buy = buyvalue + Number(currencynow);
        return Buy.toFixed(2);
    }

    function handleSell(currencynow) {
        if (!currencynow) return '-'; // handle case where the currency is not yet loaded
        let Sellvalue = Number(currencynow) * 0.05;
        let Sell = Number(currencynow) - Sellvalue;
        return Sell.toFixed(2);
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1 id="coba">Currency Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="cobain" scope="col">Currency</th>
                        <th scope="col">WeBuy</th>
                        <th scope="col">ExchangeRate</th>
                        <th scope="col">WeSell</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">CAD</th>
                        <td>{handleBuy(currencyCAD)}</td>
                        <td>{currencyCAD}</td>
                        <td>{handleSell(currencyCAD)}</td>
                    </tr>
                    <tr>
                        <th scope="row">EUR</th>
                        <td>{handleBuy(currencyEUR)}</td>
                        <td>{currencyEUR}</td>
                        <td>{handleSell(currencyEUR)}</td>
                    </tr>
                    <tr>
                        <th scope="row">IDR</th>
                        <td>{handleBuy(currencyIDR)}</td>
                        <td>{currencyIDR}</td>
                        <td>{handleSell(currencyIDR)}</td>
                    </tr>
                    <tr>
                        <th scope="row">JPY</th>
                        <td>{handleBuy(currencyJPY)}</td>
                        <td>{currencyJPY}</td>
                        <td>{handleSell(currencyJPY)}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
