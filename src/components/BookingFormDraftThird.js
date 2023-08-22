
// ---this is the third draft to check out without messing the code


import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import { fetchAPI, submitAPI } from "./temp";

let selectedDate;
let initialTimesAvailable;

// reducer function
const getAvailTimes = (state , action) => {
    switch(action.type) {
        case 'available': 
        state.id = state.id+1;
        break;
        default: 
        // do nthn
    }
}

// initial State for resucer function
const initialTimes = {
    id: 0,
    timeRange: '00:00'
}
const initTimes = ()=> {
    initialTimesAvailable = fetchAPI(new Date(selectedDate))
    console.log('initialAvailableTimes',initialTimesAvailable)
}

const BookingForm = () => {
    const [date,setDate] = useState();
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState();

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert("Booking Confirmed");
    };

    const [state , dispatch] = useReducer(getAvailTimes, initialTimes)

    function getTimes() {
        dispatch({type: 'available'})
    }

    function findAvailableTimes(chosenDate) {
        setDate(chosenDate);
        console.log('date----',date)
    }

    const handleTime= (e)=>{
        
    }

    const availableTimes = fetchAPI(new Date(date))
    console.log('availableTimes:', availableTimes)

    return(
        <div className="booking-div">
            <h1>Draft: Reserve a Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date"
                    value={date} onChange={e => findAvailableTimes(e.target.value)}/>
                    {console.log('form date----',date)}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time" value= {state} onChange={getTimes}>
                        {availableTimes.map((timeSlot) => {
                            console.log('timeSlot----',timeSlot, state)
                            return(<option>{timeSlot}</option>)
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