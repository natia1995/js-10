// დავალება 10 
// დავწეროთ ფუნქცია რომელიც პარამეტრად მიიღებს რიცხვების მასივს და დააბრუნებს 
// ამ მასივიდან სხვაობას უდიდესსა და უმცირესს რიცხვს შორის

function add(
    namber=[15,20,144,55,68,95,448,762,984,3,371,5201,408,9064, 450,10485,8], 
    min = Math.min(...namber),
    max = Math.max(...namber)){
    console.log(namber)
    console.log(max)
    console.log(min)
    console.log(max - min)    
}
add()