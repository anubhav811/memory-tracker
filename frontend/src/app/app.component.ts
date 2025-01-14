import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MemoryCardComponent } from "./components/memory-card/memory-card.component";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterLink, RouterOutlet]
})
export class AppComponent {

 
  
}
