import { Component, input, Input } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  @Input()
  lista: Aluno[] = [];

}
