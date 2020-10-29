import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esl-admin';

  onPasswordFocusOut(event: any): void {
    localStorage.setItem('password', event.target.value);
  }
}
