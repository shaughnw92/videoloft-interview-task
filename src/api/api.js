// This file simulates the responses you would expect from a server.
// You do not need to make any changes to, or even look at, this file.

export const login = async () => {
  return "USER_TOKEN";
};

let refreshCount = 0;
export const updateToken = async () => {
  refreshCount++;
  return `NEW_USER_TOKEN${refreshCount}`;
};

const EVENTS = {
  1645520400000: {
    startTime: 1645520400000,
    endTime: 1645520700000,
    thumbnail: "https://picsum.photos/seed/1/300/200",
    description: "Tesco delivery",
    deleted: false
  },
  1645525020000: {
    startTime: 1645525020000,
    endTime: 1645525050000,
    thumbnail: "https://picsum.photos/seed/2/300/200",
    description: "Passing car",
    deleted: false
  },
  1645529080000: {
    startTime: 1645529080000,
    endTime: 1645529111000,
    thumbnail: "https://picsum.photos/seed/3/300/200",
    description: "Amazon delivery",
    deleted: false
  },
  1645531200000: {
    startTime: 1645531200000,
    endTime: 1645534680000,
    thumbnail: "https://picsum.photos/seed/4/300/200",
    description: "Go out for lunch",
    deleted: false
  },
  1645544700000: {
    startTime: 1645544700000,
    endTime: 1645544760000,
    thumbnail: "https://picsum.photos/seed/5/300/200",
    description: "Children home from school",
    deleted: false
  }
};

export const fetchEvents = async (userToken) => {
  if (!userToken) {
    throw new Error("Unauthorized");
  }

  return Object.values(EVENTS);
};

export const markEventForDeletion = async (startTime) => {
  EVENTS[startTime].deleted = true;
  console.log(EVENTS);
};
