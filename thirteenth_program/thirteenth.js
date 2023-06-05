// var string = 'this';
// // console.log(string);
// var name='Arul';
// var channel='techyarul'
// var message='Arul is a good boy';
// var temp=`${name} is a nice person and he has a channel called ${channel}`;
// // console.log(string+name+message);
// // console.log(temp);
// var len=name.length;
// // console.log(`Length of name is ${len}`)/
// console.log('Arul\nGoyal\tis\ba good boy')
// document.getElementById('content').innerHTML='<h3>this is an h3 heading</h3>';
var str='This is a string';
console.log(str)
var position=str.indexOf('is')
console.log(position)
position=str.lastIndexOf('is');
console.log(position);
var substr=str.slice(1,6);
console.log(substr);
var substr1=str.substring(1,5)
console.log(substr1);
var substr2=str.substr(1,7)
console.log(substr2);
var replaced=str.replace('string','arul');
console.log(str);
console.log(replaced);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
var newstring=str.concat('New String');
console.log(newstring);

var stringwithwhitespaces='            this consists    whitespaces    ';
console.log(stringwithwhitespaces);
console.log(stringwithwhitespaces.trim());

var char3 = str.charAt(2)
console.log(char3);