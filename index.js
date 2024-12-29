import express from 'express';
import Controller from './src/controller/controller.js';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import {auth} from './src/middleware/auth.js'
import {auth1} from './src/middleware/auth.js'
let app=express();
app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('src/views'));
app.use(expressLayouts);
app.use( session({
    secret:"secretwiththis",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.get('/',Controller.renderhome);
app.get('/login',Controller.login);
app.post('/postlogin',Controller.postlogin)
app.get('/signup',Controller.signup);
app.post('/signup',Controller.accountcreated)
app.get('/jobseeker',auth,Controller.renderjobs);
// app.get('/recruiter',auth1,Controller.recruiter);
app.get('/new',Controller.addjobform);
app.get('/view/:id',Controller.view);
app.get('/rview/:id',Controller.rview);
app.post('/new',Controller.addjob);
app.get('/log-out', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Some this went wrong please try again later')
        }
        res.redirect('/login'); // Correct usage
    });
});
app.get('/login1',Controller.login1);
app.post('/search',Controller.search);
app.get('/applyed',Controller.applied)
app.get('/signup1',Controller.signup1)
app.post('/signup1',Controller.postsignup1);
app.post('/postlogin1',Controller.postlogin1)
app.get('/jobseeker1',auth1,Controller.jobseeker1)
app.get('/update/:id',Controller.updateform)
app.post('/update',Controller.update)
app.get('/delete/:id',Controller.delete)
app.get('/new12', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Some this went wrong please try again later')
        }
        res.redirect('/login1'); // Correct usage
    });
});
app.listen(3000,()=>{
    console.log('Server started at 3000 port');
})
