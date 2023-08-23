import React, { useReducer, useState, useEffect } from "react";
import { ReactDOM } from "react";
import restaurantright from "../images/restaurant2.jpg"
import { fetchAPI, submitAPI } from "./temp";


const BookingForm = ({state, pickedTimes}) => {
    const [date,setDate] = useState();
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState();

    const availableTimes = fetchAPI(new Date(date))

    const handleSubmit = (e)=> {
        e.preventDefault();
        submitAPI({date: date, time: state.timeSlot, guests: guests, occasion: occasion})
        alert(`
        Booking Confirmed!

        Date:  ${date},
        Time:  ${state.timeSlot},
        Number of guests:  ${guests},
        For:  ${occasion}

        Can't wait to meet you!`);
    };

    return(
        <div className="booking-div">
            <form className="form-class" onSubmit={handleSubmit}>
                <h2>Reserve a Table</h2>
                <div className="field">
                    <label htmlFor="res-date" aria-label={date} aria-required="true">Choose Date</label>
                    <input required type="date" id="res-date" placeholder="D/M/Y"
                    value={date} onChange={e => setDate(e.target.value)}/>
                    {console.log('form date----',date)}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time" value= {state.timeSlot}
                    required
                    onChange={e=> pickedTimes(e.target.value)}>
                        {availableTimes.map((time) => {
                            console.log('value----',time,'statetimeslot--',state.timeSlot)
                            return(<option id="time-options">{time}</option>)
                        })}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="1"
                    min="1" max="15" id="guests" required
                    value={guests} onChange={e => setGuests(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Choose Occasion</label>
                    <select id="occasion" value={occasion} required
                    onChange={e => setOccasion(e.target.value)}>
                        <option value='-' selected> - </option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Family Gathering</option>
                        <option>Business Dinner</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="field">
                    <button id="reserve" type="submit" value="CONFIRM!" >CONFIRM RESERVATION</button>
                </div>
                {console.log('date',date,'time',state, 'guests', guests, 'occasion',occasion)}
            </form>
            <div className="rest-image">
                <img alt="retaurant" src={restaurantright} width={500}/>
            </div>
        </div>
    )
}



export default BookingForm;