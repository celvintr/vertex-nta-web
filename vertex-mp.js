
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
    "Vinyl Siding Installation":"Instalación de Revestimiento","Exterior Facelift":"Renovación de Fachada",
    "Exterior Renovation":"Renovación Exterior","Siding Repair & Trim":"Reparación de Revestimiento",
    "Where We Work":"Dónde Trabajamos","Service Area":"Área de Servicio",
    "Proudly serving Pittsburgh and the surrounding communities — if you're in the Greater Pittsburgh area, we've got you covered.":"Con orgullo servimos a Pittsburgh y las comunidades cercanas — si estás en el Gran Pittsburgh, te cubrimos.",
    "Don't see your town? Give us a call — we likely cover your area too.":"¿No ves tu ciudad? Llámanos — probablemente también cubrimos tu zona.",
    "Gutters":"Canaletas","Gutter Services":"Servicios de Canaletas","Seamless Gutters, Done Right":"Canaletas Sin Uniones, Bien Hechas",
    "Seamless gutter installation, repair, and cleaning to protect your home from water damage — done right the first time.":"Instalación, reparación y limpieza de canaletas sin uniones para proteger tu casa del daño por agua — bien hecho desde la primera vez.",
    "Clogged or failing gutters cause leaks, rot, and foundation damage. We install and maintain seamless gutter systems that channel water safely away from your home — clean, durable, and built to last.":"Las canaletas tapadas o en mal estado causan filtraciones, pudrición y daños a los cimientos. Instalamos y mantenemos sistemas de canaletas sin uniones que desvían el agua lejos de tu casa — limpios, durables y hechos para durar.",
    "Seamless aluminum gutters":"Canaletas de aluminio sin uniones","Gutter guards & leaf protection":"Protectores y mallas anti-hojas",
    "Repairs & re-sealing":"Reparación y sellado","Cleaning & maintenance":"Limpieza y mantenimiento",
    "Seamless gutter installation, repair, and cleaning that channels water safely away from your home — protecting your roof, siding, and foundation.":"Instalación, reparación y limpieza de canaletas sin uniones que desvían el agua lejos de tu casa — protegiendo tu techo, revestimiento y cimientos.",
    "Get a Gutter Quote":"Cotizar Canaletas","Protect Your Home":"Protege Tu Hogar","Protect Your Home Today":"Protege Tu Hogar Hoy",
    "Downspouts & drainage":"Bajantes y drenaje","Commercial gutters":"Canaletas comerciales"
  };
  const PH = {"Your name":"Tu nombre","you@email.com":"tu@correo.com","Tell us a bit about your project…":"Cuéntanos sobre tu proyecto…"};
  // Spanish SEO title + meta description per page
  const SEO_ES = {
    home:{t:"Contratista de Techos, Remodelación y Revestimiento en Pittsburgh, PA | Vertex NTA",d:"Vertex NTA Roofing — contratista de confianza en techos, remodelación y revestimiento en Pittsburgh, PA. Licenciados y asegurados, precios honestos. Presupuesto gratis."},
    roofing:{t:"Servicios de Techos en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación, reparación y reemplazo de techos en Pittsburgh, PA. Tejas y techos de metal de primera, licenciados y asegurados. Inspección gratis con Vertex NTA."},
    remodeling:{t:"Servicios de Remodelación en Pittsburgh, PA | Vertex NTA Roofing",d:"Remodelación de cocinas, baños y casa completa en Pittsburgh, PA. Trabajo de calidad, precios claros y un equipo de confianza. Presupuesto gratis con Vertex NTA."},
    siding:{t:"Instalación de Revestimiento en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación y reparación de revestimiento resistente al clima en Pittsburgh, PA. Vinilo, fibrocemento y aislado que realza tu fachada. Cotización gratis con Vertex NTA."},
    gutters:{t:"Servicios de Canaletas en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación, reparación y limpieza de canaletas sin uniones en Pittsburgh, PA. Protege tu casa del daño por agua. Licenciados y asegurados. Cotización gratis con Vertex NTA."},
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
    if(t.indexOf('gutter services')>=0) return 'gutters';
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
    const CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    const P=[
      ['roofing','Complete Roof Replacement',CDN+'v-p-roof2.jpg'],
      ['roofing','Storm Damage Repair',CDN+'v-p-roof1.jpg'],
      ['remodeling','Exterior Renovation',CDN+'v-p-remodel1.jpg'],
      ['remodeling','Exterior Facelift',CDN+'v-p-remodel2.jpg'],
      ['siding','Vinyl Siding Installation',CDN+'v-p-siding1.jpg'],
      ['siding','Siding Repair & Trim',CDN+'v-p-siding2.jpg']
    ];
    const cap={roofing:'Roofing',remodeling:'Remodeling',siding:'Siding'};
    let cards='';
    P.forEach((p,i)=>{cards+='<figure class="pjx-item" data-cat="'+p[0]+'" data-i="'+i+'" tabindex="0" role="button">'+
      '<img loading="lazy" src="'+p[2]+'" alt="'+p[1]+'">'+
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
    function show(){const it=order[pos];lbImg.src=P[+it.dataset.i][2];lbCap.textContent=it.querySelector('.pjx-title').textContent;}
    function open(it){order=items.filter(x=>!x.classList.contains('pjx-hide'));pos=order.indexOf(it);if(pos<0)pos=0;show();lb.classList.add('open');document.body.style.overflow='hidden';}
    function close(){lb.classList.remove('open');document.body.style.overflow='';}
    items.forEach(it=>{it.addEventListener('click',()=>open(it));it.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(it);}});});
    lb.querySelector('.lb-close').addEventListener('click',close);
    lb.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation();pos=(pos+1)%order.length;show();});
    lb.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation();pos=(pos-1+order.length)%order.length;show();});
    lb.addEventListener('click',e=>{if(e.target===lb)close();});
    document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowRight'){pos=(pos+1)%order.length;show();}else if(e.key==='ArrowLeft'){pos=(pos-1+order.length)%order.length;show();}});
  })();

  // ===== Swap stock images for the client's real photos + hero video =====
  (function(){
    if(!document.querySelector('section.hero')) return;
    const CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    const set=(alt,file)=>{const im=document.querySelector('img[alt="'+alt+'"]'); if(im){im.src=CDN+file; im.removeAttribute('srcset');}};
    set('Home exterior','v-hero.jpg');
    set('Roofing','v-roof.jpg');
    set('Remodeling','v-remodel.jpg');
    set('Siding','v-siding.jpg');
    set('Vertex NTA crew at work','v-owner.jpg');
    // left hero tile -> real roof photo
    const left=document.querySelector('.hero .shot:not(.short)');
    if(left){const im=left.querySelector('img'); if(im){im.src=CDN+'v-roof.jpg'; im.removeAttribute('srcset');}}
    // subtle aerial video behind the whole hero (desktop only, low opacity)
    if(window.innerWidth>700){
      const hero=document.querySelector('section.hero');
      if(hero && !hero.querySelector('.hero-bgvid')){
        const v=document.createElement('video');
        v.className='hero-bgvid'; v.autoplay=true; v.muted=true; v.loop=true; v.playsInline=true;
        v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.setAttribute('preload','auto');
        v.src=CDN+'v-hero.mp4';
        hero.insertBefore(v, hero.firstChild);
        v.play&&v.play().catch(()=>{});
      }
    }
    // MOBILE hero image slider (auto + dots + swipe) — replaces the single tile
    if(window.innerWidth<=900){
      const shot=document.querySelector('.hero .shot:not(.short)');
      if(shot && !shot.querySelector('.hslide')){
        const files=['v-roof.jpg','v-hero.jpg','v-siding.jpg','v-p-roof2.jpg','v-p-roof1.jpg','v-p-siding2.jpg'];
        shot.innerHTML='';
        const wrap=document.createElement('div'); wrap.className='hslide';
        files.forEach(function(f,i){var im=document.createElement('img'); im.src=CDN+f; im.className='hslide-img'+(i===0?' on':''); im.alt='Vertex NTA project'; im.loading=i===0?'eager':'lazy'; wrap.appendChild(im);});
        const dots=document.createElement('div'); dots.className='hslide-dots';
        files.forEach(function(f,i){var d=document.createElement('button'); d.type='button'; d.className='hslide-dot'+(i===0?' on':''); d.setAttribute('aria-label','Ver imagen '+(i+1)); dots.appendChild(d);});
        wrap.appendChild(dots); shot.appendChild(wrap);
        const slides=[].slice.call(wrap.querySelectorAll('.hslide-img')), ds=[].slice.call(dots.children); let idx=0, t;
        function go(n){slides[idx].classList.remove('on');ds[idx].classList.remove('on');idx=(n+slides.length)%slides.length;slides[idx].classList.add('on');ds[idx].classList.add('on');}
        function start(){t=setInterval(function(){go(idx+1);},3800);} function reset(){clearInterval(t);start();}
        ds.forEach(function(d,i){d.addEventListener('click',function(){go(i);reset();});});
        var sx=0; wrap.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
        wrap.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40){go(idx+(dx<0?1:-1));reset();}},{passive:true});
        start();
      }
    }
  })();

  // ===== Service Area + map — home only, injected (no embed re-paste) =====
  (function(){
    if(document.getElementById('area')) return;
    if(!document.querySelector('section.hero')) return;
    const towns=[['Pittsburgh',40.4406,-79.9959],['Mount Lebanon',40.3767,-80.0490],['Bethel Park',40.3273,-80.0370],['Upper St. Clair',40.3320,-80.0850],['Monroeville',40.4212,-79.7881],['Penn Hills',40.4728,-79.8931],['Cranberry Twp',40.6847,-80.1073],['Wexford',40.6231,-80.0562],['McCandless',40.5806,-80.0139],['Ross Twp',40.5187,-80.0170],['Robinson',40.4506,-80.1420],['Moon Twp',40.5148,-80.2103],['McKeesport',40.3448,-79.8642],['Plum',40.5017,-79.7439],['Shaler',40.5170,-79.9550],['Baldwin',40.3873,-79.9739]];
    let chips=''; towns.forEach((t,i)=>chips+='<button type="button" class="area-chip" data-i="'+i+'">'+t[0]+'</button>');
    const sec=document.createElement('section');
    sec.className='blk surface'; sec.id='area';
    sec.style.scrollMarginTop='100px';
    sec.innerHTML='<div class="wrap area"><div class="area-grid">'+
      '<div><span class="eyebrow" style="display:block;margin-bottom:14px">Where We Work</span>'+
      '<h2 class="h-sec">Service Area</h2>'+
      '<p class="lead" style="margin-top:16px">Proudly serving Pittsburgh and the surrounding communities — if you\'re in the Greater Pittsburgh area, we\'ve got you covered.</p>'+
      '<div class="area-list">'+chips+'</div>'+
      '<p class="lead" style="margin-top:22px;font-size:.92rem">Don\'t see your town? Give us a call — we likely cover your area too.</p></div>'+
      '<div class="map"><div id="vmap"></div></div>'+
      '</div></div>';
    const foot=document.querySelector('footer');
    if(foot&&foot.parentNode){ foot.parentNode.insertBefore(sec,foot); }
    else { const m=document.querySelector('main')||document.body; m.appendChild(sec); }
    // interactive Leaflet map (free, no API key) with gold markers + coverage
    (function(){
      function boot(){
        if(!window.L||!document.getElementById('vmap'))return;
        const map=L.map('vmap',{scrollWheelZoom:false,zoomControl:true,attributionControl:true}).setView([40.44,-79.99],10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,subdomains:'abc',attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
        L.circle([40.4406,-79.9959],{radius:34000,color:'#B8862F',weight:1.5,opacity:.6,fillColor:'#CDA349',fillOpacity:.08}).addTo(map);
        const pts=[], markers=[];
        towns.forEach(function(t,i){
          const big=t[0]==='Pittsburgh';
          const m=L.circleMarker([t[1],t[2]],{radius:big?9:6,color:'#8F651E',weight:2,fillColor:big?'#B8862F':'#E8C066',fillOpacity:1}).addTo(map);
          m.bindTooltip(t[0],{direction:'top',offset:[0,-4]});
          m.bindPopup('<b style="font-family:Oswald,sans-serif;text-transform:uppercase;letter-spacing:.03em">'+t[0]+'</b><br><span style="color:#8F651E;font-size:.8rem;font-weight:600">Vertex NTA · Roofing · Remodeling · Siding</span>');
          m.on('click',function(){select(i,true);});
          pts.push([t[1],t[2]]); markers.push(m);
        });
        // two-way link between the chip list and the map markers
        const chipEls=[].slice.call(sec.querySelectorAll('.area-chip'));
        function select(i,fromMap){
          chipEls.forEach(function(c){c.classList.toggle('active',+c.dataset.i===i);});
          markers.forEach(function(mm,j){mm.setStyle({radius:j===i?11:(towns[j][0]==='Pittsburgh'?9:6),fillColor:j===i?'#B8862F':(towns[j][0]==='Pittsburgh'?'#B8862F':'#E8C066')});});
          const t=towns[i];
          map.flyTo([t[1],t[2]],12,{duration:.7});
          markers[i].openPopup();
          if(fromMap){var c=chipEls.filter(function(x){return +x.dataset.i===i;})[0]; if(c&&c.scrollIntoView)c.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'});}
        }
        chipEls.forEach(function(c){c.addEventListener('click',function(){select(+c.dataset.i,false);});});
        function refresh(){map.invalidateSize();if(pts.length)map.fitBounds(pts,{padding:[34,34]});}
        var el=document.getElementById('vmap');
        if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){refresh();setTimeout(refresh,350);}});},{threshold:.01});io.observe(el);}
        [120,500,1200].forEach(function(d){setTimeout(refresh,d);});
        window.addEventListener('resize',refresh);
      }
      if(window.L){boot();return;}
      if(!document.getElementById('leaflet-css')){var c=document.createElement('link');c.id='leaflet-css';c.rel='stylesheet';c.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';document.head.appendChild(c);}
      var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';s.onload=boot;document.head.appendChild(s);
    })();
  })();

  // ===== Gutters — 4th service (nav on all pages; card + info section + hero on home) =====
  (function(){
    const CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    const GHREF='/gutters';
    // nav (desktop + mobile): add after Siding
    if(!document.querySelector('[data-gutter]')){
      var ns=[].slice.call(document.querySelectorAll('nav.links a')).filter(function(a){return a.textContent.trim()==='Siding';})[0];
      if(ns){var g=document.createElement('a');g.textContent='Gutters';g.href=GHREF;g.setAttribute('data-gutter','');ns.parentNode.insertBefore(g,ns.nextSibling);}
      var ms=[].slice.call(document.querySelectorAll('.mm-link')).filter(function(a){return a.textContent.trim()==='Siding';})[0];
      if(ms){var g2=document.createElement('a');g2.className='mm-link';g2.textContent='Gutters';g2.href=GHREF;g2.setAttribute('data-gutter','');ms.parentNode.insertBefore(g2,ms.nextSibling);}
    }
    if(!document.querySelector('section.hero')) return; // rest is home only
    // 4th service card
    var cards=document.querySelector('#services .cards');
    if(cards && !document.getElementById('svc-gutters')){
      var art=document.createElement('article'); art.className='card'; art.id='svc-gutters';
      art.innerHTML='<div class="media ph"><img class="fill" loading="lazy" alt="Gutters" src="'+CDN+'v-siding.jpg"></div>'+
        '<h3>Gutters</h3><p>Seamless gutter installation, repair, and cleaning to protect your home from water damage — done right the first time.</p>'+
        '<a class="more" href="'+GHREF+'">Learn More →</a>';
      cards.appendChild(art);
    }
    // dedicated info section after Services
    if(!document.getElementById('gutters')){
      var chk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';
      var items=['Seamless aluminum gutters','Gutter guards & leaf protection','Repairs & re-sealing','Cleaning & maintenance'];
      var lis=''; items.forEach(function(t){lis+='<li>'+chk+'<span>'+t+'</span></li>';});
      var sec=document.createElement('section'); sec.className='blk'; sec.id='gutters'; sec.style.scrollMarginTop='100px';
      sec.innerHTML='<div class="wrap feature rev">'+
        '<div class="feat-media ph"><img class="fill" loading="lazy" alt="Seamless gutter installation" src="'+CDN+'v-siding.jpg"></div>'+
        '<div><span class="eyebrow" style="display:block;margin-bottom:14px">Gutter Services</span>'+
        '<h2>Seamless Gutters, Done Right</h2>'+
        '<p>Clogged or failing gutters cause leaks, rot, and foundation damage. We install and maintain seamless gutter systems that channel water safely away from your home — clean, durable, and built to last.</p>'+
        '<ul class="checklist">'+lis+'</ul>'+
        '<a class="btn btn-gold" href="/#contact" role="button" style="margin-top:26px">Get a Quote</a></div></div>';
      var svc=document.getElementById('services');
      if(svc&&svc.parentNode){svc.parentNode.insertBefore(sec,svc.nextSibling);}
    }
    // hero button
    var hb=document.querySelector('.hero .hero-btns');
    if(hb && !hb.querySelector('[data-gutter-btn]')){var b=document.createElement('a');b.className='btn btn-gold';b.href=GHREF;b.textContent='Gutters';b.setAttribute('data-gutter-btn','');b.setAttribute('role','button');hb.appendChild(b);}
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
