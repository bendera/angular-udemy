import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: 'warning-alert.component.html',
  styleUrls: ['warning-alert.component.css'],
})

export class WarningAlert {
  msg: string = 'Warning alert example';
}