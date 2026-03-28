# Guia de Postagem — Blog Movisul

## Como fazer login no CMS

1. Inicie o servidor com o comando:
   ```bash
   npm run dev:cms
   ```
2. Acesse no navegador: [http://localhost:3000/admin](http://localhost:3000/admin)
3. O CMS abrirá sem pedido de senha (modo local — apenas para uso no computador)
4. Clique em **Posts** no menu lateral para ver, criar ou editar posts

---

## Como criar um novo post

1. No CMS, clique em **Posts** → **New Posts**
2. Preencha todos os campos (veja detalhes abaixo)
3. Escreva o conteúdo na aba **Body** usando Markdown
4. Clique em **Publish** para salvar o arquivo `.md` na pasta `/posts`
5. O post aparece automaticamente no blog após o próximo build (`npm run build`)

---

## Campos do post

| Campo | Obrigatório | Descrição |
|---|---|---|
| **Title** | Sim | Título principal. Será usado como nome do arquivo (slug) |
| **Date** | Sim | Data e hora da publicação |
| **Image** | Recomendado | Caminho da imagem de capa. Ex: `/assets/img/minha-imagem.webp` |
| **Description** | Sim | Resumo curto (1-2 frases). Aparece na listagem e no Google |
| **Main Class** | Sim | Categoria técnica — define a cor do destaque visual |
| **Color** | Sim | Cor do post — escolha a que corresponde à Main Class |
| **Tags** | Não | Palavras-chave separadas por vírgula |
| **Category** | Sim | Categoria exibida no blog (versão com maiúscula da Main Class) |
| **Body** | Sim | Conteúdo completo em Markdown |

### Relação Main Class → Color → Category

| Main Class | Color | Category |
|---|---|---|
| `ia` | `#02b7ff` | `IA` |
| `aplicativos` | `#02d7ff` | `Aplicativos` |
| `web` | `#8257e6` | `WEB` |
| `software` | `#D6BA32` | `Software` |
| `outsourcing` | `#EB7728` | `Outsourcing` |
| `qa` | `#7D669E` | `QA` |
| `design` | `#637a91` | `Design` |
| `ux` | `#7AAB13` | `UX` |
| `devops` | `#B31917` | `Devops` |

---

## Como montar um bom post

### Estrutura recomendada

```
# Título Principal (igual ao campo Title)

Parágrafo de introdução — contextualiza o problema e o que o leitor vai aprender.

## 1. Primeiro Tópico

Explicação do tópico. Use listas para destacar pontos importantes:

* **Subtópico em negrito**: descrição curta
* **Outro ponto**: descrição curta

## 2. Segundo Tópico

...repita o padrão para cada seção...

## Conclusão

Resumo do que foi abordado e chamada para ação (ex: fale com a Movisul).
```

### Boas práticas

- **Título**: seja direto e use palavras que o leitor buscaria no Google. Ex: *"5 Motivos para...", "Como fazer...", "O que é..."*
- **Descrição**: máximo 160 caracteres — é o texto que aparece no Google e na listagem do blog
- **Imagem**: use `.webp` para melhor performance. Resolução recomendada: **1200x630px**. Salve em `/public/assets/img/`
- **Tamanho ideal**: entre 600 e 1500 palavras
- **Subtítulos**: use `##` para seções e `###` para subseções
- **Negrito**: use `**texto**` para destacar termos importantes
- **Listas**: prefira listas com bullet (`*`) para enumerar benefícios, passos ou exemplos
- **Conclusão**: sempre finalize com um parágrafo resumindo e convidando o leitor a entrar em contato

### Exemplo de imagem de capa

Salve o arquivo em:
```
public/assets/img/nome-descritivo-do-post.webp
```

E no campo **Image** do CMS coloque:
```
/assets/img/nome-descritivo-do-post.webp
```

---

## Exemplo completo de post

```markdown
---
layout: post
date: 2026-03-25 10:00:00
image: /assets/img/exemplo-post.webp
title: Como a IA Pode Reduzir Custos na Sua Empresa
description: Descubra como aplicar Inteligência Artificial para automatizar processos e reduzir custos operacionais de forma prática.
main-class: ia
color: "#02b7ff"
tags:
  - inteligência artificial
  - redução de custos
  - automação
categories: IA
---

# Como a IA Pode Reduzir Custos na Sua Empresa

A Inteligência Artificial deixou de ser exclusividade de grandes corporações...

## 1. Automação de Tarefas Repetitivas

* **Processamento de documentos**: leitura e classificação automática
* **Atendimento ao cliente**: chatbots resolvem dúvidas simples 24h

## 2. Redução de Erros Operacionais

...

## Conclusão

Adotar IA é um passo estratégico. Entre em contato com a Movisul e descubra como podemos transformar sua operação.
```
