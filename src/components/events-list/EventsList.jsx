import { EventListContainer, Event } from "./EventsList.styles";

const EventsList = ({ title, description, events }) => {
  return (
    <EventListContainer>
      {title}
      {description}
      {events.map((event, index) => (
        <Event key={index} onClick={event.onClick} thumbnail={event.thumbnail}>
          <span>{getTimeString(event.startTime)}</span>
          <span>{event.description}</span>
        </Event>
      ))}
    </EventListContainer>
  );
};

export const getTimeString = (date) => {
  return new Date(date).toTimeString().substring(0, 5);
};

export default EventsList;
