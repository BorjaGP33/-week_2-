import { Person } from "./classperson";

export class Contacts{

 public people:Person []

    contructor(){
        this.people = []

        }

    printCalendar(){
        
        for( let people of this.people){
            console.log(people);
        }
    }
}