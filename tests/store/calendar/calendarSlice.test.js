import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice'
import { calendarWithEventsState, events, initialState } from '../../__fixtures__/calendarStates'

describe(' Pruebas en calendarSlice', () => {
    test('debe regresr el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    });


    test('onSetActiveEvent debe activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent debe de agregar el evento', () => {
        const newEvent = {
            id: '3',
            start: new Date('2022-10-21 13:00:00'),
            end: new Date('2022-10-21 15:00:00'),
            title: 'Cumpleaños del Alex',
            notes: 'Nota de Test',
        }

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
        expect (state.events).toEqual([...events, newEvent]);
    })
    test('onUpdateEvent debe actualizar el evento el evento', () => {
        const updateEvent = {
            id: '1',
            start: new Date('2022-10-21 13:00:00'),
            end: new Date('2022-10-21 15:00:00'),
            title: 'Alguna nota acutalizsadfa',
        }

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updateEvent));
        expect (state.events).toContain(updateEvent);
    })

    test('onDeleteEvent debe de borrar el evento activo',()=>{
        let state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
        expect ( state.activeEvent ).toEqual(events[0])
        state = calendarSlice.reducer(calendarWithEventsState, onDeleteEvent(state.activeEvent))
        expect (state.activeEvent).toBe(null)
   });

    test('onLoadEvents debe de establecer los eventos',()=>{
        const state = calendarSlice.reducer(calendarWithEventsState, onLoadEvents(events));
        expect ( state.isLoadingEvents ).toBeFalsy();
        expect ( state.events ).toEqual(events)
    });
    test( 'onLogoutCalendar debe de limpiar el estado', ()=> {
        const state = calendarSlice.reducer(calendarWithEventsState, onLogoutCalendar());
        expect ( state ).toEqual( initialState )
    } )
})