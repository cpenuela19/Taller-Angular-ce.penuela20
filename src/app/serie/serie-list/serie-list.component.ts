import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})

export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAverageSeasons();
    });
  }

  average: number =0;
  getAverageSeasons() {
    let totalSeasons = 0;
    this.series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    this.average = totalSeasons / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
