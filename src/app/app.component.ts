import { Component } from '@angular/core';
import { DataProviderService } from './data-provider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataProviderService]
})
export class AppComponent {
  isCollapsed = true;
}
