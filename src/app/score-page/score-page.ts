import { Component, computed, inject, OnInit } from '@angular/core'
import { MatCard } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { Score } from '../services/score'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-score-page',
  imports: [CommonModule, RouterLink, MatTableModule, TranslatePipe],
  templateUrl: './score-page.html',
  styleUrl: './score-page.scss'
})
export class ScorePage implements OnInit {
  private scoreService = inject(Score)
  currentLang = ''

  constructor (private router: Router) {}

  ngOnInit () {
    this.currentLang = this.router.url.split('/')[1]
  }

  displayedColumns: string[] = ['no', 'date', 'yourChoice', 'computerChoice', 'result']
  scores = computed(() => this.scoreService.scores())
}
