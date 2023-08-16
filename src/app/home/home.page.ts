import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  cnpj: string = '';
  dados: any = null;
  classificacao: string = '';

  constructor(private http: HttpClient) {}

  buscarDados() {
    const url = `https://www.dataserra.com.br/apidataserra/protec/GetProtec?value=${this.cnpj}`;

    this.http.get(url).subscribe((response) => {
      this.dados = response;

      this.classificarDados(this.dados.Dados);
    });
  }

  classificarDados(dados: string) {
    // Fazer a verificação e atribuir a classificação correspondente
    if (dados === 'N') {
      this.classificacao = 'Normal';
    } else if (dados === 'B') {
      this.classificacao = 'Bloqueado';
    }
      else {
      this.classificacao = 'Erro no CNPJ';
    }
  }
}

