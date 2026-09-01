
  const faqs=[
    ["How do I know if my roof needs replacement?","Look for missing or curling shingles, granules in the gutters, leaks, or a roof older than 20 years. We offer a free inspection to give you a clear answer."],
    ["How long does it take to replace a roof?","Most residential roof replacements take 1–3 days depending on size, materials, and weather. We'll give you a firm timeline before work starts."],
    ["Do I have to move out during the replacement?","No — roofing, remodeling, and siding projects are done with minimal disruption. For larger remodels we'll walk you through what to expect room by room."],
    ["How long does a roof last?","Asphalt shingles typically last 20–30 years, metal roofing 40–70 years, depending on materials and maintenance. We'll help you pick what fits your budget and timeline."]
  ];
  const host=document.getElementById('faqlist');
  if(host){faqs.forEach(([q,a])=>{
    const d=document.createElement('details');d.className='qa';
    d.innerHTML=`<summary>${q}<span class="ico">+</span></summary><div class="ans"><p>${a}</p></div>`;
    host.appendChild(d);
  });}
  // mobile menu
  const mm=document.getElementById('mobileMenu');
  const openMenu=()=>{mm.classList.add('open');document.body.classList.add('menu-open');mm.setAttribute('aria-hidden','false')};
  const closeMenu=()=>{mm.classList.remove('open');document.body.classList.remove('menu-open');mm.setAttribute('aria-hidden','true')};
  document.querySelector('.menu-btn').addEventListener('click',openMenu);
  document.getElementById('mmClose').addEventListener('click',closeMenu);
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

  // ================= EN / ES language toggle =================
  const I18N = {
    "Roofing":"Techos","Remodeling":"Remodelación","Siding":"Revestimiento","Process":"Proceso","FAQ":"Preguntas","Contact":"Contacto",
    "Get a Quote":"Cotización","Get a Free Quote":"Cotización Gratis","Home":"Inicio",
    "Pittsburgh, PA · Licensed & Insured":"Pittsburgh, PA · Licenciados y Asegurados",
    "Remodeling &":"Remodelación y",
    "Professional construction for homes and commercial properties — quality workmanship, honest pricing, and a crew that treats your home like our own.":"Construcción profesional para hogares y propiedades comerciales — trabajo de calidad, precios honestos y un equipo que trata tu casa como la nuestra.",
    "Years of":"Años de","Experience":"Experiencia","Finished":"Proyectos","Projects":"Terminados","Client":"Satisfacción","Satisfaction":"del Cliente","Core":"Servicios","Services":"Principales",
    "What We Do":"Lo Que Hacemos","Our Services":"Nuestros Servicios",
    "Project management that handles planning, top-grade materials, and installation — start to finish.":"Gestión de proyecto que cubre planeación, materiales de primera e instalación — de principio a fin.",
    "Expert roof installation, repair, and replacement using top-grade materials for long-lasting protection.":"Instalación, reparación y reemplazo de techos con materiales de primera para una protección duradera.",
    "Transform your interior spaces with professional creativity — kitchens, bathrooms, and complete makeovers.":"Transforma tus espacios interiores con creatividad profesional — cocinas, baños y renovaciones completas.",
    "Durable, weather-tight siding installation and repair that boosts curb appeal for residential and commercial properties.":"Instalación y reparación de revestimiento resistente al clima que mejora la apariencia de propiedades residenciales y comerciales.",
    "Learn More →":"Ver Más →",
    "The Owner":"El Dueño","Every Project":"Cada Proyecto","Is Personal":"Es Personal","— The Owner":"— El Dueño",
    "I've been working in the construction industry for over seven years, specializing in roofing, remodeling, and siding. My passion is helping homeowners improve and protect their properties through quality workmanship and honest service.":"Llevo más de siete años en la industria de la construcción, especializado en techos, remodelación y revestimiento. Mi pasión es ayudar a los propietarios a mejorar y proteger sus hogares con trabajo de calidad y servicio honesto.",
    "Every project I take on is personal — I treat each home as if it were my own. My goal is to deliver results that not only look great but also stand the test of time.":"Cada proyecto que tomo es personal — trato cada casa como si fuera la mía. Mi meta es entregar resultados que no solo se vean geniales, sino que también resistan el paso del tiempo.",
    "How It Works":"Cómo Funciona","Our Process":"Nuestro Proceso",
    "From first inspection to final walkthrough, we keep every step clear and on schedule.":"Desde la primera inspección hasta la revisión final, mantenemos cada paso claro y a tiempo.",
    "Step 01":"Paso 01","Step 02":"Paso 02","Step 03":"Paso 03","Step 04":"Paso 04",
    "Inspection & Consultation":"Inspección y Consulta","We evaluate your property and identify the best solution for your budget.":"Evaluamos tu propiedad e identificamos la mejor solución para tu presupuesto.",
    "Material Selection":"Selección de Materiales","Guidance on choosing the most suitable materials for your style and needs.":"Asesoría para elegir los materiales más adecuados para tu estilo y necesidades.",
    "Installation":"Instalación","Every job is completed with attention to safety, precision, and quality.":"Cada trabajo se completa con atención a la seguridad, precisión y calidad.",
    "Final Review":"Revisión Final","A walkthrough plus guidance on maintenance and care going forward.":"Un recorrido final más asesoría sobre mantenimiento y cuidado a futuro.",
    "Quick Links":"Enlaces Rápidos","Roof Replacement":"Reemplazo de Techo","Roof Repair":"Reparación de Techo","Siding Installation":"Instalación de Revestimiento","Kitchen & Bath Remodel":"Remodelación de Cocina y Baño","Free Estimate":"Presupuesto Gratis","Common Questions":"Preguntas Frecuentes",
    "Get a Free Estimate":"Obtén un Presupuesto Gratis",
    "Questions":"Preguntas","Frequently Asked":"Preguntas Frecuentes",
    "How do I know if my roof needs replacement?":"¿Cómo sé si mi techo necesita reemplazo?",
    "Look for missing or curling shingles, granules in the gutters, leaks, or a roof older than 20 years. We offer a free inspection to give you a clear answer.":"Busca tejas faltantes o levantadas, gránulos en las canaletas, goteras, o un techo de más de 20 años. Ofrecemos una inspección gratis para darte una respuesta clara.",
    "How long does it take to replace a roof?":"¿Cuánto tarda reemplazar un techo?",
    "Most residential roof replacements take 1–3 days depending on size, materials, and weather. We'll give you a firm timeline before work starts.":"La mayoría de los reemplazos residenciales toman de 1 a 3 días según el tamaño, los materiales y el clima. Te damos un plazo firme antes de empezar.",
    "Do I have to move out during the replacement?":"¿Tengo que salir de casa durante el trabajo?",
    "No — roofing, remodeling, and siding projects are done with minimal disruption. For larger remodels we'll walk you through what to expect room by room.":"No — los trabajos de techo, remodelación y revestimiento se hacen con mínima molestia. Para remodelaciones grandes te explicamos qué esperar cuarto por cuarto.",
    "How long does a roof last?":"¿Cuánto dura un techo?",
    "Asphalt shingles typically last 20–30 years, metal roofing 40–70 years, depending on materials and maintenance. We'll help you pick what fits your budget and timeline.":"Las tejas de asfalto duran típicamente de 20 a 30 años, y el techo de metal de 40 a 70 años, según materiales y mantenimiento. Te ayudamos a elegir lo que se ajuste a tu presupuesto.",
    "Professional construction services focused on roofing, remodeling, and siding for Pittsburgh homes and businesses.":"Servicios de construcción profesional enfocados en techos, remodelación y revestimiento para hogares y negocios de Pittsburgh.",
    "Get In Touch":"Contáctanos","© 2026 Vertex NTA Roofing LLC. All rights reserved.":"© 2026 Vertex NTA Roofing LLC. Todos los derechos reservados.",
    "Done Right":"Bien Hecho","Rebuilt Right":"Renovados","Spaces":"Espacios",
    "Expert roof installation, repair, and replacement using top-grade materials built to protect your home through every Pittsburgh season.":"Instalación, reparación y reemplazo de techos con materiales de primera, construidos para proteger tu hogar en cada estación de Pittsburgh.",
    "Free Roof Inspection":"Inspección Gratis","All Services":"Todos los Servicios","Call 412-983-4397":"Llama al 412-983-4397",
    "Built To Last":"Construido para Durar","Protection That":"Protección Que","Starts At The Top":"Empieza Arriba",
    "Your roof is your home's first line of defense. Whether you need a full replacement, a repair after a storm, or a quick leak fix, we deliver clean, code-compliant work backed by honest pricing and a firm timeline.":"Tu techo es la primera línea de defensa de tu hogar. Ya sea un reemplazo completo, una reparación tras una tormenta o el arreglo rápido de una gotera, entregamos trabajo limpio y según código, con precios honestos y plazos firmes.",
    "Storm & Leak Repair":"Reparación de Tormentas y Goteras","Free Inspections":"Inspecciones Gratis","Gutter Installation":"Instalación de Canaletas","Commercial & Flat Roofing":"Techos Comerciales y Planos",
    "Materials":"Materiales","Roofing Options":"Opciones de Techo","We help you choose the material that fits your home, your budget, and your timeline.":"Te ayudamos a elegir el material ideal para tu hogar, tu presupuesto y tus tiempos.",
    "Asphalt Shingles":"Tejas de Asfalto","The most popular choice — affordable, reliable, and available in many colors. Lasts 20–30 years.":"La opción más popular — económica, confiable y en muchos colores. Dura de 20 a 30 años.",
    "Metal Roofing":"Techo de Metal","Premium durability and energy efficiency. Lasts 40–70 years with minimal maintenance.":"Durabilidad premium y eficiencia energética. Dura de 40 a 70 años con mínimo mantenimiento.",
    "Flat / Commercial":"Plano / Comercial","Durable membrane systems engineered for flat and low-slope commercial properties.":"Sistemas de membrana durables, diseñados para propiedades comerciales planas o de baja pendiente.",
    "Need A Roof You Can Trust?":"¿Necesitas un Techo Confiable?",
    "Start Your Remodel":"Empieza tu Remodelación","Interior Craftsmanship":"Artesanía Interior","Spaces Rebuilt Around Your Life":"Espacios Renovados a tu Medida",
    "From a single room to a whole-home transformation, we manage every detail — design guidance, materials, and skilled installation — so the finished space looks great and works even better.":"Desde un solo cuarto hasta la transformación de toda la casa, cuidamos cada detalle — asesoría de diseño, materiales e instalación experta — para que el espacio final se vea genial y funcione aún mejor.",
    "Kitchen Remodeling":"Remodelación de Cocina","Bathroom Remodeling":"Remodelación de Baño","Basement Finishing":"Acabado de Sótano","Flooring & Tile":"Pisos y Azulejos","Custom Carpentry":"Carpintería a Medida","Full Home Makeovers":"Renovación Total del Hogar",
    "Our Remodel Process":"Nuestro Proceso de Remodelación","Consultation":"Consulta","We visit, listen to your vision, and assess the space and budget.":"Te visitamos, escuchamos tu visión y evaluamos el espacio y el presupuesto.",
    "Design & Quote":"Diseño y Cotización","Material selection and a clear, itemized quote with no surprises.":"Selección de materiales y una cotización clara y detallada, sin sorpresas.",
    "Build":"Construcción","Skilled installation with clean job sites and steady communication.":"Instalación experta con sitios limpios y comunicación constante.",
    "Walkthrough":"Recorrido Final","A final review together to make sure every detail is right.":"Una revisión final juntos para asegurar que cada detalle esté perfecto.",
    "Ready To Remodel?":"¿Listo para Remodelar?",
    "Curb Appeal + Protection":"Estética + Protección","A Fresh Exterior That Lasts":"Un Exterior Nuevo Que Perdura",
    "New siding is one of the highest-return upgrades you can make. We install weather-tight, low-maintenance systems that seal out the elements and instantly lift how your property looks.":"El revestimiento nuevo es una de las mejoras con mayor retorno. Instalamos sistemas resistentes al clima y de bajo mantenimiento que sellan contra los elementos y elevan al instante la imagen de tu propiedad.",
    "Vinyl Siding":"Revestimiento de Vinilo","Fiber Cement":"Fibrocemento","Insulated Siding":"Revestimiento Aislado","Siding Repair":"Reparación de Revestimiento","Trim & Soffit":"Molduras y Sofito","Commercial Exteriors":"Exteriores Comerciales",
    "Why Vertex NTA":"Por Qué Vertex NTA","Why Homeowners Choose Us":"Por Qué Nos Eligen",
    "Licensed & Insured":"Licenciados y Asegurados","Fully covered so you're protected on every job.":"Cobertura total para que estés protegido en cada trabajo.",
    "Top-Grade Materials":"Materiales de Primera","We install trusted, long-lasting products only.":"Solo instalamos productos confiables y duraderos.",
    "Free Estimates":"Presupuestos Gratis","Honest, upfront pricing with no obligation.":"Precios honestos y claros, sin compromiso.",
    "On-Time Work":"Trabajo Puntual","A firm timeline before we start — and we keep it.":"Un plazo firme antes de empezar — y lo cumplimos.",
    "Refresh Your Exterior":"Renueva tu Exterior",
    "Get A Free":"Obtén un Presupuesto","Estimate":"Gratis",
    "Tell us about your project and we'll get back to you fast with a clear, honest quote and a date that works for you.":"Cuéntanos sobre tu proyecto y te responderemos rápido con una cotización clara y honesta, y una fecha que te funcione.",
    "Back to Home":"Volver al Inicio","Request A Quote":"Solicita una Cotización",
    "Full Name":"Nombre Completo","Phone":"Teléfono","Email":"Correo","Service Needed":"Servicio","Project Details":"Detalles del Proyecto",
    "Select a service…":"Selecciona un servicio…","Not sure yet":"Aún no sé","Send My Request":"Enviar Solicitud",
    "This is a design mockup — the form isn't connected yet. In the live site it will email your team automatically.":"Esto es una maqueta — el formulario aún no está conectado. En el sitio real enviará el correo a tu equipo automáticamente.",
    "Thanks! 🎉":"¡Gracias! 🎉","Your request was received (demo). We'll reach out within one business day.":"Tu solicitud fue recibida (demo). Te contactaremos en un día hábil.",
    "Address":"Dirección","Hours":"Horario","Mon–Sat: 8am – 6pm":"Lun–Sáb: 8am – 6pm","Sunday: Closed":"Domingo: Cerrado",
    "Service Area · Greater Pittsburgh, PA":"Área de Servicio · Gran Pittsburgh, PA",
    "Our Work":"Nuestro Trabajo","Recent Projects":"Proyectos Realizados",
    "A look at completed roofing, remodeling, and siding work across the Greater Pittsburgh area.":"Un vistazo a trabajos de techos, remodelación y revestimiento realizados en el Gran Pittsburgh.",
    "All":"Todos",
    "Complete Roof Replacement":"Reemplazo Total de Techo","Storm Damage Repair":"Reparación por Tormenta",
    "Kitchen Renovation":"Renovación de Cocina","Full Bathroom Remodel":"Remodelación Completa de Baño",
    "Vinyl Siding Installation":"Instalación de Revestimiento","Exterior Facelift":"Renovación de Fachada"
  };
  const PH = {"Your name":"Tu nombre","you@email.com":"tu@correo.com","Tell us a bit about your project…":"Cuéntanos sobre tu proyecto…"};
  // Spanish SEO title + meta description per page
  const SEO_ES = {
    home:{t:"Contratista de Techos, Remodelación y Revestimiento en Pittsburgh, PA | Vertex NTA",d:"Vertex NTA Roofing — contratista de confianza en techos, remodelación y revestimiento en Pittsburgh, PA. Licenciados y asegurados, precios honestos. Presupuesto gratis."},
    roofing:{t:"Servicios de Techos en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación, reparación y reemplazo de techos en Pittsburgh, PA. Tejas y techos de metal de primera, licenciados y asegurados. Inspección gratis con Vertex NTA."},
    remodeling:{t:"Servicios de Remodelación en Pittsburgh, PA | Vertex NTA Roofing",d:"Remodelación de cocinas, baños y casa completa en Pittsburgh, PA. Trabajo de calidad, precios claros y un equipo de confianza. Presupuesto gratis con Vertex NTA."},
    siding:{t:"Instalación de Revestimiento en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación y reparación de revestimiento resistente al clima en Pittsburgh, PA. Vinilo, fibrocemento y aislado que realza tu fachada. Cotización gratis con Vertex NTA."},
    contact:{t:"Contacta a Vertex NTA Roofing | Presupuesto Gratis en Pittsburgh, PA",d:"Contacta a Vertex NTA Roofing en Pittsburgh, PA. Llama al 412-983-4397 o pide un presupuesto gratis para techos, remodelación y revestimiento. Respuesta rápida."}
  };
  const _metaEl = document.querySelector('meta[name="description"]');
  const _origTitle = document.title;
  const _origDesc = _metaEl ? _metaEl.getAttribute('content') : '';
  function _seoKey(){
    const t=_origTitle.toLowerCase();
    if(t.indexOf('roofing services')>=0) return 'roofing';
    if(t.indexOf('remodeling services')>=0) return 'remodeling';
    if(t.indexOf('siding installation')>=0) return 'siding';
    if(t.indexOf('contact')>=0) return 'contact';
    return 'home';
  }
  const _orig = new Map();
  function walkText(fn){
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){const p=n.parentNode&&n.parentNode.nodeName; if(p==='SCRIPT'||p==='STYLE')return NodeFilter.FILTER_REJECT; return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    const a=[]; while(w.nextNode())a.push(w.currentNode); a.forEach(fn);
  }
  function setLang(lang){
    const es=lang==='es';
    walkText(n=>{const k=n.nodeValue.trim(); if(es){ if(I18N[k]!==undefined){ if(!_orig.has(n))_orig.set(n,n.nodeValue); n.nodeValue=n.nodeValue.replace(k,I18N[k]); } } else if(_orig.has(n)){ n.nodeValue=_orig.get(n); }});
    document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{ if(es){ const o=el.dataset._ph||el.getAttribute('placeholder'); if(PH[o]!==undefined){ el.dataset._ph=o; el.placeholder=PH[o]; } } else if(el.dataset._ph){ el.placeholder=el.dataset._ph; }});
    document.documentElement.lang=lang;
    const _k=_seoKey();
    if(es && SEO_ES[_k]){ document.title=SEO_ES[_k].t; if(_metaEl) _metaEl.setAttribute('content',SEO_ES[_k].d); }
    else { document.title=_origTitle; if(_metaEl) _metaEl.setAttribute('content',_origDesc); }
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.getAttribute('data-lang')===lang));
    try{localStorage.setItem('vlang',lang);}catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.getAttribute('data-lang'))));

  // ===== Recent Projects gallery — home only, injected so no embed re-paste needed =====
  (function(){
    if(document.getElementById('projects')) return;
    if(!document.querySelector('section.hero')) return; // home page only
    const IMG='https://images.unsplash.com/photo-', Q='?q=70&w=820&h=620&fit=crop&fm=jpg', QL='?q=80&w=1400&fit=crop&fm=jpg';
    const P=[
      ['roofing','Complete Roof Replacement','1632759145351-1d592919f522'],
      ['roofing','Storm Damage Repair','1503387837-b154d5074bd2'],
      ['remodeling','Kitchen Renovation','1643225523483-e2c434191bba'],
      ['remodeling','Full Bathroom Remodel','1682888813913-e13f18692019'],
      ['siding','Vinyl Siding Installation','1604177420528-44bb3e1dcd7b'],
      ['siding','Exterior Facelift','1596552183299-000ef779e88d']
    ];
    const cap={roofing:'Roofing',remodeling:'Remodeling',siding:'Siding'};
    let cards='';
    P.forEach((p,i)=>{cards+='<figure class="pjx-item" data-cat="'+p[0]+'" data-i="'+i+'" tabindex="0" role="button">'+
      '<img loading="lazy" src="'+IMG+p[2]+Q+'" alt="'+p[1]+'">'+
      '<figcaption><span class="pjx-cat">'+cap[p[0]]+'</span><span class="pjx-title">'+p[1]+'</span><span class="pjx-loc">Pittsburgh, PA</span></figcaption></figure>';});
    const sec=document.createElement('section');
    sec.className='blk projects'; sec.id='projects';
    sec.innerHTML='<div class="wrap">'+
      '<div class="sec-head"><span class="eyebrow">Our Work</span><h2 class="h-sec">Recent Projects</h2>'+
      '<p class="lead">A look at completed roofing, remodeling, and siding work across the Greater Pittsburgh area.</p></div>'+
      '<div class="pjx-tabs"><button class="pjx-tab active" data-cat="all">All</button><button class="pjx-tab" data-cat="roofing">Roofing</button><button class="pjx-tab" data-cat="remodeling">Remodeling</button><button class="pjx-tab" data-cat="siding">Siding</button></div>'+
      '<div class="pjx-grid">'+cards+'</div></div>';
    const about=document.getElementById('about');
    if(about&&about.parentNode){ about.parentNode.insertBefore(sec,about); }
    else { const m=document.querySelector('main')||document.body; m.appendChild(sec); }
    // filter tabs
    const tabs=[...sec.querySelectorAll('.pjx-tab')], items=[...sec.querySelectorAll('.pjx-item')];
    tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');const c=t.dataset.cat;items.forEach(it=>it.classList.toggle('pjx-hide',c!=='all'&&it.dataset.cat!==c));}));
    // lightbox
    const lb=document.createElement('div'); lb.className='pjx-lb';
    lb.innerHTML='<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&#8249;</button><img alt=""><div class="lb-cap"></div><button class="lb-next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(lb);
    const lbImg=lb.querySelector('img'), lbCap=lb.querySelector('.lb-cap');
    let order=[], pos=0;
    function show(){const it=order[pos];lbImg.src=IMG+P[+it.dataset.i][2]+QL;lbCap.textContent=it.querySelector('.pjx-title').textContent;}
    function open(it){order=items.filter(x=>!x.classList.contains('pjx-hide'));pos=order.indexOf(it);if(pos<0)pos=0;show();lb.classList.add('open');document.body.style.overflow='hidden';}
    function close(){lb.classList.remove('open');document.body.style.overflow='';}
    items.forEach(it=>{it.addEventListener('click',()=>open(it));it.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(it);}});});
    lb.querySelector('.lb-close').addEventListener('click',close);
    lb.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation();pos=(pos+1)%order.length;show();});
    lb.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation();pos=(pos-1+order.length)%order.length;show();});
    lb.addEventListener('click',e=>{if(e.target===lb)close();});
    document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowRight'){pos=(pos+1)%order.length;show();}else if(e.key==='ArrowLeft'){pos=(pos-1+order.length)%order.length;show();}});
  })();

  // load language from saved choice, else auto-detect device/browser language
  let _sv=null; try{_sv=localStorage.getItem('vlang');}catch(e){}
  const _navLang=((navigator.language||navigator.userLanguage||'')+'').toLowerCase();
  const _lang=_sv||(_navLang.indexOf('es')===0?'es':'en');
  if(_lang==='es') setLang('es');

  // highlight current page in nav — match the breadcrumb page name (works in preview & published, EN/ES)
  (function(){
    const crumb=document.querySelector('.icrumb > span');
    if(!crumb) return;
    const name=crumb.textContent.trim().toLowerCase();
    document.querySelectorAll('nav.links a, .mm-link').forEach(a=>{
      if(a.textContent.trim().toLowerCase()===name) a.classList.add('current');
    });
  })();

  // floating contact button (WhatsApp / Signal / Call) — on every page
  (function(){
    if(document.querySelector('.fab')) return;
    const phone='4129834397';
    const es=(document.documentElement.lang||'en')==='es';
    const callTxt=es?'Llamar':'Call';
    const waIco='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-4-4.6-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.3.5c-.1.2-.3.3-.1.6.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.2.1.7-.1 1.2z"/></svg>';
    const sgIco='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18l1.2-3A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z"/></svg>';
    const clIco='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>';
    const plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
    const fab=document.createElement('div'); fab.className='fab';
    fab.innerHTML='<div class="fab-menu">'+
      '<a class="fab-item" href="https://wa.me/1'+phone+'" target="_blank" rel="noopener"><span class="ic wa">'+waIco+'</span>WhatsApp</a>'+
      '<a class="fab-item" href="https://signal.me/#p/+1'+phone+'" target="_blank" rel="noopener"><span class="ic sg">'+sgIco+'</span>Signal</a>'+
      '<a class="fab-item" href="tel:'+phone+'"><span class="ic cl">'+clIco+'</span>'+callTxt+' 412-983-4397</a>'+
      '</div><button class="fab-main" type="button" aria-label="Contact">'+plus+'</button>';
    document.body.appendChild(fab);
    fab.querySelector('.fab-main').addEventListener('click',function(e){e.stopPropagation();fab.classList.toggle('open');});
    document.addEventListener('click',function(e){ if(!fab.contains(e.target)) fab.classList.remove('open'); });
  })();

  // hero mascot dog — home hero only, injected if the embed doesn't already include it
  (function(){
    if(window.innerWidth<=900) return; // no dog on mobile
    const home=document.querySelector('section.hero .hero-collage');
    if(!home || home.querySelector('.hero-dog')) return;
    const card=document.createElement('div');
    card.className='hero-dog';
    card.innerHTML='<img src="https://raw.githubusercontent.com/celvintr/vertex-nta-web/main/vertex-dog.png" alt="Vertex NTA mascot">';
    home.appendChild(card);
  })();

  addEventListener('scroll',()=>{document.querySelector('header').style.boxShadow=scrollY>20?'0 2px 20px rgba(0,0,0,.08)':'none'});
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  function observeReveals(root){
    const els=[...root.querySelectorAll('.reveal')];
    els.forEach((el,i)=>{ el.classList.remove('in'); el.style.transitionDelay=((i%5)*70)+'ms'; io.observe(el); });
  }
  observeReveals(document.body);

  // ---- animated count-up for stat numbers ----
  function animateCount(el){
    if(el.dataset.done)return; el.dataset.done='1';
    const target=parseFloat(el.dataset.count)||0, suffix=el.dataset.suffix||'';
    const dur=1400, t0=performance.now();
    function step(now){
      const p=Math.min((now-t0)/dur,1);
      const eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*eased)+suffix;
      if(p<1)requestAnimationFrame(step); else el.textContent=target+suffix;
    }
    requestAnimationFrame(step);
  }
  const countIO=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.querySelectorAll('.n[data-count]').forEach(animateCount);countIO.unobserve(x.target);}}),{threshold:.3});
  document.querySelectorAll('.strip').forEach(s=>countIO.observe(s));

  // ---- JS-only page router (no href → iframe can never reload) ----
  function showPage(id){
    if(!id||!document.getElementById('page-'+id)) id='home';
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const el=document.getElementById('page-'+id);
    el.classList.add('active');
    try{window.scrollTo(0,0);}catch(e){}
    observeReveals(el);
  }
  function go(e){
    const a=e.target.closest('[data-route]');
    if(!a)return;
    e.preventDefault();
    closeMenu();
    showPage(a.getAttribute('data-route'));
  }
  document.addEventListener('click',go);
  document.addEventListener('keydown',e=>{ if((e.key==='Enter'||e.key===' ')&&e.target.closest&&e.target.closest('[data-route]')){go(e);} });

  // ---- contact form (demo) ----
  const qf=document.getElementById('quoteForm');
  if(qf){qf.addEventListener('submit',e=>{
    e.preventDefault();
    if(!qf.name.value.trim()||!qf.phone.value.trim()){qf.reportValidity&&qf.reportValidity();return;}
    document.getElementById('formOk').classList.add('show');
    qf.querySelector('button[type=submit]').textContent='Request Sent ✓';
  });}
