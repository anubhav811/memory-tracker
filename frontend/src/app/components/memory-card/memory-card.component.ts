import { Component, Input } from '@angular/core';
import { MemoryCard } from '../../interfaces/memory-card.interface';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memory-card',
  imports: [CardModule,ButtonModule,CommonModule],
  templateUrl: './memory-card.component.html',
  styleUrl: './memory-card.component.css'
})
export class MemoryCardComponent {

  @Input()
  memoryCard !: MemoryCard 


}
