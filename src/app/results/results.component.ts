import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private res:ResultsService) { }
  result:any
  ngOnInit(): void {
    this.result = this.res.result
    console.log(this.res.result);
    
  }

}
