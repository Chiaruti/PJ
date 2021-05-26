import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {moment, startdate} from "moment";

 
export default class Example extends React.Component {

   
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date(),
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {

    return (
     
      <div>
      
        
         <DayPicker
                 
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
          fromMonth={new Date(30)}
         
          disabledDays={[
            {  after: new Date()  },                      
         ]}
        />
              
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Select a day '}
        </p>
      </div>
    );
  }
}
