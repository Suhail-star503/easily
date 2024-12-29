export default class user{
    constructor(name,email,password,who){
      this.name=name;
      this.email=email;
      this.password=password;
      this.who=who;

    }
    static adduser(name,email,password,who){
        let newuser=new user(name,email,password,who);
        users.push(newuser);
        
    }
    static getalluser(){
        return users;
    }
    

}

let users=[];
