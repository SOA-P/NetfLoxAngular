import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflox-app';
  navbg: any;


  @HostListener("document:srcoll") scrollover() {

    console.log(document.body.scrollTop, 'scrolllength#');


    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        "background-color": "#000"
      }
    } else {
      this.navbg = {}
    }
  }
}
