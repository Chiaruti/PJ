import React, { useState } from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build';
//import '../App.css'


export default function Weekly() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  return (
    <div>
      <p>Seleziona data di inizio: {startDate ? format(startDate, 'dd MMM yyyy', { locale: it  }) : 'none'}.</p>
      <p className="fine d-flex">Seleziona data di fine: {endDate ? format(endDate, 'dd MMM yyyy', { locale: it }) : 'none'}.</p>
 
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={it}
      />
    </div>
  )
}