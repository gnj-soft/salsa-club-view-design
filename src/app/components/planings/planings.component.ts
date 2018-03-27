import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Planing } from "../../models/planing";
import { PlaningService } from '../../services/planing.service';

@Component({
  selector: 'app-planings',
  templateUrl: './planings.component.html',
  styleUrls: ['./planings.component.css']
})
export class PlaningsComponent implements OnInit {

  planings: Planing[];
  newPlaningFormData;

  constructor(private planingService: PlaningService) { }

  getPlanings(): void {
    this.planingService.getPlanings().subscribe(planings => this.planings = planings);
  }

  add(lessonId: number, teacherId: number, memberId: number, note: string): void {
    if (!teacherId || !teacherId || !memberId) { return; }
    if (!note) {
      note = "No Note for this lesson";
    }
    this.planingService.addPlaning({ lessonId, teacherId, memberId, note } as Planing).subscribe(p => this.planings.push(p));
  }

  delete(planing: Planing): void {
    this.planings = this.planings.filter(p => p !== planing);
    this.planingService.deletePlaning(planing).subscribe;
  }

  onSubmit(data): void {
    this.add(data.lessonId, data.teacherId, data.memberId, data.note);
    this.newPlaningFormData.reset();
  }

  ngOnInit() {
    this.getPlanings();
    this.newPlaningFormData = new FormGroup({
      lessonId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      teacherId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      memberId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      note: new FormControl("", Validators.compose([
        Validators.required
      ])),
    });
  }
}
