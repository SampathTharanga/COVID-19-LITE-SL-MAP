import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
  details;
  count = 0;

  _local_recovered=0;



  constructor(private http: HttpClient) { 
    console.log(this._local_recovered); 
  }
 
  click() {
    return this.count++;
  }

  ngOnInit() {
     
    this.http.get<any>(this.url).subscribe(response => {
      this.details = response.data;
      this._local_recovered = response.data.local_recovered;
      console.log(this._local_recovered); 
    });
  }

    //CHART
    data = {
      labels: ['Deaths', 'Recovered & Discharged', 'Total Confirmed Cases'],
      datasets: [
        {
          data: [this._local_recovered, 50, 14],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };


}
