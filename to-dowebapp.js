//! Mes constantes

const form = document.querySelector('form'); // Je récupère mon elément formulaire

const trash = new Audio('./assets/sounds/trash.mp3'); // Ajout du son

//! Je prépare une boite de stockage pour mes données

const storage = () => {
    window.localStorage.todolist = list.innerHTML; // window.localStorage.LeNomQueJeVeux = CeQueJeVeuxSauvegarder
};

//! utilisation du localStorage

const useStorage = () => {
    if (window.localStorage.todolist) {
        list.innerHTML = window.localStorage.todolist; // Lorsque le navigateur rafraichit, je lui demande de récupére ce qu'il a stocké
    } else {
        // Si la liste est vide, on injecte une dummy data pour faciliter l'UX
        list.innerHTML = `<li><i class="fa-regular fa-square"></i> Click on a task to mark it done. <br><i class="fa-solid fa-arrow-pointer"></i> Click again to delete it</li>`;
    }
};

window.addEventListener('load', useStorage); // Une fois que la page est chargée, prends les données en mémoire

//! Ajouter un elément

form.addEventListener('submit', (e) => {
    e.preventDefault(); // el famoso e.preventDefault pour éviter le chargement de la page au submit
    list.innerHTML += `<li><i class="fa-regular fa-square"></i> ${item.value}</li>`; // Je passe des li à mon ul en les concaténant avec le +=
    item.value = ''; // Une fois envoyé, je vie le contenu de mon input
    storage(); // Sauvegarde mes values dans mon local storage
});

//! Checker un élément avant de le virer

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
        e.target.remove(); // e.target pour sélectionner un élément au click et remove() pour le supprimer https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
        trash.play(); // jouer le son de suppression
        storage(); // Sauvegarde mes values dans mon local storage
    } else {
        e.target.classList.add('checked'); // Ajout de la classe checked pour le style
    }
});