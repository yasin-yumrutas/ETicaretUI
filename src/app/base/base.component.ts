import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';


export class BaseComponent {
constructor(private spinner:NgxSpinnerService){}

showSpinner(spinnerNameType:SpinnerType){
  this.spinner.show(spinnerNameType);

  setTimeout(()=>this.hideSpinner(spinnerNameType),1500);
}

hideSpinner(spinnerNameType:SpinnerType){
  this.spinner.hide(spinnerNameType);
}
}

export enum SpinnerType{
  BallFussion="s1",
  BallClipRotateMultiple="s2",
  SquareLoader="s3" 

}
