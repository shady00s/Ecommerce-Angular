import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './components/login/login.component';
import { HomepageComponent } from './components/main-master/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageAdvComponentComponent } from './components/homepage-adv-component/homepage-adv-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    HomepageComponent,
    HomepageAdvComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
