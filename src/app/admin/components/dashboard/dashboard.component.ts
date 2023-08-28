import { SpinnerType, BaseComponent } from './../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component,OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { __extends } from 'tslib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify:AlertifyService, spinner:NgxSpinnerService){
    super(spinner)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showSpinner(SpinnerType.BallClipRotateMultiple)
  }

  m(){
    this.alertify.message("Merhaba",{
      messageType: MessageType.Success,
      delay:5,
      position: Position.ButtomLeft     

    })
  }
  
  d(){
    this.alertify.dismiss();
  }
}
