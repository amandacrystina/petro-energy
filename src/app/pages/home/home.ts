import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero'; // Ajuste o caminho se necessário
import { NewsFeedComponent } from '../../components/news-feed/news-feed';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, NewsFeedComponent], // Importe eles aqui
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }