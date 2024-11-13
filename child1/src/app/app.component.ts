import { Component } from '@angular/core';

@Component({
  selector: 'app-root:not(p)',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child1';
}
