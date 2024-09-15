import {EventCard} from "@/components/event/event-card/EventCard";
import calendar from '../data/data.json';
import {IEventCard} from "@/types/event.interface";

export default function Home() {
  return (
    <div>
        <ul>
            {
                calendar.items.map((item: IEventCard) => {
                    return (
                        <EventCard key={item.id} props={item} />
                    )
                })
            }
        </ul>
    </div>
  );
}
