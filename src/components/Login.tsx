import React, { SyntheticEvent } from 'react';
import { User } from '../model/model';
import { AuthService } from '../services/AuthService';
import history from '../utils/history';


//auth
interface LoginProps {
    authService: AuthService,
    setUser:(user: User) => void
}

//state
interface LoginState {
    userName: string,
    password: string,
    loginAttempted : boolean,
    loginSuccessfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component <LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessfull: false
    }

    private setUsername(event : CustomEvent) {
        this.setState({userName: event.target.value})
    }

    private setPassword(event : CustomEvent) {
        this.setState({password: event.target.value})
    }

    private async handleSubmit (event: SyntheticEvent) {
        event.preventDefault();
        this.setState({loginAttempted: true});
        const result = await this.props.authService.login (
            this.state.userName,
            this.state.password
        )
        if (result) {
            this.setState({loginSuccessfull: true})
            this.props.setUser(result)
            //user will be directed to profile page after login or register
            history.push('/profile')
        } else {
            this.setState({loginSuccessfull: false})
        }
    }

    render() {
        let loginMessage : any;
        if (this.state.loginAttempted) {
            if (this.state.loginSuccessfull) {
                loginMessage = <label> Login was a Success!</label>
            } else {
                loginMessage = <label> Login was a Failure!</label>
            }
        }

        return <div id="center">
           
              
              <div id="login">
       
       <h2> LOGIN </h2>
            <form className="" onSubmit={e => this.handleSubmit(e)}>
                <p>Username</p> 
                <input value={this.state.userName} placeholder="UserName" onChange = { e => this.setUsername(e)} /><br/>
               <br />
                <p> Password</p>

                <input value={this.state.password} placeholder="Password"onChange = { e => this.setPassword(e)} type='password'/><br/>
                <input type='submit' value='Login'/>
            </form>
            {loginMessage}

            </div>

            <div id="register">
            <p> Register </p> 
            <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                <input value={this.state.userName} onChange = { e => this.setUsername(e)} /><br/>
                <input value={this.state.password} onChange = { e => this.setPassword(e)} type='password'/><br/>
                <input type='submit' value='Login'/>
            </form>
            </div>
        </div>
    }
}