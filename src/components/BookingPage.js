import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

let selectedTimes;

const reducerFunction = (state,  action) => {
    console.log('reducer function state---',state)
    if(action.status === 'reserved') {
        state.id = state.id + 1
        state.timeSlot = selectedTimes;
        console.log('selectedTime / reducer function state AFTER---', state)
        return({timeSlot: state.timeSlot})
    }
}


const BookingPage = () => {

    const [state , dispatch] = useReducer(reducerFunction, {id:0 , timeSlot: '00:00'})

    function pickTimes(selectedTime) {
        dispatch({status: 'reserved'})
        console.log('selectedTimes', selectedTime)
        selectedTimes = selectedTime;
    }
    return(
        <BookingForm state={state} pickedTimes={pickTimes} />
    )
    
}

export default BookingPage;