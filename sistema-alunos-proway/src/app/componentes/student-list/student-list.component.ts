import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  @Output() excluir: EventEmitter<number> = new EventEmitter();

  @Input() alunos: Aluno[] = [];

  alunoEdicao: Aluno = {
    nome: '',
    matricula: 0,
    email: '',
    curso: '',
    status: false,
    imagem: ''
  }

  excluirAluno(matricula: number): void {
    this.excluir.emit(matricula);
  }

  editarAluno(aluno: Aluno): void {
    //Atualizar o valor da variavel de referencia para o formulario
    this.alunoEdicao.nome = aluno.nome;
    this.alunoEdicao.matricula = aluno.matricula;
  }

  onAdicionar(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

}
