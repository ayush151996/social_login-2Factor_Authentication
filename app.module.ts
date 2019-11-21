import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider} from 'ng4-social-login'
const config = new AuthServiceConfig([
 {
   id:GoogleLoginProvider.PROVIDER_ID,
   provider:new GoogleLoginProvider('1065146294970-ulb3krkf7br02cmqtg4b2qd8utkfsql6.apps.googleusercontent.com')
 }, 
 {
   id:FacebookLoginProvider.PROVIDER_ID,
   provider:new FacebookLoginProvider('764694090609753')
 }
], false);

export function provideConfig(){
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {provide:AuthServiceConfig,useFactory:provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
