import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lance-icon',
  templateUrl: './lance-icon.component.html',
  styleUrls: ['./lance-icon.component.css']
})
export class LanceIconComponent {

  @Input()
  tipoLance: string;

}
