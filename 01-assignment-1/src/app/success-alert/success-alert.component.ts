import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: 'success-alert.component.html',
  styleUrls: ['success-alert.component.css']
})

export class SuccessAlert {
  msg: string = 'Success alert example';
}