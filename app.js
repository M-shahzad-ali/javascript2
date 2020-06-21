
//  =======================TASK chap #21 to 25






//========================Q1

/*var firstName=prompt("enter first name");
var lastName=prompt("enter last name");
var fullName=firstName+" "+lastName;
console.log(fullName);*/




//============================Q2


/*var mobileModel=prompt("enter your fav mobile phone model");
console.log("my favourite phone is "+"  "+mobileModel);
var length=mobileModel.length;
console.log("length of string is"+ "  "+length);
*/



//========================================Q3


/*var word="pakistani";
var b=word.indexOf("n");
console.log("string "+ "   "+word);

console.log("index of"+" " +word.charAt(7)+"  "+b);
*/



//==================================q4




/*var word="Hello world";
var b=word.lastIndexOf("l");
console.log("string  is "+" " +word)
console.log("last index of "+word.charAt(b)+" "+"is" +" "+b);*/



//================================Q5

/*var word="pakistani"
var b=word.indexOf("i");
var c=word.charAt(b);
console.log(word)

console.log("chahracter at index"+" " +b+" "+" is"+" "+c);*/




//========================Q6

/*var firstName=prompt("enter first name");
var lastName=prompt("enter last name");
var fullName=firstName+" "+lastName;
console.log(fullName);*/




//==========================Q7


/*var city="Hyderabad";
var repl=city.replace("Hyderabad","Islamabad");
console.log("city"+"   "+city);
console.log("after replacement :"+""+repl);*/











//==========================Q8

/*var message="Ali and Sami are best friends . they play cricket and football together";
console.log(message)
var rep=message.replace(/and/g,"&");
console.log(rep)*/







//==============================Q9



/*var  num="472";
console.log("value"+" "+num);
console.log("string");
var b=parseInt(num);
console.log("value"+" "+b);
console.log("integer");
*/




//=============================Q10




/*var word=prompt("enter any word")
var cap=word.toUpperCase();
console.log("user input "+""+word)
console.log("UPPER CASE"+" " +cap)*/


//========================Q11

/*var word=prompt("enter any word");
var b=word.slice(0,1);
var c=b.toUpperCase();
var d=word.slice(1);
var f=d.toLowerCase();
var con= c+f;
console.log(con)*/







//========================================Q12

/*var num="35.36";
console.log("number" +" "+num)
var b=num.replace(".","");
var con=parseInt(b);
console.log("result"+" " +con)*/




//=====================================Q16
/*var a="university of karachi";
()
var i;

for(i=0;i<a.length;i++){

    console.log(a[i]);
}
*/

//======================    Q17
/*var a=prompt("enter any word")
i=a.length-1;
var b=a.charAt(i);
console.log("user input"+" "+a)
console.log("last character of input :"+" "+b)*/

//======================    Q18


/*var text="the quick brown fox jumps over the lazy dog";
var b=(text.match(/the/g) || []).length;
document.write("text :"+" "+text+"<br>")
document.write("there are "+b+" "+  "occurance of word"+" " +"<q>the</q>");

*/

































//  =======================TASK chap #26 to 30

//======================    Q1


/*var a=+prompt("enter any  random mnumber ");
var b=Math.random()*a
document.write("number"+" "+b+"<br>")
var round=Math.round(b)
document.write("round off value "+" "+round+"<br>")
var fl=Math.floor(b)
document.write("floor value"+" "+fl+"<br>")
var cl=Math.ceil(b)
document.write("ceil value"+" "+cl+"<br>")*/


//=========================== Q2



/*var a=+prompt("enter any negative  random mnumber ");
var b=Math.random()*a
document.write("number"+" "+b+"<br>")
var round=Math.round(b)
document.write("round off value "+" "+round+"<br>")
var fl=Math.floor(b)
document.write("floor value"+" "+fl+"<br>")
var cl=Math.ceil(b)
document.write("ceil value"+" "+cl+"<br>")*/





//===========================Q3





/*var a=+prompt("enter absolute value");
var b=Math.abs(a);
document.write("the absolute value of"+" "+a+"  "+"is" +"  "+b);*/





//====================Q4

/*var a=+prompt("enter 1st random number");
var b=Math.random()*a;
var c=+prompt("enter 2nd random number")
var d=Math.random()*c;
var round1=Math.round(b);
var round2=Math.round(d);
document.write("<b>Random dice value is</b> ;"+" "+"<b>"+round1+"</b>"+"<br>");
document.write(" <b>Random dice value is</b> ;"+" "+"<b>"+round2+"<b>"+"</br>");*/



//=====================Q5



  /*var a=Math.random()*3;
  var b=Math.round(a)
  if(b==1){
      document.write(b+"<br>"+"random coin value :"+""+"Tail")
  }
  else if(b==2){
    document.write(b+"<br>"+"random coin value :"+""+"Head")
  }
*/




//======================Q6


/*var a=Math.random();
var round=Math.ceil(a);
document.write(a+"<br>")
document.write(round+"<br>")
 b=+prompt("enter number b/w 1 -100");
var c=round*b;
document.write(c)*/
//var a="love";
//document.write(a)


  







//=========Q7


/*var a=prompt("enter your weight in kilogram")
var b=parseFloat(a);
console.log("the weight of user is"+" "+b+" "+"kilogram")*/




//================Q8


/*var a=1;
var b=+prompt("enter any number in b/w 1 to 10");
if(a==b){
  console.log("congratulation user")
}
else{
  console.log("try again")
}



//==============TASK #3

//=============Q1

/*var time=new Date();
console.log(time)*/



//==============Q2




/*var time=new Date();
console.log(time);
var b=time.toString();
var month=b.slice(4,7);
console.log("current month"+" "+month+" ")*/




//==============Q3




/*var time=new Date();
console.log(time);
var b=time.toString();
var day=b.slice(0,3);
console.log("today is"+" "+day+" ")*/




//===================Q4



/*var a=["sun","mon","tues","wed","thurs","fri","sat"];



var b=new Date();
console.log(b)
var c=b.toString();
var d=c.slice(0,3);
if(d==a[0]||a[6]){

    console.log("its fun day")
}*/

//==================Q5


/*var a=new Date();
console.log(a)
var b=a.toString();
var c=b.slice(8,10);
if(c<16){

    Console.log("first fifteen day of the month")
}
else{
    console.log("last days of the month")
}
*/


//========Q6

/*var date=new Date();
console.log("current date"+" "+date)
var mili=date.getTime()
console.log("Elapsed milliseconds since january 1, 1970 :"+" "+mili)
var min=(mili/1000*60*60);
console.log("Elapsed minutes since january 1, 1970 :"+" "+min)*/

//====================Q8

/*var laterdate=new Date("dec 31 ,2020");
console.log(laterdate)*/


//================Q9

/*var start=new Date("june 18 ,2015");
var a=start.getTime();
//console.log(a)
var day=a/(1000*60*60*24);

//console.log(day)
var today=new Date();
var b=today.getTime();
var day2= b/(1000*60*60*24);
//console.log(day2);
var acc=day2-day;
//console.log(acc)
var round=Math.round(acc);
console.log(round+" "+"days have passed sice 1st ramdan,2015" );
*/





//===========================       Q10


/*var ref=new Date("dec 5,2015")
var set=ref.setHours(22)
var min=ref.setMinutes(50)
var seec=ref.setSeconds(16)
var mili1=ref.getTime();


//console.log(mili1)
var ref1=new Date("jan 01,2015");
//console.log(ref1);
var mili2=ref1.getTime();
//console.log(mili2)
var diff=mili1-mili2;
var acc=diff/(1000*60);
var round=Math.round(acc);
console.log("on reference date"+" "+ref)
console.log(round+" "+" second has passed since beginning jan 01,2015")


*/





//==================Q11
/*var date =new Date();
console.log(date)
var a=date.toString();
var h=date.getHours();
console.log(h)

var date1=new Date()
var set=date1.setHours(1)
console.log(set)*/















//======================Q13


/*var a=new Date(prompt("jan 1 ,1970"));
var b=a.getTime();

var today=new Date();
var mil=today.getTime();

var acc=mil-b;


var con=acc/(1000*60*60*24*30*12);

var fixed=Math.floor(con);
console.log("your age is "+" "+fixed)


var year=2020;
var sha=year-fixed;
console.log("your brth year is"+" "+sha)




*/

//========================Q14

/*var customerName=prompt("enter customer name");
document.writeln("customer Name"+""+"<b>"+customerName+"<b>"+"<br>")
var month=prompt("enter current month");
document.writeln("Month"+""+month+"<br>");
var unit=+prompt("enter number of unit")
document.writeln("number of unit :"+""+unit+"<br>")
var charges=16;
document.writeln("charges per unit is"+""+charges+"<br>")
var payable=unit*charges;
document.writeln("Net Amount Payable (withIn Due Date)"+""+payable);
var surcharge=350;
document.write("late payment surcharge"+""+surcharge+"<br>")

var duedate=payable+surcharge;

document.write("Gross Amount Payable After Due Date"+" "+duedate+"<b>");*/





















//======================================TASK 4


//==============================Q1




/*function foo(){

       var a=new Date();
       document.write(a)
}






//===========================Q2




function name(a,b){

    document.write(a+b)



}
name("shahzad"," "+"khan");
document.write("<br>")
foo();
*/




//===================Q3

/*var a=+prompt("enter first number");
var b=+prompt("entre second number")

function add(a,b){


    return a+b;

}


console.log(add(a,b))*/

//====================Q4














//==================Q5
/*var a=+prompt("enter number")
function sqr(a){

    return a*a;




}
console.log(sqr(a))*/










//=================Q6


/*var f=1;
var a=+prompt("enter factorial number");
function fac(){


for(var i=1 ;i<=a;i++){

     f=f*i;
     document.write("the factorial of"+i+" "+"is"+f+" "+"<br>");
    







}

}
fac()*/






//==============================Q7  

/*var a=+prompt("enter number where you want to start counting");
var b=+prompt("enter number where you want to end counting")


function count(a,b){

    for(var i=a;i<=b;i++)
{

    document.write(i+"<br>")
}


    
}
count(a,b);*/











//===================Q9



/*function count(width,height){

    Area=width*height;
    document.write("Area of rectangle is "+Area);







}
count(2,3);*/
/*


//======================Q10
function palindrone(){
    var word=prompt("enter word to check palindrone");
    var b=word.split("").reverse().join("");
    if(word==b){
        document.write(b+""+"is palindrone")
    }
    else {

        document.write("not palindrone")
    }



    
}
palindrone();
*/
//=============================Q11

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('the quick brown fox jump'));






//=================Q14  

/*radius=+prompt("enter radius");


function circumference(radius){
  
    circumferenceCircle=2*(3.14)*radius



    document.write("the circumference of circle is "+circumferenceCircle+"<br>");
}


function are(){


    area=(3.14)*(radius*radius);
    document.write("the area of circle"+area+"<br>");
}
are();

circumference(radius);

*/
















