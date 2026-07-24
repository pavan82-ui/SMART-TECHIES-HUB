import axios from "axios";

export async function getData(url: string) {

    // let res = await fetch(url); //this will wait until we get daat from url
    // let resjson = await res.json();
    // return resjson;   // application layer calls this context

    let res = await axios.get(url); //this will wait until we get daat from url

    return res;   // application layer calls this context

}

export async function postData(url: any, data: any) {
    return await axios.post(url, data)
}

export function downloadUsers() {
    window.print()
}