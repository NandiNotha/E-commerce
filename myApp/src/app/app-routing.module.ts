import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path:'nav', component: NavBarComponent},
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  // {path: '*', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
