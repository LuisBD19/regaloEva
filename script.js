const app = document.getElementById("app");
const progressBar = document.getElementById("progress-bar");

let current = -1; // -1 = bienvenida

/* Etiquetas de tipo */
const tipoLabels = {
  pregunta: "🧠 Pregunta",
  reto: "🎯 Reto",
  foto: "🖼️ Foto",
  adivinanza: "❓ Adivinanza",
  frase: "✍️ Completa la frase"
};

/* RETOS (el orden ES este array) */
const retos = [

  {
    tipo: "pregunta",
    texto: "¿Cuándo es mi cumpleaños?",
    respuesta: "23 de noviembre",
    fallo: "Esa fecha no es tontorrona😜 Como no te vas a saber mi cumpleaños?😅"
    
  },

  {
    tipo: "adivinanza",
    texto: "¿Cuántos regalos crees que hay?",
    respuesta: "25",
    fallo: "Caasii... Cuantos años cumples?🙃"
  },


  {
    tipo: "pregunta",
    texto: "¿Me amarías si fuese un gusano?",
    respuesta: "si",
    fallo: "Jooo... si seria mazo mono 🐛🐛"
  },

  {
    tipo: "reto",
    texto: "Di en voz alta: «Luis quiere más a Eva que Eva a Luis»"
  },

  {
    tipo: "foto",
    texto: "¿Donde surgio este encuentro?🤣🤳",
    imagen: "img/foto1.jpg",
    respuesta: "Buitrago",
    fallo: "Pista: B-it-a-- del lozoya"
  },

  {
    tipo: "reto",
    texto: "Te reto a que me des 50 besitos seguidos 💋"
  },

  {
    tipo: "pregunta",
    texto: "Qué prefieres: ¿Que te den 3 millones de euros o estar conmigo?",
    respuesta: "estar contigo",
    fallo: "Malaaaa😡 Por preferir el dinero te quedas sin regalo😒🤑. Es bromaa, dime que me prefieres porfa🤭"
  },

  {
    tipo: "adivinanza",
    texto: "Es pequeñito y cuando te ve se vuelve gigante😉",
    respuesta: "frentito",
    fallo: "Nooo, toma una pista: Te gusta bastante... 😜"
  },
  {
    tipo: "frase",
    texto: "Las lentejas están muy -----",
    respuesta: "ricas",
    fallo: "Aceptalo anda, en el fondo se que te gustan🙄😋 Pista: r--a-"
  },
  
  {
    tipo: "adivinanza",
    texto: "Adivina el regalo🎁: Cuando te las pones estás muy guapa y te dejan la carita suave como un BB💁​",
    respuesta: "Mascarillas",
    fallo: "Pista: Pon el nombre en plural jeje"
  },

  {
    tipo: "pregunta",
    texto: "Cuando discutimos… ¿quién tiene razón?",
    respuesta: "eva",
    fallo:"Esta vez no has tenio razon jeje😄"
  },

  {
    tipo: "foto",
    texto: "¿Quien tiene más correa, Mora o Luis?🤣",
    imagen: "img/foto2.jpg",
    respuesta: "Luis",
    fallo: "Me da que no...🙄"
  },
  

  {
    tipo: "reto",
    texto: "Di: «Amo las lentejas, es mi comida favorita»"
  },


  {
    tipo: "foto",
    texto: "¿Qué está mal en esta foto?",
    imagen: "img/fotoHimalayos.jpg",
    respuesta: "himalayos",
    fallo: "Mírala bien… esta claro lo que esta mal😏🗻👲"
  },


  {
    tipo: "pregunta",
    texto: "¿Quién es la más guapa del mundo mundial?",
    respuesta: "eva",
    fallo: "Acabas de cambiar tu regalo por un espejo para que te quede clarito...🙃💁‍♀️"
  },

  {
    tipo: "frase",
    texto: "Este collar no vale ----",
    respuesta: "nada",
    fallo: "Piensa en Eros😂😂"
  },
  
  {
    tipo: "foto",
    texto: "¿En que ciudad se hizo esta foto? 👀",
    imagen: "img/fotoAscensor.jpg",
    respuesta: "Toledo",
    fallo: "Pista: Fue un viaje muy chulo jeje"
  },
  

  {
    tipo: "adivinanza",
    texto: "Pueblo con gente tonta donde empezamos a salir",
    respuesta: "solana",
    fallo: "En su nombre tienen nuestro rio (Sin personalidad)."
  },

  {
    tipo: "pregunta",
    texto: "¿Quién te quiere más que a nada?",
    respuesta: "luis",
    fallo: "Pista: Lo tienes delante😚"
  },

  {
    tipo: "adivinanza",
    texto: "Son pesados, vienen de tierras lejanas, hablan siempre muy alto por telefono en el metro y siempre están en medio",
    respuesta: "himalayos",
    fallo: "Siempre nos estropean las fotos😡"
  },
  
  {
    tipo: "foto",
    texto: "Regalo doble😕",
    imagen: "img/foto3.jpg",
    soloBoton:true
  },

  {
    tipo: "adivinanza",
    texto: "Te encanta: Está crudo, tiene jugo de lima y es bien peruano",
    respuesta: "ceviche",
    fallo: "Pista: Empieza por C jeje"
  },

  {
    tipo: "pregunta",
    texto: "¿Dónde nacen los Himalayos?",
    respuesta: "siguenza",
    fallo: "Nombre de la ciudad donde nacen, fuimos y vimos donde nacian🙄 (Ponlo sin dieresis)"
  },

  {
    tipo: "video",
    header:"Felis cumpleaños...🎁​🎂​🎊​",
    video: "video/videoPinocho.mp4"
  },

  {
    tipo: "final",
    header:"Regalo final🎁🎁",
    texto: "Espero que te hayan gustado los regalos y que te lo hayas pasado genial con todas estas pruebas 🥰 \n Ojalá hoy tengas un día increíble y ojalá seguir celebrando contigo muchísimos más cumpleaños 🎂✨ \n De verdad, eres la mejor del mundo y me haces inmensamente feliz. \n Me encantas en todos los sentidos, estoy súper enamorado de ti y te prometo que eres el amor de mi vida ❤️ \n Te amooooo 💕💫"
  }
];

/* Bienvenida */
function renderWelcome() {
  app.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  if (reto.header) {
  const h2 = document.createElement("h2");
  h2.className = "header";
  h2.textContent = reto.header;
  card.appendChild(h2);
  }


  const h1 = document.createElement("h1");
  h1.textContent = "Bienvenida a tu regalo, Guapisimaa💖";

  const p = document.createElement("p");
  p.textContent = "Feliceees 25 🎂 Que los cumplaaas feliis...";

  const btn = document.createElement("button");
  btn.textContent = "Empezar 💕";
  btn.onclick = () => {
    current = 0;
    renderReto();
  };

  card.append(h1, p, btn);
  app.appendChild(card);
  progressBar.style.width = "0%";
}

/* Render reto */
function renderReto() {
  const reto = retos[current];
  app.innerHTML = "";

  progressBar.style.width = (current / retos.length) * 100 + "%";

  const card = document.createElement("div");
  card.className = "card";

  if (tipoLabels[reto.tipo]) {
    const label = document.createElement("div");
    label.className = "tipo";
    label.textContent = tipoLabels[reto.tipo];
    card.appendChild(label);
  }

  if (reto.texto) {
    const p = document.createElement("p");
    p.textContent = reto.texto;
    card.appendChild(p);
  }

  if (reto.imagen) {
    const img = document.createElement("img");
    img.src = reto.imagen;
    card.appendChild(img);
  }

  if (reto.tipo === "video") {
    const video = document.createElement("video");
    video.src = reto.video;
    video.controls = true;
    card.appendChild(video);

    const btn = document.createElement("button");
    btn.textContent = "Continuar";
    btn.onclick = next;
    card.appendChild(btn);

    app.appendChild(card);
    return;
  }

  if (reto.tipo === "final") {
    progressBar.style.width = "100%";
    app.appendChild(card);
    return;
  }

  if (reto.tipo === "reto") {
    const btn = document.createElement("button");
    btn.textContent = "Hecho ❤️";
    btn.onclick = next;
    card.appendChild(btn);

    app.appendChild(card);
    return;
  }
  // Foto especial solo con botón (ej: regalo doble)
if (reto.soloBoton) {
  const btn = document.createElement("button");
  btn.textContent = "Continuar 🎁";
  btn.onclick = next;
  card.appendChild(btn);

  app.appendChild(card);
  return;
}

  const input = document.createElement("input");
  input.placeholder = "Escribe aquí…";
  card.appendChild(input);

  const error = document.createElement("p");
  error.className = "error";
  card.appendChild(error);

  const btn = document.createElement("button");
  btn.textContent = "Comprobar";
  btn.onclick = () => {
    if (input.value.toLowerCase().trim() === reto.respuesta.toLowerCase()) {

      next();
    } else {
      error.textContent = reto.fallo || "Nope 😜 intenta otra vez";
    }
  };

  card.appendChild(btn);
  app.appendChild(card);
}

/* Avanzar */
function next() {
  const card = document.querySelector(".card");
  if (card) {
    card.classList.add("fade-out");
  }

  setTimeout(() => {
    current++;
    if (current < retos.length) {
      renderReto();
    }
  }, 300);
}


/* Inicio */
renderWelcome();
