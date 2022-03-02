import { Component } from '@angular/core';
import {unicornRocket} from "@ntwari-dev/utils"

@Component({
  selector: 'ntwari-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `${unicornRocket} travelit-angulars`;
}
