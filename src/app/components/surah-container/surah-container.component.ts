import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Surah } from '../../model/surah';
import { SuwarService } from '../../services/suwar/suwar.service';
import { NotificationsService } from '../../services/notifications/notifications.service';


@Component({
  selector: 'app-surah',
  templateUrl: './surah-container.component.html',
  styleUrls: ['./surah-container.component.css']
})
export class SurahContainerComponent implements OnInit, OnDestroy {
  id: any;
  surah: Surah | undefined;
  isSaved: boolean = false
  constructor(private route: ActivatedRoute, private router: Router, private suwarService: SuwarService, private notification: NotificationsService) { }

  ngOnDestroy(): void {
    // Could we cancel the HTTP request on destroy? I am not sure
  }

  ngOnInit(): void {
    try {
      this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
        this.id = params.get('id');
      });
      if (this.id == "saved") {
        this.isSaved = true
        this.id = JSON.parse(this.suwarService.getSurahFromLocalStorage())["surahId"]
        this.getSurah(this.id)
      } else {
        this.getSurah(this.id)
      }
    }
    catch (e: any) {
      this.router.navigate(['/'])
      this.notification.showErrorSnackBar(e.message)
    }
  }

  private getSurah(id: number) {
    this.id = parseInt(this.id)
    if (isNaN(this.id) || (this.id < 1 || this.id > 114)) throw new Error("الرجاء أختيار رقم السورة بين 1 و 114");
    this.suwarService.getSurah(id).subscribe(surah => this.surah = surah);
  }

}
