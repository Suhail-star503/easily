export default class user1{
    constructor(name,email,password,who){
        this.name=name;
        this.email=email;
        this.password=password;
        this.who=who;
    }
  static adduser1(name,email,password,who){
    let newuser1=new user1(name,email,password,who);
    user2.push(newuser1);
  }
  static getall(){
    return user2;
  }
}
let user2=[]