const {Key} = require('selenium-webdriver');
var BasePage = require ('../base/basePage.js');

class eventPage extends BasePage{

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
    
    async controlCreateEvent(){
        await this.shouldBe("[class='section-title']",true);
    }

    async controlCreateSuccessful(){
        await this.shouldBe("[class='mat-simple-snackbar ng-star-inserted']",true);
    }
    
    async editEvent(){
        await this.clickByClassName("mat-icon notranslate material-icons mat-icon-no-color");
    }

    async saveEvent(){
        await this.clickByClassName("mat-focus-indicator mat-flat-button mat-button-base mat-primary");
    }
    
    async NameClear(){
        await this.clear("name");
    }

    async descriptionClear(){
        await this.clear("description");
    }

    async addParticipantDatee(AddEventDate){
        await this.sendKey("mat-input-10",AddEventDate);
    }

    async nameParticipantClear(){
        await this.clear("mat-input-11");
    }

    async surnameParticipantClear(){
        await this.clear("mat-input-12");
    }
    
    async editParticipantName(AddEventName){
        await this.sendKey("mat-input-11",AddEventName);
    }

    async editParticipantSurname(AddEventSurname){
        await this.sendKey("mat-input-12",AddEventSurname);
    }
    
}
module.exports = new eventPage();