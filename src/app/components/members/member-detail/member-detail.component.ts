import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Member } from '../../../models/member';
import { MemberService } from '../../../services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMember(id).subscribe(member => this.member = member);
  }

  save(): void {
    this.memberService.updateMember(this.member).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getMember();
  }
}
