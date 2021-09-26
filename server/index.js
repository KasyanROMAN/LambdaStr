function funDot(...Str)
{
let str =[];
  
  for(let str2 of Str)
  {
   str.push(str2 + ".");
   str.push(str2);
  }
  return str;
  
}
let str = funDot("A","B","C","D","E",);
for(let s of str)
{
console.log(s);
}