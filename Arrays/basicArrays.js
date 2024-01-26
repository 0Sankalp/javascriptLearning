let marks_class_12 = [72,89,99,85,false,"Absent"]
console.log("the length of arrays ",marks_class_12.length)
console.log( marks_class_12 [0])
console.log( marks_class_12 [1])
console.log( marks_class_12 [2])
console.log( marks_class_12 [3])
console.log( marks_class_12 [4])
console.log( marks_class_12 [5])
console.log( marks_class_12 [6])// it will be undefined becuse it is empty
marks_class_12[6] = 92 // adding a  new value into array
marks_class_12[0] = 81 //changing the value of array
console.log( marks_class_12 )
console.log(typeof marks_class_12)