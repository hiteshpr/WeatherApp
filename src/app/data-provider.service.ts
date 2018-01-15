import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProviderService {

  private citySearchUrl:string;

  constructor(private _http:Http) { }

  



}
