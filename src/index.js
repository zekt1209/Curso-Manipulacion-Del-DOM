/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')


// Utils
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');

const fetchData = async (url) => {
    // Conectarnos a la API
    const response = await fetch(url);
    // Transformar los resultados en JSON para poder manipularlos en JS

    if (response.status != '200') {
        console.warn('Error en status en la funcion fetchData, status: ' + response.status);
    }

    const data = await response.json();

    // console.log(data);

    // Retornamos lo que devuelve la API ya transformado en JSON y listo para utilizarse en JS
    return data;
};

const createAvocados = async (url) => {
    try {
    const data = await fetchData(`${url}/api/avo`);

    // Cachamos la propiedad que nos interesa donde viene el array de objetos (data)
    const results = data.data;

    console.log("Results from createAvocados: ")
    console.log(results);
    
    // Aqui vamos a ir almacenando cada container con sus elementos propios dentro
    let todosLosItems = [];
    
        // Maquetamos los nodos con la estructura que insertaremos al DOM
        results.forEach(element => {
            // Crear imagen
            const image = document.createElement('img');
            image.setAttribute('src', `${baseUrl}${element.image}`)
            
            // Crear nombre
            const name = document.createElement('h2');
            name.textContent = element.name;
            
            // Crear precio
            const price = document.createElement('div');
            price.textContent = element.price;
            
            // Crear container
            const container = document.createElement('div');
            container.append(image, name, price);
            todosLosItems.push(container);
        });
        
        appNode.append(...todosLosItems);
    } catch(error) {
        console.error(error);
    }
}

// fetchData(baseUrl);
createAvocados(baseUrl);