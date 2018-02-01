import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TischplanComponent } from './components/digitalerTischplan/tischplan.component';
import { PrintComponent } from './components/digitalerTischplan/print/print.component';
import { NavService } from './services/tables.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DragulaModule } from 'ng2-dragula';
import {NgClass} from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DropdownModule} from "ng2-dropdown";
import { WintergartenComponent } from './components/digitalerTischplan/departments/wintergarten/wintergarten.component';
import { RestaurantComponent } from './components/digitalerTischplan/departments/restaurant/restaurant.component';
import { PanoramaComponent } from './components/digitalerTischplan/departments/panorama/panorama.component';
import { SonnbergZirbnComponent } from './components/digitalerTischplan/departments/sonnberg-zirbn/sonnberg-zirbn.component';
import { NavigationComponent } from './components/digitalerTischplan/navigation/navigation.component';
import { FormComponent } from './components/digitalerTischplan/form/form.component';
import { TableplanComponent } from './components/digitalerTischplan/tableplan/tableplan.component';
import { DepartmentmenuComponent } from './components/digitalerTischplan/departmentmenu/departmentmenu.component';
import { ImHausListeComponent } from './components/digitalerTischplan/im-haus-liste/im-haus-liste.component';
import { AnreiseListeComponent } from './components/digitalerTischplan/anreise-liste/anreise-liste.component';
import { TracesListeComponent } from './components/digitalerTischplan/traces-liste/traces-liste.component';
import { DepartmentsComponent } from './components/digitalerTischplan/departments/departments.component';
import { AlleComponent } from './components/digitalerTischplan/departments/alle/alle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/digitalerTischplan/login/login.component';
import { RegisterComponent } from './components/digitalerTischplan/register/register.component';
import { HomeComponent } from './components/digitalerTischplan/home/home.component';
import { ProfileComponent } from './components/digitalerTischplan/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';


const appRoutes: Routes =  [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: TischplanComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    TischplanComponent,
    PrintComponent,
    WintergartenComponent,
    RestaurantComponent,
    PanoramaComponent,
    SonnbergZirbnComponent,
    NavigationComponent,
    FormComponent,
    TableplanComponent,
    DepartmentmenuComponent,
    ImHausListeComponent,
    AnreiseListeComponent,
    TracesListeComponent,
    DepartmentsComponent,
    AlleComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    DragulaModule,
    ReactiveFormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    Ng2SearchPipeModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NavService, ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
