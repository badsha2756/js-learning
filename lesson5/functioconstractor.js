//adding  function inside contractor:

function student(name,age,phone,language){
    this.name= name;
    this.age= age;
    this.phone = phone;
    this.language= language;

    this.display= function() {

           console.log(this.name);
           console.log(this.age);
           console.log(this.phone);
           console.log(this.language);

    }
}

let student1= new student ("Badsha Saikh","28","8145093548","Bengali, Eng, Hindi");
let student2= new student ("wasim Ikbal","29","90934565","Bengali, Eng, Hindi");
let student3= new student ("Sayeta Biswas","25","7076562772","Bengali, Eng, Hindi");
let student4= new student ("Masud Biswas","31","7909566535","Bengali, Eng, Hindi");
let student5= new student ("Gourab Adhikary","32","8978625545","Bengali, Eng, Hindi");

 student1.display();
 student3.display();
 student5.display();