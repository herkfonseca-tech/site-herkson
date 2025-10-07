// scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// botão voltar ao topo
const toTop=document.querySelector('.toTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>400){ toTop.style.display='flex'; }
  else { toTop.style.display='none'; }
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
