import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './../data-provider.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataProvider:DataProviderService) { }

  ngOnInit() {
  }
 
  selected: string;
  citySelectError:boolean;

  public userSettings2: any = {
    inputPlaceholderText: 'Enter City Name'
  };


  citySelected(selectedData:any) {
    this.citySelectError = false;    
    this.selected=selectedData.data.name;
	}
  
  displayWeather(){
    
    if(this.selected){
      this.citySelectError = false;


    }else {
      this.citySelectError = true;
    }
  }

}
