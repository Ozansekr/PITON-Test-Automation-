const loginPage = require('../pages/loginPage.js');

describe('Login Module', function() {
    this.timeout(50000);

    beforeEach(async function() {
        await loginPage.open();
    });

    it('Test Case 1', async function() {
        await loginPage.userNameSendKey("test");
        await loginPage.passwordSendKey("test");
        await loginPage.login();
        await loginPage.controlLoginPage();
    })

    it('Test Case 2', async function() {
        await loginPage.userNameClear();
        await loginPage.passwordClear();
        await loginPage.login();
        await loginPage.controlLoginPage();
    })

    it('Test Case 3', async function() {
        await loginPage.userNameSendKey("automationtest");
        await loginPage.passwordSendKey("123456789");
        await loginPage.login();
        await loginPage.controlLogin(true);
    })

    afterEach(async function() {
       await loginPage.closeBrowser();
    });
})
