let students = [

  { id: 1, name: "Anu", marks: 35, skills: [{frontend:['react','html'],backend:['express js','node js ']}] },

  { id: 2, name: "Ram", marks: 45, skills: ["JS"] },

  { id: 4, name: "flynn", marks: 35, skills: ["React", "JS"] },

  { id: 5, name: "Brynn", marks: 30, skills: ["HTML"] }

];

//is the name not contains any vowels
const vowels = ['a','e','i','o','u']
const VowelNames = students.filter(student => !student.name.toLowerCase().split("").some(letter => vowels.includes(letter)))
console.log(VowelNames)

//trying to remove the inbetween elements 
//the index 1 element is beeing removed
//splice(where to start editing, how many elements to delete, to i want to insert any elements?)
//from the index 1 delete one element(that is id 2 been removed)
students.splice(1,1)
//
console.dir(students, {depth : null})

//trying to add elements inbetween the array
//the index 0 (that is student 1) no one is deleted and student2 is added
const student2 = { id: 2, name: "Ram", marks: 45, skills: ["JS"] }
students.splice(1,0, student2)
console.log(students)
