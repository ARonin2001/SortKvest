class Password {
    constructor(userpassword, password) {
        this.userpassword = userpassword;
        this.password = password;
    }

    checkPassword() {
        if(this.password == this.userpassword)
            console.log("Ween!");
        else
            console.log("Not Ween!");
    }
}