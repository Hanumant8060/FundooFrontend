import React from 'react';
import Dashboard from './component/Dashboard';
// import Propcomponent from './component/Propcomponent';
import Greeting from './component/Greeting';
// import Example from './component/Example';
import Getrequest from './component/Getrequest';
import Login from './component/Login';
import Register from './component/Register';
import Router from './Route/Router';
import HooksRef from './component/HooksRef';
import ResetPassword from './component/ResetPassword';
import ForgotPassword from './component/ForgotPassword';
import CreateNote from './component/CreateNote';
import Copy from './component/Copy';
import NoteCard from './component/NoteCard';
import IconList from './component/IconList';
import DeleteNote from './component/DeleteNote';
import DeleteNotes from './component/DeleteNote';
import GetAllLabels from './component/GetAllLabels';
import ListOfTrash from './component/ListOfTrash';
import DateTimeInput from 'react-datetime-picker/dist/DateTimeInput';
// import Datetimepicker from './component/MaterialUIPickers'
// import MaterialUIPickers from './component/MaterialUIPickers';
import AddCollaborator from './component/AddCollaborator'


function App() {
  return (
    <div className="App">
    
      <Router/>
      {/* <HooksRef/> */}
      {/* <Getrequest/> */}
      {/* <Greeting/> */}
      {/* <AddCollaborator/> */}
    
    </div>
  );
}

export default App;
