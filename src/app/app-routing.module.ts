import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CompraComponent} from './components/compra/compra.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegisterComponent } from './componentes/register/register.component';
import { FgComponent } from './components/fg/fg.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'compra', component: CompraComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'ventas', component: VentasComponent},
  { path: 'fg', component: FgComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
