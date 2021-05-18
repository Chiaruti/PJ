import React, { useState } from 'react'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { DatePickerCalendar, useDateInput } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function Daily() {
  const [date, setDate] = useState()
  const inputProps = useDateInput({
    date,
    format: 'dd-MM-yyyy',
    locale: it,
    onDateChange: setDate
  })
  return (
    <div>
      <p>La data selezionata è: {date && format(date, 'dd MMM yyyy', { locale: it })}</p>
      <input className='input' {...inputProps} />
      {/* <DateInput
  maxDate={moment().subtract(1, "years")}
  initialDate={moment().subtract(1, "years")} 
  value={this.state.date}
/> */}
      <DatePickerCalendar date={date} onDateChange={setDate} locale={it} />
    </div>
  )
}

// import React from "react";

// import { DateInput } from "semantic-ui-calendar-react";

// const currentdate = new Date();
// const currentYear = currentdate.getFullYear();
// const maxdate = new Date(currentdate.setYear(currentdate.getFullYear() + 1));
// class Daily extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: "",
//       time: "",
//       dateTime: "",
//       datesRange: ""
//     };
//   }

//   handleChange = (event, { name, value }) => {
//     if (this.state.hasOwnProperty(name)) {
//       this.setState({ [name]: value });
//     }
//   };

//   render() {
//     return (
//       <DateInput
//         dateFormat="DD - MM - YYYY"
//         name="date"
//         placeholder="Date"
//         maxDate={maxdate}
//         value={this.state.date}
//         iconPosition="left"
//         onChange={this.handleChange}
//       />
//     );
//   }
// }
// export default Daily;