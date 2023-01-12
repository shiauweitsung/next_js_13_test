import GetTest, { getData } from "./GetTest";

async function getDatas() {
    const res = await fetch('http://localhost:5050', {
        next: { revalidate: 20 }
    });
    const data = await res.json();
    console.log(data, 'data');
    return data;
}

export default async function FetchPages() {
    const a = await getDatas();
    console.log(a, 'a');
    return (
        <div>
            fetch pages
            <GetTest />
        </div>
    )
}