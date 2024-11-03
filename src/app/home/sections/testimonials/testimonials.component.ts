import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  // Sample testimonials
  testimonials = [
    { quote: 'This was the best trip ever!', name: 'John Doe', location: 'USA' },
    { quote: 'Amazing experience, highly recommend!', name: 'Jane Smith', location: 'UK' }
  ];
}
