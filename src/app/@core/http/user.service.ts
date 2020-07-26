import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) {

  }

  login(data) {
      const headers = {
          'content-type': 'application/json'
      }
      const body = JSON.stringify(data);
      return this.http.post('http://localhost:3000/api/auth/login', body, {
          'headers': headers
      })
  }

}