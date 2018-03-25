import { Component, OnInit } from '@angular/core';

import { Planing } from "../../models/planing";
import { PlaningService } from '../../services/planing.service';

@Component({
  selector: 'app-planings',
  templateUrl: './planings.component.html',
  styleUrls: ['./planings.component.css']
})
export class PlaningsComponent implements OnInit {

  planings: Planing[];

  constructor(private planingService: PlaningService) { }

  getPlanings(): void {
    this.planingService.getPlanings().subscribe(planings => this.planings = planings);
  }

  add(lessonId: number, teacherId: number, memberId: number, note: string): void {
    if (!teacherId || !teacherId || !memberId) { return; }
    if (!note) {
      note = "No Note for this lesson";
    }
    this.planingService.addPlaning({lessonId, teacherId, memberId, note} as Planing).subscribe(p => this.planings.push(p));
  }

  delete(planing: Planing): void {
    this.planings = this.planings.filter(p => p !== planing);
    this.planingService.deletePlaning(planing).subscribe;
  }

  ngOnInit() {
    this.getPlanings();
  }
}
