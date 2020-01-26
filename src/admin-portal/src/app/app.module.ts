import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { routing } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatGridListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
