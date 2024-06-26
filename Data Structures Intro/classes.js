class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName}, ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if(this.tardies > 3) {
            return `${this.firstName} ${this.lastName} You ARE EXPELLED!!!`;
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((sum, score) => sum+score);
        return sum/this.scores.length;
    }

    static EnrollStudents() {
        return 'ENROLL STUDENTS!';
    }
}

let firstStudent = new Student('Colt', 'Steele');
console.log(firstStudent.fullName());
let secondStudent = new Student('Blue', 'Steele');
secondStudent.markLate();
secondStudent.markLate();
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
let thirdStudent = new Student('Kitty', 'Kat', 1);
thirdStudent.addScore(100);
thirdStudent.addScore(100);
thirdStudent.addScore(100);
console.log(thirdStudent.calculateAverage());
console.log(Student.EnrollStudents());
