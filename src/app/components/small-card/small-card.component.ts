import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  cardPhoto:string = '';
  @Input()
  cardTitle:string='';
  @Input()
  ID:string="0";

}
