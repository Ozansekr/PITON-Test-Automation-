const eventPage = require('../pages/eventPage.js');

describe('Event Module', function() {
    this.timeout(50000);

    beforeEach(function() {

    });


    it('Test Case 1', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
    })
    
    it('Test Case 2', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.newcreateEvent();
        await eventPage.controlCreateEvent();
    })


    it('Test Case 3', async function() {     await eventPage.open();
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.addParticipant();
    })

    it('Test Case 4', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.removeParticipant();
    })
    
    it('Test Case 5', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.addNameEvent("Test");
        await eventPage.addDescriptionEvent("Test Test");
        await eventPage.addParticipantDate("11/12/2022");
        await eventPage.addParticipantName("Ozan");
        await eventPage.addParticipantSurname("Şeker");
        await eventPage.addParticipantContact("ozan.sekerr@outlook.com");
        await eventPage.newcreateEvent();
        await eventPage.controlCreateSuccessful();
    })

    it('Test Case 6', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.addNameEvent("Test");
        await eventPage.addDescriptionEvent("Test Test");
        await eventPage.addParticipantDate("11/12/2022");
        await eventPage.addParticipantName("Ozan");
        await eventPage.addParticipantSurname("Şeker");
        await eventPage.addParticipantContact("ozan.sekerr@outlook.com");
        await eventPage.newcreateEvent();
        await eventPage.editEvent();
        await eventPage.NameClear();
        await eventPage.descriptionClear();
        await eventPage.addNameEvent("Test T#2");
        await eventPage.addDescriptionEvent("Test Test T#2");
        await eventPage.saveEvent();
    })

    it('Test Case 7', async function() {
        await eventPage.open();
        await eventPage.userNameSendKey("automationtest");
        await eventPage.passwordSendKey("123456789");
        await eventPage.login();
        await eventPage.createEvent();
        await eventPage.addNameEvent("Test");
        await eventPage.addDescriptionEvent("Test Test");
        await eventPage.addParticipantDate("11/12/2022");
        await eventPage.addParticipantName("Oza");
        await eventPage.addParticipantSurname("Şeke");
        await eventPage.addParticipantContact("ozan.sekerr@outlook.com");
        await eventPage.newcreateEvent();
        await eventPage.editEvent();
        await eventPage.nameParticipantClear();
        await eventPage.surnameParticipantClear();
        await eventPage.editParticipantName("Ozan");
        await eventPage.editParticipantSurname("Şeker");
        await eventPage.saveEvent();
    })

    afterEach(async function() {
        await eventPage.closeBrowser();
    });
})
