import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    } ,
    {
        path : 'login',
        component : LoginComponent
    }       
];
