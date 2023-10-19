import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenWords: string[] = [];
  oddWords: string[] = [];
  

  onWordSubmitted(text: string) {

    const words = text.split(' ');

    for (const word of words) {
      if (word.length % 2 === 0) {
        this.evenWords.push(word);
      } else {
        this.oddWords.push(word);
      }
    }
  }
}
