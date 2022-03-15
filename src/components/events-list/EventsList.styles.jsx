import styled from "styled-components";

export const EventListContainer = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  padding: 20px;
  box-sizing: border-box;
`;

EventListContainer.displayName = "EventListContainer";

export const Event = styled.div`
    background-image: url("${({ thumbnail }) => thumbnail}");
    color: white;
    width: 300px;
    height: 200px;
    display: flex;
    gap: 10px;
    margin: 30px 0;
    padding: 10px;
    font-size: 20px;
    box-sizing: border-box;
    font-weight: 900;
    ${({ onClick }) => onClick && "cursor: pointer;"}
`;

Event.displayName = "Event";
