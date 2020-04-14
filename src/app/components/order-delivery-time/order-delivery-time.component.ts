import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-delivery-time',
  templateUrl: './order-delivery-time.component.html',
  styleUrls: ['./order-delivery-time.component.css']
})
export class OrderDeliveryTimeComponent implements OnInit {
  deleveryTimeForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder,private apiService: ApiService) { }

  public datas =[];

  ngOnInit(): void { 
    this.deleveryTimeForm = this.formBuilder.group({
      date: [''],
    });
  }

  public getOrderDeliverTime(date: String) {
    console.log('controller date-',date);
    this.apiService.getOrderDeliverTime(date).subscribe((data)=>{ 
     
      this.datas = data;
      console.log('order delivery time--',this.datas);
    });
  }

  onFormSubmit() { 
    
   var date= this.deleveryTimeForm.get('date').value;

    this.getOrderDeliverTime(date);
  }
}
