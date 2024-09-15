import {IEventCard} from "@/types/event.interface";

export function EventCard({props}: {props: IEventCard}) {
    return (
        <li>
            <h2>
                {props.summary}
            </h2>
            <section className="flex flex-col">
                <p>{props.description}</p>
                <p>{props.location}</p>
                <p>{props.start.dateTime}</p>
                <p>{props.end?.dateTime}</p>
            </section>
            <small>{props.creator?.email}</small>
        </li>
    )
}