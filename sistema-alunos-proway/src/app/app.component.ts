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
      status: true,
      imagem: '/assets/imagens/bochi2.png'
    },
    {
      nome: 'Leo',
      curso: 'CSS',
      matricula: 999,
      email: 'Leo@gmail.com',
      status: true,
      imagem: '/assets/imagens/bochi1.png'
    },

  ];

  // criando uma lista auxiliar para armazenar o valor inicial 
  listAlunoBkp: Aluno[] = this.listAluno

  alterarExibicaoCards(): void {
    if(this.exibicao === 'cards'){
      this.exibicao = 'lista';
    }else {
      this.exibicao = 'cards';
    }
  }

  exibirAlunosAprovados(): void {
    
    //reserva uma lista para armazenarsomente os aprovados
    const listAprovados: Aluno[] = [];

    this.listAlunoBkp.forEach( aluno => {
      //validar se o aluno esta Aprovado
      if(aluno.status === true){

        //insere o aluno aprovado na 'listAprovados'
        listAprovados.push(aluno);
      }
    });

    // atualizar a 'listAlunos' com os alunos aprovados
    this.listAluno = listAprovados;
  }

  exibirReprovados(): void {
    const listReprovados: Aluno [] = [];

    this.listAlunoBkp.forEach(aluno => {
      if(aluno.status === false){
        listReprovados.push(aluno);
      }
    });

    this.listAluno = listReprovados;
  }

  exibirTosdos(): void {
    this.listAluno = this.listAlunoBkp;
  }

  filtrarAlunos(filtro: string): void{
    let listaFiltrada: Aluno [] = [];

    switch(filtro) {
      case 'APROVADO':
          this.listAluno = this.listAlunoBkp.filter( aluno => {
            return aluno.status === true;
          });
          if(this.listAluno.length === 0){
            this.exibicao = 'semResultado'
          }else{
            this.exibicao = 'cards'
          }
      break;
      case 'REPROVADO':
        this.listAluno = this.listAlunoBkp.filter( aluno => {
          return aluno.status === false;
        });
        if(this.listAluno.length === 0){
          this.exibicao = 'semResultado'
        }else{
          this.exibicao = 'cards'
        }
      break;
      case 'TODOS':
        this.listAluno = this.listAlunoBkp;
        if(this.listAluno.length === 0){
          this.exibicao = 'semResultado'
        }
      break;
      
      default:
        console.log(`valor invalido para filtro ${filtro}`);
      break;
    }
  }

  onExcluir(matricula: number): void {
    this.listAluno.forEach( (aluno, index) => {
      if(aluno.matricula === matricula){
        this.listAluno.splice(index, 1);
      }
    });
  }

} 






