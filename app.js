let pronombre = ['el','tu','un','nuestro'];
let adjetivo = ['sucio','oscuro','gran','bello'];
let sustantivo = ['mapache', 'individuo', 'gato', 'rata','vecino','pelado'];

for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
        for (let s = 0; s < sustantivo.length; s++) {
           
            console.log(pronombre[p] + adjetivo[a] + sustantivo[s] + ".com");
        }
    }
}