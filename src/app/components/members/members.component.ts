import { Component, OnInit } from '@angular/core';

import { Member } from "../../models/member";
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  add(firstName: string, lastName: string, level: number): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if (!firstName || !lastName || !level) { return; }
    this.memberService.addMember({firstName, lastName, level} as Member )
    .subscribe(member => this.members.push(member));
  }

  delete(member: Member): void {
    this.members = this.members.filter(m => m !== member);
    this.memberService.deleteMember(member).subscribe();
  }

  ngOnInit() {
    this.getMembers();
  }
}
