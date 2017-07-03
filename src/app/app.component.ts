import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`h3 {color: lightseagreen;}`],
  encapsulation: ViewEncapsulation.Emulated // Native, None

})
export class AppComponent {
}
