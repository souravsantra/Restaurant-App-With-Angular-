import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Meal } from 'src/app/Model/Meal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})



export class AddMealComponent implements OnInit {

  mealForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.mealForm = this.formBuilder.group({
      mealName: [''],
      mealDescription: [''],
      mealCatagory: [''],
      unitPrice: [''],
      active: [''],
      totalQuantity: [''],
    });
  }
  public createArticle(meal: Meal) {
    console.log("-create controller Meals-", meal);
    this.apiService.createMeal(meal).subscribe(
      meal => {
        console.log(meal);
      }
    );
  }

  onFormSubmit() {
    let meal = this.mealForm.value;
    this.createArticle(meal);
   //s this.mealForm.reset();
  }

}
