const {Key} = require('selenium-webdriver');
var BasePage = require ('../base/basePage.js');

class LoginPage extends BasePage{

    async open(){
        await this.go_to_url();
    }

    async userNameSendKey(username){
        await this.sendKey("username",username);
    }

    async passwordSendKey(password){
        await this.sendKey("password",password);
    }

    async login(){
        await this.clickByClassName("mat-focus-indicator mat-flat-button mat-button-base mat-primary");
    }

    async controlLogin(status){
        await this.shouldBe("[id='welcomeUserMessage']",status);
    }

    async controlLoginPage(){
        await this.shouldBe("[class='login-header']",true);
    }

    async userNameClear(){
        await this.clear("username");
    }

    async passwordClear(){
        await this.clear("password");
    }
}
module.exports = new LoginPage();
