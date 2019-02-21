import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export interface DragData {
  tag: string;
  data: any;
}

@Injectable()
export class DragDropService {
  // BehaviorSubject总能记住上一次的值
  private _dragData = new BehaviorSubject<DragData>(null)
  constructor() { }
  // 存储数据
  setDragData(data: DragData) {
    this._dragData.next(data);
  }
  // 得到数据
  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }
  // 清空数据
  clearDragData() {
    this._dragData.next(null);
  }

}
