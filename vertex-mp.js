
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
    "Years of":"Años de","Experience":"Experiencia","Finished":"Proyectos","Projects":"Terminados","Client":"Satisfacción","Satisfaction":"del Cliente","Services":"Servicios","Offered":"Ofrecidos",
    "What We Do":"Lo Que Hacemos","Our Services":"Nuestros Servicios",
    "Project management that handles planning, top-grade materials, and installation — start to finish.":"Gestión de proyecto que cubre planeación, materiales de primera e instalación — de principio a fin.",
    "Expert roof installation, repair, and replacement using top-grade materials for long-lasting protection.":"Instalación, reparación y reemplazo de techos con materiales de primera para una protección duradera.",
    "Transform your interior spaces with professional creativity — kitchens, bathrooms, and complete makeovers.":"Transforma tus espacios interiores con creatividad profesional — cocinas, baños y renovaciones completas.",
    "Transform your interior spaces with professional creativity — kitchens, bathrooms, basements, and complete home makeovers done right.":"Transforma tus espacios interiores con creatividad profesional — cocinas, baños, sótanos y renovaciones completas del hogar, bien hechas.",
    "Durable, weather-tight siding installation and repair that boosts curb appeal for residential and commercial properties.":"Instalación y reparación de revestimiento resistente al clima que mejora la apariencia de propiedades residenciales y comerciales.",
    "Learn More →":"Ver Más →",
    "The Owner":"El Dueño","Every Project":"Cada Proyecto","Is Personal":"Es Personal","— The Owner":"— El Dueño",
    "About":"Nosotros","About Us":"Sobre Nosotros","Built On":"Construido Sobre","Trust & Quality":"Confianza y Calidad","Our Story":"Nuestra Historia","Let's Build Something That Lasts":"Construyamos Algo Que Perdure",
    "Vertex NTA Roofing is a Pittsburgh-based contractor delivering roofing, remodeling, siding, and gutter services with honest work, fair pricing, and results built to last.":"Vertex NTA Roofing es un contratista de Pittsburgh que ofrece servicios de techos, remodelación, revestimiento y canaletas con trabajo honesto, precios justos y resultados que perduran.",
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
    "Our Work":"Nuestro Trabajo","Recent Projects":"Proyectos Realizados","Seamless Gutter Installation":"Instalación de Canaletas",
    "On The Roof":"Desde El Techo","See Our Work In Action":"Mira Nuestro Trabajo","Get a Free Inspection":"Inspección Gratis",
    "Find Us":"Encuéntranos","Our Location":"Nuestra Ubicación",
    "Roof Repair":"Reparación de Techos","Roof Replacement":"Reemplazo de Techos","Roof Inspection":"Inspección de Techos","Emergency Roofing":"Techos de Emergencia","in Pittsburgh, PA":"en Pittsburgh, PA",
    "Roofing Services":"Servicios de Techos","Explore Our Roofing Services":"Explora Nuestros Servicios de Techos","Explore Our Gutter Services":"Explora Nuestros Servicios de Canaletas",
    "Remodeling Services":"Servicios de Remodelación","Explore Our Remodeling Services":"Explora Nuestros Servicios de Remodelación","Siding Services":"Servicios de Revestimiento","Explore Our Siding Services":"Explora Nuestros Servicios de Revestimiento",
    "Get a Free Inspection":"Inspección Gratis","Book a Free Inspection":"Agenda una Inspección Gratis","Request Help":"Solicitar Ayuda","Call 412-983-4397 Now":"Llama Ya al 412-983-4397",
    "Fast, reliable roof repair for leaks, storm damage, and worn shingles across the Greater Pittsburgh area — licensed, insured, and backed by free inspections.":"Reparación de techos rápida y confiable para goteras, daño por tormenta y tejas desgastadas en el Gran Pittsburgh — licenciados, asegurados y con inspecciones gratis.",
    "Repairs Done Right":"Reparaciones Bien Hechas","Leaks & Storm Damage, Fixed Fast":"Goteras y Daño por Tormenta, Resueltos Rápido",
    "A small leak can turn into major damage fast. Our team finds the source and fixes it right — from storm and wind damage to worn flashing and missing shingles — so your home stays protected.":"Una pequeña gotera puede volverse un daño grande rápido. Nuestro equipo encuentra el origen y lo repara bien — desde daño por tormenta y viento hasta tapajuntas desgastado y tejas faltantes — para que tu hogar siga protegido.",
    "Leak detection & repair":"Detección y reparación de goteras","Storm & wind damage":"Daño por tormenta y viento","Missing or damaged shingles":"Tejas faltantes o dañadas","Flashing & chimney repair":"Reparación de tapajuntas y chimenea","Emergency tarping":"Colocación de lonas de emergencia","Free roof inspection":"Inspección de techo gratis",
    "Roof Repair Questions":"Preguntas de Reparación de Techos",
    "How much does roof repair cost in Pittsburgh?":"¿Cuánto cuesta reparar un techo en Pittsburgh?","It depends on the damage and roof type. Most minor repairs are affordable, and we give you a clear, upfront quote after a free inspection — no surprises.":"Depende del daño y el tipo de techo. La mayoría de reparaciones menores son accesibles, y te damos un precio claro y por adelantado tras una inspección gratis — sin sorpresas.",
    "How fast can you repair my roof?":"¿Qué tan rápido pueden reparar mi techo?","For urgent leaks we respond quickly and can tarp the same day. Most repairs are completed in a single visit once we've assessed the damage.":"Para goteras urgentes respondemos rápido y podemos colocar lonas el mismo día. La mayoría de reparaciones se completan en una sola visita tras evaluar el daño.",
    "Do you offer emergency roof repair?":"¿Ofrecen reparación de techos de emergencia?","Yes. If you have an active leak or storm damage, call us at 412-983-4397 and we'll protect your home right away.":"Sí. Si tienes una gotera activa o daño por tormenta, llámanos al 412-983-4397 y protegemos tu hogar de inmediato.",
    "Will my insurance cover the repair?":"¿Mi seguro cubre la reparación?","Storm and sudden damage is often covered. We inspect the roof and help you document everything for your insurance claim.":"El daño por tormenta y repentino suele estar cubierto. Inspeccionamos el techo y te ayudamos a documentar todo para tu reclamo de seguro.",
    "Need Your Roof Fixed?":"¿Necesitas Reparar Tu Techo?",
    "Full roof replacement with top-grade asphalt and metal systems built to last decades. Free estimates, clear timelines, and clean, professional installation.":"Reemplazo completo de techos con sistemas de asfalto y metal de primera hechos para durar décadas. Presupuestos gratis, plazos claros e instalación limpia y profesional.",
    "Built To Last":"Hecho Para Durar","A New Roof, Done Right":"Un Techo Nuevo, Bien Hecho",
    "When repairs aren't enough, a full replacement protects your home for decades. We remove the old roof, inspect the deck, and install a complete, weather-tight system with quality materials and a solid warranty.":"Cuando las reparaciones no bastan, un reemplazo completo protege tu hogar por décadas. Retiramos el techo viejo, inspeccionamos la base e instalamos un sistema completo y hermético con materiales de calidad y una garantía sólida.",
    "Complete tear-off & disposal":"Retiro y desecho completo","Asphalt shingle & metal roofing":"Tejas asfálticas y techos de metal","New underlayment & leak barrier":"Nuevo fieltro y barrera anti-goteras","Ventilation & flashing":"Ventilación y tapajuntas","Manufacturer warranties":"Garantías del fabricante","Free estimate":"Presupuesto gratis",
    "Roof Replacement Questions":"Preguntas de Reemplazo de Techos",
    "How do I know if I need a new roof?":"¿Cómo sé si necesito un techo nuevo?","Widespread leaks, curling or missing shingles, granules in the gutters, or a roof over 20 years old usually mean replacement is the smarter investment. Our free inspection gives you a straight answer.":"Goteras generalizadas, tejas dobladas o faltantes, gránulos en las canaletas, o un techo de más de 20 años suelen indicar que el reemplazo es la mejor inversión. Nuestra inspección gratis te da una respuesta clara.",
    "How long does a roof replacement take?":"¿Cuánto tarda un reemplazo de techo?","Most homes are completed in 1–3 days depending on size, materials, and weather. We give you a firm timeline before we start.":"La mayoría de casas se completan en 1–3 días según tamaño, materiales y clima. Te damos un plazo firme antes de empezar.",
    "What roofing materials do you offer?":"¿Qué materiales de techo ofrecen?","Asphalt shingles for value and reliability, and metal roofing for maximum durability. We help you choose what fits your home and budget.":"Tejas asfálticas por valor y confiabilidad, y techos de metal por máxima durabilidad. Te ayudamos a elegir lo que se ajuste a tu hogar y presupuesto.",
    "Do you offer warranties?":"¿Ofrecen garantías?","Yes — both manufacturer material warranties and our own workmanship guarantee, so you're covered long after the job is done.":"Sí — garantías de materiales del fabricante y nuestra propia garantía de mano de obra, para que estés cubierto mucho después de terminar.",
    "Ready For A New Roof?":"¿Listo Para Un Techo Nuevo?",
    "Free, no-obligation roof inspections across the Greater Pittsburgh area. We check for leaks, storm damage, and wear — then give you an honest report and clear options.":"Inspecciones de techo gratis y sin compromiso en el Gran Pittsburgh. Revisamos goteras, daño por tormenta y desgaste — y te damos un reporte honesto con opciones claras.",
    "Know Your Roof":"Conoce Tu Techo","Honest, Thorough Inspections":"Inspecciones Honestas y Completas",
    "Whether you're buying a home, filing an insurance claim, or just want peace of mind, our free inspection tells you exactly what shape your roof is in — with photos and honest recommendations, never pressure.":"Ya sea que compres una casa, hagas un reclamo de seguro o solo quieras tranquilidad, nuestra inspección gratis te dice exactamente en qué estado está tu techo — con fotos y recomendaciones honestas, nunca presión.",
    "Leak & moisture check":"Revisión de goteras y humedad","Storm & hail damage assessment":"Evaluación de daño por tormenta y granizo","Shingle & flashing condition":"Estado de tejas y tapajuntas","Photo report":"Reporte con fotos","Insurance claim help":"Ayuda con el reclamo de seguro","No obligation":"Sin compromiso",
    "Roof Inspection Questions":"Preguntas de Inspección de Techos",
    "Is the roof inspection really free?":"¿La inspección de techo es realmente gratis?","Yes. Our roof inspections are completely free and come with no obligation — you get an honest report and options, and the decision is yours.":"Sí. Nuestras inspecciones de techo son totalmente gratis y sin compromiso — recibes un reporte honesto y opciones, y la decisión es tuya.",
    "How often should I have my roof inspected?":"¿Con qué frecuencia debo inspeccionar mi techo?","We recommend at least once a year, and after any major storm. Catching small issues early saves you from costly repairs later.":"Recomendamos al menos una vez al año, y después de cualquier tormenta fuerte. Detectar problemas pequeños a tiempo te evita reparaciones costosas después.",
    "Can you inspect a roof for a home purchase?":"¿Pueden inspeccionar un techo para comprar una casa?","Absolutely. We provide a clear, documented report so you know the roof's condition before you buy.":"Claro. Entregamos un reporte claro y documentado para que conozcas el estado del techo antes de comprar.",
    "Do you help with insurance claims?":"¿Ayudan con reclamos de seguro?","Yes. If we find storm or sudden damage, we document it with photos to support your insurance claim.":"Sí. Si encontramos daño por tormenta o repentino, lo documentamos con fotos para respaldar tu reclamo de seguro.",
    "Get Your Free Roof Inspection":"Obtén Tu Inspección de Techo Gratis",
    "Active leak or storm damage? We respond fast across the Greater Pittsburgh area with emergency tarping and repairs to protect your home before it gets worse.":"¿Gotera activa o daño por tormenta? Respondemos rápido en el Gran Pittsburgh con lonas de emergencia y reparaciones para proteger tu hogar antes de que empeore.",
    "Fast Response":"Respuesta Rápida","We Protect Your Home First":"Protegemos Tu Hogar Primero",
    "Storms, fallen branches, and sudden leaks don't wait — and neither do we. We move quickly to stop the water, tarp the damage, and get your roof back to safe and dry.":"Las tormentas, ramas caídas y goteras repentinas no esperan — y nosotros tampoco. Actuamos rápido para detener el agua, cubrir el daño con lonas y dejar tu techo seguro y seco.",
    "Fast emergency response":"Respuesta rápida de emergencia","Same-day tarping":"Lonas el mismo día","Active leak & storm damage":"Gotera activa y daño por tormenta","Wind & fallen debris damage":"Daño por viento y escombros caídos","Insurance claim support":"Apoyo con el reclamo de seguro",
    "Emergency Roofing Questions":"Preguntas de Techos de Emergencia",
    "How fast can you get here?":"¿Qué tan rápido pueden llegar?","For emergencies we respond as fast as possible and can tarp most roofs the same day to stop further damage. Call 412-983-4397 right away.":"En emergencias respondemos lo más rápido posible y podemos cubrir la mayoría de techos con lonas el mismo día para detener más daño. Llama al 412-983-4397 de inmediato.",
    "What should I do while I wait?":"¿Qué hago mientras espero?","Stay safe, keep off the roof, and move valuables away from any leak. Place a bucket under drips and we'll handle the rest when we arrive.":"Mantente seguro, no subas al techo y aleja objetos de valor de la gotera. Coloca una cubeta bajo el goteo y nosotros nos encargamos del resto al llegar.",
    "Do you work with insurance?":"¿Trabajan con seguros?","Yes. Storm and sudden damage is often covered — we document everything with photos to support your claim.":"Sí. El daño por tormenta y repentino suele estar cubierto — documentamos todo con fotos para respaldar tu reclamo.",
    "Do you offer permanent repairs too?":"¿También hacen reparaciones permanentes?","Absolutely. After we secure your roof, we schedule the full repair or replacement to fix it for good.":"Claro. Después de asegurar tu techo, programamos la reparación o el reemplazo completo para dejarlo bien de forma definitiva.",
    "Roof Emergency? Call Now":"¿Emergencia de Techo? Llama Ya",
    "Asphalt Roofing":"Techos de Tejas Asfálticas","Metal Roofing":"Techos de Metal","Roof Maintenance":"Mantenimiento de Techos","New Roof Installation":"Instalación de Techos Nuevos",
    "Asphalt Shingle Roofing":"Techos de Tejas Asfálticas","Schedule Maintenance":"Agenda Mantenimiento","Free inspection":"Inspección gratis",
    "Affordable, reliable asphalt shingle roofing installed to last. The most popular choice for Pittsburgh homes — dozens of colors, great value, and a clean, professional install.":"Techos de tejas asfálticas económicos y confiables, instalados para durar. La opción más popular para casas de Pittsburgh — muchos colores, gran valor y una instalación limpia y profesional.",
    "Popular & Proven":"Popular y Comprobado","Asphalt Shingles That Last":"Tejas Asfálticas Que Duran",
    "Asphalt shingles give you the best balance of price, durability, and curb appeal. We install top-grade architectural shingles with proper underlayment and ventilation so your roof performs for decades.":"Las tejas asfálticas te dan el mejor equilibrio entre precio, durabilidad y estética. Instalamos tejas arquitectónicas de primera con el fieltro y la ventilación adecuados para que tu techo rinda por décadas.",
    "Architectural & 3-tab shingles":"Tejas arquitectónicas y de 3 pestañas","Dozens of colors & styles":"Docenas de colores y estilos","Great value for your budget":"Gran valor para tu presupuesto","Proper underlayment & ventilation":"Fieltro y ventilación adecuados",
    "Asphalt Roofing Questions":"Preguntas de Techos de Tejas Asfálticas",
    "How long do asphalt shingles last?":"¿Cuánto duran las tejas asfálticas?","Quality architectural asphalt shingles typically last 20–30 years with proper installation and maintenance.":"Las tejas asfálticas arquitectónicas de calidad suelen durar de 20 a 30 años con la instalación y el mantenimiento adecuados.",
    "Why choose asphalt over other materials?":"¿Por qué elegir asfalto sobre otros materiales?","Asphalt offers the best mix of affordability, durability, and style options — it's the most popular roofing choice for good reason.":"El asfalto ofrece la mejor mezcla de precio, durabilidad y opciones de estilo — es la opción de techo más popular por una buena razón.",
    "How much does an asphalt roof cost?":"¿Cuánto cuesta un techo de asfalto?","Cost depends on your roof's size and shingle grade. We give you a clear, upfront estimate for free after a quick inspection.":"El costo depende del tamaño de tu techo y el grado de la teja. Te damos un presupuesto claro y por adelantado, gratis, tras una inspección rápida.",
    "Do you offer a warranty?":"¿Ofrecen garantía?","Yes — manufacturer material warranties plus our own workmanship guarantee.":"Sí — garantías de materiales del fabricante más nuestra propia garantía de mano de obra.",
    "Get Your Asphalt Roof Quote":"Cotiza Tu Techo de Asfalto",
    "Durable, energy-efficient metal roofing built to last 40–70 years. Standing seam and metal panel systems that stand up to Pittsburgh weather with minimal maintenance.":"Techos de metal duraderos y eficientes hechos para durar de 40 a 70 años. Sistemas standing seam y de paneles que resisten el clima de Pittsburgh con mínimo mantenimiento.",
    "Maximum Durability":"Máxima Durabilidad","Metal Roofing Built To Last":"Techos de Metal Hechos Para Durar",
    "Metal roofing is the longest-lasting, most energy-efficient option available. It reflects heat, sheds snow, resists fire and wind, and can last two to three times longer than shingles.":"El techo de metal es la opción más duradera y eficiente que existe. Refleja el calor, deja caer la nieve, resiste el fuego y el viento, y puede durar dos o tres veces más que las tejas.",
    "Standing seam & metal panels":"Standing seam y paneles de metal","Lasts 40–70 years":"Dura de 40 a 70 años","Energy efficient & reflective":"Eficiente y reflectante","Fire & wind resistant":"Resistente al fuego y al viento","Low maintenance":"Bajo mantenimiento",
    "Metal Roofing Questions":"Preguntas de Techos de Metal",
    "How long does a metal roof last?":"¿Cuánto dura un techo de metal?","A quality metal roof lasts 40–70 years — often two to three times longer than asphalt shingles.":"Un techo de metal de calidad dura de 40 a 70 años — a menudo dos o tres veces más que las tejas asfálticas.",
    "Is metal roofing worth the cost?":"¿Vale la pena el costo del techo de metal?","Metal costs more upfront but lasts far longer, lowers energy bills, and rarely needs repairs — making it a smart long-term investment.":"El metal cuesta más al inicio pero dura mucho más, baja las facturas de energía y rara vez necesita reparaciones — una inversión inteligente a largo plazo.",
    "Is a metal roof noisy in the rain?":"¿Un techo de metal es ruidoso con la lluvia?","No — with proper underlayment and decking, a modern metal roof is no louder than any other roof.":"No — con el fieltro y la base adecuados, un techo de metal moderno no es más ruidoso que cualquier otro.",
    "Does metal roofing help with energy bills?":"¿El techo de metal ayuda con las facturas de energía?","Yes. Metal reflects the sun's heat, which can noticeably reduce cooling costs in summer.":"Sí. El metal refleja el calor del sol, lo que puede reducir notablemente los costos de enfriamiento en verano.",
    "Ask About Metal Roofing":"Pregunta por Techos de Metal",
    "Extend the life of your roof with regular maintenance. We catch small problems before they become expensive ones — inspections, cleaning, sealing, and tune-ups across the Greater Pittsburgh area.":"Alarga la vida de tu techo con mantenimiento regular. Detectamos problemas pequeños antes de que se vuelvan caros — inspecciones, limpieza, sellado y ajustes en el Gran Pittsburgh.",
    "Protect Your Investment":"Protege Tu Inversión","Maintenance That Adds Years":"Mantenimiento Que Suma Años",
    "A little upkeep goes a long way. Regular maintenance keeps your roof watertight, spots issues early, and can add years to its life — saving you from costly repairs and premature replacement.":"Un poco de cuidado hace una gran diferencia. El mantenimiento regular mantiene tu techo hermético, detecta problemas a tiempo y puede sumar años a su vida — evitándote reparaciones costosas y un reemplazo prematuro.",
    "Seasonal roof inspections":"Inspecciones de techo por temporada","Debris & gutter cleaning":"Limpieza de escombros y canaletas","Sealant & flashing tune-ups":"Ajustes de sellado y tapajuntas","Minor repairs before they grow":"Reparaciones menores antes de que crezcan","Extends roof lifespan":"Alarga la vida del techo",
    "Roof Maintenance Questions":"Preguntas de Mantenimiento de Techos",
    "How often should I maintain my roof?":"¿Con qué frecuencia debo dar mantenimiento a mi techo?","At least once a year, plus after major storms. Regular upkeep is the cheapest way to protect your roof.":"Al menos una vez al año, y después de tormentas fuertes. El cuidado regular es la forma más económica de proteger tu techo.",
    "What does roof maintenance include?":"¿Qué incluye el mantenimiento de techos?","Inspection, debris and gutter cleaning, resealing flashing, and minor repairs to keep everything watertight.":"Inspección, limpieza de escombros y canaletas, resellado de tapajuntas y reparaciones menores para mantener todo hermético.",
    "Can maintenance really extend my roof's life?":"¿El mantenimiento realmente alarga la vida del techo?","Yes — catching small issues early prevents big damage and can add years before you need a replacement.":"Sí — detectar problemas pequeños a tiempo evita daños grandes y puede sumar años antes de necesitar un reemplazo.",
    "Do you offer maintenance plans?":"¿Ofrecen planes de mantenimiento?","We do. Ask us about scheduled seasonal maintenance to keep your roof in top shape year-round.":"Sí. Pregúntanos por el mantenimiento programado por temporada para mantener tu techo en óptimas condiciones todo el año.",
    "Keep Your Roof In Top Shape":"Mantén Tu Techo en Óptimas Condiciones",
    "Building new or ready for a fresh start? We install complete, weather-tight roof systems for homes and new construction across the Greater Pittsburgh area — done right the first time.":"¿Construyendo o listo para empezar de nuevo? Instalamos sistemas de techo completos y herméticos para casas y construcción nueva en el Gran Pittsburgh — bien hecho desde la primera vez.",
    "Start To Finish":"De Principio a Fin","A Complete New Roof System":"Un Sistema de Techo Nuevo Completo",
    "From new construction to a full fresh install, we handle everything — decking, underlayment, leak barrier, shingles or metal, flashing, and ventilation — for a roof that protects your home for decades.":"Desde construcción nueva hasta una instalación completa, nos encargamos de todo — base, fieltro, barrera anti-goteras, tejas o metal, tapajuntas y ventilación — para un techo que protege tu hogar por décadas.",
    "New construction & full installs":"Construcción nueva e instalaciones completas","Asphalt shingle & metal systems":"Sistemas de tejas asfálticas y metal","Decking, underlayment & leak barrier":"Base, fieltro y barrera anti-goteras","Proper ventilation & flashing":"Ventilación y tapajuntas adecuados",
    "New Roof Installation Questions":"Preguntas de Instalación de Techos Nuevos",
    "How long does a new roof installation take?":"¿Cuánto tarda la instalación de un techo nuevo?","Most homes take 1–3 days depending on size, materials, and weather. We give you a firm timeline before we start.":"La mayoría de casas toman de 1 a 3 días según el tamaño, los materiales y el clima. Te damos un plazo firme antes de empezar.",
    "Do you handle new construction roofing?":"¿Hacen techos para construcción nueva?","Yes. We install roofs for new builds and additions, coordinating with your schedule from start to finish.":"Sí. Instalamos techos para construcciones nuevas y ampliaciones, coordinando con tu calendario de principio a fin.",
    "What roofing materials can I choose?":"¿Qué materiales de techo puedo elegir?","Asphalt shingles or metal roofing — we help you pick the best fit for your home, style, and budget.":"Tejas asfálticas o techo de metal — te ayudamos a elegir lo que mejor se ajuste a tu hogar, estilo y presupuesto.",
    "Is the estimate really free?":"¿El presupuesto es realmente gratis?","Yes. We provide a clear, no-obligation estimate for your new roof after a quick inspection.":"Sí. Damos un presupuesto claro y sin compromiso para tu techo nuevo tras una inspección rápida.",
    "Ready For A Brand-New Roof?":"¿Listo Para Un Techo Nuevo?",
    "Gutter Installation":"Instalación de Canaletas","Gutter Repair":"Reparación de Canaletas","Gutter Cleaning":"Limpieza de Canaletas","Gutter Guards":"Protectores de Canaletas","Schedule Cleaning":"Agenda la Limpieza",
    "Seamless aluminum gutters":"Canaletas de aluminio sin uniones","Residential & commercial":"Residencial y comercial",
    "Seamless aluminum gutters custom-fit to your home. We install durable, great-looking gutter systems that channel water safely away from your roof, siding, and foundation.":"Canaletas de aluminio sin uniones hechas a la medida de tu casa. Instalamos sistemas duraderos y de buen aspecto que desvían el agua lejos de tu techo, revestimiento y cimientos.",
    "Done Right":"Bien Hecho","Seamless Gutters, Custom-Fit":"Canaletas Sin Uniones, a la Medida",
    "Seamless gutters are formed on-site to fit your home exactly — fewer leaks, less maintenance, and a clean look. We size them right, pitch them properly, and place downspouts where the water needs to go.":"Las canaletas sin uniones se forman en sitio para ajustarse exactamente a tu casa — menos goteras, menos mantenimiento y mejor aspecto. Las dimensionamos bien, les damos la inclinación correcta y colocamos los bajantes donde el agua debe ir.",
    "Custom colors to match your home":"Colores a juego con tu casa","Proper sizing & pitch":"Tamaño e inclinación correctos",
    "Gutter Installation Questions":"Preguntas de Instalación de Canaletas",
    "Why choose seamless gutters?":"¿Por qué elegir canaletas sin uniones?","Seamless gutters have far fewer joints, which means fewer leaks and less maintenance. They're formed to fit your home exactly and look cleaner than sectional gutters.":"Las canaletas sin uniones tienen muchas menos juntas, lo que significa menos goteras y menos mantenimiento. Se forman para ajustarse exactamente a tu casa y se ven más limpias que las seccionadas.",
    "How much does gutter installation cost?":"¿Cuánto cuesta instalar canaletas?","It depends on your home's size and gutter style. We give you a clear, upfront estimate for free after measuring your home.":"Depende del tamaño de tu casa y el estilo de canaleta. Te damos un presupuesto claro y por adelantado, gratis, tras medir tu casa.",
    "What color options are available?":"¿Qué colores hay disponibles?","Seamless aluminum gutters come in many colors — we help you match them to your roof and trim.":"Las canaletas de aluminio sin uniones vienen en muchos colores — te ayudamos a combinarlas con tu techo y molduras.",
    "Do you add gutter guards?":"¿Colocan protectores de canaletas?","Yes. We can install gutter guards during your new gutter install to keep leaves and debris out.":"Sí. Podemos instalar protectores durante la instalación de tus canaletas nuevas para dejar fuera hojas y escombros.",
    "Get Your Gutter Quote":"Cotiza Tus Canaletas",
    "Sagging, leaking, or overflowing gutters? We fix them fast — resealing, re-hanging, and replacing damaged sections so your gutters protect your home the way they should.":"¿Canaletas caídas, con goteras o que se desbordan? Las reparamos rápido — resellado, re-fijación y reemplazo de secciones dañadas para que tus canaletas protejan tu casa como deben.",
    "Fixed Fast":"Reparado Rápido","Gutters That Work Again":"Canaletas Que Vuelven a Funcionar",
    "Damaged gutters let water spill where it shouldn't — rotting fascia, soaking siding, and pooling at your foundation. We find the problem and fix it right, from small leaks to sagging runs.":"Las canaletas dañadas dejan caer el agua donde no debe — pudriendo la fascia, mojando el revestimiento y acumulándose en los cimientos. Encontramos el problema y lo reparamos bien, desde pequeñas goteras hasta tramos caídos.",
    "Leak sealing & re-sealing":"Sellado y resellado de goteras","Re-hanging sagging gutters":"Re-fijación de canaletas caídas","Section & downspout replacement":"Reemplazo de secciones y bajantes","Fixing overflow & drainage":"Corrección de desbordes y drenaje","Fascia & bracket repair":"Reparación de fascia y soportes",
    "Gutter Repair Questions":"Preguntas de Reparación de Canaletas",
    "Can my gutters be repaired or do I need new ones?":"¿Se pueden reparar mis canaletas o necesito nuevas?","Often a repair is all you need. We inspect them honestly and only recommend replacement when repair isn't cost-effective.":"A menudo basta con una reparación. Las inspeccionamos con honestidad y solo recomendamos reemplazo cuando reparar no conviene.",
    "Why are my gutters overflowing?":"¿Por qué se desbordan mis canaletas?","Usually clogs, wrong pitch, or undersized gutters. We diagnose the cause and fix it — not just clear it temporarily.":"Normalmente por obstrucciones, mala inclinación o canaletas pequeñas. Diagnosticamos la causa y la corregimos — no solo la destapamos temporalmente.",
    "Do you fix sagging gutters?":"¿Reparan canaletas caídas?","Yes — we re-secure or replace the hangers and correct the pitch so water flows properly again.":"Sí — re-aseguramos o reemplazamos los soportes y corregimos la inclinación para que el agua fluya bien de nuevo.",
    "How fast can you come out?":"¿Qué tan rápido pueden venir?","Call us at 412-983-4397 — for leaks causing damage we prioritize getting to you quickly.":"Llámanos al 412-983-4397 — para goteras que causan daño priorizamos llegar pronto.",
    "Fix Your Gutters Today":"Repara Tus Canaletas Hoy",
    "Clogged gutters cause leaks, rot, and foundation damage. We clear out leaves and debris, flush your downspouts, and make sure water flows freely across the Greater Pittsburgh area.":"Las canaletas tapadas causan goteras, pudrición y daño a los cimientos. Retiramos hojas y escombros, destapamos los bajantes y nos aseguramos de que el agua fluya libre en el Gran Pittsburgh.",
    "Keep Water Flowing":"Que el Agua Fluya","Clean Gutters, Protected Home":"Canaletas Limpias, Hogar Protegido",
    "It only takes one clogged season to cause real damage. We remove built-up leaves and debris, flush the system, and check for problems — keeping water off your roof, siding, and foundation.":"Basta una temporada de obstrucción para causar daño real. Retiramos las hojas y escombros acumulados, enjuagamos el sistema y revisamos por problemas — manteniendo el agua lejos de tu techo, revestimiento y cimientos.",
    "Leaf & debris removal":"Retiro de hojas y escombros","Downspout flushing":"Enjuague de bajantes","Clog removal":"Destape de obstrucciones","Free flow check":"Revisión de flujo libre","Seasonal & one-time service":"Servicio por temporada o único",
    "Gutter Cleaning Questions":"Preguntas de Limpieza de Canaletas",
    "How often should gutters be cleaned?":"¿Con qué frecuencia se deben limpiar las canaletas?","At least twice a year — spring and fall. Homes with lots of trees nearby may need it more often.":"Al menos dos veces al año — primavera y otoño. Las casas con muchos árboles cerca pueden necesitarlo más seguido.",
    "What happens if I don't clean my gutters?":"¿Qué pasa si no limpio mis canaletas?","Clogs cause overflow that can rot fascia, damage siding, leak into your home, and pool around the foundation.":"Las obstrucciones causan desbordes que pueden pudrir la fascia, dañar el revestimiento, filtrarse a tu casa y acumularse en los cimientos.",
    "Do you offer recurring cleaning?":"¿Ofrecen limpieza recurrente?","Yes — ask about seasonal cleaning so you never have to think about it.":"Sí — pregunta por la limpieza por temporada para que nunca tengas que pensar en ello.",
    "Can gutter guards reduce cleaning?":"¿Los protectores reducen la limpieza?","Absolutely. We can install gutter guards to greatly cut down how often cleaning is needed.":"Claro. Podemos instalar protectores para reducir mucho la frecuencia de limpieza.",
    "Book Your Gutter Cleaning":"Agenda Tu Limpieza de Canaletas",
    "Stop cleaning your gutters every season. Gutter guards keep leaves and debris out while letting water flow — protecting your home and saving you time, all year round.":"Deja de limpiar tus canaletas cada temporada. Los protectores dejan fuera las hojas y escombros mientras dejan pasar el agua — protegiendo tu casa y ahorrándote tiempo todo el año.",
    "Less Maintenance":"Menos Mantenimiento","Leaf Protection That Lasts":"Protección Contra Hojas Que Perdura",
    "Gutter guards block leaves, twigs, and debris while letting rainwater through. That means far less cleaning, no more dangerous ladder trips, and gutters that keep protecting your home.":"Los protectores bloquean hojas, ramitas y escombros mientras dejan pasar la lluvia. Eso significa mucha menos limpieza, no más subidas peligrosas a la escalera y canaletas que siguen protegiendo tu casa.",
    "Keeps leaves & debris out":"Deja fuera hojas y escombros","Cuts down cleaning drastically":"Reduce mucho la limpieza","Fits new or existing gutters":"Para canaletas nuevas o existentes","Prevents clogs & overflow":"Evita obstrucciones y desbordes","Durable, low-profile designs":"Diseños duraderos y discretos",
    "Gutter Guard Questions":"Preguntas de Protectores de Canaletas",
    "Do gutter guards really work?":"¿Los protectores realmente funcionan?","Yes — quality guards keep out the debris that causes clogs while letting water flow, so your gutters stay clear far longer.":"Sí — los protectores de calidad dejan fuera los escombros que causan obstrucciones mientras dejan pasar el agua, así tus canaletas se mantienen despejadas mucho más tiempo.",
    "Will I ever need to clean my gutters again?":"¿Tendré que limpiar mis canaletas otra vez?","Cleaning drops dramatically. You may need an occasional check, but no more constant seasonal cleaning.":"La limpieza baja drásticamente. Puede que necesites una revisión ocasional, pero no más limpieza constante por temporada.",
    "Can guards go on my existing gutters?":"¿Se pueden poner en mis canaletas actuales?","In most cases, yes. We assess your current gutters and fit guards that work with them.":"En la mayoría de los casos, sí. Evaluamos tus canaletas actuales y colocamos protectores compatibles.",
    "How much do gutter guards cost?":"¿Cuánto cuestan los protectores de canaletas?","It depends on your home's size and the guard type. We give you a clear, free estimate up front.":"Depende del tamaño de tu casa y el tipo de protector. Te damos un presupuesto claro y gratis por adelantado.",
    "Never Clean Gutters Again":"No Vuelvas a Limpiar Canaletas",
    "Kitchen Remodeling":"Remodelación de Cocinas","Bathroom Remodeling":"Remodelación de Baños","Basement Remodeling":"Remodelación de Sótanos","Home Additions":"Ampliaciones de Casa","Siding Installation":"Instalación de Revestimiento","Fiber Cement Siding":"Revestimiento de Fibrocemento",
    "Turn your kitchen into the heart of your home. From cabinets and countertops to full layouts, we design and build kitchens that look incredible and work beautifully.":"Convierte tu cocina en el corazón de tu hogar. Desde gabinetes y encimeras hasta diseños completos, creamos cocinas que se ven increíbles y funcionan de maravilla.",
    "Cook, Gather, Enjoy":"Cocina, Reúnete, Disfruta","Kitchens Built Around You":"Cocinas Hechas a Tu Medida",
    "A great kitchen balances beauty and function. We handle everything — cabinets, countertops, backsplash, lighting, flooring, and layout — with clean, professional workmanship from start to finish.":"Una gran cocina equilibra belleza y función. Nos encargamos de todo — gabinetes, encimeras, salpicadero, iluminación, pisos y distribución — con trabajo limpio y profesional de principio a fin.",
    "Cabinets & countertops":"Gabinetes y encimeras","Backsplash & tile":"Salpicadero y azulejo","Lighting & fixtures":"Iluminación y accesorios","Flooring & layout changes":"Pisos y cambios de distribución","Full project management":"Gestión completa del proyecto",
    "Kitchen Remodeling Questions":"Preguntas de Remodelación de Cocinas",
    "How long does a kitchen remodel take?":"¿Cuánto tarda remodelar una cocina?","Most kitchen remodels take a few weeks depending on scope. We give you a clear timeline before we start and keep you updated throughout.":"La mayoría de remodelaciones de cocina toman unas semanas según el alcance. Te damos un plazo claro antes de empezar y te mantenemos informado.",
    "Can you work with my budget?":"¿Pueden trabajar con mi presupuesto?","Yes. We help you prioritize what matters most and offer options at different price points — with an honest, upfront estimate.":"Sí. Te ayudamos a priorizar lo más importante y ofrecemos opciones a distintos precios — con un presupuesto honesto y por adelantado.",
    "Do you handle design too?":"¿También hacen el diseño?","We do. We help with layout, materials, and finishes so everything comes together beautifully.":"Sí. Ayudamos con la distribución, materiales y acabados para que todo quede hermoso.",
    "Can I use my kitchen during the remodel?":"¿Puedo usar mi cocina durante la remodelación?","We work to minimize disruption and walk you through what to expect at each stage.":"Trabajamos para minimizar las molestias y te explicamos qué esperar en cada etapa.",
    "Design Your Dream Kitchen":"Diseña la Cocina de Tus Sueños",
    "From a fresh update to a full spa-style renovation, we build beautiful, functional bathrooms — tile, vanities, showers, tubs, and more, done right the first time.":"Desde una actualización ligera hasta una renovación estilo spa, creamos baños hermosos y funcionales — azulejo, vanidades, duchas, tinas y más, bien hechos desde la primera vez.",
    "Your Everyday Retreat":"Tu Refugio Diario","Bathrooms Done Beautifully":"Baños Hechos con Belleza",
    "Your bathroom should feel like a retreat. We handle tile, vanities, showers, tubs, lighting, and plumbing fixtures — combining great design with waterproof, lasting workmanship.":"Tu baño debe sentirse como un refugio. Nos encargamos del azulejo, vanidades, duchas, tinas, iluminación y grifería — combinando buen diseño con trabajo impermeable y duradero.",
    "Tile showers & tubs":"Duchas y tinas con azulejo","Vanities & countertops":"Vanidades y encimeras","Flooring & tile work":"Pisos y trabajo de azulejo","Fixtures & lighting":"Grifería e iluminación","Waterproofing done right":"Impermeabilización bien hecha",
    "Bathroom Remodeling Questions":"Preguntas de Remodelación de Baños",
    "How long does a bathroom remodel take?":"¿Cuánto tarda remodelar un baño?","Most bathrooms are completed in one to two weeks depending on the scope. We give you a firm timeline upfront.":"La mayoría de los baños se completan en una o dos semanas según el alcance. Te damos un plazo firme por adelantado.",
    "Can you do a small bathroom update?":"¿Pueden hacer una actualización pequeña de baño?","Absolutely — from simple refreshes to full renovations, we scale the work to your needs and budget.":"Claro — desde renovaciones simples hasta completas, ajustamos el trabajo a tus necesidades y presupuesto.",
    "Do you handle plumbing changes?":"¿Hacen cambios de plomería?","Yes, including moving fixtures and updating plumbing as part of the remodel.":"Sí, incluyendo mover accesorios y actualizar la plomería como parte de la remodelación.",
    "Is the estimate free?":"¿El presupuesto es gratis?","Yes — a clear, no-obligation estimate after we see your space.":"Sí — un presupuesto claro y sin compromiso tras ver tu espacio.",
    "Upgrade Your Bathroom":"Renueva Tu Baño",
    "Turn unused basement space into a family room, home office, gym, or guest suite. We finish basements that are warm, dry, and built to enjoy year-round.":"Convierte el sótano sin usar en sala familiar, oficina, gimnasio o suite de huéspedes. Terminamos sótanos cálidos, secos y hechos para disfrutar todo el año.",
    "More Room To Live":"Más Espacio Para Vivir","Finished Basements, Done Right":"Sótanos Terminados, Bien Hechos",
    "A finished basement adds real living space and value to your home. We handle framing, insulation, drywall, flooring, lighting, and more — built to stay comfortable and dry.":"Un sótano terminado añade espacio real y valor a tu casa. Nos encargamos de la estructura, aislamiento, tablaroca, pisos, iluminación y más — hecho para mantenerse cómodo y seco.",
    "Framing & insulation":"Estructura y aislamiento","Drywall & flooring":"Tablaroca y pisos","Lighting & electrical":"Iluminación y electricidad","Family rooms, offices & suites":"Salas, oficinas y suites","Moisture-conscious builds":"Construcción consciente de la humedad",
    "Basement Remodeling Questions":"Preguntas de Remodelación de Sótanos",
    "Does a finished basement add value?":"¿Un sótano terminado añade valor?","Yes — it adds usable living space and is one of the better returns on a remodeling investment.":"Sí — añade espacio útil y es uno de los mejores retornos de una inversión en remodelación.",
    "What about moisture and dampness?":"¿Y la humedad?","We address moisture before finishing, using the right materials and methods to keep your basement dry and comfortable.":"Atendemos la humedad antes de terminar, usando los materiales y métodos correctos para mantener tu sótano seco y cómodo.",
    "Can you add a bathroom or bedroom?":"¿Pueden agregar un baño o dormitorio?","Yes — we can include a bathroom, bedroom, office, or entertainment space in your basement plan.":"Sí — podemos incluir un baño, dormitorio, oficina o espacio de entretenimiento en tu plan de sótano.",
    "How long does it take?":"¿Cuánto tarda?","It depends on size and scope. We provide a firm timeline before starting.":"Depende del tamaño y el alcance. Damos un plazo firme antes de empezar.",
    "Finish Your Basement":"Termina Tu Sótano",
    "Need more space? We design and build room additions, second stories, and expansions that blend seamlessly with your home — more room to live, without moving.":"¿Necesitas más espacio? Diseñamos y construimos cuartos nuevos, segundos pisos y ampliaciones que combinan perfectamente con tu casa — más espacio para vivir, sin mudarte.",
    "Grow Your Home":"Haz Crecer Tu Casa","Room To Grow, Built To Match":"Espacio Para Crecer, Hecho a Juego",
    "From a single room to a full expansion, we build additions that look like they were always part of your home — matching your roofline, siding, and style, inside and out.":"Desde un solo cuarto hasta una expansión completa, construimos ampliaciones que lucen como si siempre hubieran sido parte de tu casa — combinando tu techo, revestimiento y estilo, por dentro y por fuera.",
    "Room additions & expansions":"Cuartos nuevos y expansiones","Matching roofing & siding":"Techo y revestimiento a juego","Foundation to finish":"De los cimientos al acabado","Seamless interior tie-in":"Integración interior perfecta",
    "Home Addition Questions":"Preguntas de Ampliaciones de Casa",
    "Is an addition cheaper than moving?":"¿Una ampliación es más barata que mudarse?","Often, yes — and you keep the home and neighborhood you love while gaining the space you need.":"A menudo, sí — y conservas la casa y el vecindario que amas mientras ganas el espacio que necesitas.",
    "Will the addition match my house?":"¿La ampliación combinará con mi casa?","Yes. We match your roofline, siding, and finishes so it blends seamlessly inside and out.":"Sí. Combinamos tu techo, revestimiento y acabados para que se integre perfectamente por dentro y por fuera.",
    "Do you handle permits?":"¿Se encargan de los permisos?","We guide the process and handle the construction to code from foundation to finish.":"Guiamos el proceso y hacemos la construcción según código, de los cimientos al acabado.",
    "How do we start?":"¿Cómo empezamos?","Book a free estimate — we'll discuss your goals and lay out a clear plan and timeline.":"Agenda un presupuesto gratis — hablamos de tus metas y trazamos un plan y plazo claros.",
    "Add Space To Your Home":"Añade Espacio a Tu Casa",
    "Affordable, durable, and low-maintenance vinyl siding that transforms your home's look and protects it from the elements. Dozens of colors and styles to choose from.":"Revestimiento de vinilo económico, duradero y de bajo mantenimiento que transforma la apariencia de tu casa y la protege del clima. Muchos colores y estilos para elegir.",
    "Curb Appeal & Protection":"Estética y Protección","Vinyl Siding That Lasts":"Revestimiento de Vinilo Que Perdura",
    "Vinyl siding is the most popular choice for good reason — it's affordable, tough, and virtually maintenance-free. We install it clean and tight, transforming your home's look and sealing out the weather.":"El revestimiento de vinilo es la opción más popular por una buena razón — es económico, resistente y casi sin mantenimiento. Lo instalamos limpio y ajustado, transformando la apariencia de tu casa y sellándola del clima.",
    "Low maintenance & durable":"Bajo mantenimiento y duradero","Insulated options available":"Opciones aisladas disponibles","Trim, soffit & fascia":"Molduras, sofito y fascia",
    "Vinyl Siding Questions":"Preguntas de Revestimiento de Vinilo",
    "How long does vinyl siding last?":"¿Cuánto dura el revestimiento de vinilo?","Quality vinyl siding can last 20–40 years with very little maintenance.":"El revestimiento de vinilo de calidad puede durar de 20 a 40 años con muy poco mantenimiento.",
    "Is vinyl siding low maintenance?":"¿El revestimiento de vinilo es de bajo mantenimiento?","Yes — it never needs painting and usually just an occasional rinse to look great.":"Sí — nunca necesita pintura y normalmente solo un enjuague ocasional para verse bien.",
    "Can insulated siding lower energy bills?":"¿El revestimiento aislado baja las facturas de energía?","Insulated vinyl siding adds a layer of protection that can help with energy efficiency.":"El revestimiento de vinilo aislado añade una capa de protección que puede ayudar con la eficiencia energética.",
    "How much does it cost?":"¿Cuánto cuesta?","It depends on your home's size and the product. We give you a clear, free estimate.":"Depende del tamaño de tu casa y el producto. Te damos un presupuesto claro y gratis.",
    "New siding transforms your home and protects it for decades. We install vinyl, fiber cement, and insulated siding with a clean, weather-tight finish across the Greater Pittsburgh area.":"El revestimiento nuevo transforma tu casa y la protege por décadas. Instalamos vinilo, fibrocemento y revestimiento aislado con un acabado limpio y hermético en el Gran Pittsburgh.",
    "Weather-Tight & Clean":"Hermético y Limpio","Siding Installed Right":"Revestimiento Instalado Bien",
    "Proper siding installation is about more than looks — it's your home's first defense against weather. We prep the surface, install a tight, level finish, and seal everything so it lasts.":"Una buena instalación de revestimiento es más que estética — es la primera defensa de tu casa contra el clima. Preparamos la superficie, instalamos un acabado ajustado y nivelado, y sellamos todo para que dure.",
    "Vinyl, fiber cement & insulated":"Vinilo, fibrocemento y aislado","Proper prep & moisture barrier":"Preparación y barrera de humedad","Clean, level finish":"Acabado limpio y nivelado",
    "Siding Installation Questions":"Preguntas de Instalación de Revestimiento",
    "What siding types do you install?":"¿Qué tipos de revestimiento instalan?","Vinyl, fiber cement, and insulated siding — we help you choose the best fit for your home and budget.":"Vinilo, fibrocemento y revestimiento aislado — te ayudamos a elegir lo mejor para tu casa y presupuesto.",
    "How long does siding installation take?":"¿Cuánto tarda instalar el revestimiento?","Most homes take several days depending on size and material. We give you a firm timeline upfront.":"La mayoría de casas toman varios días según el tamaño y el material. Te damos un plazo firme por adelantado.",
    "Do you remove the old siding?":"¿Retiran el revestimiento viejo?","Yes — we remove the old siding, inspect the surface, and install fresh over a proper moisture barrier.":"Sí — retiramos el revestimiento viejo, inspeccionamos la superficie e instalamos nuevo sobre una barrera de humedad adecuada.",
    "Get New Siding":"Instala Revestimiento Nuevo",
    "Cracked, loose, or storm-damaged siding? We repair and replace damaged sections fast — matching your existing siding and sealing out moisture before it causes bigger problems.":"¿Revestimiento roto, suelto o dañado por tormenta? Reparamos y reemplazamos secciones dañadas rápido — combinando con tu revestimiento actual y sellando la humedad antes de que cause problemas mayores.",
    "Fixed Before It Spreads":"Reparado Antes de Que Empeore","Siding Repairs Done Fast":"Reparaciones de Revestimiento Rápidas",
    "Damaged siding lets moisture behind your walls, leading to rot and mold. We find and fix the problem — replacing cracked or missing pieces and matching your siding so the repair blends right in.":"El revestimiento dañado deja entrar humedad detrás de tus paredes, causando pudrición y moho. Encontramos y arreglamos el problema — reemplazando piezas rotas o faltantes y combinando tu revestimiento para que la reparación se integre.",
    "Cracked & loose panel repair":"Reparación de paneles rotos y sueltos","Section replacement & matching":"Reemplazo de secciones y combinación","Moisture & rot prevention":"Prevención de humedad y pudrición","Trim & soffit repair":"Reparación de molduras y sofito",
    "Siding Repair Questions":"Preguntas de Reparación de Revestimiento",
    "Can you match my existing siding?":"¿Pueden combinar con mi revestimiento actual?","In most cases, yes — we match color and style so repairs blend in as much as possible.":"En la mayoría de los casos, sí — combinamos color y estilo para que las reparaciones se integren lo más posible.",
    "Should I repair or replace my siding?":"¿Debo reparar o reemplazar mi revestimiento?","If damage is localized, a repair is usually best. We give you an honest recommendation after inspecting it.":"Si el daño es localizado, una reparación suele ser lo mejor. Te damos una recomendación honesta tras inspeccionarlo.",
    "Does insurance cover siding damage?":"¿El seguro cubre el daño al revestimiento?","Storm damage is often covered. We can document it with photos to support your claim.":"El daño por tormenta suele estar cubierto. Podemos documentarlo con fotos para respaldar tu reclamo.",
    "How fast can you repair it?":"¿Qué tan rápido lo pueden reparar?","Call 412-983-4397 — for damage letting in moisture we prioritize getting to you quickly.":"Llama al 412-983-4397 — para daños que dejan entrar humedad priorizamos llegar pronto.",
    "Repair Your Siding":"Repara Tu Revestimiento",
    "The look of wood with the toughness of cement. Fiber cement siding resists fire, rot, and pests, and holds paint for years — a premium, long-lasting upgrade for your home.":"La apariencia de la madera con la dureza del cemento. El revestimiento de fibrocemento resiste fuego, pudrición y plagas, y mantiene la pintura por años — una mejora premium y duradera para tu casa.",
    "Premium & Durable":"Premium y Duradero","Built To Last Decades":"Hecho Para Durar Décadas",
    "Fiber cement siding gives you the rich look of real wood without the upkeep. It stands up to fire, moisture, rot, and pests, holds its color, and can last 30–50 years — a smart long-term investment.":"El revestimiento de fibrocemento te da la rica apariencia de la madera real sin el mantenimiento. Resiste fuego, humedad, pudrición y plagas, mantiene su color y puede durar de 30 a 50 años — una inversión inteligente a largo plazo.",
    "Wood-look, cement-tough":"Apariencia de madera, dureza de cemento","Fire, rot & pest resistant":"Resistente al fuego, pudrición y plagas","Holds paint for years":"Mantiene la pintura por años","Lasts 30–50 years":"Dura de 30 a 50 años","Boosts curb appeal & value":"Aumenta la estética y el valor",
    "Fiber Cement Siding Questions":"Preguntas de Revestimiento de Fibrocemento",
    "Is fiber cement better than vinyl?":"¿El fibrocemento es mejor que el vinilo?","It's more durable and premium, with a real-wood look — but costs more upfront. We help you weigh the options.":"Es más duradero y premium, con apariencia de madera real — pero cuesta más al inicio. Te ayudamos a evaluar las opciones.",
    "How long does fiber cement last?":"¿Cuánto dura el fibrocemento?","Typically 30–50 years with minimal maintenance, making it a strong long-term value.":"Normalmente de 30 a 50 años con mínimo mantenimiento, siendo un gran valor a largo plazo.",
    "Does it need painting?":"¿Necesita pintura?","It comes pre-finished or paintable and holds paint far longer than wood — with much less upkeep.":"Viene pre-acabado o pintable y mantiene la pintura mucho más que la madera — con mucho menos mantenimiento.",
    "Is it worth the cost?":"¿Vale la pena el costo?","For durability, looks, and resale value, many homeowners find it well worth the investment.":"Por durabilidad, apariencia y valor de reventa, muchos propietarios lo consideran una gran inversión.",
    "Upgrade To Fiber Cement":"Cambia a Fibrocemento",
    "A real Vertex NTA roof at sunrise — clean shingle work done right, here in the Greater Pittsburgh area.":"Un techo real de Vertex NTA al amanecer — trabajo de tejas limpio y bien hecho, aquí en el Gran Pittsburgh.",
    "A look at completed roofing, remodeling, siding, and gutter work across the Greater Pittsburgh area.":"Un vistazo a trabajos de techos, remodelación, revestimiento y canaletas realizados en el Gran Pittsburgh.",
    "All":"Todos",
    "Complete Roof Replacement":"Reemplazo Total de Techo","Storm Damage Repair":"Reparación por Tormenta",
    "Kitchen Renovation":"Renovación de Cocina","Full Bathroom Remodel":"Remodelación Completa de Baño",
    "Vinyl Siding Installation":"Instalación de Revestimiento","Exterior Facelift":"Renovación de Fachada",
    "Exterior Renovation":"Renovación Exterior","Siding Repair & Trim":"Reparación de Revestimiento",
    "Where We Work":"Dónde Trabajamos","Service Area":"Área de Servicio",
    "Proudly serving the Greater Pittsburgh and Erie areas and nearby communities — if you're in the region, we've got you covered.":"Con orgullo servimos las áreas del Gran Pittsburgh y Erie y las comunidades cercanas — si estás en la región, te cubrimos.",
    "Don't see your town? Give us a call — we likely cover your area too.":"¿No ves tu ciudad? Llámanos — probablemente también cubrimos tu zona.",
    "Credentials":"Credenciales","Licensed & Insured":"Con Licencia y Asegurado","License & insurance details coming soon.":"Detalles de licencia y seguro próximamente.",
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
    contact:{t:"Contacta a Vertex NTA Roofing | Presupuesto Gratis en Pittsburgh, PA",d:"Contacta a Vertex NTA Roofing en Pittsburgh, PA. Llama al 412-983-4397 o pide un presupuesto gratis para techos, remodelación y revestimiento. Respuesta rápida."},
    about:{t:"Sobre Nosotros | Vertex NTA Roofing en Pittsburgh, PA",d:"Conoce a Vertex NTA Roofing, contratista de confianza en Pittsburgh, PA. Más de 7 años en techos, remodelación, revestimiento y canaletas con trabajo honesto y de calidad."},
    "roof-repair":{t:"Reparación de Techos en Pittsburgh, PA | Vertex NTA Roofing",d:"Reparación de techos rápida y confiable en Pittsburgh, PA — goteras, daño por tormenta y tejas dañadas. Licenciados, asegurados e inspección gratis."},
    "roof-replacement":{t:"Reemplazo de Techos en Pittsburgh, PA | Vertex NTA Roofing",d:"Reemplazo completo de techos en Pittsburgh, PA con tejas asfálticas y metal de primera. Presupuesto gratis, plazos claros e instalación profesional."},
    "roof-inspection":{t:"Inspección de Techos Gratis en Pittsburgh, PA | Vertex NTA Roofing",d:"Inspección de techos gratis en Pittsburgh, PA. Revisamos goteras, daño por tormenta y desgaste con un reporte honesto. Sin compromiso."},
    "emergency-roofing":{t:"Techos de Emergencia en Pittsburgh, PA | Vertex NTA Roofing",d:"Techos de emergencia en Pittsburgh, PA. Respuesta rápida con lonas y reparaciones para goteras y daño por tormenta. Llama al 412-983-4397."},
    "asphalt-roofing":{t:"Techos de Tejas Asfálticas en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación de techos de tejas asfálticas en Pittsburgh, PA. La opción más popular: económica, duradera y con muchos colores. Presupuesto gratis con Vertex NTA."},
    "metal-roofing":{t:"Techos de Metal en Pittsburgh, PA | Vertex NTA Roofing",d:"Techos de metal duraderos y eficientes en Pittsburgh, PA. Sistemas standing seam y paneles que duran 40–70 años. Presupuesto gratis con Vertex NTA."},
    "roof-maintenance":{t:"Mantenimiento de Techos en Pittsburgh, PA | Vertex NTA Roofing",d:"Mantenimiento de techos en Pittsburgh, PA. Inspecciones, limpieza y sellado para alargar la vida de tu techo. Inspección gratis con Vertex NTA."},
    "new-roof-installation":{t:"Instalación de Techos Nuevos en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación de techos nuevos en Pittsburgh, PA para casas y construcción nueva. Sistemas completos y herméticos. Presupuesto gratis con Vertex NTA."},
    "gutter-installation":{t:"Instalación de Canaletas en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación de canaletas sin uniones en Pittsburgh, PA, a la medida de tu casa. Aluminio duradero, bajantes y drenaje. Presupuesto gratis con Vertex NTA."},
    "gutter-repair":{t:"Reparación de Canaletas en Pittsburgh, PA | Vertex NTA Roofing",d:"Reparación de canaletas en Pittsburgh, PA — goteras, canaletas caídas y desbordamiento. Sellado, re-fijación y reemplazo. Inspección gratis con Vertex NTA."},
    "gutter-cleaning":{t:"Limpieza de Canaletas en Pittsburgh, PA | Vertex NTA Roofing",d:"Limpieza de canaletas en Pittsburgh, PA. Retiramos hojas y escombros y destapamos bajantes para que el agua fluya. Servicio por temporada. Vertex NTA."},
    "gutter-guards":{t:"Protectores de Canaletas en Pittsburgh, PA | Vertex NTA Roofing",d:"Protectores de canaletas en Pittsburgh, PA. Bloquean hojas y escombros y reducen la limpieza. Para canaletas nuevas o existentes. Presupuesto gratis."},
    "kitchen-remodeling":{t:"Remodelación de Cocinas en Pittsburgh, PA | Vertex NTA Roofing",d:"Remodelación de cocinas en Pittsburgh, PA — gabinetes, encimeras, pisos y diseño completo. Trabajo profesional de principio a fin. Presupuesto gratis con Vertex NTA."},
    "bathroom-remodeling":{t:"Remodelación de Baños en Pittsburgh, PA | Vertex NTA Roofing",d:"Remodelación de baños en Pittsburgh, PA — duchas, tinas, vanidades y azulejo. Diseño hermoso y trabajo impermeable. Presupuesto gratis con Vertex NTA."},
    "basement-remodeling":{t:"Remodelación de Sótanos en Pittsburgh, PA | Vertex NTA Roofing",d:"Remodelación y acabado de sótanos en Pittsburgh, PA. Convierte tu sótano en sala, oficina o suite — cálido, seco y para disfrutar. Presupuesto gratis con Vertex NTA."},
    "home-additions":{t:"Ampliaciones de Casa en Pittsburgh, PA | Vertex NTA Roofing",d:"Ampliaciones y adiciones de casa en Pittsburgh, PA. Cuartos nuevos y expansiones que combinan con tu hogar. Más espacio sin mudarte. Presupuesto gratis con Vertex NTA."},
    "vinyl-siding":{t:"Revestimiento de Vinilo en Pittsburgh, PA | Vertex NTA Roofing",d:"Revestimiento de vinilo en Pittsburgh, PA — económico, duradero y de bajo mantenimiento. Muchos colores y estilos. Presupuesto gratis con Vertex NTA."},
    "siding-installation":{t:"Instalación de Revestimiento en Pittsburgh, PA | Vertex NTA Roofing",d:"Instalación de revestimiento en Pittsburgh, PA — vinilo, fibrocemento y aislado. Acabado limpio y hermético. Presupuesto gratis con Vertex NTA."},
    "siding-repair":{t:"Reparación de Revestimiento en Pittsburgh, PA | Vertex NTA Roofing",d:"Reparación de revestimiento en Pittsburgh, PA — piezas rotas, sueltas o dañadas por tormenta. Reemplazo y combinación de color. Inspección gratis con Vertex NTA."},
    "fiber-cement-siding":{t:"Revestimiento de Fibrocemento en Pittsburgh, PA | Vertex NTA Roofing",d:"Revestimiento de fibrocemento en Pittsburgh, PA. Apariencia de madera con dureza de cemento — resiste fuego, pudrición y plagas. Presupuesto gratis con Vertex NTA."}
  };
  const _metaEl = document.querySelector('meta[name="description"]');
  const _origTitle = document.title;
  const _origDesc = _metaEl ? _metaEl.getAttribute('content') : '';
  function _seoKey(){
    const t=_origTitle.toLowerCase();
    if(t.indexOf('roofing services')>=0) return 'roofing';
    if(t.indexOf('remodeling services')>=0) return 'remodeling';
    if(t.indexOf('gutter services')>=0) return 'gutters';
    if(t.indexOf('roof repair')>=0) return 'roof-repair';
    if(t.indexOf('roof replacement')>=0) return 'roof-replacement';
    if(t.indexOf('roof inspection')>=0) return 'roof-inspection';
    if(t.indexOf('emergency roofing')>=0) return 'emergency-roofing';
    if(t.indexOf('asphalt')>=0) return 'asphalt-roofing';
    if(t.indexOf('metal roofing')>=0) return 'metal-roofing';
    if(t.indexOf('roof maintenance')>=0) return 'roof-maintenance';
    if(t.indexOf('new roof installation')>=0) return 'new-roof-installation';
    if(t.indexOf('gutter installation')>=0) return 'gutter-installation';
    if(t.indexOf('gutter repair')>=0) return 'gutter-repair';
    if(t.indexOf('gutter cleaning')>=0) return 'gutter-cleaning';
    if(t.indexOf('gutter guard')>=0) return 'gutter-guards';
    if(t.indexOf('kitchen remodeling')>=0) return 'kitchen-remodeling';
    if(t.indexOf('bathroom remodeling')>=0) return 'bathroom-remodeling';
    if(t.indexOf('basement remodeling')>=0) return 'basement-remodeling';
    if(t.indexOf('home addition')>=0) return 'home-additions';
    if(t.indexOf('vinyl siding')>=0) return 'vinyl-siding';
    if(t.indexOf('siding installation')>=0) return 'siding-installation';
    if(t.indexOf('siding repair')>=0) return 'siding-repair';
    if(t.indexOf('fiber cement')>=0) return 'fiber-cement-siding';
    if(t.indexOf('siding')>=0) return 'siding';
    if(t.indexOf('about')>=0) return 'about';
    if(t.indexOf('contact')>=0) return 'contact';
    return 'home';
  }
  const _orig = new Map();
  function walkText(fn){
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){const pn=n.parentNode; const p=pn&&pn.nodeName; if(p==='SCRIPT'||p==='STYLE')return NodeFilter.FILTER_REJECT; if(pn&&pn.closest&&pn.closest('.notranslate,[translate="no"]'))return NodeFilter.FILTER_REJECT; return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
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
    if(!(location.pathname==='/'||location.pathname===''||/\/(index(\.html)?)$/.test(location.pathname))) return; // home page only
    const CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    const P=[
      ['roofing','Complete Roof Replacement',CDN+'v-p-roof2.jpg'],
      ['roofing','Storm Damage Repair',CDN+'v-p-roof1.jpg'],
      ['remodeling','Exterior Renovation',CDN+'v-p-remodel1.jpg'],
      ['remodeling','Exterior Facelift',CDN+'v-p-remodel2.jpg'],
      ['siding','Vinyl Siding Installation',CDN+'v-p-siding1.jpg'],
      ['gutters','Seamless Gutter Installation',CDN+'v-gutters.jpg']
    ];
    const cap={roofing:'Roofing',remodeling:'Remodeling',siding:'Siding',gutters:'Gutters'};
    let cards='';
    P.forEach((p,i)=>{cards+='<figure class="pjx-item" data-cat="'+p[0]+'" data-i="'+i+'" tabindex="0" role="button">'+
      '<img loading="lazy" src="'+p[2]+'" alt="'+p[1]+'">'+
      '<figcaption><span class="pjx-cat">'+cap[p[0]]+'</span><span class="pjx-title">'+p[1]+'</span><span class="pjx-loc">Pittsburgh, PA</span></figcaption></figure>';});
    const sec=document.createElement('section');
    sec.className='blk projects'; sec.id='projects';
    sec.innerHTML='<div class="wrap">'+
      '<div class="sec-head"><span class="eyebrow">Our Work</span><h2 class="h-sec">Recent Projects</h2>'+
      '<p class="lead">A look at completed roofing, remodeling, siding, and gutter work across the Greater Pittsburgh area.</p></div>'+
      '<div class="pjx-tabs"><button class="pjx-tab active" data-cat="all">All</button><button class="pjx-tab" data-cat="roofing">Roofing</button><button class="pjx-tab" data-cat="remodeling">Remodeling</button><button class="pjx-tab" data-cat="siding">Siding</button><button class="pjx-tab" data-cat="gutters">Gutters</button></div>'+
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
    // Service-page hero images: real client photos for roofing/siding; quality stock for remodeling (no good real interiors)
    var _setURL=function(alt,url){var im=document.querySelector('img[alt="'+alt+'"]'); if(im){im.src=url; im.removeAttribute('srcset');}};
    var _uns=function(id,w,h){return 'https://images.unsplash.com/'+id+'?q=72&w='+w+'&h='+h+'&fit=crop&fm=jpg';};
    var _pth=location.pathname;
    if(/\/roofing$/.test(_pth)){_setURL('New roof installation',CDN+'v-roof.jpg');_setURL('Home exterior',CDN+'v-p-roof1.jpg');_setURL('Roof replacement in progress',CDN+'v-p-roof2.jpg');}
    if(/\/siding$/.test(_pth)){_setURL('New siding',CDN+'v-siding.jpg');_setURL('Home exterior',CDN+'v-p-siding1.jpg');_setURL('New siding installation',CDN+'v-p-siding2.jpg');}
    if(/\/remodeling$/.test(_pth)){_setURL('Remodeled interior',CDN+'v-remodel-hero.jpg');_setURL('Home exterior',_uns('photo-1620626011761-996317b8d101',900,1100));_setURL('Home remodeling project',_uns('photo-1616486338812-3dadae4b4ace',1000,720));}
    // Roofing page: real jobsite video section
    if(/\/roofing$/.test(_pth) && !document.getElementById('roofvid')){
      var vsec=document.createElement('section'); vsec.className='blk surface'; vsec.id='roofvid';
      vsec.innerHTML='<div class="wrap vid-wrap">'+
        '<div class="reveal vid-txt"><span class="eyebrow">On The Roof</span><h2 class="h-sec">See Our Work In Action</h2><p class="lead">A real Vertex NTA roof at sunrise — clean shingle work done right, here in the Greater Pittsburgh area.</p><a class="btn btn-gold" href="/contact">Get a Free Inspection</a></div>'+
        '<div class="vid-frame reveal"><video src="'+CDN+'v-roof-video.mp4" poster="'+CDN+'v-roof-video-poster.jpg" autoplay muted loop playsinline preload="metadata" controls></video></div>'+
        '</div>';
      var rband=document.querySelector('.band-cta'); var rfoot=document.querySelector('footer');
      if(rband&&rband.parentNode){rband.parentNode.insertBefore(vsec,rband);}
      else if(rfoot&&rfoot.parentNode){rfoot.parentNode.insertBefore(vsec,rfoot);}
      else {var mm2=document.querySelector('main')||document.body; mm2.appendChild(vsec);}
      // internal SEO links to roofing sub-services (crawlable discovery)
      if(!document.getElementById('roof-links')){
        var rl=document.createElement('section'); rl.className='blk'; rl.id='roof-links';
        var links=[['Roof Repair','/roof-repair'],['Roof Replacement','/roof-replacement'],['Roof Inspection','/roof-inspection'],['Emergency Roofing','/emergency-roofing'],['Asphalt Roofing','/asphalt-roofing'],['Metal Roofing','/metal-roofing'],['Roof Maintenance','/roof-maintenance'],['New Roof Installation','/new-roof-installation']];
        var chips=links.map(function(l){return '<a class="area-chip" href="'+l[1]+'" style="text-decoration:none">'+l[0]+'</a>';}).join('');
        rl.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto 28px"><span class="eyebrow" style="display:block;margin-bottom:12px">Roofing Services</span><h2 class="h-sec">Explore Our Roofing Services</h2></div><div class="area-list reveal" style="justify-content:center">'+chips+'</div></div>';
        var rlb=document.querySelector('.band-cta');
        if(rlb&&rlb.parentNode){rlb.parentNode.insertBefore(rl,rlb);}
      }
    }
    // internal SEO links to gutter sub-services (gutters page only)
    if(/\/gutters$/.test(_pth) && !document.getElementById('gutter-links')){
      var gl=document.createElement('section'); gl.className='blk'; gl.id='gutter-links';
      var glinks=[['Gutter Installation','/gutter-installation'],['Gutter Repair','/gutter-repair'],['Gutter Cleaning','/gutter-cleaning'],['Gutter Guards','/gutter-guards']];
      var gchips=glinks.map(function(l){return '<a class="area-chip" href="'+l[1]+'" style="text-decoration:none">'+l[0]+'</a>';}).join('');
      gl.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto 28px"><span class="eyebrow" style="display:block;margin-bottom:12px">Gutter Services</span><h2 class="h-sec">Explore Our Gutter Services</h2></div><div class="area-list reveal" style="justify-content:center">'+gchips+'</div></div>';
      var glb=document.querySelector('.band-cta');
      if(glb&&glb.parentNode){glb.parentNode.insertBefore(gl,glb);}
    }
    // internal SEO links to remodeling sub-services (remodeling page only)
    if(/\/remodeling$/.test(_pth) && !document.getElementById('remodel-links')){
      var rml=document.createElement('section'); rml.className='blk'; rml.id='remodel-links';
      var rmlinks=[['Kitchen Remodeling','/kitchen-remodeling'],['Bathroom Remodeling','/bathroom-remodeling'],['Basement Remodeling','/basement-remodeling'],['Home Additions','/home-additions']];
      var rmchips=rmlinks.map(function(l){return '<a class="area-chip" href="'+l[1]+'" style="text-decoration:none">'+l[0]+'</a>';}).join('');
      rml.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto 28px"><span class="eyebrow" style="display:block;margin-bottom:12px">Remodeling Services</span><h2 class="h-sec">Explore Our Remodeling Services</h2></div><div class="area-list reveal" style="justify-content:center">'+rmchips+'</div></div>';
      var rmb=document.querySelector('.band-cta');
      if(rmb&&rmb.parentNode){rmb.parentNode.insertBefore(rml,rmb);}
    }
    // internal SEO links to siding sub-services (siding page only)
    if(/\/siding$/.test(_pth) && !document.getElementById('siding-links')){
      var sl=document.createElement('section'); sl.className='blk'; sl.id='siding-links';
      var slinks=[['Vinyl Siding','/vinyl-siding'],['Siding Installation','/siding-installation'],['Siding Repair','/siding-repair'],['Fiber Cement Siding','/fiber-cement-siding']];
      var schips=slinks.map(function(l){return '<a class="area-chip" href="'+l[1]+'" style="text-decoration:none">'+l[0]+'</a>';}).join('');
      sl.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto 28px"><span class="eyebrow" style="display:block;margin-bottom:12px">Siding Services</span><h2 class="h-sec">Explore Our Siding Services</h2></div><div class="area-list reveal" style="justify-content:center">'+schips+'</div></div>';
      var slb=document.querySelector('.band-cta');
      if(slb&&slb.parentNode){slb.parentNode.insertBefore(sl,slb);}
    }
    // Owner name + portrait
    var OWNER='Narlyn Ortiz';
    document.querySelectorAll('.sig').forEach(function(sg){var n=sg.childNodes[0]; if(n&&n.nodeType===3&&/The Owner/.test(n.nodeValue)){n.nodeValue='— '+OWNER;}});
    if(/\/about$/.test(_pth)){var fm=document.querySelector('.feat-media img'); if(fm){fm.src=CDN+'v-owner-portrait.jpg'; fm.removeAttribute('srcset');}}
    // About: licensing placeholder (client to provide official license details)
    if(/\/about$/.test(_pth) && !document.getElementById('lic-info')){
      var lsec=document.createElement('section'); lsec.className='blk surface'; lsec.id='lic-info';
      lsec.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto"><span class="eyebrow" style="display:block;margin-bottom:12px">Credentials</span><h2 class="h-sec">Licensed &amp; Insured</h2><p class="lead" style="margin:14px auto 0;max-width:620px">License &amp; insurance details coming soon.</p></div></div>';
      var af=document.querySelector('footer'); if(af&&af.parentNode){af.parentNode.insertBefore(lsec,af);} else {(document.querySelector('main')||document.body).appendChild(lsec);}
    }
    // Contact page: Google map of the office
    if(/\/contact$/.test(_pth) && !document.getElementById('office-map')){
      var msec=document.createElement('section'); msec.className='blk surface'; msec.id='office-map';
      msec.innerHTML='<div class="wrap"><div class="sec-head reveal" style="text-align:center;margin:0 auto 32px"><span class="eyebrow" style="display:block;margin-bottom:12px">Find Us</span><h2 class="h-sec">Our Location</h2><p class="lead" style="margin-top:14px">1810 Rhine St, Pittsburgh, PA 15212</p></div>'+
        '<div class="map-embed reveal"><iframe src="https://maps.google.com/maps?q=1810%20Rhine%20St%2C%20Pittsburgh%2C%20PA%2015212&z=15&output=embed" loading="lazy" title="Vertex NTA Roofing location" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>';
      var cfoot=document.querySelector('footer');
      if(cfoot&&cfoot.parentNode){cfoot.parentNode.insertBefore(msec,cfoot);} else {(document.querySelector('main')||document.body).appendChild(msec);}
    }
    const isHome=(location.pathname==='/'||location.pathname===''||/\/(index(\.html)?)$/.test(location.pathname));
    // left hero tile -> real roof photo (home only; internal pages keep their own hero image)
    const left=isHome?document.querySelector('.hero .shot:not(.short)'):null;
    if(left){const im=left.querySelector('img'); if(im){im.src=CDN+'v-roof.jpg'; im.removeAttribute('srcset');}}
    // (hero background video removed by request)
    // MOBILE hero image slider (auto + dots + swipe) — replaces the single tile — HOME ONLY
    if(isHome && window.innerWidth<=900){
      const shot=document.querySelector('.hero .shot:not(.short)');
      if(shot && !shot.querySelector('.hslide')){
        const files=[
          {f:'v-roof.jpg',en:'Roofing',es:'Techos',subEn:'Repairs & replacements',subEs:'Reparación y reemplazo'},
          {f:'v-roof3.jpg',en:'Roof Replacement',es:'Reemplazo de techo',subEn:'Built to last',subEs:'Hecho para durar'},
          {f:'v-hero.jpg',en:'Roof Inspection',es:'Inspección de techo',subEn:'Free & no obligation',subEs:'Gratis y sin compromiso'},
          {f:'v-siding.jpg',en:'Siding',es:'Revestimiento',subEn:'Vinyl, fiber-cement & more',subEs:'Vinil, fibrocemento y más'},
          {f:'v-gutter2.jpg',en:'Gutters',es:'Canaletas',subEn:'Install, repair & guards',subEs:'Instalación, reparación y protección'},
          {f:'v-p-roof1.jpg',en:'Quality Work',es:'Trabajo de calidad',subEn:'Licensed & insured',subEs:'Con licencia y seguro'},
          {f:'v-p-siding2.jpg',en:'New Siding',es:'Revestimiento nuevo',subEn:'Boost your curb appeal',subEs:'Realza tu fachada'}
        ];
        shot.innerHTML='';
        const wrap=document.createElement('div'); wrap.className='hslide';
        files.forEach(function(s,i){var im=document.createElement('img'); im.src=CDN+s.f; im.className='hslide-img'+(i===0?' on':''); im.alt='Vertex NTA — '+s.en; im.loading=i===0?'eager':'lazy'; wrap.appendChild(im);});
        var cap=document.createElement('div'); cap.className='hcap'; cap.innerHTML='<span class="hcap-k"></span><span class="hcap-s"></span>'; wrap.appendChild(cap);
        const dots=document.createElement('div'); dots.className='hslide-dots';
        files.forEach(function(s,i){var d=document.createElement('button'); d.type='button'; d.className='hslide-dot'+(i===0?' on':''); d.setAttribute('aria-label','Ver imagen '+(i+1)); dots.appendChild(d);});
        wrap.appendChild(dots); shot.appendChild(wrap);
        var _ck=cap.querySelector('.hcap-k'), _cs=cap.querySelector('.hcap-s');
        function _mEs(){try{return localStorage.getItem('vlang')==='es';}catch(e){return false;}}
        function paintCap(){var es=_mEs(); _ck.textContent=es?files[idx].es:files[idx].en; _cs.textContent=es?files[idx].subEs:files[idx].subEn; cap.classList.remove('in'); void cap.offsetWidth; cap.classList.add('in');}
        const slides=[].slice.call(wrap.querySelectorAll('.hslide-img')), ds=[].slice.call(dots.children); let idx=0, t;
        function go(n){slides[idx].classList.remove('on');ds[idx].classList.remove('on');idx=(n+slides.length)%slides.length;slides[idx].classList.add('on');ds[idx].classList.add('on');paintCap();}
        paintCap();
        [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function(b){b.addEventListener('click',function(){setTimeout(paintCap,60);});});
        function start(){t=setInterval(function(){go(idx+1);},3800);} function reset(){clearInterval(t);start();}
        ds.forEach(function(d,i){d.addEventListener('click',function(){go(i);reset();});});
        var sx=0; wrap.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
        wrap.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40){go(idx+(dx<0?1:-1));reset();}},{passive:true});
        start();
      }
    }
  })();

  // ===== DESKTOP hero slider — home only; both hero tiles crossfade (Ken Burns) with bilingual service captions =====
  (function(){
    var isHome=(location.pathname==='/'||location.pathname===''||/\/(index(\.html)?)$/.test(location.pathname));
    if(!isHome) return;
    if(window.innerWidth<=900) return; // desktop only — mobile keeps its own slider
    var CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    function esNow(){try{return localStorage.getItem('vlang')==='es';}catch(e){return false;}}
    function build(sel,slides){
      var shot=document.querySelector(sel);
      if(!shot||shot.querySelector('.hslide')) return null;
      shot.innerHTML='';
      var wrap=document.createElement('div'); wrap.className='hslide';
      slides.forEach(function(s,i){var im=document.createElement('img'); im.src=CDN+s.f; im.className='hslide-img'+(i===0?' on':''); im.alt='Vertex NTA — '+s.en; im.loading=i===0?'eager':'lazy'; wrap.appendChild(im);});
      var cap=document.createElement('div'); cap.className='hcap'; cap.innerHTML='<span class="hcap-k"></span><span class="hcap-s"></span>';
      wrap.appendChild(cap); shot.appendChild(wrap);
      var imgs=[].slice.call(wrap.querySelectorAll('.hslide-img'));
      var k=cap.querySelector('.hcap-k'), sub=cap.querySelector('.hcap-s'); var idx=0;
      function paint(){var es=esNow(); k.textContent=es?slides[idx].es:slides[idx].en; sub.textContent=es?slides[idx].subEs:slides[idx].subEn;}
      function anim(){cap.classList.remove('in'); void cap.offsetWidth; cap.classList.add('in');}
      paint(); anim();
      return {go:function(){imgs[idx].classList.remove('on'); idx=(idx+1)%imgs.length; imgs[idx].classList.add('on'); paint(); anim();}, repaint:paint};
    }
    var L=build('.hero .shot:not(.short)',[
      {f:'v-roof.jpg',en:'Roofing',es:'Techos',subEn:'Repairs & replacements',subEs:'Reparación y reemplazo'},
      {f:'v-siding.jpg',en:'Siding',es:'Revestimiento',subEn:'Vinyl, fiber-cement & more',subEs:'Vinil, fibrocemento y más'},
      {f:'v-remodel-hero.jpg',en:'Remodeling',es:'Remodelación',subEn:'Kitchens, baths & additions',subEs:'Cocinas, baños y ampliaciones'},
      {f:'v-gutter2.jpg',en:'Gutters',es:'Canaletas',subEn:'Install, repair & guards',subEs:'Instalación, reparación y protección'}
    ]);
    var R=build('.hero .shot.short',[
      {f:'v-hero.jpg',en:'Roof Inspection',es:'Inspección de techo',subEn:'Free & no obligation',subEs:'Gratis y sin compromiso'},
      {f:'v-roof3.jpg',en:'Roof Replacement',es:'Reemplazo de techo',subEn:'Built to last',subEs:'Hecho para durar'},
      {f:'v-p-siding2.jpg',en:'New Siding',es:'Revestimiento nuevo',subEn:'Boost your curb appeal',subEs:'Realza tu fachada'},
      {f:'v-p-roof1.jpg',en:'Quality Work',es:'Trabajo de calidad',subEn:'Licensed & insured',subEs:'Con licencia y seguro'}
    ]);
    var shows=[L,R].filter(Boolean);
    if(!shows.length) return;
    setInterval(function(){shows.forEach(function(s){s.go();});},4600);
    [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function(b){b.addEventListener('click',function(){setTimeout(function(){shows.forEach(function(s){s.repaint();});},60);});});
  })();

  // ===== QR code on the Contact page (scan to open/share the site) =====
  (function(){
    if(!/\/contact$/.test(location.pathname)) return;
    var card=document.querySelector('.info-card');
    if(!card || card.querySelector('.qr-share')) return;
    var CDN='https://cdn.jsdelivr.net/gh/celvintr/vertex-nta-web@main/';
    if(!document.getElementById('qr-css')){
      var st=document.createElement('style'); st.id='qr-css';
      st.textContent='.qr-share{display:flex;align-items:center;gap:16px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line)}'+
        '.qr-share .qr-img{flex:0 0 auto;width:104px;height:104px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:7px;box-shadow:0 4px 14px rgba(0,0,0,.08)}'+
        '.qr-share .qr-img img{display:block;width:100%;height:100%}'+
        '.qr-share .qr-tx b{display:block;font-size:1rem;color:var(--ink);margin-bottom:3px}'+
        '.qr-share .qr-tx span{display:block;font-size:.86rem;color:var(--ink-soft);line-height:1.4}';
      document.head.appendChild(st);
    }
    var box=document.createElement('div'); box.className='qr-share';
    box.innerHTML='<div class="qr-img"><img src="'+CDN+'qr-vertex.png" alt="QR code - vertexntaroofing.com" loading="lazy"></div>'+
      '<div class="qr-tx"><b data-qr-t></b><span data-qr-s></span></div>';
    card.appendChild(box);
    var _t=box.querySelector('[data-qr-t]'), _s=box.querySelector('[data-qr-s]');
    var QR={en:['Scan to visit or share','Point your phone camera at the code to open our site.'],es:['Escanea para visitar o compartir','Apunta la cámara de tu teléfono al código para abrir nuestro sitio.']};
    function setQR(){var l='en';try{if(localStorage.getItem('vlang')==='es')l='es';}catch(e){} _t.textContent=QR[l][0]; _s.textContent=QR[l][1];}
    setQR();
    [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function(b){b.addEventListener('click',function(){setTimeout(setQR,60);});});
  })();

  // ===== Service Area + map — home only, injected (no embed re-paste) =====
  (function(){
    if(document.getElementById('area')) return;
    if(!(location.pathname==='/'||location.pathname===''||/\/(index(\.html)?)$/.test(location.pathname))) return; // home page only
    const towns=[['Pittsburgh',40.4406,-79.9959],['Mount Lebanon',40.3767,-80.0490],['Bethel Park',40.3273,-80.0370],['Upper St. Clair',40.3320,-80.0850],['Monroeville',40.4212,-79.7881],['Penn Hills',40.4728,-79.8931],['Cranberry Twp',40.6847,-80.1073],['Wexford',40.6231,-80.0562],['McCandless',40.5806,-80.0139],['Ross Twp',40.5187,-80.0170],['Robinson',40.4506,-80.1420],['Moon Twp',40.5148,-80.2103],['McKeesport',40.3448,-79.8642],['Plum',40.5017,-79.7439],['Shaler',40.5170,-79.9550],['Baldwin',40.3873,-79.9739],['Wilkinsburg',40.4443,-79.8817],['Bellevue',40.4939,-80.0503],['West Mifflin',40.3573,-79.8664],['Bridgeville',40.3567,-80.1112],['Coraopolis',40.5187,-80.1684],['Sewickley',40.5359,-80.1848],['Fox Chapel',40.5187,-79.8908],['Carnegie',40.4090,-80.0842],['Munhall',40.3962,-79.8967],['Oakmont',40.5223,-79.8375],['Erie',42.1292,-80.0851],['Millcreek',42.1069,-80.1206],['Harborcreek',42.1520,-79.9490],['Fairview',42.0303,-80.2551],['Girard',42.0006,-80.3190],['North East',42.2178,-79.8347],['Edinboro',41.8739,-80.1313],['Waterford',41.9426,-79.9836],['McKean',41.9987,-80.1470],['Lake City',42.0192,-80.3453]];
    let chips=''; towns.forEach((t,i)=>chips+='<button type="button" class="area-chip" data-i="'+i+'">'+t[0]+'</button>');
    const sec=document.createElement('section');
    sec.className='blk surface'; sec.id='area';
    sec.style.scrollMarginTop='100px';
    sec.innerHTML='<div class="wrap area"><div class="area-grid">'+
      '<div><span class="eyebrow" style="display:block;margin-bottom:14px">Where We Work</span>'+
      '<h2 class="h-sec">Service Area</h2>'+
      '<p class="lead" style="margin-top:16px">Proudly serving the Greater Pittsburgh and Erie areas and nearby communities — if you\'re in the region, we\'ve got you covered.</p>'+
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
        const isMobile=window.matchMedia('(max-width:900px)').matches||('ontouchstart' in window);
        const map=L.map('vmap',{scrollWheelZoom:false,zoomControl:true,attributionControl:true,dragging:true,touchZoom:true,doubleClickZoom:true,tap:true}).setView([40.44,-79.99],10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,subdomains:'abc',attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
        L.circle([40.4406,-79.9959],{radius:34000,color:'#B8862F',weight:1.5,opacity:.6,fillColor:'#CDA349',fillOpacity:.08}).addTo(map);
        L.circle([42.1292,-80.0851],{radius:30000,color:'#B8862F',weight:1.5,opacity:.6,fillColor:'#CDA349',fillOpacity:.08}).addTo(map);
        const HUBS={'Pittsburgh':1,'Erie':1};
        const pts=[], markers=[];
        towns.forEach(function(t,i){
          const big=!!HUBS[t[0]];
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
          markers.forEach(function(mm,j){mm.setStyle({radius:j===i?11:(HUBS[towns[j][0]]?9:6),fillColor:j===i?'#B8862F':(HUBS[towns[j][0]]?'#B8862F':'#E8C066')});});
          const t=towns[i];
          map.flyTo([t[1],t[2]],12,{duration:.7});
          markers[i].openPopup();
          if(fromMap){var c=chipEls.filter(function(x){return +x.dataset.i===i;})[0]; if(c&&c.scrollIntoView)c.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'});}
        }
        chipEls.forEach(function(c){c.addEventListener('click',function(){select(+c.dataset.i,false);});});
        function refresh(){try{map.invalidateSize(false);if(pts.length)map.fitBounds(pts,{padding:[34,34]});}catch(e){}}
        var el=document.getElementById('vmap');
        map.whenReady(function(){requestAnimationFrame(refresh);});
        if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){refresh();setTimeout(refresh,300);setTimeout(refresh,900);}});},{threshold:.01});io.observe(el);}
        [150,500,1200,2500].forEach(function(d){setTimeout(refresh,d);});
        window.addEventListener('resize',refresh);
        window.addEventListener('orientationchange',function(){setTimeout(refresh,300);});
        window.addEventListener('load',function(){setTimeout(refresh,200);});
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
    // Home link as the FIRST nav item (desktop + mobile), unless already present
    var dn=document.querySelector('nav.links');
    if(dn && !dn.querySelector('a[href="/"], a[data-home]')){var h1=document.createElement('a');h1.textContent='Home';h1.href='/';h1.setAttribute('data-home','');dn.insertBefore(h1,dn.firstChild);}
    var mmw=document.querySelector('.mobile-menu .wrap'); var mtop=mmw?mmw.querySelector('.mm-top'):null;
    if(mmw && !mmw.querySelector('a.mm-link[href="/"], a.mm-link[data-home]')){var h2=document.createElement('a');h2.className='mm-link';h2.textContent='Home';h2.href='/';h2.setAttribute('data-home','');if(mtop)mtop.parentNode.insertBefore(h2,mtop.nextSibling);else mmw.insertBefore(h2,mmw.firstChild);}
    // nav (desktop + mobile): add after Siding
    if(!document.querySelector('[data-gutter]')){
      var ns=[].slice.call(document.querySelectorAll('nav.links a')).filter(function(a){return a.textContent.trim()==='Siding';})[0];
      if(ns){var g=document.createElement('a');g.textContent='Gutters';g.href=GHREF;g.setAttribute('data-gutter','');ns.parentNode.insertBefore(g,ns.nextSibling);}
      var ms=[].slice.call(document.querySelectorAll('.mm-link')).filter(function(a){return a.textContent.trim()==='Siding';})[0];
      if(ms){var g2=document.createElement('a');g2.className='mm-link';g2.textContent='Gutters';g2.href=GHREF;g2.setAttribute('data-gutter','');ms.parentNode.insertBefore(g2,ms.nextSibling);}
    }
    // About link (desktop + mobile): add after Gutters, unless already present
    if(!document.querySelector('nav.links a[href="/about"], nav.links a[data-about]')){
      var na=[].slice.call(document.querySelectorAll('nav.links a')).filter(function(a){var t=a.textContent.trim();return t==='Gutters'||t==='Siding';}).pop();
      if(na){var a1=document.createElement('a');a1.textContent='About';a1.href='/about';a1.setAttribute('data-about','');na.parentNode.insertBefore(a1,na.nextSibling);}
    }
    if(!document.querySelector('.mobile-menu a[href="/about"], .mobile-menu a[data-about]')){
      var ma=[].slice.call(document.querySelectorAll('.mm-link')).filter(function(a){var t=a.textContent.trim();return t==='Gutters'||t==='Siding';}).pop();
      if(ma){var a2=document.createElement('a');a2.className='mm-link';a2.textContent='About';a2.href='/about';a2.setAttribute('data-about','');ma.parentNode.insertBefore(a2,ma.nextSibling);}
    }
    // ---- Collapse the 4 services into a "Services" dropdown (desktop) + accordion (mobile) ----
    var CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>';
    var SVC=['/roofing','/remodeling','/siding','/gutters'];
    // desktop
    var dnav=document.querySelector('nav.links');
    if(dnav && !dnav.querySelector('.nav-dd')){
      var dlinks=SVC.map(function(h){return dnav.querySelector('a[href="'+h+'"]');}).filter(Boolean);
      if(dlinks.length){
        var dd=document.createElement('div'); dd.className='nav-dd';
        var btn=document.createElement('button'); btn.type='button'; btn.className='nav-dd-btn'; btn.innerHTML='Services'+CHEV;
        var menu=document.createElement('div'); menu.className='nav-dd-menu';
        dd.appendChild(btn); dd.appendChild(menu);
        dlinks[0].parentNode.insertBefore(dd,dlinks[0]);
        dlinks.forEach(function(a){menu.appendChild(a);});
        btn.addEventListener('click',function(e){e.stopPropagation();dd.classList.toggle('open');});
        document.addEventListener('click',function(e){if(!dd.contains(e.target))dd.classList.remove('open');});
      }
    }
    // mobile
    var mm=document.querySelector('.mobile-menu .wrap');
    if(mm && !mm.querySelector('.mm-svc-toggle')){
      var mlinks=SVC.map(function(h){return mm.querySelector('a.mm-link[href="'+h+'"]');}).filter(Boolean);
      if(mlinks.length){
        var tog=document.createElement('button'); tog.type='button'; tog.className='mm-svc-toggle'; tog.innerHTML='Services'+CHEV;
        var sub=document.createElement('div'); sub.className='mm-sub';
        mlinks[0].parentNode.insertBefore(tog,mlinks[0]);
        tog.parentNode.insertBefore(sub,tog.nextSibling);
        mlinks.forEach(function(a){sub.appendChild(a);});
        tog.addEventListener('click',function(){tog.classList.toggle('open');sub.classList.toggle('open');});
      }
    }
    if(!document.querySelector('section.hero')) return; // rest is home only
    // 4th service card
    var cards=document.querySelector('#services .cards');
    if(cards && !document.getElementById('svc-gutters')){
      var art=document.createElement('article'); art.className='card'; art.id='svc-gutters';
      art.innerHTML='<div class="media ph"><img class="fill" loading="lazy" alt="Gutters" src="'+CDN+'v-gutters.jpg"></div>'+
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
        '<div class="feat-media ph"><img class="fill" loading="lazy" alt="Seamless gutter installation" src="'+CDN+'v-gutters.jpg"></div>'+
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
    const waIco='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-4-4.6-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.3.5c-.1.2-.3.3-.1.6.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.2.1.7-.1 1.2z"/></svg>';
    const sgIco='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18l1.2-3A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z"/></svg>';
    const clIco='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>';
    const plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
    const fab=document.createElement('div'); fab.className='fab';
    fab.innerHTML='<div class="fab-menu">'+
      '<a class="fab-item" href="https://signal.me/#p/+1'+phone+'" target="_blank" rel="noopener"><span class="ic sg">'+sgIco+'</span><span translate="no" class="notranslate">Signal</span></a>'+
      '<a class="fab-item" href="tel:'+phone+'"><span class="ic cl">'+clIco+'</span><span class="notranslate" translate="no" data-call-lbl></span></a>'+
      '</div><button class="fab-main" type="button" aria-label="Contact">'+plus+'</button>';
    document.body.appendChild(fab);
    // call label is language-controlled by us (never baked/frozen), so it always matches the current language
    var CALL={en:'Call 412-983-4397',es:'Llamar 412-983-4397'};
    var _callLbl=fab.querySelector('[data-call-lbl]');
    var setCall=function(){var l='en';try{if(localStorage.getItem('vlang')==='es')l='es';}catch(e){} if(_callLbl)_callLbl.textContent=CALL[l];};
    setCall();
    [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function(b){b.addEventListener('click',function(){setTimeout(setCall,60);});});
    fab.querySelector('.fab-main').addEventListener('click',function(e){e.stopPropagation();fab.classList.toggle('open');});
    document.addEventListener('click',function(e){ if(!fab.contains(e.target)) fab.classList.remove('open'); });
  })();

  // hero mascot dog — home hero only, injected if the embed doesn't already include it
  (function(){
    if(window.innerWidth<=900) return; // no dog on mobile
    if(!(location.pathname==='/'||location.pathname===''||/\/(index(\.html)?)$/.test(location.pathname))) return; // home hero only
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

  // ---- contact form -> FormSubmit (real email delivery, no backend) ----
  const qf=document.getElementById('quoteForm');
  if(qf){
    var FORM_ENDPOINT='https://formsubmit.co/ajax/turciosr1991@gmail.com';
    var fv=function(n){var el=qf.querySelector('[name="'+n+'"]');return el?String(el.value||'').trim():'';};
    // form is live now: drop the old "design mockup" note and the "(demo)" tag (works in EN & ES)
    var _note=document.querySelector('.form-note'); if(_note){_note.remove();}
    // Hours -> 24/7 (bilingual, follows the language toggle)
    (function(){
      var it=[].slice.call(document.querySelectorAll('.info-item')).filter(function(el){var b=el.querySelector('b');return b&&/Hours|Horario/i.test(b.textContent);})[0];
      var hs=it?it.querySelector('span'):null;
      if(!hs)return;
      var HRS={en:'Open 24/7<br>Every day, day or night',es:'Abierto 24/7<br>Todos los días, día o noche'};
      var setHours=function(){var l='en';try{if(localStorage.getItem('vlang')==='es')l='es';}catch(e){} hs.innerHTML=HRS[l];};
      setHours();
      [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function(b){b.addEventListener('click',function(){setTimeout(setHours,60);});});
    })();
    var _ok=document.getElementById('formOk');
    if(_ok){
      var _strip=function(){ if(/\(demo\)/i.test(_ok.textContent)){ _ok.innerHTML=_ok.innerHTML.replace(/\s*\(demo\)/gi,''); } };
      _strip();
      try{ new MutationObserver(_strip).observe(_ok,{childList:true,characterData:true,subtree:true}); }catch(e){}
    }
    // anti-spam: honeypot (invisible) + simple math captcha (no API/key)
    var _es=function(){try{return localStorage.getItem('vlang')==='es';}catch(e){return false;}};
    var _hp=document.createElement('input'); _hp.type='text'; _hp.name='_honey'; _hp.tabIndex=-1; _hp.setAttribute('autocomplete','off'); _hp.setAttribute('aria-hidden','true'); _hp.style.cssText='position:absolute!important;left:-9999px!important;width:1px;height:1px;opacity:0'; qf.appendChild(_hp);
    var _a=Math.floor(Math.random()*8)+2, _b=Math.floor(Math.random()*8)+1;
    var _cap=document.createElement('div'); _cap.className='form-field cap-field';
    _cap.innerHTML='<label for="capq">'+(_es()?'Anti-spam: ¿cuánto es ':'Anti-spam: what is ')+_a+' + '+_b+'?</label><input id="capq" name="_captcha_q" type="text" inputmode="numeric" autocomplete="off" placeholder="=?">';
    var _btn0=qf.querySelector('button[type=submit]');
    if(_btn0&&_btn0.parentNode){_btn0.parentNode.insertBefore(_cap,_btn0);}
    var _capInput=_cap.querySelector('input');
    qf.addEventListener('submit',function(e){
      e.preventDefault();
      if(_hp.value){return;} // honeypot filled -> bot
      if(parseInt(_capInput.value,10)!==(_a+_b)){alert(_es()?'Respuesta anti-spam incorrecta. Intenta de nuevo.':'Anti-spam answer is incorrect. Please try again.'); _capInput.focus(); return;}
      if(!fv('name')||!fv('phone')){qf.reportValidity&&qf.reportValidity();return;}
      var btn=qf.querySelector('button[type=submit]'); var orig=btn?btn.textContent:'';
      if(btn){btn.disabled=true;btn.textContent='Sending…';}
      var payload={name:fv('name'),phone:fv('phone'),email:fv('email'),service:fv('service'),message:fv('message'),_subject:'New quote request — Vertex NTA website',_template:'table',_cc:'Info@vertexntasolution.com'};
      fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)})
        .then(function(r){return r.json();})
        .then(function(d){
          if(d&&(d.success==='true'||d.success===true)){
            var ok=document.getElementById('formOk'); if(ok)ok.classList.add('show');
            if(btn){btn.textContent='Request Sent ✓';}
            qf.reset();
          } else { throw new Error('send failed'); }
        })
        .catch(function(){ if(btn){btn.disabled=false;btn.textContent=orig;} alert('Could not send right now — please call 412-983-4397.'); });
    });
  }
