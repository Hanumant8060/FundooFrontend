import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../component/Login'
import Register from '../component/Register'
import Dashboard from '../component/Dashboard'
import ResetPassword from '../component/ResetPassword'
import ForgotPassword from '../component/ForgotPassword'
import TrashNote from '../component/TrashNote'
import ListOfTrash from '../component/ListOfTrash'
import CreateNote from '../component/CreateNote'
import Maincomponent from '../component/Maincomponent'
import NoteCard from '../component/NoteCard'
import ListOfArchiveNotes from '../component/ListOfArchiveNotes'
import AddReminder from '../component/AddReminder'
import HooksRef from '../component/HooksRef'
import  ListOfReminder  from '../component/ListOfReminder'

export default function Router(props) {
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Login}/>
            <Route path={'/register'} exact component={Register}/>
            {/* <Route path={'/loginsuccess'} exact component={LoginSuccess}/> */}
            <Route path={'/resetPassword'} exact component={ResetPassword}/>
            {/* <Route path= {'/logindemo'} exact component={LoginDemo} /> */}
            {/* <Route path={'/count'} exact component={Counter} /> */}
            <Route path ={'/forgotPassword'}  component={ForgotPassword}/>
            <Route path ={'/dashboard'} component={Maincomponent}/>
            <Route path={'/dashboard/note'}  component={NoteCard}/>
            <Route path ={'/dashboard/trash'} exact component={ListOfTrash}/>
            <Route path ={'/dashboard/archive'} exact component={ListOfArchiveNotes}/>
            <Route path ={'/dashboard/reminder'} exact component={ListOfReminder}/>
        </BrowserRouter>
    );
}