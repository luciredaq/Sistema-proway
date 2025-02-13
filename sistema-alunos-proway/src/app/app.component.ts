import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema Aluno ProWay';

  listAluno = [
    {
      img: 'assets/bochi the rock.jpg',
      nome: 'luciano',
      curso: 'Angular',
      matricula: 4311,
      email: 'luciano@gmail.com',
      status: true

    },
    {
      img: 'assets/bochi1.png',
      nome: 'alex',
      curso: 'Typescript',
      matricula: 222,
      email: 'alex@gmail.com',
      status: true

    },
    {
      img: 'assets/bochi2.png',
      nome: 'renan',
      curso: 'C++',
      matricula: 777,
      email: 'renan@gmail.com',
      status: false

    },

  ];

}
