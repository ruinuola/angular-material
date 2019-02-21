import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmComponent} from '../../shared/confirm/confirm.component';
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  projects = [
    {
      'id': 1,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '自动化测试项目',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/1.jpg'
    }
  ];
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目：'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = [...this.projects, {id: 3, name: '一个新项目',
        desc: '这是一个新项目', coverImg: 'assets/img/covers/2.jpg'},
        {id: 4, name: '第二个新项目',
        desc: '这是第二个新项目', coverImg: 'assets/img/covers/3.jpg'}]
      this.cd.markForCheck();
    });
  }
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目：'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmComponent, {data:
        {title: '删除项目：', content: '您确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.cd.markForCheck();
    });
  }
}
