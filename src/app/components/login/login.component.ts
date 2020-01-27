import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/conexion.service';
import {Router} from '@angular/router';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1:any;
  email:any;
  password:any;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService,private conexion:ConexionService,private router:Router) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
  login(){
    this.conexion.login(this.email,this.password).subscribe(res=>{
      var t:any;
      t=res;
      if(t.success==0){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o Password incorrecto',
          footer: ''
        })
      }else{
        this.user1=t.info;
        localStorage.setItem('user', JSON.stringify(t.info));
        this.router.navigate(['ventas']);
      }

    })

  }

}
