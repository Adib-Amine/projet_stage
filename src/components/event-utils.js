
let eventGuid = 0
//  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Economie generale (32)	M.Hamza	salle 6',
    // start: todayStr + 'T08:30:00',
    // end:todayStr + 'T10:30:00',
    startTime: '08:30:00',
    endTime: '10:30:00',
    daysOfWeek:[1],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Environnement socio-economique et Institutionnel (16)',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek:[1],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Algbre (26) Mme Akef',
    startTime: '14:00:00',
    endTime: '16:00:00',
    daysOfWeek:[1],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Analyse Numerique 1 (30) M.Tadlaoui',
    startTime: '16:00:00',
    endTime: '18:00:00',
    daysOfWeek:[1],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
   {
    id: createEventId(),
    title: 'Architecture des ordinateurs et assembleur (32) M.Abra',
    startTime: '08:30:00',
    endTime: '10:30:00',
    daysOfWeek:[2],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Techniques de base pour les reseaux (24) M.Rebbani',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek:[2],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Introduction aux BDD (34) M.Khiat',
    startTime: '08:30:00',
    endTime: '10:30:00',
    daysOfWeek:[3],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'SQL et SGBD (22)	M.Khiat',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek:[3],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Probabilite (22)	M.Illoussamen ',
    startTime: '08:30:00',
    endTime: '10:30:00',
    daysOfWeek:[4],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Recherche Operationnelle (34)	M.Saber',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek:[4],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Anglais 1 (30) Mme ... ',
    startTime: '14:00:00',
    endTime: '16:00:00',
    daysOfWeek:[4],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'TEC 1 langue francais 1 (30)	Mme Berrada ',
    startTime: '16:00:00',
    endTime: '18:00:00',
    daysOfWeek:[4],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Algorithmique (30) M.qbadou ',
    startTime: '08:30:00',
    endTime: '10:30:00',
    daysOfWeek:[5],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  },
  {
    id: createEventId(),
    title: 'Programmation langage C (26)	M.Qbadou',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek:[5],
    startRecur : "2020-10-01",
    endRecur   : "2021-01-01"
  }
]

export function createEventId() {
  return String(eventGuid++)
}
