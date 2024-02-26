import React, { useState } from "react";
import { Calendar } from "react-big-calendar";
import moment from "moment-jalaali";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.loadPersian({ usePersianDigits: true });

const formats = {
    dayFormat: 'jD',
    weekdayFormat: 'dddd',
    monthHeaderFormat: 'jMMMM jYYYY',
    dayHeaderFormat: 'dddd jMMMM jYYYY',
    agendaTimeFormat: 'HH:mm',
    agendaDateFormat: 'jYYYY/jMM/jDD',
    agendaTimeRangeFormat: ({ start, end }: any, culture: any, localizer: any) =>
        `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`,
};

const localizer = {
    formats,
    firstOfWeek: 6, // Adjust based on your locale's first day of the week
    format(value: any, format: any, culture: any) {
        return moment(value)
            .locale(culture || moment.locale())
            .format(format);
    },
    parse(value: any, format: any, culture: any) {
        return moment(value, format).locale(culture || moment.locale());
    },
};

interface Event {
    start: Date;
    end: Date;
    title: string;
}

export default function ReactBigCalendar() {
    const [eventsData, setEventsData] = useState<Event[]>(events);

    const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
        const title = window.prompt("New Event name");
        if (title)
            setEventsData([
                ...eventsData,
                {
                    start,
                    end,
                    title,
                },
            ]);
    };

    const [currentView, setCurrentView] = useState<string>("month");
    const handleViewChange = (view: string) => {
        setCurrentView(view);
    };

    return (
        <Calendar
            views={["month", "week", "day"]}
            selectable
            localizer={localizer as any} // Typecast due to issue with typings
            defaultDate={moment()}
            defaultView="month"
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event: Event) => alert(event.title)}
            onSelectSlot={handleSelect}
            view={currentView}
            onView={handleViewChange}
        />
    );
}
