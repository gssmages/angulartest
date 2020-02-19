import { Injectable } from '@angular/core';
import {HttpClient,HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AppService {

  public hostURL = "http://10.209.3.158:8080/";
  public selectedproduct = "";

  constructor(
    private http:HttpClient
  ) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Network failed. Please try again.');
  }

  getAPI(method:any) {
    return this.http.get(`${this.hostURL}${method}`);
  }
  
  addEmployee(name: string, id: string,departmentId: string, age: string,organizationId: string, position: string): Observable<any>{
    let head = new HttpHeaders();
    let options = { headers: head };
    const body = {id:id,organizationId:organizationId,departmentId:departmentId,name:name,age:age,position:position}
  return this.http.post(this.hostURL+"/employee/",body,options).pipe(catchError(this.handleError));
  }
 
  setProduct(item:any) {
    this.selectedproduct = "";
    this.selectedproduct = item;
  }
  getProduct() {
    return this.selectedproduct;
  }

}
