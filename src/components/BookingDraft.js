import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import { fetchAPI, submitAPI } from "./temp";

let selectedTimes;

// reducer function
const reducerFunction = (state,  action) => {
    console.log('reducer function state---',state)
    if(action.status === 'reserved') {
        state.id = state.id + 1
        state.timeSlot = selectedTimes;
        console.log('selectedTime / reducer function state AFTER---', state)
        return({timeSlot: state.timeSlot})
    }
}




const BookingForm = () => {
    const [date,setDate] = useState();
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState();
    const [state , dispatch] = useReducer(reducerFunction, {id:0 , timeSlot: '00:00'})

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`
        Booking Confirmed!

        Date:  ${date},
        Time:  ${state.timeSlot},
        Number of guests:  ${guests},
        For:  ${occasion}
        
        Can't wait to meet you!`);
    };

    function pickTimes(selectedTime) {
        dispatch({status: 'reserved'})
        console.log('selectedTimes', selectedTime)
        selectedTimes = selectedTime;
    }

    const availableTimes = fetchAPI(new Date(date))

    return(
        <div className="booking-div">
            <h1>Draft: Reserve a Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date"
                    value={date} onChange={e => setDate(e.target.value)}/>
                    {console.log('form date----',date)}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time" value= {state.timeSlot} onChange={e=> pickTimes(e.target.value)}>
                        {availableTimes.map((value) => {
                            console.log('value----',value,'statetimeslot--',state.timeSlot)
                            return(<option id="time-options">{value}</option>)
                        })}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="1" min="1" max="15" id="guests"
                    value={guests} onChange={e => setGuests(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Choose Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="field"><input type="submit" value="Make Your reservation"></input></div>
                {console.log('date',date,'time',state, 'guests', guests, 'occasion',occasion)}
            </form>
        </div>
    )
}



export default BookingForm;