import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-feed.html',
  styleUrl: './news-feed.css'
})
export class NewsFeedComponent {
  noticias = [
    {
      id: 1,
      titulo: 'Nova Fronteira no Pré-Sal',
      resumo: 'Iniciamos a exploração em águas ultraprofundas, garantindo soberania energética.',
      imagem: '/presal.jpg'
    },
    {
      id: 2,
      titulo: 'Tecnologia Offshore 2026',
      resumo: 'Nossas novas plataformas reduzem a emissão de carbono por barril extraído.',
      imagem: '/tecnologia.jpg'
    },
    {
      id: 3,
      titulo: 'Expansão em Alto Mar',
      resumo: 'Novos reservatórios descobertos na Bacia de Santos prometem recordes de produção.',
      imagem: '/expansao.jpg'
    }
  ];
}