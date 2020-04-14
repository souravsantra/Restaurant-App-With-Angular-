import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  dtOptions: DataTables.Settings = {};
  public datas =[];
  ngOnInit() {
    this.apiService.getMealDetails().subscribe((data)=>{
      
      this.dtOptions={
        pagingType: 'full_numbers',
        pageLength: 5, 
        processing: true} 
     
      this.datas = data;
      console.log('dtOptions meal--',this.datas);
    });
  }

}
