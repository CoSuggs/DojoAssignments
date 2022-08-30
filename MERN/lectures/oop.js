class Person{
    // matching these parameter names w/ this.keyName is just a common pattern
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

class Student extends Person{
    constructor(firstName, lastName, hobbies = []){
        // super calls the constuctor for the paretn class to pass the shared properties
        // to our student so they can be save (also how student receives the fullName method)
        super(firstName, lastName)
        this.hobbies = hobbies
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, lecturesTaught){
        super(firstName, lastName)
        this.lecturesTaught = lecturesTaught
    }
}

class Lecture {
    constructor(topic, zoomLink, capacity, teacher, roster = []){
        this.topic = topic
        this.zoomLink = zoomLink
        this.capacity = capacity
        this.teacher = teacher
        this.roster = roster
    }

    createAttendanceList(){
        const fullNames = []

        for(let i = 0; i < this.roster.length; i++){
            const student = this.roster[i]
            fullNames.push(student.fullName())
        }
        console.log(fullNames);
        return(fullNames)
    }
}


const alexMiller = new Teacher("Alex", "Miller", 9001)
// console.log(alexMiller.fullName() + ` has taught ${alexMiller.lecturesTaught} lectures`);

const codysHobbies = ["soccer", "pottery", "watching anime"]
const cody = new Student("Cody", "Suggs", codysHobbies)
const seansHobbies = ["cycling", "pottery", "watching anime"]
const sean = new Student("Sean", "McNamee", seansHobbies)
const yuukisHobbies = ["gaming", "pottery", "underwater basket weaving"]
const yuuki = new Student("Yuuki", "Rideb", yuukisHobbies)


// // cody = new Person("not-cody", "Suggs") //can't do this b/c of const declaration
// // cody.firstName = "Codee"
// console.log(cody.fullName());
// console.log(cody.hobbies);

const mernLecture = new Lecture("OOP Lecture", "somezoomlink.com", 3, alexMiller, [cody, sean, yuuki])
// console.log(mernLecture);
mernLecture.createAttendanceList()