import job from '../models/models.js';
import user from '../models/usermodel.js';
import user1 from '../models/user1model.js';

export default class Controller {
    static renderhome(req, res) {
        // let user1=user.getalluser();
        res.render('home',{user:null});
    }
    static renderjobs(req, res) {
        const joblist = job.getalljobs();
        let user1=user.getalluser();
        
        res.render('jobseeker', { joblist: joblist,user:user1[0].who });
    }
    static addjob(req, res) {
        let id = job.getalljobs().length + 1;
        // let user1=user.getalluser();
        const { title, description, location, salary, company } = req.body;
        job.addjob(id, title, description, location, salary, company);
        return res.render('addsucces',{user:null});

    }
    static addjobform(req, res) {
        
        res.render('newjob',{user:null});
    }
    static view(req, res) {
        let user=user1.getall();
        const id = req.params.id;
        let jobDetails = job.getbyid(id);
        if (jobDetails) {
            return res.render('viewmore', { job: jobDetails,user:null});
        } else {
            res.send('Jobs not found');
        }
    }

    static search(req, res) {
        const { search } = req.body;

        if (!search || typeof search !== 'string') {
            return res.send('Invalid search value');
        }
        const jobs = job.getalljobs();
        const searcheduser = jobs.filter(job => job.title && job.title.toLowerCase().includes(search.toLowerCase()));
        if (searcheduser.length == 0) {
            return res.send('notfound');
        } else {
            // let user1=user.getalluser();
            return res.render('searched', { result: searcheduser,user:null });
        }
    }
    static recruiter(req, res) {
        const joblist = job.getalljobs();
        // let user1=user1.getall();
        return res.render('recruiter', { joblist: joblist,user:null });
    }
    static applied(req, res) {
        // let user1=user.getalluser();
        res.render('applyed',{user:null})
    }
    static rview(req, res) {
        const id = req.params.id;
        // let user1=user.getalluser();

        let job12=job.getbyid(id);
        res.render('rviewmore',{job:job12,user:null})
    }
    static login(req, res) {
        // let user1=user.getalluser();
        res.render('login',{errormessage:null,user:null});
    }
    static signup(req, res) {
        // let user1=user.getalluser();
        res.render('jobseekersignup',{user:null})
    }
    static accountcreated(req, res) {
        const { name, email, password, who } = req.body;
        user.adduser(name, email, password, who);
        return res.redirect('/login')
    }
    static postlogin(req, res) {
        const { email, password } = req.body;
        let users = user.getalluser();
        const validuser = users.find(user => user.email === email && user.password === password);
        if (validuser) {
            req.session.useremail = email;
            res.redirect('/jobseeker');

        }
        else {
            // let user1=user.getalluser();
            res.render('login', { errormessage: 'Invalid email or password, please go to the Sign-up and create your account',user:null })
        }



    }
    static login1(req,res){
        return res.render('login1',{errormessage:null,user:null})
    }
    static signup1(req,res){
        return res.render('signup1',{user:null})
    }
    static postsignup1(req,res){
        const{name,email,password,who}=req.body;
        user1.adduser1(name,email,password,who);
        res.redirect('/login1')

    }
    static postlogin1(req,res){
        const { email, password } = req.body;
        let users = user1.getall();
        const validuser = users.find(user => user.email === email && user.password === password);
        if (validuser) {
            req.session.useremail1 = email;
            res.redirect('/jobseeker1');

        }
        else {
            // let user1=user.getalluser();
            res.render('login1', { errormessage: 'Invalid email or password, please go to the Sign-up and create your account',user:null })
        }
    }
    static jobseeker1(req,res){
        let jobs=job.getalljobs();
        let user=user1.getall();
        return res.render('recruiterjob',{joblist:jobs,user:user[0].who})
    }
    static updateform(req,res){
        const id=req.params.id;
        let job1=job.getbyid(id);
        // console.log(job1.salary)
        return res.render('update',{job:job1,user:null})
    }
    static update(req,res){
        
        const{id,title,description,location,salary,company}=req.body;
        job.update(id,title,description,location,salary,company);
        let user=user1.getall();
        let jobs=job.getalljobs();
        return res.render('recruiterjob',{joblist:jobs,user:user[0].who})
    }
    static delete(req,res){
        const id=req.params.id;
        job.delete(id);
        let jobs=job.getalljobs();
        let user=user1.getall();
         return res.render('deleted',{user:null})

    }
}