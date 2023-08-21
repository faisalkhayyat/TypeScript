export enum TrafficColor{
    RED = "stop",
    YELLOW = "steady/slow down",
    GREEN = "go"
}

export function TrafficMsg(state: string){
    console.log(`Traffic Color: ${state.toUpperCase()}, Action: ${TrafficColor}`);
}

let trafficColor: string = "gREeN";
TrafficMsg(trafficColor);