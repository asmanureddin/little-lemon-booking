import React, { useState } from "react";

const BookingForm = () => {
    const [date,setDate] = useState();
    const [availableTimes,setAvailableTimes] = useState();
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState();
    const handleSubmit = (e)=> {
        e.preventDefault();
        alert("Booking Confirmed");
    };

    return(
        <div className="booking-div">
            <h1>Reserve a Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date"
                    value={date}
                    onChange={(e)=>{setDate(e.target.value)}}
                    />
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time" value={availableTimes}
                    onChange={(e)=>{setAvailableTimes(e.target.value)}}>
                        <option>04:00 PM</option>
                        <option>05:00 PM</option>
                        <option>06:00 PM</option>
                        <option>07:00 PM</option>
                        <option>08:00 PM</option>
                        <option>09:00 PM</option>
                        <option>10:00 PM</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="1" min="1" max="15" id="guests"
                    value={guests}
                    onChange={(e)=>{setGuests(e.target.value)}}
                    />
                </div>
                <div className="field">
                    <label htmlFor="occasion">Choose Occasion</label>
                    <select id="occasion" value={occasion}
                    onChange={(e)=>{setOccasion(e.target.value)}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="field"><input type="submit" value="Make Your reservation"></input></div>
                {console.log("date:",date,"--","time:",availableTimes,"-- guests:",guests,"-- occasion", occasion)}
            </form>
        </div>
    )
}

export default BookingForm;