import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Surah, SuwarService } from '../services/suwar.service';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  providers: [SuwarService],
  styleUrls: ['./surah.component.css']
})
export class SurahComponent implements OnInit {
  id: any;
  surah: Surah | undefined;
  constructor(private route: ActivatedRoute, private suwarService: SuwarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getSurah(this.id);
  }
  
    private getSurah(id: number) {
    id = parseInt(this.id);
    this.suwarService.getSurah(id).subscribe(surah => this.surah = surah);
  }
  
}
