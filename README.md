# Portfólio · Renan Noronha Rodrigues

Site estático em HTML, CSS e JavaScript puros. Sem build, sem dependências: é abrir e usar.

## Como visualizar

Opção 1, direto no navegador:
abra o arquivo `index.html` com dois cliques.

Opção 2, com servidor local (recomendado para testar como se fosse produção):

```bash
cd portfolio
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura

```
portfolio/
├── index.html        # todo o conteúdo do site, seção por seção
├── css/
│   └── styles.css    # estilos (Mobile First, variáveis de tema no topo)
├── js/
│   └── main.js       # interações: menu, animações, barras, formulário
└── assets/
    └── foto_renan.jpg
```

## Onde mexer para personalizar

- **Cores e fontes:** tudo em variáveis no bloco `:root` do `styles.css`. Trocar `--accent` já muda a cara do site inteiro.
- **Textos:** direto no `index.html`. Cada seção está marcada com um comentário grande (HERO, SOBRE MIM, EXPERIÊNCIA...).
- **Nova experiência:** duplique um bloco `<article class="tl__item">` na seção de experiência.
- **Novo projeto:** duplique um `<article class="proj">` na seção de projetos.
- **Nível das barras de habilidade:** mude o atributo `data-level` (0 a 100) em cada `<div class="skill">` e o texto do percentual ao lado.
- **GitHub:** o link na seção de contato está com placeholder. Troque `github.com/seu-usuario` pelo seu perfil real.
- **Formulário:** hoje ele abre o cliente de e-mail do visitante (mailto). Para envio real sem backend, crie uma conta no Formspree, pegue o endpoint e troque o bloco 5 do `main.js` por um `fetch` POST.

## Publicação gratuita

Funciona direto no GitHub Pages, Vercel ou Netlify: basta subir a pasta `portfolio/` como raiz do projeto. Nenhuma configuração extra é necessária.
