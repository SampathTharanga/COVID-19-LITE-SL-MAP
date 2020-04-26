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
  // _local_recovered=0;

  constructor(private http: HttpClient) { }

  click() {
    return this.count++;
  }



  ngOnInit() {

    this.http.get<any>(this.url).subscribe(response => {
      this.details = response.data;
      //let _local_recovered = response.data.local_recovered;
      //console.log(_local_recovered);
      this.chartData(response.data.local_total_cases,response.data.local_recovered,response.data.local_deaths)
    });
  }

  chartData(a:number,b:number, c:number) {
    //CHART
    var data = {
      labels: ['Deaths', 'Recovered & Discharged', 'Total Confirmed Cases'],
      datasets: [
        {
          data: [a, b, c],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
console.log(a);
console.log(b);
console.log(c);
  }
}
