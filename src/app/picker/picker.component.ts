import { Option } from './Option';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  @Input() options: Array<Option> = [];
  public selected = 0;
  public open = false;

  constructor() { }

  ngOnInit() {
  }

  public getOptionStyles(index: number) {
    const length = this.options.length;
    const scale = ((1 / 9) * Math.min(length, 9));
    const max = length === 1 ? 0 : 25 + 150 * scale;
    const steps = length === 1 ? 0 : max / (length - 1);
    const rotation = -max * 0.5 + steps * index;
    const distance = 100 + 150 * scale;

    if (this.open) {
      return {transform: `scale(1) translateY(-50%) rotateZ(${rotation}deg) translateY(-${distance}%)`};
    }
    else {
      return {transform: `scale(0) translateY(-50%) rotateZ(0) translateY(0)`};
    }
  }

  public getValueStyles(value: string) {
    return {
      'background-image': value,
      'background-color': value,
      'background-size': 'cover'
    };
  }

  public select(index: number) {
    console.log(index);
    this.selected = index;
    this.open = false;
  }
}
