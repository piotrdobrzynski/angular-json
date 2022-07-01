import { Component } from '@angular/core';
import Data from '../data.json';

interface Data {
  _id: String;
  index: number;
  guid: string;
  isActive: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  datas: Data[] = Data;
}
