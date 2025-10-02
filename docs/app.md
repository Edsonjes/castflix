# Nome do apicação 
# Cast Flix

### Descrição 
Um App ao estílo netflix, aonde possa centralizar diferentes podcast separados por episódios separados por categorias

### Domínio
Podcast feutis em vídeos

### Features

-Lista os espisódios podcasts em sessões de categorias
  - [saúde,fitness,mentalidade,humor]
  - filtra episódios por nomes de podcast

  ## Como
   #### Feature
  -Lista os espisódios podcasts em sessões de categorias
    
    ### Como vou implementar
      GET: vou retornar em uma api rest o nome do podcast,nome do episódio, imagem de capa, link, categorias
      ```js
      [
         {
            podecastName: "Flow",
            nomeEpisodio: "DANIEL LOPEZ - Flow #492",
            cover: "https://i.ytimg.com/vi/RXyaX_nqOXM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC9XZ7gx0UdudTZWn2rv7nCYfQ6dg",
            link: "https://www.youtube.com/watch?v=RXyaX_nqOXM",
            categorias: [humor,mentalidade,bodybuild]
        },
        {
            podecastName: "Flow",
            nomeEpisodio: "ARTHUR PETRY - Flow #491",
            cover: "https://i.ytimg.com/vi/ZH8QKgND1Ow/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB4dp0GWRlHFErAm1dagaxFMMyfRA",
            link: "https://www.youtube.com/watch?v=ZH8QKgND1Ow",
            categorias: [humor,mentalidade,bodybuild]
        }
      ]
       
      ```
        
     

