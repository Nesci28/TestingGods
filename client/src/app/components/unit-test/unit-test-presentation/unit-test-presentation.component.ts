import { Component } from '@angular/core';
import {
  PageTypes,
  ImageOrVideoSizes,
  ImageOrVideoPosition,
} from '../../../interfaces/pageTypes.enum';

@Component({
  selector: 'app-unit-test-presentation',
  templateUrl: './unit-test-presentation.component.html',
  styleUrls: ['./unit-test-presentation.component.scss'],
})
export class UnitTestPresentationComponent {
  pageConfigs: any = [
    {
      controls: {
        forward: true,
      },
      meta: {
        type: PageTypes.TITLE,
        video: {
          source: `../../../../assets/unit-test/dynamics-image-1.webm`,
          autoplay: true,
          size: ImageOrVideoSizes.FULLSCREEN,
          position: ImageOrVideoPosition.FULLSCREEN,
        },
      },
      elements: ['<h1>Test unitaire</h1>'],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h3>Pourquoi des Tests Unitaires?</h3>',
        "<p>Les tests unitaires sont bénéfiques sur plusieurs points.  Ils permettent de renforcir la qualité du code, de facilité l'intégration de nouvelles fonctionnalités, de produire de la documentation et plusieurs autres...</p>",
        '<ul><li>Rendre les procédures Agile</li><li>Qualité du Code</li><li>Faciliter les changements et intégration</li><li>Générer de la documentation</li><li><li>Réduire les coûts</></ul>',
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Rendre les procédures Agiles</h4>',
        '<p>Un des points le plus important est de rendre le procéssus de programmation Agile.  Lorsque nous ajoutons de plus en plus de fonctionnalités à un programme, nous devons souvent revisiter du code par contre, changer du code déjà testé est très risqué et exigeant.  Dans ce cas, les tests unitaires nous permettent de faire nos changements avec confiance.</p>',
        '<p>Les tests unitaires vont main dans la main avec le processus Agile.  Ceux-ci permettent une facilité dans le refactoring et surtout, une confiance.</p>',
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Qualité du Code</h4>',
        '<p>Ils identifient les problèmes avant de continuer le développement ou avant de commencer les tests QA.</p>',
        "<p>En prenant une approche \"TDD\", les cas particuliers s'exposent avant même d'écrire du code et aide à trouvé la bonne solution avant tout.  Aussi, les tests permettent de bien cibler la responsibilité de la function (SOLID) ainsi que le design d'implémentation nécéssaire.</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Faciliter les changements et intégration</h4>',
        "<p>Les tests unitaires nous permettent aussi de tester les librairies.  Non pas directement par contre, lorsque nous utilisons une librairie externe et que l'API de celle-ci change, sans même commencer des recherches, nous savons où le problème se trouve.</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Génèrer de la documentation</h4>',
        '<p>Automatiquement, les test unitaires génèrent une documentation des différentes fonctione.</p>',
        "<p>Un nouveau développeur sur le projet, avec l'aide des test unitaires, voit la fonctionnilité des functions et peut comprendre la façon d'utiliser les APIs.</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Réduire les coûts</h4>',
        '<p>Comme les bugs sont trouvés rapidement dans le procéssus, cela diminue les coûts.  Par le mot "coût", il ne faut pas juste penser à l\'argent mais aussi a l\'effort de travail nécessaire.</p>',
        "<p>Imaginez le temps nécéssaire, problématique à corriger, modifications à apporter si un bug majeur est découvert vers la fin d'un projet, ou proche du déploiement.  La découverte rapide diminuera l'impact et le temps consacré pour trouver la solution.</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTVIDEO,
        video: {
          source: `../../../../assets/unit-test/dizzy.webm`,
          autoplay: true,
          position: ImageOrVideoPosition.RIGHT,
          size: ImageOrVideoSizes.HEIGHT,
        },
      },
      elements: [
        "<p>C'est bien beau la théorie, mais comment aimer les Test Unitaires! ❤</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTIMAGE,
        image: {
          source: `../../../../assets/unit-test/node_modules.webp`,
          position: ImageOrVideoPosition.LEFT,
          size: ImageOrVideoSizes.WIDTH,
        },
      },
      elements: [
        '<h4>Comment et pourquoi aimer les Test Unitaires</h4>',
        '<blockquote class="blockquote">Il y a surement un tool pour faire ça! Jamais asser de tool!<br /><em>Anonymous M. Gagnon</em></blockquote>',
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        "<p>Il existe des milliers d'articles sur pourquoi aimer les tests unitaires et comment changer sa philosophie.  La liste suivante est complêtement personnel à comment moi j'ai fait pour les découvrir et ne plus être capable de coder sans cela.</p>",
        '<ul><li>Amélioration de la qualité du code</li><li>Retour à la base</li><li>Environnement de travail</li><li>Confiance en son code</li></ul>',
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.CODEONLY,
        background: `../../../../assets/unit-test/ohmFmG7.webp`,
      },
      elements: [
        {
          code: `Amélioration de la qualité du code`,
          language: ['text'],
        },
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Retour à la base</h4>',
        "<p>Comme nous verons plus loin, dans les règles d'or d'un bon test unitaire, il est très important que ceux-ci soit écrit le plus simple possible tout en étant le plus verbale.  Il faut le voir comme un vrai retour au source de la programmation.  C'est avec ce retour au source, un pas de recule, qu'il est avantageux de revisiter notre code afin de voir s'il est adéquat par rapport aux différentes méthodologies ainsi que si nous pouvons l'améliorer en utilisant des \"Designs Patterns\"</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Retour à la base</h4>',
        "<p>Comme nous verons plus loin, dans les règles d'or d'un bon test unitaire, il est très important que ceux-ci soit écrit le plus simple possible tout en étant le plus verbale.  Il faut le voir comme un vrai retour au source de la programmation.  C'est avec ce retour au source, un pas de recule, qu'il est avantageux de revisiter notre code afin de voir s'il est adéquat par rapport aux différentes méthodologies ainsi que si nous pouvons l'améliorer en utilisant des \"Designs Patterns\"</p>",
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTIMAGE,
        image: {
          source: `../../../../assets/unit-test/code.webp`,
          position: ImageOrVideoPosition.BOTTOM,
          size: ImageOrVideoSizes.WIDTH,
        },
      },
      elements: [
        '<h4>Environnement de travail</h4>',
        '<p>Plusieurs outils permettent de rouler les test unitaires directement de notre IDE.  Non seulement cela augmente la productivité de beaucoup mais cela rend la création de test unitaires beaucoup plus interactif et amusant.</p>',
        '<ul><li>Quokka.js</li><li>Wallaby.js</li><li>Jest</li></ul>',
      ],
    },
    {
      controls: {
        forward: true,
        backward: true,
      },
      meta: {
        type: PageTypes.TEXTONLY,
      },
      elements: [
        '<h4>Confiance en son code</h4>',
        "<p>Il y a 2 points inclus dans celui-ci.  Non seulement, dans un projet avancé, les tests unitaires permettent d'avoir une confiance en soi lors de la présentation de notre code mais aussi, cette même confiance, peut être prise comme une compétition envers soi-même.  Imaginez livrer un morceau, sans bug!  Le défi de tout programmeur.</p>",
      ],
    },
  ];
}
