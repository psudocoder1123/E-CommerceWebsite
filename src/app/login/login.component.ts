import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username:'',
    password:''
  }
  public loggedInUsername='';

  constructor(private router:Router , private loginService: LoginService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  // here we will login
  onSubmit() {

    //for redirecting url after login storing query parameter i.e: Route after Login
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')||'/'

    if((this.credentials.username!=''&&this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)) 
    {
      //TOKEN GENERATE
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response);

          this.loggedInUsername = response.username;
          this.loginService.loginUser(response.accessToken,response.username,response.roles);
          this.router.navigate([returnUrl])

        },
        error =>{
          console.log(error)
        }
      )
    }
  }

}
