import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { restUrl } from '../config/rest-api'
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
      return this.http.post(restUrl.login, body, {
          'headers': headers
      })
  }

}