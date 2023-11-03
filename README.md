# API com os pensamentos dos maiores filósofos da histório

## Pensadores

- **Listar Todos os Pensadores (GET)**

```
/pensadores/
```

``` json
{
    "quantidade": 10,
    "pensadores": [
        {
            "nome": "Aristóteles",
            "periodo": "(384-322 a.C.)",
            "sobre": "Discípulo de Platão, foi capaz de refletir sobre uma vasta gama de temas que vão desde a geometria passando pela ética, pela poesia até chegar à medicina. Aos 17 anos, Aristóteles se inscreveu na Academia do mestre, em Atenas, e rapidamente virou seu pupilo."
        },
        {
            "nome": "Platão",
            "periodo": "(427-347 a.C.)",
            "sobre": "Nascido em Atenas, no berço de uma família nobre, pouca gente sabe, mas o verdadeiro nome de Platão era Arístocles - Platão era um apelido que em grego queria dizer \"ombros largos\"."
        }
    ],
    "status": 200
}
```

- **Listar Um Pensador (GET)**

```
/pensadores/:id
```

``` json
{
    "filosofo": {
        "nome": "Platão",
        "periodo": "(427-347 a.C.)",
        "sobre": "Nascido em Atenas, no berço de uma família nobre, pouca gente sabe, mas o verdadeiro nome de Platão era Arístocles - Platão era um apelido que em grego queria dizer \"ombros largos\".",
        "pensamentos": [
            "Quem comete uma injustiça é sempre mais infeliz que o injustiçado.",
            "Deve-se temer a velhice, porque ela nunca vem só. Bengalas são provas de idade e não de prudência.",
            "É a esta força que mantém sempre a opinião justa e legítima sobre o que é necessário temer e não temer, que chamo e defino coragem.",
            "Podemos facilmente perdoar uma criança que tem medo do escuro; a real tragédia da vida é quando os homens têm medo da luz.",
            "Todo homem é poeta quando está apaixonado.",
            "Os olhos do espírito só começam a ser penetrantes quando os do corpo principiam a enfraquecer.",
            "A velhice é um estado de repouso e de liberdade no que respeita aos sentidos. Quando a violência das paixões se relaxa e o seu ardor arrefece, ficamos libertos de uma multidão de furiosos tiranos.",
            "Devemos seguir sempre o caminho que conduz ao mais alto.",
            "Quando a mente está pensando, está falando consigo mesma.",
            "A punição que os bons sofrem, quando se recusam a agir, é viver sob o governo dos maus."
        ],
        "quantidade": 10
    },
    "status": 200
}
```

## Pensamentos

- **Listar Todos os Pensamentos (GET)**

```
/pensamentos/
```

``` json
{
    "quantidade": 20,
    "pensamentos": [
        {
            "pensamento": "Nunca existiu uma grande inteligência sem uma veia de loucura.",
            "filosofo": "Aristóteles"
        },
        {
            "pensamento": "As pessoas dividem-se entre aquelas que poupam como se vivessem para sempre e aquelas que gastam como se fossem morrer amanhã.",
            "filosofo": "Aristóteles"
        },
        {
            "pensamento": "O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.",
            "filosofo": "Aristóteles"
        }
    ],
    "status": 200
}
```

- **Listar Um Pensamento (GET)**

```
/pensamentos/:id
```

``` json
{
    "pensamento": "É a esta força que mantém sempre a opinião justa e legítima sobre o que é necessário temer e não temer, que chamo e defino coragem.",
    "filosofo": "Platão",
    "status": 200
}
```

- **Listar Pensamentos por Nome do Pensador (GET)**

```
/pensamentos/pensador/:nomePensador
```

``` json
{
    "filosofo": "Aristóteles",
    "pensamentos": [
        "Nunca existiu uma grande inteligência sem uma veia de loucura.",
        "As pessoas dividem-se entre aquelas que poupam como se vivessem para sempre e aquelas que gastam como se fossem morrer amanhã.",
        "O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.",
        "A dúvida é o princípio da sabedoria.",
        "Os avarentos amealham como se fossem viver para sempre, os pródigos dissipam,como se fossem morrer.",
        "Tendo em conta as condições de que dispõe e na medida do possível, é a natureza que faz sempre as coisas mais belas e melhores.",
        "Um milionário deve sempre viver um pouco além de suas posses - para manter a credibilidade.",
        "Que vantagem têm os mentirosos? A de não serem acreditados quando dizem a verdade.",
        "A democracia surgiu quando, devido ao fato de que todos são iguais em certo sentido, acreditou-se que todos fossem absolutamente iguais entre si.",
        "A alegria que se tem em pensar e aprender faz-nos pensar e aprender ainda mais."
    ],
    "quantidade": 10,
    "status": 200
}
```
