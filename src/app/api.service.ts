import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Meal } from 'src/app/Model/Meal';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  API_KEY = 'http://localhost:8080/';


  constructor(private httpClient: HttpClient) { }

  public getMealDetails(): Observable<any> {
    return this.httpClient.get(`${this.API_KEY}meals`).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }


  public createMeal(meal: Meal): Observable<Meal> {
    console.log("create -Meals- service", meal);
    return this.httpClient.post<Meal>(`${this.API_KEY}meals`, meal);
  }

  public getOrderDeliverTime(deliveryDate: any): Observable<any> {
    console.log('service date-', deliveryDate);
    return this.httpClient.get(`${this.API_KEY}orderByDeliveryDate/${deliveryDate}`).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  public getOrderSummary(deliveryDate: String): Observable<any> {
    console.log('service date-', deliveryDate);
    return this.httpClient.get(`${this.API_KEY}ordersByDeliverDate/${deliveryDate}`).pipe(
      retry(1),
      catchError(this.handleError)
    );


  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
