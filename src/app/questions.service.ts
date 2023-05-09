import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient, private router: Router,) { }
  getQuestions():Observable<any[]>{
    return this.http.get<any[]>(`${environment.BaseUrl}questions`)
  }
  

}

