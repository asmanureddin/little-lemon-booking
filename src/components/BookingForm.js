import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import restaurantright from "../images/restaurant2.jpg"
import { fetchAPI, submitAPI } from "./temp";


const BookingForm = ({state, pickedTimes}) => {
    const [date,setDate] = useState();
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState();
    

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

    const availableTimes = fetchAPI(new Date(date))

    return(
        <div className="booking-div">
            <form className="form-class" onSubmit={handleSubmit}>
                <h2>Reserve a Table</h2>
                <div className="field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input required type="date" id="res-date" placeholder="D/M/Y"
                    value={date} onChange={e => setDate(e.target.value)}/>
                    {console.log('form date----',date)}
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose Time</label>
                    <select required id="res-time" value= {state.timeSlot} onChange={e=> pickedTimes(e.target.value)}>
                        {availableTimes.map((value) => {
                            console.log('value----',value,'statetimeslot--',state.timeSlot)
                            return(<option id="time-options">{value}</option>)
                        })}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input required type="number" placeholder="1" min="1" max="15" id="guests"
                    value={guests} onChange={e => setGuests(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Choose Occasion</label>
                    <select required id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Family Gathering</option>
                        <option>Business Dinner</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="field"><input id="reserve" type="submit" value="CONFIRM!"></input></div>
                {console.log('date',date,'time',state, 'guests', guests, 'occasion',occasion)}
            </form>
            <div className="rest-image">
                <img alt="retaurant" src={restaurantright} width={500}/>
            </div>
        </div>
    )
}



export default BookingForm;