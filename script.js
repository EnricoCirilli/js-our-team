//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const teamMember = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO" ,
        foto : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor" ,
        foto : "angela-caroll-chief-editor.jpg",
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager" ,
        foto : "walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez ",
        ruolo : "Social Media Manager" ,
        foto : "angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer" ,
        foto : "scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos ",
        ruolo : "Graphic Designerr" ,
        foto : "barbara-ramos-graphic-designer.jpg",
    }
];

//MILESTONE 1:
//Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(teamMember);

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

document.write(
    teamMember.map(i => Object.values(i).join(' '))
    .join('<br>')
  );