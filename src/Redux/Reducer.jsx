import {
    ADD_COLOR
    
  } from "../Redux/actionType";

const initialState = {
    view:true,
    label_id:'',
    set_Color:'',
    openDrawer:false
   
  };
  const Reducer = (State = initialState, action) => {
    switch (action.type) {
        case ADD_COLOR: {
          return {
            ...State,
            color: action.payload
          };
        }
    }
  }
    export default Reducer;