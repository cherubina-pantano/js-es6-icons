$(document).ready( function () {
  // Icon set
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
  ];


  // Array colori da associare alle icone
  const colors = [ 'blue', 'orange', 'purple'];
  console.log(colors);

  // Icons container
  const container = $('.icons');

  // Stampa icone b/w
  // printIcons(icons, container);

  // Stampa icone colorate
  const coloredIcons = colorIcons(icons, colors);
  console.table(coloredIcons);
  printIcons(coloredIcons, container);





}); // <-- end doc ready


// FUNZIONI
// PRINT ICONS
function printIcons(icons, container) {
  // iterazione sull'array e come parametro usare l'icona(=element)
  icons.forEach((icon) => {
    // destrutturazione e creazione nuove variabili
    const {family, prefix, name, color} = icon;
    // cosa inserire nel doc
    const html =
    `<div class="icon padd-20">
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">
        ${name}
      </div>
    </div>`;

    container.append(html);
  });

}

// COLORED ICONS
// quanti type ci sono e quali colori associare?
function colorIcons(icons, colors) {
  // Types
  const types = getType(icons);
    console.log(types);

  // Assegnare color in base al type usando corrispondenza indici degli array
  const coloredIcons = icons.map((icon) => {
    const indexType = types.indexOf(icon.type);
      return {
        ...icon,
        color: colors[indexType],
      }
  });

  return coloredIcons;
}

// Ottieni ICONS TYPES
function getType(icons) {
  const types = [];
  // iterazione per inserire nuovo type e verifica che non ci siano types ripetuti
  icons.forEach((icon) => {
      if(!types.includes(icon.type)) {
        types.push(icon.type);
      }
  });

  return types;
}
