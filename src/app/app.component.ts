import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from './mockapi.service';
import { staffMember} from 'src/interfaceStaff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Staff Details';
  name = 'Levi Gilmartin';
  studentNum = 'S00227414';
  url= 'https://646f8e3209ff19b120877813.mockapi.io/api/staffDetails';

  results!: staffMember[];
  constructor(private _mockapi: CompanyApiService) { }
  getStaff(): boolean {
    this._mockapi.getStaffDetails().subscribe(
      staffData => {
        this.results=staffData;
        console.log(this.results);
      }
    )
    return false;
  }

}



