import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liker',
  templateUrl: './liker.component.html',
  styleUrls: ['./liker.component.css']
})
export class LikerComponent {

  @Input() likes = 0;

  constructor() { }

  voteUp() {
    this.likes = this.likes + 1;
  }

  voteDown() {
    if (this.likes > 0) {
      this.likes = this.likes - 1;
    }
  }

}
