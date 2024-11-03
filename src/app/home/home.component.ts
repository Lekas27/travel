import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from "./sections/banner/banner.component";
import { WhyusComponent } from "./sections/whyus/whyus.component";
import { TopdestinationsComponent } from "./sections/topdestinations/topdestinations.component";
import { TestimonialsComponent } from "./sections/testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, WhyusComponent, TopdestinationsComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
