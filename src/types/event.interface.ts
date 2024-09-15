export interface IEventCard {
    id: string;
    summary: string;
    description: string;
    location: string;
    creator?: {
        email: string;
    }
    start: IStartEnd;
    end?: IStartEnd;
}

interface IStartEnd {
    dateTime: string;
    timeZone: string;
}