import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { NgForm } from '@angular/forms';
import { ResultsService } from '../results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any[] = []
  count: number = 0;
  widthOfOneSection!: number;
  width:number = 0;
  len!:number;
  selectedValue:any
  answers:any[] = [];
  score:number = 0;
  constructor(private service:QuestionsService, private result:ResultsService,private router:Router) { }

  ngOnInit(): void {
    this.getQuestions();
    this.startTimer();


    
  }
  getQuestions(){
    this.service.getQuestions().subscribe((res:any) => {

      this.questions = res
      res.length
      this.widthOfOneSection = 100 / res.length
      this.width = this.widthOfOneSection
    })
  }
  next(){
    if(this.count < this.questions.length-1){
      this.count++;
      this.width += this.widthOfOneSection
      this.answers.push(this.selectedValue)
      
    }
    
  }
  
  prev(){
    if(this.count >= 1){
      this.count--;
      this.width -= this.widthOfOneSection
    }
  }
  save(){
    this.answers.push(this.selectedValue)
    for(let i=0; i <= this.answers.length-1; i++) {      
      if(this.answers[i]?.answerId == this.answers[i]?.correctAnswer && (this.answers[i]?.answerId != undefined || null)){
        this.score++;
      }
    }
    this.result.result = {len:this.answers.length, score:this.score}
    this.router.navigate(["Results"])
  }
  timeLeft: number = 60;
  interval:any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.save();
        clearTimeout(this.interval);
      }
    },1000)
    
  }

}
