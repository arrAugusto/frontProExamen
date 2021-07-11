import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TiporangofechaService } from './services/tiporangofecha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumo de servicio Banguat';

  constructor(
    private tiporangofechaService: TiporangofechaService 
    ){
      this.tiporangofechaService.getTipoRangoJava().subscribe(resp=>{
        let jsonResponse = JSON.parse(resp["  "]); 
        console.log(jsonResponse);
      })
    }
    range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    })
}
