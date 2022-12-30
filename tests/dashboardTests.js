const dashboardPage = require('../pages/dashboardPage.js');

describe('Dashboard Module', function() {
    this.timeout(50000);

    beforeEach(function() {

    });
    

    it('Test Case 1', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("automationtest");
        await dashboardPage.passwordSendKey("123456789");
        await dashboardPage.login();
        await dashboardPage.controlLogin(true);
    })

    it('Test Case 2', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("test");
        await dashboardPage.passwordSendKey("test123");
        await dashboardPage.login();
        await dashboardPage.controlLoginPage();
    })

        it('Test Case 3', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("automationtest");
        await dashboardPage.passwordSendKey("123456789");
        await dashboardPage.login();
        await dashboardPage.controlEventList();
    })

    it('Test Case 4', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("automationtest");
        await dashboardPage.passwordSendKey("123456789");
        await dashboardPage.login();
        await dashboardPage.createEvent();
        await dashboardPage.addNameEvent("Test");
        await dashboardPage.addDescriptionEvent("Test Test");
        await dashboardPage.addParticipantDate("11/12/2022");
        await dashboardPage.addParticipantName("Ozan");
        await dashboardPage.addParticipantSurname("Şeker");
        await dashboardPage.addParticipantContact("ozan.sekerr@outlook.com");
        await dashboardPage.newcreateEvent();
        await dashboardPage.editEvent();
        await dashboardPage.descriptionClear();
        await dashboardPage.addDescriptionEvent("Test #2 Test #2");
        await dashboardPage.addParticipant();
        await dashboardPage.addParticipant2Name("Test");
        await dashboardPage.addParticipant2Surname("Test");
        await dashboardPage.addParticipant2Contact("test@test.com");
    })


    it('Test Case 5', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("automationtest");
        await dashboardPage.passwordSendKey("123456789");
        await dashboardPage.login();
        await dashboardPage.createEvent();
        await dashboardPage.addNameEvent("Test");
        await dashboardPage.addDescriptionEvent("Test Test");
        await dashboardPage.addParticipantDate("11/12/2022");
        await dashboardPage.addParticipantName("Ozan");
        await dashboardPage.addParticipantSurname("Şeker");
        await dashboardPage.addParticipantContact("ozan.sekerr@outlook.com");
        await dashboardPage.newcreateEvent();
        await dashboardPage.removeEvent();
    })
	
	
	    it('Test Case 6', async function() {
        await dashboardPage.open();
        await dashboardPage.userNameSendKey("automationtest");
        await dashboardPage.passwordSendKey("123456789");
        await dashboardPage.login();
        await dashboardPage.createEvent();
        await dashboardPage.addNameEvent("Test");
        await dashboardPage.addDescriptionEvent("Test Test");
        await dashboardPage.addParticipantDate("11/12/2022");
        await dashboardPage.addParticipantName("Ozan");
        await dashboardPage.addParticipantSurname("Şeker");
        await dashboardPage.addParticipantContact("ozan.sekerr@outlook.com");
        await dashboardPage.newcreateEvent();
        await dashboardPage.userListEvent();
    })
	
	    afterEach(async function() {
        await dashboardPage.closeBrowser();
    });
 
})
