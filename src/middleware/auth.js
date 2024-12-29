export function auth(req, res, next) {
    if (req.session.useremail) {
        next();
    }
    else {
        res.redirect('login');
    }
}
export function auth1(req,res,next){
    if (req.session.useremail1) {
        next();
    }
    else {
        res.redirect('login1');
    }
}