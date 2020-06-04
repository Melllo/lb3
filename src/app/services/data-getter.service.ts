import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AkatsukiList {
  name: string;
  rank: string;
  age: number;
}

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  private akatsuki: AkatsukiList[] = [
    {
      name: "Hidan",
      rank: "A",
      age: 40,
    },
    {
      name: "Tobi",
      rank: "S",
      age: 29,
    },
    {
      name: "Sasori",
      rank: "B",
      age: 30,
    },
  ];

  private userName = "";

  private users = ["Illay", "Anna", "Egor", "Alla"];

  constructor() {}

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getAkatsuki(): Observable<AkatsukiList[]> {
    return of(this.akatsuki);
  }

  addAkatsuki(person: AkatsukiList) {
    this.akatsuki.push(person);
  }

  delAkatsuki(id) {
    this.akatsuki.splice(id, 1);
  }
}
