import { useEffect, useState } from "react";

const Countries = () => {
    // 1. Need to put data by useState Hook
    const [countries,setCountries]=useState([])

    // 2. For data load need UseEfect hoook
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data));

    },[])
    return (
        <div>
            <h3>Countries List</h3>
        </div>
    );
};

export default Countries;