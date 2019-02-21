import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm',
  template: `
    <h2 mat-dialog-title="">{{title}}</h2>
    <div mat-dialog-content>
      {{content}}
    </div>
    <div mat-dialog-actions>
      <button type="button" mat-raised-button color="primary" (click)="onClick(true)">确定</button>
      <button type="button" mat-button mat-dialog-close (click)="onClick(false)">取消</button>
    </div>
  `,
  styles: []
})
export class ConfirmComponent implements OnInit {
  title = '';
  content = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result: Boolean) {
    this.dialogRef.close(result);
  }
}
