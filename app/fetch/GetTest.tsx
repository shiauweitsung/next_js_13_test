'use client';
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown/dropdown";

export async function getData() {
    const res = await fetch('http://localhost:5050', {
            next: { revalidate: 20 }
        });
        const data = await res.json();
        console.log(data, 'data');
        return data;
}

export default function GetTest() {
    const [data, setData] = useState<any>();
    
    useEffect(()=>{
        (async()=>{
            // const arr = await getData();
            // console.log(arr,'arr');
            
        })();
    },[])
    useEffect(()=>{
        console.log(data,'use effect data');
    },[data])

    return (
        <div>
            get test console log
            <Dropdown option={[{value:'123',label:'123'}]}
            onChange={()=>{
                console.log('change');            
            }}
                />
        </div>
    )
}