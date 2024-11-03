import { Component } from '@angular/core';

import { StrapiService } from '../strapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bookhotel',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookhotel.component.html',
  styleUrl: './bookhotel.component.css'
})
export class BookhotelComponent {
  hotels: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getHotels().subscribe(
      (response) => {
        console.log('API Response:', response); // Podaci iz API-ja
        this.hotels = response.data; // Povezivanje hotels podataka
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }
}
