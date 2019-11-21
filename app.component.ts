import { Component } from '@angular/core';
import { AuthService,SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apigf';
  public user:any = SocialUser;
  constructor(private socialAuthservice:AuthService){}
  facebooklogin(){
    this.socialAuthservice.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user=userData;
    })
  }
  googlelogin(){
    this.socialAuthservice.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user=userData;
    })

  }
}
