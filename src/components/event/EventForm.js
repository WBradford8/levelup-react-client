import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createEvent, getEvents } from "./EventManager"
import { getGames } from "../game/GameManager"

export const EventForm = () => {
    const history = useHistory()

    const [currentEvent, setEvent] = useState({
        gameId: 0,
        organizerId: parseInt(localStorage.getItem("lu_token")),
        description: "",
        date: "",
        time: ""
    })
    const [currentGame, setGame] = useState([])

    useEffect(() => {
        getGames().then((data) => {
            setGame(data);
          });
        
        // TODO: Get all existing games from API
    }, [])

    const changeEventState = (event) => {
        const newEventState = { ...currentEvent };
        newEventState[event.target.name] = event.target.value;
        setEvent(newEventState);
      };

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            currentGame.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                        <input
                            type="text-field"
                            name="description"
                            required
                            autoFocus
                            className="form-control"
                            value={currentGame.description}
                            onChange={changeEventState}
                        />
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                        <input
                            type="date"
                            name="date"
                            required
                            autoFocus
                            className="form-control"
                            value={currentGame.date}
                            onChange={changeEventState}
                        />
                </div>
                <div>
                    <label htmlFor="time">Time: </label>
                        <input
                            type="time"
                            name="time"
                            required
                            autoFocus
                            className="form-control"
                            value={currentGame.time}
                            onChange={changeEventState}
                        />
                </div>
            </fieldset>

            {/* TODO: Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createEvent(currentEvent)
                    // TODO: Call the createEvent function and pass it the event object
                    createEvent(currentEvent).then(() => history.push("/events"));

                    // TODO: Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
