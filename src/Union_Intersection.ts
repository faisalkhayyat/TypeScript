type All = {
    s: string,
    n: number,
    b:boolean
}

type coordinates = {
    long: number,
    lat: number
}

type ACoordinates = coordinates & {
    alt: number
}

type map = coordinates & ACoordinates;

function Details(obj: map): void{
    console.log(`Longitude: ${obj.long}`);
    console.log(`Latitude: ${obj.lat}`);
    console.log(`Altitude: ${obj.alt}`);
}

let aCoor = {long: 31.5234, lat: 32.235436, alt: 998.98}
Details(aCoor);