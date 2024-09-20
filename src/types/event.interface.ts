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
    recurringEventId?: string;
}

interface IStartEnd {
    dateTime: string;
    timeZone: string;
}