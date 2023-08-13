import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonGeneratorService {

  constructor() { }

  generatePeople(num: number) : Person[] {
  let peopleArray : Person[] = [];

  let names : string[] = ["Gus", "Jesse", "Walter", "Hank", "Marie", "Skyler", "Saul", "Todd", "Huell", "Pete"];
  let descriptions : string[] = ["Body guard", "Cook", "Assistant cook", "Attorney", "Clerk", "Police officer", "Bookkeeper", "CEO", "Student", "Delivery guy"]
    for (let i = 0; i < num; i++) {
      peopleArray.push({
        name: names[Math.floor(Math.random() * (names.length-1))],
        age: Math.floor(Math.random() * 52 + 18),
        description: descriptions[Math.floor(Math.random() * (names.length-1))]
      })
    }
    return peopleArray;
  }
}
