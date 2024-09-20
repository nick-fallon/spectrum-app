import {IEventCard} from "@/types/event.interface";
import parse from 'html-react-parser';
import { format } from 'date-fns';

export function EventCard({props}: {props: IEventCard}) {
    const parsedDescription = props.description ? parse(props.description.toString()) : props.description;
    const startTime = props.start.dateTime ? format(props.start.dateTime, 'MMM dd hh aa yyyy') : '';
    const endTime = props.end?.dateTime ? format(props.end.dateTime, 'MMM dd hh aa yyyy') : '';
    return (
        <li className="m-2 border-2 border-sf-pink">
            <h2>
                {props.summary}
            </h2>
            <section className="flex flex-col">
                <div>{parsedDescription}</div>
                <p>{props.location}</p>
                <p>Start: {startTime}</p>
                <p>End: {endTime}</p>
            </section>
        </li>
    )
}