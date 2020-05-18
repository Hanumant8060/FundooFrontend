import {ADD_COLOR} from '../Redux/actionType'



export const set_Color=(color)=>{

    console.log(color);
    
    return{
        type:ADD_COLOR,
        payload:color
    }
}
