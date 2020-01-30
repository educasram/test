import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';



import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { IndexComponent } from './components/index/index.component';
import { CompraComponent } from './components/compra/compra.component';
import {LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegisterComponent } from './componentes/register/register.component';
import { FgComponent } from './components/fg/fg.component';
import { BarComponent } from './components/bar/bar.component';
import { PanelComponent } from './components/panel/panel.component';


const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2203659926599837')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CompraComponent,
    LoginComponent,
    FooterComponent,
    VentasComponent,
    RegisterComponent,
    FgComponent,
    BarComponent,
    PanelComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,NgbModule,SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
