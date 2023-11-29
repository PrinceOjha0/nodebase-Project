module.exports.profile = function(req, res){
    
    return res.render('user_profile',{
        title:"User Profile"
    });
}
// render sign up page
module.exports.signUp= function(req,res){
    console.log('signup');
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    });
}
//render sign in page
module.exports.signIn= function(req,res){
    return res.render('user_sign_in',{
        title:"Codial | Sign in"
    });
}