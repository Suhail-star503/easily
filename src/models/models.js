export default class job{
    constructor(id,title,description,location,salary,company){
        this.id=id;
        this.title=title;
        this.description=description;
        this.location=location;
        this.salary=salary;
        this.company=company;

    }
    static getalljobs(){
        return joblist;
    }
    static addjob(id,title,description,location,salary,company){
      const newjob=new job(id,title,description,location,salary,company);
      joblist.push(newjob);
    }
    static getbyid(id){
        return joblist.find((p) => p.id == id);
    }
    static update(id,title,description,location,salary,company) {
        const index = joblist.findIndex((p) => p.id == id);
        joblist[index] = { id: id, title: title, description: description,location:location,salary:salary,company:company };
    }
    static delete(id){
        const index = joblist.findIndex((p) => p.id == parseInt(id));
        if (index !== -1) {
            joblist.splice(index, 1);
        }
    }
    

}
 const joblist=[
    new job(1,'Software Developer',"Develop software applications and dynamic websites",'Delhi',50000,'TCS'),
    new job(2,'Frontend Developer',"Develop UI for applications and websites",'Pune',20000,'Wipro'),
    new job(3,'Digital marketer',"Digital Marketer for Social media merketing",'Noida',60000,'Google'),
    new job(4,'Software Developer',"Develop software applications and dynamic websites",'Delhi',50000,'TCS'),
    new job(5,'Software Developer',"Develop software applications and dynamic websites",'Gujrat',50000,'Infogain'),
    new job(6,'Video editor',"Create a best animation and real life video",'Delhi',30000,'TCS'),
    new job(7,'Software Developer',"Develop software applications and dynamic websites",'Delhi',50000,'TCS'),

]