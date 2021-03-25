const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Ex 1
const addLesson2 = (obj, k, value) => {
  obj[k] = value
}

addLesson2(lesson2, 'turno', 'noite');
console.log(lesson2);

//Ex 2
const keysList = (obj) => Object.keys(obj)

console.log(keysList(lesson1));

//Ex 3
const objLen = (obj) => Object.keys(obj).length;

console.log(`O número de chaves no Lesson3 é ${objLen(lesson3)}.`);

//Ex 4
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

//Ex 5
let allLessons = {};
/*
for (i = 1; i <= 3; i += 1) {
  Object.assign(allLessons, lesson[index])
}

console.log(allLessons);*/
Object.assign(allLessons, {lesson1, lesson2, lesson3})

console.log(allLessons);

//Ex 6
const studentsFull = (obj) => {
  let total = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
  return total
}
console.log(studentsFull(allLessons));

//Ex 7
const specificKey = (obj, position) => {
  const k = Object.keys(obj)[position];
  return k
}
console.log(specificKey(lesson1, 0));

//Ex8
const verify = (obj, key, value) => {
  const entrie = Object.entries(obj);
  let isEqual = false;
  
}
console.log(verify(lesson1));