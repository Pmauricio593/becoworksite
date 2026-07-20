# Be. Cowork — site novo (estático)

Site estático (HTML/CSS/JS puro, sem framework). É só subir os arquivos na raiz do domínio — não precisa de build nem servidor especial.

## Arquivos
- `index.html` — home
- `escritorio-privativo.html` — landing: escritório privativo
- `sala-de-reuniao.html` — landing: sala de reunião (as 2 unidades)
- `endereco-fiscal.html` — landing: endereço fiscal / CNPJ
- `styles.css` — estilos compartilhados
- `app.js` — menu mobile + rastreamento de contato

## Como publicar
Suba todos os arquivos mantendo-os na **mesma pasta** (raiz do site). `index.html` é a página inicial.

## Antes de ir pro ar (checklist)
1. **Preços:** procurar `R$ ___` em todos os `.html` e preencher as faixas reais.
2. **Fotos:** substituir os blocos marcados `[ FOTO: ... ]` (classe `.ph`) por imagens reais, de preferência em **WebP** e com `loading="lazy"`.
3. **Logo:** a logo está recriada em HTML/CSS (classe `.brand`). Se quiser usar o arquivo oficial (PNG/SVG), é só trocar por uma `<img>`.
4. **Rastreamento (GTM):** todo clique de WhatsApp/telefone dispara no dataLayer:
   `dataLayer.push({event:'clique_contato', canal, origem})`.
   Criar no GTM (container **GTM-5V95XCP4**) o acionador de evento `clique_contato` e a tag de conversão, depois importar como conversão no Google Ads. O GTM ainda **não** está incluído neste HTML — adicionar o snippet do container no `<head>`/`<body>` de cada página.
5. **Contato:** WhatsApp/telefone oficial em todo o site = **+55 19 3105-0275** (`wa.me/551931050275`).

## Anúncios (Google Ads)
Apontar cada grupo de anúncios para a landing correspondente:
- sala comercial / escritório → `/escritorio-privativo.html`
- sala de reunião → `/sala-de-reuniao.html`
- endereço fiscal / CNPJ → `/endereco-fiscal.html`
