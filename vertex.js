
  const faqs=[
    ["How do I know if my roof needs replacement?","Look for missing or curling shingles, granules in the gutters, leaks, or a roof older than 20 years. We offer a free inspection to give you a clear answer."],
    ["How long does it take to replace a roof?","Most residential roof replacements take 1–3 days depending on size, materials, and weather. We'll give you a firm timeline before work starts."],
    ["Do I have to move out during the replacement?","No — roofing, remodeling, and siding projects are done with minimal disruption. For larger remodels we'll walk you through what to expect room by room."],
    ["How long does a roof last?","Asphalt shingles typically last 20–30 years, metal roofing 40–70 years, depending on materials and maintenance. We'll help you pick what fits your budget and timeline."]
  ];
  const host=document.getElementById('faqlist');
  faqs.forEach(([q,a])=>{
    const d=document.createElement('details');d.className='qa';
    d.innerHTML=`<summary>${q}<span class="ico">+</span></summary><div class="ans"><p>${a}</p></div>`;
    host.appendChild(d);
  });
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
    "Service Area · Greater Pittsburgh, PA":"Área de Servicio · Gran Pittsburgh, PA"
  };
  const PH = {"Your name":"Tu nombre","you@email.com":"tu@correo.com","Tell us a bit about your project…":"Cuéntanos sobre tu proyecto…"};
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
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.getAttribute('data-lang')===lang));
    try{localStorage.setItem('vlang',lang);}catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.getAttribute('data-lang'))));
  let _sv='en'; try{_sv=localStorage.getItem('vlang')||'en';}catch(e){} if(_sv==='es') setLang('es');

  addEventListener('scroll',()=>{document.querySelector('header').style.boxShadow=scrollY>20?'0 2px 20px rgba(0,0,0,.08)':'none'});
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  function observeReveals(root){
    const els=[...root.querySelectorAll('.reveal')];
    els.forEach((el,i)=>{ el.classList.remove('in'); el.style.transitionDelay=((i%5)*70)+'ms'; io.observe(el); });
  }
  observeReveals(document.getElementById('page-home'));

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
