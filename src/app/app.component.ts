import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedChapter = 'recipe';

  onNavigate(chapter: string) {
    this.loadedChapter = chapter;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBmNQ7QmG84jpiECh4ODWJPC06-iYPpImQ',
      authDomain: 'recipe-book-ef00e.firebaseapp.com',
    })
  }
}
