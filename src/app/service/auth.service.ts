import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authURL = 'http://localhost:8081/auth/';
 URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    console.log("iniciando login");
    console.log(this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario));
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
  public lista(): Observable<any>{
    return this.httpClient.get('http://localhost:8081/personas/traer');
  }
}