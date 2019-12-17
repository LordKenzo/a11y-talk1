import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eyeValue = 0;
  constructor(private titleService: Title) {
    this.titleService.setTitle( 'Home Page' );
  }

  handleEyeChange(e) {
    this.eyeValue = e;
  }
}
