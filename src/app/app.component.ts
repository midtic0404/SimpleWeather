import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMenu = 'list';

  onNavigate(menu: string){
    this.selectedMenu = menu;
  }

}
