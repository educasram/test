import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConexionService } from 'src/app/conexion.service';
import Swal from 'sweetalert2'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
  });

  constructor(private conexion:ConexionService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.profileForm.value.password==this.profileForm.value.password2){
      var datos=[];
      datos.push({'fullname':this.profileForm.value.fullname})
      datos.push({'address':this.profileForm.value.address})
      datos.push({'phone':this.profileForm.value.phone})
      datos.push({'username':this.profileForm.value.username})
      datos.push({'cellphone':this.profileForm.value.cellphone})
      datos.push({'email':this.profileForm.value.email})
      datos.push({'password':this.profileForm.value.password})
      this.conexion.register(datos).subscribe(res=>{
        console.log(res);
        var data:any;
        data=res;

        if(data.success=="error"){
          Swal.fire({icon: data.success,title: data.msj,text: '',footer: '' })

        }else{
          Swal.fire({
            title: '<strong style="color:#d35400">Gracias por registarte!</strong>',
            icon: 'info',
            html:
              'Bienvenido a <b>Trato Hecho!</b>,<br> ' +
              'Solo tienes que confirmar tu cuenta<br><br> ' +
              'Se ha enviado un correo de confirmacion<br>'+
              'a '+this.profileForm.value.email+'.<br>'+
              'Haz clic en el enlace incluido en el<br>'+
              'mensaje de correo electronico para<br>'+
              'completar el proceso de registro.'             
              ,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              'Comenzar',
            confirmButtonAriaLabel: 'Thumbs up, great!',
          }).then((result) => {
            if (result.value) {
                this.router.navigate(['']);
            }
          })

        }
      })

    }else{
      Swal.fire({icon: 'error',title: 'Verifique password',text: '',footer: '' })

    }
    //console.log(this.profileForm.value.password);
    

    

  }

}
