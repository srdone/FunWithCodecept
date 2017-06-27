
Feature('Login page');

Scenario('Navigate to the website and login', (I) => {
    I.amOnPage('/');
    I.see('First Class Scouting'); 
    I.see('LOGIN');
    I.fillField('username', 'y');
    I.fillField('password', 'y');
    I.click('Login');
    I.see('Stephen Done');
});
