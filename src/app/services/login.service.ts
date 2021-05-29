import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081/api/auth";
  url2 = "http://localhost:8081/api4/products4"
  
 
  
  constructor(private http:HttpClient) {
    
   
  }




// In post pass 3 paramers url, json data, header
  generateToken(credentials:any) {
    return this.http.post(`${this.url}/signin`,credentials,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }





// Inserting data into local storege
  loginUser(token:any,username:any,roles:any) {
    localStorage.setItem("token",token)
    localStorage.setItem("username",username)

    var roles_list="";
    for(let i = 0;i<roles.length;i++){
      roles_list = roles_list  + roles[i];
    }
    console.log(roles_list)
    localStorage.setItem("roles",roles_list)
    return true;
  }

  //Getting UserData from local storage
   getUserDataFromLocalStorage()
   {

      let data=
      {
        roles:localStorage.getItem("roles"),
        token:localStorage.getItem("token"),
        username:localStorage.getItem("username")
      }
        return data 

   }

   // Implementing get token for admin request: 

   getToken()
   {
       return localStorage.getItem("token");
   }

   //logout User
   logout()
   {
     localStorage.removeItem("roles")
     localStorage.removeItem("token")
     localStorage.removeItem("username")
     return true


   }

   IsLogin()
   {
     let token = localStorage.getItem("token")

        if(token==undefined || token==''|| token==null)
        {
          return false
        }

        else
        {
            return true
        }

   }
}
