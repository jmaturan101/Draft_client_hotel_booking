import React from 'react';
import { User } from '../model/model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';

interface AppState{
  user: User | undefined
}

export class App extends React.Component <{}, AppState>{

  private authService: AuthService = new AuthService();

  render() {
    return (
    <div className=""> App from Class 
         <Login authService={this.authService}/>
    </div>
   )
  }
}

