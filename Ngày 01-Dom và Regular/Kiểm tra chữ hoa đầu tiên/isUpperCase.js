let regexp = /^[A-Z]/;
function isFirstLetterUpperCase(str){
   if(regexp.test(str)){
    console.log(str);
   }else{
    console.log("String's first character is not uppercase");
   }
}
let string1 = "nguyen van Nam"
isFirstLetterUpperCase(string1)