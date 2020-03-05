let person=prompt("please Enter your name");
let m1=prompt("Mark1");
while(isNaN(m1)===true)
{
    alert("enter a valid number");
    m1=prompt("Mark1");
}
let m2=prompt("Mark2");
while(isNaN(m2)===true)
{
    alert("enter a valid number");
    m2=prompt("Mark1");
}
let m3=prompt("Mark3");
while(isNaN(m3)===true)
{
    alert("enter a valid number");
    m3=prompt("Mark1");
}
m1=parseInt(m1);
m2=parseInt(m2);
m3=parseInt(m3);
const obj1={};
obj1.name=person;
obj1.Mark1=m1;
obj1.Mark2=m2;
obj1.Mark3=m3;
console.log(obj1);

const obj2={};
obj2.name=person;
obj2.Total=(m1+m2+m3);
console.log(obj2);

 const obj3={};
 obj3.avg=(obj2.Total/3);
 console.log(obj3);

 const obj4={};
 obj4.name=person;
 obj4.total=obj2.Total;
 obj4.Avg=obj3.avg;
 console.log(obj4);