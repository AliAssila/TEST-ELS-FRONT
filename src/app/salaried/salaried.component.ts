import {Component, OnInit} from '@angular/core';
import {SalariedService} from './salaried.service';
import {Salaried} from './salaried.model';

@Component({
  selector: 'app-salaried',
  templateUrl: './salaried.component.html',
  styleUrls: ['./salaried.component.css']
})
export class SalariedComponent implements OnInit {
  pageTitle = 'Available Salaried';
  salarieds$: any ;
  constructor(private salariedService: SalariedService) {}
  ngOnInit() {
    this.salariedService.getJSON().subscribe(data => {
      this.salariedService.create(data).subscribe(response => {
        this.salarieds$ = response.body;
      });
    });
  }
  filerByCreteria(creteria: string){
    this.salariedService.findAllSalariedNotDuplcated(creteria).subscribe(value => {
      this.salarieds$ = value;
    });
  }
}
