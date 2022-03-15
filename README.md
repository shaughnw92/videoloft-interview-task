When a camera detects motion, it generates an event. Each event has a start time, end time, thumbnail (a still image captured during the event), and a description. There can only be one event per camera at any given time.

The code in this project is for a simple app that shows the events for a camera and allows the user to delete any events they no longer want.

The app starts by logging the user in to obtain an auth token. This token is used to fetch the events for one of the user's cameras. The thumbnail and description for each event is then rendered in the UI and the user is able to select any they wish to delete.

Your task is to review the code in the `src/components` folder and identify any changes that should be made to improve the performance of the app. In particular, look out for any code that will cause unnecessary rerenders.
