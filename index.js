// Самостоятельная работа
// //1) Задача вывести все элементы массива в консоль ['Hello', 'World', 'My', 'name', 'is', 'Danil']
// let arr = ['Hello', 'World', 'My', 'name', 'is', 'Danil']
// for(let i = 0; i<arr.length; i++){
// 	console.log(arr[i]);
// }

// // 2) У вас есть массив гостей которым вы хотите отправить рассылку. Исключением должны являтся имена 'Ivan' - 'Oleg' им стоит отправить письмо о том что их к сожалению не приглосили
// let allNamePersonal = [
//  'Misha',
//  'Andrey',
//  'Sasha',
//  'Oleg',
//  'Danil',
//  'Dima',
//  'Artur',
//  'Ivan',
//  'Slava',
//  'Alisher',
//  'Amiran',
// ]
// for(let i = 0; i<allNamePersonal.length; i++){
// 	if(allNamePersonal[i]==='Ivan' || allNamePersonal[i]==='Oleg'){
// 		console.log(allNamePersonal[i] + ', к сожалению Вас не пригласили на пати(');
// 	}
// 	else{
// 		console.log(allNamePersonal[i] + ', приглашаем Вас на пати');
// 	}
// }

// //3) У вас есть массив с объектами. Каждый объект содержит имя, возраст, должность и бюджет которым обладает данный сотрудник. Задача отсортировать людей и на выходе создать новый массив в котором будут только разработчики с бюджетом более 1к$.
// const objPersonal = [
//  {
//    name: 'Misha',
//    age: 24,
//    position: 'Frontend Developer',
//    budget: 2300,
//  },
//  {
//    name: 'Andrey',
//    age: 27,
//    position: 'Data Analizi',
//    budget: 2000,
//  },
//  {
//    name: 'Sasha',
//    age: 32,
//    position: 'QA',
//    budget: 3200,
//  },
//  {
//    name: 'Oleg',
//    age: 21,
//    position: 'Frontend Developer',
//    budget: 800,
//  },
//  {
//    name: 'Danil',
//    age: 26,
//    position: 'Frontend Developer',
//    budget: 2000,
//  },
//  {
//    name: 'Dima',
//    age: 29,
//    position: 'Backend Developer',
//    budget: 1700,
//  },
//  {
//    name: 'Artur',
//    age: 24,
//    position: 'Testing',
//    budget: 500,
//  },
//  {
//    name: 'Ivan',
//    age: 25,
//    position: 'C++ Developer',
//    budget: 1300,
//  },
//  {
//    name: 'Slava',
//    age: 21,
//    position: 'Qa Testing',
//    budget: 1100,
//  },
//  {
//    name: 'Alisher',
//    age: 22,
//    position: 'Web Designer',
//    budget: 1000,
//  },
//  {
//    name: 'Amiran',
//    age: 26,
//    position: 'Graph Designer',
//    budget: 900,
//  },
// ]

// const objPersonalOver1000 = []

// for(let i=0; i<objPersonal.length; i++){
// 	if(objPersonal[i].budget > 1000){
// 		objPersonalOver1000.push(objPersonal[i])
// 	}
// }
// console.log(objPersonalOver1000);

// //У вас есть массив с объектами. В каждом объекте имя товара и его цена. Вам необходимо к каждому объекту в цикле добавить img в котором будех хранится фотография товара. В итоге вернуть новый массив с объектами которые содержать картинки.
// const products = [
//  {
//    title: 'Куртка Осеняя',
//    price: '2300$',
//  },
//  {
//    title: 'Шорты Puma', 
//    price: '300$',
//  },
//  {
//    title: 'Кросовки Nike',
//    price: '1200$',
//  },
//  {
//    title: 'Очки Prada',
//    price: '700$',
//  },
//  {
//    title: 'Кофта',
//    price: '450$',
//  },
// ]
// const productsImg = []
// for(const productsImg of products){
// 	productsImg.img = 'url'
// }
// console.log(products)

// Домашняя работа
// // 1
// let obj = {
// 	Саша: '2000',
// 	Вася: '3000',
// 	Коля: '5000'
// }
// for(let i in obj){
// 	console.log(`${i} - зарплата ${obj[i]}`);
// }

// // 2
// let arr = [19, 5, 9, 15, 10, 4]
// for(let i in arr){
// 	if(arr[i]>5 && arr[i]<20){
// 		console.log(arr[i]);
// 	}
// }

// // 3
// let arr = [10, 20, 50, 235, 3000]
// for(let i=0; i<arr.length; i++){
// 	let temp = String(arr[i])
// 	let char = temp[0]
// 	if(char == 1 || char == 2 || char == 5){
// 		console.log(temp)
// 	}
// }

// // 4
// let arr = [0,0,0,0,0,0,0,0,0,0], temp = 0 
// for(let i=0; i<10; i++){
// 	temp += 10
// 	arr[i] = temp
// 	console.log(arr[i])
// }

// // 5
// for(let i = 0; i<=100; i++){
// 	if(i%2==0){
// 		console.log(i)
// 	}
// }