
//Serive da Library
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NbsLibraryService {

  constructor() { }
}

//Classe principal da library
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nbs-library',
  template: `
    <p>
      nbs-library works!
    </p>
  `,
  styles: [ 'nbs-primary.scss']
})
export class NbsLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//Module da Library

import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    NbsLibraryComponent
  ],
  imports: [
  ],
  exports: [
    NbsLibraryComponent
  ]
})
export class NbsLibrary { }



