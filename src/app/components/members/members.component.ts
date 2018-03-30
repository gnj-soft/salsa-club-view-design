import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Member } from "../../models/member";
import { MemberService } from '../../services/member.service';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  title = "Members Management";
  formHeader = "Enter New Member : Please Don't Forget Member Infos";
  subtitle = "Our Members";

  memberLevels;

  members: Member[];
  newMemberFormData;

  constructor(
    private memberService: MemberService,
    private constantsService: ConstantsService,
  ) { }

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

  onSubmit(data): void {
    this.add(data.firstName, data.lastName, data.level);
    this.newMemberFormData.reset();
  }

  ngOnInit() {
    this.getMembers();
    this.memberLevels = this.constantsService.level;
    this.newMemberFormData = new FormGroup({
      firstName: new FormControl("", Validators.compose([
         Validators.required
      ])),
      lastName: new FormControl("", Validators.compose([
         Validators.required
      ])),
      level: new FormControl("", Validators.compose([
        Validators.required
      ]))
   });
  }
}
