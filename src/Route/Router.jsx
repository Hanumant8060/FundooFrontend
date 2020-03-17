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

export default function Router() {
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Login}/>
            <Route path={'/register'} exact component={Register}/>
            {/* <Route path={'/loginsuccess'} exact component={LoginSuccess}/> */}
            <Route path={'/resetPassword'} exact component={ResetPassword}/>
            {/* <Route path= {'/logindemo'} exact component={LoginDemo} /> */}
            {/* <Route path={'/count'} exact component={Counter} /> */}
            <Route path ={'/forgotPassword'} exact component={ForgotPassword}/>
            <Route path ={'/dashboard'} exact component={Dashboard}/>
            <Route path={'/dashboard/note'} exact component={CreateNote}/>
            <Route path ={'/dashboard/trash'} exact component={ListOfTrash}/>
        
        </BrowserRouter>
    );
}