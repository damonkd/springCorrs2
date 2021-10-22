import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  //initialises user;
  user = {} as User;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {


  }

  //takes data from form and sends it to user service to be persisted to database
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
