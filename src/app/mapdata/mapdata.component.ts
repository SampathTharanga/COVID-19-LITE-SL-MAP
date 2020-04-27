import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapdata',
  templateUrl: './mapdata.component.html',
  styleUrls: ['./mapdata.component.scss']
})
export class MapdataComponent implements OnInit {


  url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
  details;
  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>(this.url).subscribe(response => {
      this.details = response.data;
      this.chartData(response.data.local_total_cases,response.data.local_recovered,response.data.local_deaths)
    });
  }

  chartData(_local_deaths:number,_local_recovered:number, _local_total_cases:number) {
    //CHART
    this.data = {
      labels: [ 'Total Confirmed Cases','Deaths','Recovered & Discharged'],
      datasets: [
        {
          data: [_local_deaths ,_local_total_cases, _local_recovered],
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        },
      ],
    };
  }

}
