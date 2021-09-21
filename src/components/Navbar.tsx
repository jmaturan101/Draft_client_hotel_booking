import React from "react";
import { User } from "../model/model";
import { Link } from 'react-router-dom';

export class Navbar extends React.Component <{
    user: User | undefined
}> {

    render() {
        let loginLogOut : any = this.props
        if (this.props.user) {
            loginLogOut = <Link to='/logout'>{this.props.user.userName}</Link>
        } else {
            loginLogOut = <Link to='/login'>Login</Link>
        }

        return (
            <div className='nacbar'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Home</Link>
                {loginLogOut}
            </div>
        )
    }
}