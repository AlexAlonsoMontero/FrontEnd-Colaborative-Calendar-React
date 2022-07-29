import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import enUS from 'date-fns/locale/en-US'
import { addHours } from 'date-fns'
import { getMessagesES, localizer } from '../../helpers/'

import { Navbar, CalendarEvent, CalendarModal } from "../"
import { useState } from 'react'



const events = [{
  title: 'Cumpleaños del jefee',
  notes: 'Hay que comprar pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Alex'

  }

}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CCF7',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white'
    }

    return {style}
  }

  const onDoubleClick = ( event ) =>{
    console.log('====================================');
    console.log({doubleClick:event});
    console.log('====================================');

  }

  const onSelect = ( event ) => {
    console.log('====================================');
    console.log({click:event});
    console.log('====================================');
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setLastView( event )
  }



  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent = {onDoubleClick}
        onSelectEvent = { onSelect }
        onView = {onViewChanged}
      />

      <CalendarModal />
      

    </>
  )
}
