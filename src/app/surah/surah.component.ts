import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Surah} from '../model/surah';
import { SuwarService } from '../services/suwar.service';


@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  providers: [SuwarService],
  styleUrls: ['./surah.component.css']
})
export class SurahComponent implements OnInit, OnDestroy {
  id: any;
  surah: Surah | undefined;
  constructor(private route: ActivatedRoute, private suwarService: SuwarService) { }

  ngOnDestroy(): void {
    // Could we cancel the HTTP request on destroy? I am not sure
    console.log("destroyed!");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = params.get('id');
    });
    this.getSurah(this.id);
  }

  private getSurah(id: number) {
    id = parseInt(this.id);
    this.suwarService.getSurah(id).subscribe(surah => this.surah = surah);
  }

}
