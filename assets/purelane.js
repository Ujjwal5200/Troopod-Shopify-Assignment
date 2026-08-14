(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revs=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window&&!reduce){
    var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px',threshold:0.12});
    revs.forEach(function(el){ro.observe(el)});
  }else{revs.forEach(function(el){el.classList.add('in')})}
  var railLinks=[].slice.call(document.querySelectorAll('.rail a'));
  var targets=railLinks.map(function(a){return document.querySelector(a.getAttribute('href'))});
  function syncRail(){var mid=window.scrollY+window.innerHeight*0.42,idx=0;targets.forEach(function(t,i){if(t&&t.offsetTop<=mid)idx=i});railLinks.forEach(function(a,i){a.classList.toggle('on',i===idx)})}
  function frame(){var y=window.scrollY||window.pageYOffset;syncRail()}
  window.addEventListener('scroll',function(){if(!window.requestAnimationFrame)window.frame=frame();else window.requestAnimationFrame(frame)},{passive:true});
  frame();
})();
