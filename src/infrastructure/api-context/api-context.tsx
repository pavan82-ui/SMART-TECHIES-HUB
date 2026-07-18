

export async function getData(url: string) {

    let res = await fetch(url); //this will wait until we get daat from url
    let resjson = await res.json();
    return resjson;   // application layer calls this context

}


export function downloadUsers() {
    window.print()
}