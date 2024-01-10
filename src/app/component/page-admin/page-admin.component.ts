// page-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interface/users';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  usersData: any; // Assurez-vous de définir correctement le type selon la structure des données

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Vous pouvez également charger les données initiales ici si nécessaire
  }

  getUsers() {
    const requestData = {
      type: 'user',
    };

    this.apiService.postData(requestData).subscribe(response => {
      console.log(response);
      this.usersData = response; // Assurez-vous que la structure de votre réponse correspond à cela
    });
  }
}
