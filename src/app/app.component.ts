import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'Baires Development Test';

  photo_data$;

  constructor ( private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getData().subscribe(
      data => {
        this.photo_data$ = data;
        this.photo_data$ = this.photo_data$.slice(0, 5);
      },
      error => {
        console.log('error getting data');
      }
    );
  }

}
