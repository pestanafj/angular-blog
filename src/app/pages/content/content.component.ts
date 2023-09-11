import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id:string|null="0";

  @Input()
  contentPhoto:string='';
  @Input()
  contentTitle:string='';
  @Input()
  contentDescription:string='';



  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(value=>this.id = value.get("id"));
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id:string|null){
    const result = dataFake.filter(article=>article.id.toString()==id);

    if(result){
      this.contentTitle = result[0].title;
      this.contentPhoto = result[0].photo;
      this.contentDescription = result[0].description;
    }


  }

}
