import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

 orderSummary: FormGroup;
  
  constructor(private formBuilder:FormBuilder,private apiService: ApiService) { }

  public datas =[];

  ngOnInit(): void { 
    this.orderSummary = this.formBuilder.group({
      date: [''],
    });
  }

  public getOrderDeliverTime(date: String) {
    console.log('controller date-',date);
    this.apiService.getOrderSummary(date).subscribe((data)=>{ 
     
      this.datas = data;
      console.log('order delivery time--',this.datas);
    });
  }

  onFormSubmit() { 
    
   var date= this.orderSummary.get('date').value;

    this.getOrderDeliverTime(date);
  }
}
