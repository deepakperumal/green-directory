import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class UserService {
  authToken:any;
  user:any;

  constructor(private http: HttpClient) {

   }
   register(data: any){    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    //http://localhost:8080/api/users/register
    return this.http.post('http://localhost:3000/api/auth/register', body,{'headers':headers})
  }

  login(data){    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    //http://localhost:8080/api/users/register
    return this.http.post('api/auth/login', body,{'headers':headers})
  }

  }