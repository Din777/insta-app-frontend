import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { InstaApp } from './pages/InstaApp.jsx'
// import { About } from './pages/About.jsx'
import Login from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
// import { UserDetails } from './pages/UserDetails.jsx'
// import { ChatApp } from './cmps/ChatApp.jsx'
// import { CommentEdit } from './cmps/CommentEdit.jsx'
// import { PostsList } from './pages/PostsList.jsx'
// import { PostDetails } from './pages/PostDetails.jsx'
// import { PostEdit } from './pages/PostEdit.jsx'
import './assets/styles/scss/main.scss'



export class App extends Component {
    render() {
        return (<React.Fragment>
            <div className="app">
                <AppHeader />
                <Switch>
                    {/* <Route component={CommentEdit} path="/comment/edit" /> */}
                    {/* <Route component={PostEdit} path="/edit/:postId?" / */}
                    {/* <Route component={PostDetails} path="/post/:postId" />  */}
                    {/* <Route component={ChatApp} path="/chat" /> */}
                    {/* <Route component={Admin} path="/admin/userId:" /> */}
                    {/* <Route component={UserDetails} path="/user/userId:" /> */}
                    {/* <Route component={About} path="/about" /> */}
                    <Route component={Signup} path="/signup" />
                    <Route component={Login} path="/login" />
                    <Route component={InstaApp} path="/" />
                </Switch>
            </div>
        </React.Fragment>
        )
    }


}

