import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './components/digital-table-plan/main.component';
import { PrintComponent } from './components/digital-table-plan/print/print.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DragulaModule } from 'ng2-dragula';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WintergartenComponent } from './components/digital-table-plan/departments/wintergarten/wintergarten.component';
import { RestaurantComponent } from './components/digital-table-plan/departments/restaurant/restaurant.component';
import { PanoramaComponent } from './components/digital-table-plan/departments/panorama/panorama.component';
import { SonnbergZirbnComponent } from './components/digital-table-plan/departments/sonnberg-zirbn/sonnberg-zirbn.component';
import { NavigationComponent } from './components/digital-table-plan/navigation/navigation.component';
import { FormComponent } from './components/digital-table-plan/form/form.component';
import { TableplanComponent } from './components/digital-table-plan/tableplan/tableplan.component';
import { DepartmentmenuComponent } from './components/digital-table-plan/departmentmenu/departmentmenu.component';
import { ImHausListComponent } from './components/digital-table-plan/im-haus-list/im-haus-list.component';
import { DepartmentsComponent } from './components/digital-table-plan/departments/departments.component';
import { AllComponent } from './components/digital-table-plan/departments/all/all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/digital-table-plan/login/login.component';
import { RegisterComponent } from './components/digital-table-plan/register/register.component';
import { ProfileComponent } from './components/digital-table-plan/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes =  [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DepartmentsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrintComponent,
    WintergartenComponent,
    RestaurantComponent,
    PanoramaComponent,
    SonnbergZirbnComponent,
    NavigationComponent,
    FormComponent,
    TableplanComponent,
    DepartmentmenuComponent,
    ImHausListComponent,
    DepartmentsComponent,
    AllComponent,
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
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
