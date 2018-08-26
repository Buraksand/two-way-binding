import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Two-Way Binding Practice';
  username: string  = '';
  isEmptyString: boolean  = true;

  onClick() {
    this.username = '';
    this.isEmptyString = true;
  }

  onKeyEntered() {
    if (this.username.length > 0) {
      this.isEmptyString = false ;
    } else {
      this.isEmptyString = true;
    }
  }
}
