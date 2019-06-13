// CODE here for your Lambda Classes

//  Parent Class

class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        

    }
    
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
    
}


// Subclasses:

class Instructor extends Person{ // inherits parent class
    constructor(obj){;
        super(obj); // inherits parent classes properties
        this.specialty = obj.specialty;
        this.faveLanguage = obj.faveLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject){
        console.log (`Today we are learning about ${subject}.`);
    }

    grade(student,subject){
        console.log(`${student.name} recieves a perfect score on ${subject} `);
    }
}  

class Student extends Instructor{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach(function(el) {
            console.log(el);
        });
    }

    PRAssignment(subject){
        console.log(`${student.name}.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${student.name} has begun a sprint challenge on ${subject}`)
    }


}


class Project_Manager extends Student{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    };
        
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);

    }  
    
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


// instatiation and class calls

// Instructor Class:

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

dan.demo('JavaScript'); // Today we are learning about JavaScript
dan.speak(); // Hello my name is Dan, I am from Denver

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

fred.demo('Ruby');
fred.speak();

// Student Class:
const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

isaiah.grade({name:'Isaiah'},'CSS');
isaiah.listsSubjects();


const hamidou = new Student({
    name: 'Hamidou',
    age: 23,
    location: 'NYC',
    previousBackground: 'College Student',
    className: 'Web21',
    favSubjects: ['Python', 'JavaScript', 'Anthropology'],
});


hamidou.grade({name:'Hamidou'}, 'JavaScript');
hamidou.listsSubjects();
hamidou.speak();




// Project Manager:
const marguel = new Project_Manager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

marguel.standUp('Web21Marguel');
marguel.debugsCode({name: 'Hamidou'},'Ruby');

const austin = new Project_Manager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",

});

austin.speak();
austin.demo('Java');










