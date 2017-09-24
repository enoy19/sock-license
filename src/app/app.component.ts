import { Option } from './picker/Option';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public types: Array<Option> = [
    {title: 'test', value: 'url(../assets/images/type-bare.png)'},
    {title: 'test', value: 'url(../assets/images/type-regular.png)'},
    {title: 'test', value: 'url(../assets/images/type-short.png)'},
    {title: 'test', value: 'url(../assets/images/type-winter.png)'},
  ];

  public colors: Array<Option> = [
    {title: 'test', value: 'red'},
    {title: 'test', value: 'yellow'},
    {title: 'test', value: 'blue'},
    {title: 'test', value: 'green'},
    {title: 'test', value: 'purple'},
    {title: 'test', value: 'orange'},
    {title: 'test', value: 'pink'},
  ];

  public patterns: Array<Option> = [
    {title: 'test', value: 'url(../assets/images/pattern-argyle.png)'},
    {title: 'test', value: 'url(../assets/images/pattern-dots.png)'},
    {title: 'test', value: 'url(../assets/images/pattern-solid.png)'},
    {title: 'test', value: 'url(../assets/images/pattern-stripes-diagonally.png)'},
    {title: 'test', value: 'url(../assets/images/pattern-stripes-horizontally.png)'},
    {title: 'test', value: 'url(../assets/images/pattern-stripes-vertically.png)'},
  ];
}
