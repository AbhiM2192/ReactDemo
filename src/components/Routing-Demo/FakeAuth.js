 const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb){
        fakeAuth.isAuthenticated = true;
        setTimeout(cb,100);
    },
    logout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb,100);
    }
};

export default fakeAuth;