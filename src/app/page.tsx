import {EventCard} from "@/components/event/event-card/EventCard";
import calendar from '../data/data.json';
import {IEventCard} from "@/types/event.interface";

const fakeNow = new Date('2024-09-20T06:27:28Z');

// Clone the date to avoid mutating the original
const newDate = new Date(fakeNow);

// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeek = newDate.getUTCDay();

// Calculate how many days we need to subtract to reach the previous Monday
const daysToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);

// Subtract the number of days
newDate.setUTCDate(newDate.getUTCDate() - daysToMonday);

// Set time to midnight (00:00:00)
newDate.setUTCHours(0, 0, 0, 0);

// Calculate the upcoming Sunday at 11:59:59 PM
const upcomingSunday = new Date(fakeNow);
const daysToSunday = (7 - dayOfWeek) % 7;
upcomingSunday.setUTCDate(upcomingSunday.getUTCDate() + daysToSunday);
upcomingSunday.setUTCHours(23, 59, 59, 999);

// Filter function to get events for this week
function getThisWeekEvents(): IEventCard[] {
    return calendar.items.filter(item => {
        const eventDate = new Date(item.start.dateTime);
        return eventDate >= newDate && eventDate <= upcomingSunday;
    });
}

export default function Home() {
  return (
    <div>
        <ul>
            {
                getThisWeekEvents().map((item: IEventCard) => {
                    return (
                        <EventCard key={item.id} props={item} />
                    )
                })
            }
        </ul>
    </div>
  );
}
