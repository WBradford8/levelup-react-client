import React, { useEffect, useState } from "react";
import { getEvents } from "./EventManager.js";

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article>
      {
        events.map(event => {
          return <section key={event.id} className="registration">
              <div className="registration__game">Game: {event.game.title}</div>
              <div>"{event.description}" hosted by: {event.organizer.user.first_name} {event.organizer.user.last_name}</div>
              <div>
                  {event.date} @ {event.time}
              </div>
          </section>
        })
      }
    </article>
  )
}