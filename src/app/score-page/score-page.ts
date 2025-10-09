import { Component, computed, inject, OnInit } from '@angular/core'
import { MatCard } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { Score } from '../services/score'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-score-page',
  imports: [CommonModule, RouterLink, MatTableModule],
  templateUrl: './score-page.html',
  styleUrl: './score-page.scss'
})
export class ScorePage {
  private scoreService = inject(Score)

  displayedColumns: string[] = ['no', 'date', 'yourChoice', 'computerChoice', 'result']
  scores = computed(() => this.scoreService.scores())
}
