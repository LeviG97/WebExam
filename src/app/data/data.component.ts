import { Component, OnInit } from '@angular/core';
import { CompanyApiService } from '../company-api.service';
import { Data } from 'src/dataResponse';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  responseData!: Data[];

  constructor(private companyService: CompanyApiService) { }

  ngOnInit() {
    this.companyService.getData().subscribe({
      next: (response) => {
        this.responseData = response;
        console.log(this.responseData); // Optional: Log the received data
      },
      error: (error) => {
        console.error(error); // Handle error if necessary
      }
    });
  }
}
