# Mr. Puff - Site de Tabacaria

Este é um site moderno e responsivo desenvolvido para a **Mr. Puff**, uma tabacaria especializada em narguilés, essências, vaporizadores e acessórios.  
O objetivo do projeto é oferecer uma experiência visual marcante e uma navegação fluida, destacando os produtos da loja.

---

## 🌐 Demonstração

🔗 Acesse o site online: https://site-mr-puff.vercel.app/

---

## 🧪 Tecnologias Utilizadas

- **React.js** – Biblioteca para construção da interface  
- **Vite** – Build tool para desenvolvimento rápido com React  
- **CSS3**  
- **Responsividade Mobile-First**

---

## 📱 Recursos

- Interface desenvolvida com **componentes React**  
- **Design responsivo** (desktop, tablet e mobile)  
- **Navegação fluida** com rolagem suave  
- Estrutura preparada para expansão futura (ex: catálogo dinâmico)  
- SEO e performance básicos otimizados

---

## 🔗 API de Reviews (Consumo da API do Google Places)

Este site consome uma API backend que integra com a API do **Google Places** para buscar avaliações reais de clientes.

### Repositório da API (Backend)  
🔗 https://github.com/marceloaugustorm/Consumo_API.git

### Como a API funciona  
- A API backend busca avaliações do Google Places usando a URL:  
`https://maps.googleapis.com/maps/api/place/details/json?place_id=SEU_PLACE_ID&fields=name,rating,reviews&key=SUA_API_KEY`  
- Retorna uma lista de reviews no endpoint `/reviews`

### Como rodar a API localmente

1. Clone o repositório da API:  
`git clone https://github.com/marceloaugustorm/Consumo_API.git`  
`cd Consumo_API`

2. Configure as variáveis no arquivo `.env` (ou crie um arquivo chamado `.env` com o conteúdo abaixo):  
`API_KEY=SUA_CHAVE_API_GOOGLE`  
`PLACE_ID=SEU_PLACE_ID_GOOGLE_PLACES`  
`PORT=3001`

3. Instale dependências e rode a API:  
`npm install`  
`npm start`

---

### Como rodar o frontend localmente

1. Clone o repositório do site:  
`git clone https://github.com/marceloaugustorm/Site-MrPuff.git`  
`cd Site-MrPuff`

2. Instale dependências e rode o projeto:  
`npm install`  
`npm run dev`

---
