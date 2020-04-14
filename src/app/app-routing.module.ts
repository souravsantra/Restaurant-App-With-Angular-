import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealViewComponent } from 'src/app/components/meal-view/meal-view.component';
import { AddMealComponent } from 'src/app/components/add-meal/add-meal.component';
import { OrderDeliveryTimeComponent } from 'src/app/components/order-delivery-time/order-delivery-time.component';
import { OrderSummaryComponent } from 'src/app/components/order-summary/order-summary.component';


const routes: Routes = [
  {path:"meal", component:MealViewComponent},
  {path:"addMeal", component:AddMealComponent},
  {path:"deliveryTime", component:OrderDeliveryTimeComponent},
  {path:"orderSummary", component:OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const 
RoutingComponent = [MealViewComponent,AddMealComponent,OrderDeliveryTimeComponent,OrderSummaryComponent];
