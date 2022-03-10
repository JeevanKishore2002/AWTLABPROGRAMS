//classes using inheritance
/*class car
{
    constructor(name){
        this.cname=name;
    }
}
class car1 extends car{
    constructor(name,model)
{
    super(name);
    this.cmodel=model;
}
display()
{
    console.log("car name is"+" "+this.cname+" "+"model no is "+" "+this.cmodel);
}
}
var a=new car1("ford","v500");
a.display();
*/
//inheritance with different display methods
/*class Bike{
    constructor(name){
        this.bname=name;
    }
    display(){
        console.log("My Bike Name:"+this.bname);
    }
}
class Bike1 extends Bike{
    constructor(name,model){
        super(name);
        this.model=model;
    }
    display1(){
        super.display();
        console.log("bike model is :"+this.model);
    }
}
let a=new Bike1("Hero","5G");
a.display1();*/
//displaying without using static keyword
//required to create the object if the class if not declared the display as static  
/*class Student{
    display(){
        console.log("inside display method");
    }
}
let s=new Student();
s.display();*/
//displaying  with using static keyword
//not required to create the  object of the class if declared the display methiod as static we can directly access the display methiod by using the class name 
/*class Student{
     static display(){
        console.log("inside display method");
    }
}
Student.display();
*/

