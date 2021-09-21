import React, { SyntheticEvent } from 'react';
import { User } from '../model/model';
import { AuthService } from '../services/AuthService';

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

        return <div className="">
           <h2>Login Page</h2> 
            <form onSubmit={e => this.handleSubmit(e)}>
                <input value={this.state.userName} onChange = { e => this.setUsername(e)} /><br/>
                <input value={this.state.password} onChange = { e => this.setPassword(e)} type='password'/><br/>
                <input type='submit' value='Login'/>
            </form>
            {loginMessage}
        </div>
    }
}