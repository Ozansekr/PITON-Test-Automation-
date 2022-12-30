const {Key} = require('selenium-webdriver');
var BasePage = require ('../base/basePage.js');

class dashboardPage extends BasePage{

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

    async createEvent(){
        await this.clickByClassName("mat-button-wrapper");
    }

    async newcreateEvent(){
        await this.clickByClassName("mat-focus-indicator mat-flat-button mat-button-base mat-primary");
    }

    async addParticipant(){
        await this.clickByClassName("mat-focus-indicator mat-flat-button mat-button-base");
    }
    
    async removeParticipant(){
        await this.clickByClassName("mat-focus-indicator mat-icon-button mat-button-base mat-warn");
    }

    async addNameEvent(name){
        await this.sendKey("name",name);
    }

    async addDescriptionEvent(description){
        await this.sendKey("description",description);
    }

    async addParticipantDate(AddEventDate){
        await this.sendKey("mat-input-4",AddEventDate);
    }

    async addParticipantName(AddEventName){
        await this.sendKey("mat-input-5",AddEventName);
    }

    async addParticipantSurname(AddEventSurname){
        await this.sendKey("mat-input-6",AddEventSurname);
    }

    async addParticipantContact(AddEventContact){
        await this.sendKey("mat-input-7",AddEventContact);
    }

    async removeEvent(){
        await this.clickByClassName('mat-focus-indicator mat-icon-button mat-button-base mat-accent');
    }

    async userListEvent(){
        await this.clickByClassName('mat-focus-indicator mat-icon-button mat-button-base mat-warn');
    }

    async controldashboard(){
        await this.shouldBe("get ='https://e2e-assessment.piton.com.tr/dashboard'",true);
    }

    async controlLoginPage(){
        await this.shouldBe("[class='login-header']",true);
    }

    async controlEventList(){
        await this.shouldBe("[class='mat-card-content']",true);
    }

    async controlLogin(){
        await this.shouldBe("[class='mat-card mat-focus-indicator']",true);
    }

    async editEvent(){
        await this.clickByClassName("mat-icon notranslate material-icons mat-icon-no-color");
    }

    async addParticipant(){
        await this.clickByClassName("mat-focus-indicator mat-flat-button mat-button-base");
    }

    async addParticipant2Name(AddEventName){
        await this.sendKey("mat-input-14",AddEventName);
    }

    async addParticipant2Surname(AddEventSurname){
        await this.sendKey("mat-input-15",AddEventSurname);
    }

    async addParticipant2Contact(AddEventContact){
        await this.sendKey("mat-input-16",AddEventContact);
    }

    async descriptionClear(){
        await this.clear("description");
    }


}
module.exports = new dashboardPage();
