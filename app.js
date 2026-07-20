// Be. Cowork — script compartilhado
// Menu mobile
var burger=document.getElementById('burger'), menu=document.getElementById('menu');
if(burger&&menu){
  burger.addEventListener('click',function(){menu.classList.toggle('open');});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')menu.classList.remove('open');});
}
// Rastreamento de conversão: todo clique de WhatsApp/telefone -> dataLayer (GTM GTM-5V95XCP4)
window.dataLayer=window.dataLayer||[];
document.querySelectorAll('[data-canal]').forEach(function(el){
  el.addEventListener('click',function(){
    window.dataLayer.push({
      event:'clique_contato',
      canal:el.getAttribute('data-canal'),   // 'whatsapp' | 'telefone'
      origem:el.getAttribute('data-origem')   // ex.: 'lp-escritorio-hero'
    });
  });
});
