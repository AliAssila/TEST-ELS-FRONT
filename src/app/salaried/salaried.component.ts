import {Component, OnInit} from '@angular/core';
import {SalariedService} from './salaried.service';

@Component({
  selector: 'app-salaried',
  templateUrl: './salaried.component.html',
  styleUrls: ['./salaried.component.css']
})
export class SalariedComponent implements OnInit {
  pageTitle = 'Available Salaried';
  salarieds$: any ;
  data: any ;
  constructor(private salariedService: SalariedService) {}
  ngOnInit() {
  this.loadAllData();
  }
  loadAllData() {
    this.salariedService.findAll().subscribe(salarieds => {
      this.salarieds$ = salarieds;
    });
  }
  onFileSelected(event) {
    const file = event.srcElement.files[0];
    if (!file) {
      return;
    }
    const that = this;
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function (loadEvent: any) {
      that.data = JSON.parse(loadEvent.target.result);
    };
    reader.onerror = function (evt) {
      console.log('error reading file');
    };
  }
  onUpload() {
    this.salariedService.create(this.data).subscribe(response => {
      this.salarieds$ = response.body;
    });
  }
  filerByCreteria(creteria: string) {
    this.salariedService.findAllSalariedNotDuplcated(creteria).subscribe(value => {
      this.salarieds$ = value;
    });
  }
}
