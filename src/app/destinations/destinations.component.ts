import { Component } from '@angular/core';
import { StrapiService } from '../strapi.service';
import { response } from 'express';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
destinations: any[] = [];
constructor(private strapiService:StrapiService){}

ngOnInit(): void{
  this.strapiService.getDestinations().subscribe(
    (response) => {
      console.log('API Response:', response); // Podaci iz API-ja
      this.destinations = response.data; // Povezivanje hotels podataka
    },
    (error) => {
      console.error('Error fetching destinations:', error);
    }
  );
}
}

