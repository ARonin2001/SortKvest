class Password {
    constructor(userpassword, password) {
        this.userpassword = userpassword;
        this.password = password;
    }

    getCheckPassword() {
        if(this.password == this.userpassword)
            return true;
        else
            return false;
    }
}