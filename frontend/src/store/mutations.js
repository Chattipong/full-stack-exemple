import initState from "./initState";

export default {
  SET_USER: (state, payload) => {
    state.user = payload;
  },
  SET_OBJECT_USER: (state, payload) => {
    console.log("SET_OBJECT_USER", payload);
    Object.keys(payload).forEach((key) => {
      state.user[key] = payload[key];
    });
  },
  SIGNOUT: (state) => {
    const initial = initState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
  SET_ILLNESS_LIST: (state, payload) => {
    state.illnessList = payload;
  },
  SET_EXPERTISE_LIST: (state, payload) => {
    state.expertiseList = payload;
  },
  SET_QUERY: (state, payload) => {
    state.query = payload;
  },
  SET_CURRENT_LOCATION: (state) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.currentPosition = pos.coords;
        // {
        //   latitude: 15.1538288,
        //   longitude: 105.0038657,
        // };
      },
      (err) => {
        console.log(err);
      }
    );
  },
  SET_RATE: (state, payload) => {
    state.rate = payload;
  },
  SET_BOOKING: (state, payload) => {
    state.booking = payload;
    // console.log(payload);
    // Object.keys(payload).forEach((key) => {
    //   state.setBooking[key] = payload[key];
    // });
  },
  SET_BOOKINGOUT: (state, payload) => {
    state.setBooking = payload;
  },

  SET_BOOKING_DOCTOR: (state, payload) => {
    console.log(payload, "ข้อมูลที่ต้องการเก็บเข้า store payload");
    console.log(state, "ข้อมูลที่ต้องการเก็บเข้า store state");
    if (typeof payload == "undefined") {
      state.bookingDoctor = {};
    } else {
      Object.keys(payload).forEach((key) => {
        state.bookingDoctor[key] = payload[key];
      });
    }
  },
  SET_ROOM: (state, payload) => {
    state.room = payload;
  },
  SET_ROOM_USER: (state, payload) => {
    state.roomuser = payload;
  },
  SET_CARD_USER: (state, payload) => {
    state.cardId = payload;
  },
};
