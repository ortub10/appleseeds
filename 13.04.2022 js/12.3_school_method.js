const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};

//1
school['findPerson'] = function(type,id){
    return type.find(obj =>(obj.id ===id))
}
console.log('Teacher:',school.findPerson(school.teachers,1)); 
console.log('Student:',school.findPerson(school.students,11)); 

//2
school['assignStudent'] = function(studentId, subject){
    const student = this.findPerson(this.students,studentId)
    const firstTeacher =  this.teachers.find(teacher =>(
        teacher.capacityLeft>0 && teacher.subjects.includes(subject)));
    if(firstTeacher!== undefined){
        firstTeacher.students[firstTeacher.students.length] = student.name;
        firstTeacher.capacityLeft-=1;
    }
    else
    console.log(`${student.name}, Sorry,no available teachers left`);    
} 
console.log('Teacher array before assignStudent:');
console.log(school.teachers);
school.assignStudent(13,'history');
school.assignStudent(11,'history');
school.assignStudent(12,'history');
console.log('Teacher array after assignStudent:');
console.log(school.teachers);

//3

school["assignTeachersSubject"] = function(teacherId,newSubject){
    const teacher = school.findPerson(this.teachers,teacherId);
    if(!(teacher.subjects.includes(newSubject))){
        teacher.subjects[teacher.subjects.length] = newSubject;
    }
    else{
        console.log(`${newSubject} Already exists`);
    }
}
console.log('Teacher array before assignTeachersSubject:');
console.log(school.teachers);
school.assignTeachersSubject(1,'history');
school.assignTeachersSubject(1,'physics');
console.log('Teacher array after assignTeachersSubject:');
console.log(school.teachers);

//4
school['addStudents'] = function(id, name, age){
    const checkId = school.findPerson(this.students,id);
    if(checkId !== undefined){
        console.log(`${id} id Already exists`)
    }
    else{
        const newStudent = {
            id: id,
            name: name,
            age:age  
        }
        this.students[this.students.length] = newStudent;
    }
}
console.log('Students array before addStudent:');
console.log(school.students);
school.addStudents(10, 'Jeramy',25 );
school.addStudents(14, 'Jeramy',25 );
console.log('Students array after addStudent:');
console.log(school.students);