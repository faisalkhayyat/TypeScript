export enum DayTypes {
    SUNDAY = "weekday",
    MONDAY = "weekday",
    TUESDAY = "weekday",
    WEDNESDAY = "weekday",
    THURSDAY = "weekday",
    FRIDAY = "weekend day",
    SATURDAY = "weekend day"
};

export function DayType(day: string): void{
    console.log(`${day} is a ${DayTypes}`)
}

let day : string = "FriDaY";
DayType(day.toUpperCase());