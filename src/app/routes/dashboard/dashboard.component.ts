import {Component, OnInit} from '@angular/core';
import {TrelloAuthService} from '../../common/trello-auth/trello-auth.service';
import {TrelloService} from '../../common/trello-api/trello.service';

@Component({
  selector: 'ata-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private trelloAuthService: TrelloAuthService, private trelloService: TrelloService) {
  }

  async ngOnInit() {
    const me = await this.trelloService.getMe();
    console.log('Loaded user:', me);
  }

  logout() {
    this.trelloAuthService.logout();
  }

}
