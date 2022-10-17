import { addHours } from "date-fns";
import { deAT } from "date-fns/locale";

export const events = [
    {
        id: '1',
        start: new Date('2022-10-21 13:00:00'),
        end: new Date('2022-10-21 15:00:00'),
        title: 'Cumpleaños del Fernando',
        notes: 'Comprar pastel',
    },
    {
        id: '2',
        start: new Date('2022-10-21 13:00:00'),
        end: new Date('2022-10-21 15:00:00'),
        title: 'Cumpleaños del Melisa',
        notes: 'Comprar pastel',
    }
]

export const initialState = {
    isLoadingEvents: true,
    events: [
        // tempEvent
    ],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events],
    activeEvent: { ...[0]}
}