// ---------------------------------------concatenetion-------------------------------------

// CONCATENATION : afficher du texte et des variables
// Déclarer des variables 
// age, prenom, nom de famille, adresse, formation, organisme de formation

// récuperer dans ue variable le message 
// Je m'appelle NOM PRENOM? j'ai AGE ans et je suis en formation FORMATION à ORGANISME

// 3 façons '', "", ``

const age = 40
const firstName = 'Manoj'
const lastName = 'GNANAVEL'
const adresse = '4 Parc de la noue'
const formation = 'Dev Web'
const organisation = 'Doranco'

let information = ("je m'appelle" + firstName +'' +lastName + ", J'ai "+age+ " ans et j'habite "+ adresse+ ", je suis en formation" + " à" + organisation)

// Template literals
information = `Je m'appelle ${firstName} ${lastName} j'ai ${age} ans et je suis en formation ${formation} à ${organisation}`

console.log(information)