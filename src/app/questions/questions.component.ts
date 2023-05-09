import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any[] = []
  count: number = 0;
  constructor(private service:QuestionsService) { }

  ngOnInit(): void {
    this.getQuestions()
  }
  getQuestions(){
    this.service.getQuestions().subscribe((res:any) => {
      console.log(res);
      this.questions = res
      
      
      
    })
  }
  next(){
    if(this.count < this.questions.length-1)
    this.count++;
  }
  prev(){
    if(this.count >= 1)
    this.count--;
  }
}
