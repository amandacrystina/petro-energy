import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detalhe.html',
  styleUrl: './post-detalhe.css'
})
export class PostDetalhe implements OnInit {
  noticia: any;

  conteudo = [
    {
      id: 1,
      titulo: 'Nova Fronteira no Pré-Sal: Soberania e Tecnologia',
      subtitulo: 'A Petro Energy inicia a fase 4 de exploração em águas ultraprofundas.',
      imagem: '/presal.jpg',
      texto: 'A exploração do Pré-Sal representa o maior desafio tecnológico da engenharia brasileira nas últimas décadas. Localizado sob uma camada de sal que pode chegar a 2.000 metros de espessura, o petróleo aqui encontrado é de altíssima qualidade. Para alcançar esses reservatórios, a Petro Energy utiliza sondas inteligentes operadas via satélite, garantindo precisão milimétrica. Este projeto não visa apenas o lucro, mas a soberania energética do país, reduzindo a dependência de combustíveis importados e gerando um fundo de investimento para educação e saúde.',
      detalhes: 'O uso de materiais resistentes à corrosão e compressores de alta potência permite que a extração seja feita com o mínimo de desperdício, aproveitando até 98% do gás natural associado.',
      impacto: 'Estimativa de criação de 12 mil postos de trabalho indiretos na cadeia de suprimentos.'
    },
    {
      id: 2,
      titulo: 'Tecnologia Offshore 2026: IA na Prevenção Ambiental',
      subtitulo: 'Sistemas inteligentes monitoram o ecossistema marinho 24 horas por dia.',
      imagem: '/tecnologia.jpg',
      texto: 'A inovação é o coração da Petro Energy. Em 2026, implementamos o sistema "Aegis", uma Inteligência Artificial capaz de prever variações de pressão em tempo real e ajustar as válvulas de segurança automaticamente. Além da segurança operacional, instalamos sensores acústicos ao redor de todas as nossas plataformas para monitorar a migração de baleias e golfinhos. Caso um grupo de animais se aproxime da zona de operação, o sistema reduz o ruído das máquinas automaticamente, garantindo que o impacto ambiental seja praticamente nulo.',
      detalhes: 'Este é o primeiro sistema do mundo a integrar dados de satélites da NASA com sensores submarinos próprios para prevenção de desastres.',
      impacto: 'Redução histórica de 45% nas emissões de carbono da nossa frota offshore.'
    },
    {
      id: 3,
      titulo: 'Expansão em Alto Mar: O Futuro das Energias Híbridas',
      subtitulo: 'Integração de petróleo e energia eólica no meio do oceano.',
      imagem: '/expansao.jpg',
      texto: 'O projeto de expansão na Bacia de Santos é o primeiro do seu tipo no hemisfério sul. Estamos instalando parques eólicos flutuantes ao lado das nossas plataformas de extração. Durante o dia, a energia dos ventos alimenta os sistemas elétricos da plataforma, economizando milhares de barris que seriam queimados para gerar eletricidade. A Petro Energy acredita que o petróleo deve ser o combustível que financia a transição para fontes limpas. Esta nova bacia tem capacidade para abastecer grandes metrópoles brasileiras pelos próximos 50 anos com foco em sustentabilidade.',
      detalhes: 'As torres eólicas utilizam uma tecnologia de flutuação que as mantém estáveis mesmo em tempestades com ondas de até 15 metros.',
      impacto: 'Liderança absoluta no mercado de energia híbrida da América Latina.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticia = this.conteudo.find(item => item.id === id) || this.conteudo[0];
  }
}