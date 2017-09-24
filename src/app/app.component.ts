import { Option } from './picker/Option';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public types: Array<Option> = [
    {title: 'test', value: '../assets/images/type-bare.png'},
    {title: 'test', value: '../assets/images/type-regular.png'},
    {title: 'test', value: '../assets/images/type-short.png'},
    {title: 'test', value: '../assets/images/type-winter.png'},
  ];

  public colors: Array<Option> = [
    {title: 'test', value: 'black'},
    {title: 'test', value: 'grey'},
    {title: 'test', value: 'white'},
    {title: 'test', value: 'green'},
    {title: 'test', value: 'lime'},
    {title: 'test', value: 'blue'},
    {title: 'test', value: 'red'},
    {title: 'test', value: 'orange'},
    {title: 'test', value: 'yellow'},
    {title: 'test', value: 'purple'},
    {title: 'test', value: 'pink'},
  ];

  public patterns: Array<Option> = [
    {title: 'test', value: '../assets/images/pattern-solid.png'},
    {title: 'test', value: '../assets/images/pattern-argyle.png'},
    {title: 'test', value: '../assets/images/pattern-dots.png'},
    {title: 'test', value: '../assets/images/pattern-stripes-diagonally.png'},
    {title: 'test', value: '../assets/images/pattern-stripes-horizontally.png'},
    {title: 'test', value: '../assets/images/pattern-stripes-vertically.png'},
  ];

  public printBtnClick() {
    window.print();    
  }
}
