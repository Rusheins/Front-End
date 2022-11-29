import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model'
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
 export class PerfilComponent implements OnInit {
  isLogged= false;
 
   constructor(private router:Router, private tokenService: TokenService) { }
 
   ngOnInit(): void {
     if(this.tokenService.getToken()){
       this.isLogged = true;
     }else {
         this.isLogged = false;
       }
     }
 
    onLogOut():void{
     this.tokenService.logOut();
     window.location.reload();
    }
 
 
   login(){
     this.router.navigate(['/login'])
   }
 }