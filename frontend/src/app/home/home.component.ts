import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MemoryCardComponent } from '../components/memory-card/memory-card.component';
import { MemoryCard } from '../interfaces/memory-card.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule,MemoryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: MemoryCard[] = [
    {
      title: "Beach Vacation",
      description: "Relaxed on the sunny beaches of Goa with friends.",
      timestamp: new Date("2024-12-15T10:30:00"),
      imageUrl: "https://example.com/images/beach.jpg"
    },
    {
      title: "Mountain Hike",
      description: "Completed a challenging trek in the Himalayas.",
      timestamp: new Date("2024-08-20T08:15:00"),
      imageUrl: "https://example.com/images/mountains.jpg"
    },
    {
      title: "Graduation Day",
      description: "Celebrated my graduation with family and friends.",
      timestamp: new Date("2023-06-10T14:00:00"),
      imageUrl: "https://example.com/images/graduation.jpg"
    },
    {
      title: "First Marathon",
      description: "Ran my first 10k marathon and achieved a personal best!",
      timestamp: new Date("2024-10-05T07:00:00"),
      imageUrl: "https://example.com/images/marathon.jpg"
    },
    {
      title: "Camping Adventure",
      description: "Spent a night under the stars in a beautiful forest.",
      timestamp: new Date("2024-11-22T20:00:00"),
      imageUrl: "https://example.com/images/camping.jpg"
    },
    {
      title: "Cooking Class",
      description: "Learned to make authentic Italian pasta dishes.",
      timestamp: new Date("2024-09-12T18:30:00"),
      imageUrl: "https://example.com/images/cooking.jpg"
    },
    {
      title: "Concert Night",
      description: "Attended an electrifying concert by my favorite band.",
      timestamp: new Date("2023-12-10T21:00:00"),
      imageUrl: "https://example.com/images/concert.jpg"
    },
    {
      title: "Art Exhibition",
      description: "Explored an inspiring collection of modern art.",
      timestamp: new Date("2024-05-18T16:00:00"),
      imageUrl: "https://example.com/images/art.jpg"
    },
    {
      title: "Charity Event",
      description: "Volunteered at a local community center for a good cause.",
      timestamp: new Date("2024-07-25T10:00:00"),
      imageUrl: "https://example.com/images/charity.jpg"
    },
    {
      title: "Snowboarding Trip",
      description: "Hit the slopes and enjoyed the snowy mountains.",
      timestamp: new Date("2025-01-05T09:00:00"),
      imageUrl: "https://example.com/images/snowboarding.jpg"
    }
  ];
}
