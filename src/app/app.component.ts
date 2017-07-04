import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedChapter = 'recipe';

  onNavigate(chapter: string) {
    this.loadedChapter = chapter;
  }
}
