import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      // 令牌
      provide: NG_VALUE_ACCESSOR,
      // 用已有的
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      // 令牌
      provide: NG_VALIDATORS,
      // 用已有的
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() title = '选择';
  @Input() cols = 6;
  @Input() rowHeight: string = '64px';
  @Input() items: string[] = [];
  @Input() useSvgIcon = false;
  @Input() itemWidth = '80px';

  selected: string;
  constructor() { }
  private propagateChange = (_: any) => {};

  // 写值
  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  validate(c: FormControl): {[key: string]: any} {
    return this.selected ? null: {
      imageListInvalid: {
        valid: false
      }
    }
  }

  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.selected);
  }

}
