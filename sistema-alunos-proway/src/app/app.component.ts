import { Component } from '@angular/core';
import { Aluno } from './interfaces/Aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Sistema Aluno ProWay';
  exibicao: string = 'cards';

  listAluno: Aluno [] = [
    {
      nome: 'Luciano',
      curso: 'Angular',
      matricula: 4311,
      email: 'luciano@gmail.com',
      status: true,
      imagem: '/assets/imagens/bochi the rock.jpg'

    },
    {
      nome: 'Alex',
      curso: 'Typescript',
      matricula: 222,
      email: 'alex@gmail.com',
      status: true,
      imagem: '/assets/imagens/bochi1.png'
    },
    {
      nome: 'Renan',
      curso: 'C++',
      matricula: 777,
      email: 'renan@gmail.com',
      status: false,
      imagem: '/assets/imagens/bochi2.png'
    },

  ];

  alterarExibicaoCards(): void {
    if(this.exibicao === 'cards'){
      this.exibicao = 'lista';
    }else {
      this.exibicao = 'cards';
    }
  }

}
