import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import {ToastrService} from 'ngx-toastr';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
constructor(private toastrService: CustomToastrService){
  toastrService.message("Merhaba", "Yasin", {
    messageType: ToastrMessageType.Info,
    position: ToastrPosition.TopCenter
  });
  toastrService.message("Merhaba", "Yasin",  {
    messageType: ToastrMessageType.Error,
    position: ToastrPosition.BottomFullWidth
  });
  toastrService.message("Merhaba", "Yasin", {
    messageType: ToastrMessageType.Success,
    position: ToastrPosition.BottomRight
  });
  toastrService.message("Merhaba", "Yasin",  {
    messageType: ToastrMessageType.Warning,
    position: ToastrPosition.TopRight
  });
}

}
