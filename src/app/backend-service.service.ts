import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://119.252.208.14:8085";

 private headers = new HttpHeaders({
   Authorization : 'Bearer ' + localStorage.getItem("token"),
   "Shivansh":"Dheeraj"
 });
  
  connectToBackend():any
  {
    return this.http.get<any>(this.url+'/payload/getMasterParameters',{headers:this.headers});
  }

  getAuthourized(auth):any
  {
    return this.http.post<any>(this.url+'/authenticate',auth);
  }

  isUserLoggedIn(){
    let user = localStorage.getItem('token');
    return !(user==null);
  }

  registerUser(user):any
  {
    return this.http.post<any>(this.url+'/register',user)
  }

}
