import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teachers = [
      { id: 5, firstName: 'Sergio', lastName: 'QUIMER', info: 'Plus de 25 ans en tant que prof de Salsa' },
      { id: 6, firstName: 'Adel', lastName: 'MARTINEZ', info: 'Total maîtrise du style Afro-cubain' },
      { id: 7, firstName: 'Diaz', lastName: 'MARTINEZ', info: 'Spécialisée dans le lady style' },
      { id: 8, firstName: 'Ruddy', lastName: 'JAPPONT', info: 'Kiz Kiz Kiz ... expérimenté en Kizomba' },
      { id: 9, firstName: 'Aliuska', lastName: 'BARRIENTOS', info: 'Rythmique rhumba afro cubain' },
      { id: 10, firstName: 'Yordani', lastName: 'LAZANO', info: 'Style cubain confirmé' },
      { id: 11, firstName: 'Alex', lastName: 'SALSERITO', info: 'Adore la Salsa Hip Hop et du Kompa' },
      { id: 12, firstName: 'Ricardo', lastName: 'MORENASSO', info: 'Meilleurs prof de Kizomba/Semba' },
      { id: 13, firstName: 'Alyson', lastName: 'CAP', info: 'Passes de Kizomba facile à placer en soirée' },
      { id: 14, firstName: 'Ludo', lastName: 'CAP JAPPONT', info: 'Passes de Kizomba facile à placer en soirée' }
    ];
    const members = [
      { id: 2, firstName: 'Raphaëlla', lastName: 'STUDENT', level: 1 },
      { id: 3, firstName: 'Gigi', lastName: 'JEF', level: 4 },
      { id: 4, firstName: 'Aurélie', lastName: 'SALSA', level: 2 },
      { id: 5, firstName: 'Christine', lastName: 'DE FONTES', level: 3 },
      { id: 6, firstName: 'Florence', lastName: 'BOET', level: 3 },
      { id: 7, firstName: 'Rachid', lastName: 'GUENDOUZE', level: 4 },
      { id: 8, firstName: 'Aurore', lastName: 'LERICHE MUNOZ', level: 0 },
      { id: 9, firstName: 'Carles', lastName: 'KOUAM', level: 2 },
      { id: 10, firstName: 'Richard', lastName: 'PULA', level: 1 },
      { id: 11, firstName: 'Tima Zahra', lastName: 'DIRANE', level: 0 },
      { id: 12, firstName: 'Marion', lastName: 'DUSSEAUX', level: 0 },
      { id: 13, firstName: 'Joséphine', lastName: 'DRUESNE', level: 3 }
    ];
    const lessons = [
      { id: 21, lessonName: 'Sombrero', level: 1, startDate: new Date(2018, 3, 15), endDate: new Date(2018, 6, 15), duration: 3 },
      { id: 22, lessonName: 'Setenta', level: 2, startDate: new Date(2018, 4, 20), endDate: new Date(2018, 7, 20), duration: 3 },
      { id: 23, lessonName: 'Ochenta Y Quatro', level: 3, startDate: new Date(2018, 5, 11), endDate: new Date(2018, 9, 11), duration: 4 },
      { id: 24, lessonName: 'Pirouli', level: 3, startDate: new Date(2018, 5, 11), endDate: new Date(2018, 9, 11), duration: 4 },
      { id: 25, lessonName: 'Siete Loco', level: 3, startDate: new Date(2018, 5, 15), endDate: new Date(2018, 9, 11), duration: 4 },
      { id: 26, lessonName: 'Montagna', level: 2, startDate: new Date(2018, 4, 20), endDate: new Date(2018, 7, 20), duration: 3 },
      { id: 27, lessonName: 'Registrala', level: 3, startDate: new Date(2018, 5, 11), endDate: new Date(2018, 9, 11), duration: 4 },
      { id: 28, lessonName: 'Copelia complicada', level: 2, startDate: new Date(2018, 4, 20), endDate: new Date(2018, 7, 20), duration: 3 },
      { id: 29, lessonName: 'Cunada', level: 4, startDate: new Date(2018, 7, 30), endDate: new Date(2018, 12, 30), duration: 5 },
      { id: 30, lessonName: 'Vacuna', level: 5, startDate: new Date(2018, 8, 17), endDate: new Date(2018, 10, 17), duration: 2 }
    ];
    const planings = [
      { id: 1, lessonId: 22, teacherId: 6, memberId: 11, note: "Setenta is one of the most important figure in salsa cubaine" },
      { id: 2, lessonId: 29, teacherId: 7, memberId: 9, note: "Cunada is a level 4 lesson, it is for good danser" },
      { id: 3, lessonId: 30, teacherId: 9, memberId: 7, note: "Vacuna is in the level of Rhumba ... not every danser can get it" },
      { id: 4, lessonId: 28, teacherId: 11, memberId: 5, note: "Copelia Complicada could be as the start from level 3" },
      { id: 5, lessonId: 26, teacherId: 13, memberId: 3, note: "Montagna can be put in right in the mittle for the beginner" },
      { id: 6, lessonId: 25, teacherId: 5, memberId: 4, note: "Siete Loco is a little bit difficult and belong to level 3" },
      { id: 7, lessonId: 23, teacherId: 8, memberId: 6, note: "Very beautiful, Ochenta Y Quatro belong to level 3" },
      { id: 8, lessonId: 27, teacherId: 10, memberId: 8, note: "Elegant and nice when you get it, Registrala belong to level 3++" },
      { id: 9, lessonId: 24, teacherId: 14, memberId: 10, note: "Not easy to understand by girls, Pirouli is nice to see and belong to level 3" },
      { id: 10, lessonId: 21, teacherId: 12, memberId: 2, note: "Sombrero is a hat ... first good figure in salsa cubain" }
    ];
    const logins = [
      { id: 2, username: 'raphaella', password: 'student', email: "rapha.student@gmail.com" },
      { id: 3, username: 'ghis soft', password: 'jefsoft', email: "gigi.soft@gmail.com" },
      { id: 4, username: 'owélie', password: 'salsa', email: "owelie.salsa@gmail.com" },
      { id: 5, username: 'chrichri', password: 'defontes', email: "de.fontes@hotmail.fr" },
      { id: 6, username: 'flory L', password: 'floryboet', email: "flory.boet@gmail.com" },
      { id: 7, username: 'kabil rachid', password: 'guendouze', email: "guendouze@yahoo.com" },
      { id: 8, username: 'sage femme', password: 'lerichemunoz MUNOZ', email: "aurore.munozt@hotmail.com" },
      { id: 9, username: 'le boss', password: 'carleskouam', email: "carles.kouam@gmail.com" },
      { id: 10, username: 'le richou', password: 'richoupula', email: "richard.pula@gmail.com" },
      { id: 11, username: 'zahra t', password: 'zahrat', email: "zahra.zahra@live.com" },
      { id: 12, username: 'marion dusseaux', password: 'dusseaux', email: "marion.dusseaux@live.com" },
      { id: 13, username: 'la grande', password: 'druesne', email: "jose.druesne@gmail.com" }
    ];
    return {teachers, members, lessons, planings, logins};
  }
}
