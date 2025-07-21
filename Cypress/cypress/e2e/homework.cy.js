import * as data from "../helpers/default_data.json"

describe('Домашка', function () {

    beforeEach('Начало каждого автотеста', function () {
         cy.visit('/');
        });

    afterEach('Конец каждого автотеста', function(){
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Успешная авторизация на сайте', function () {
         cy.get('#mail').type(data.clogin);
         cy.get('#pass').type(data.cpassword);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })

     it('Восстановление пароля', function () {
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type(data.clogin);
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
     })

     it('Авторизация на сайте с неправильным паролем', function () {
         cy.get('#mail').type(data.clogin);
         cy.get('#pass').type(data.wpassword);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })

    it('Авторизация на сайте с неправильным логином', function () {
         cy.get('#mail').type(data.wlogin);
         cy.get('#pass').type(data.cpassword);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })

    it('Авторизация на сайте с невалидным логином', function () {
         cy.get('#mail').type(data.nonvalidlogin);
         cy.get('#pass').type(data.cpassword);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     })

        it('Баг', function () {
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type(data.cpassword);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно', {timeout: 1});//решил не ждать повторной попытки от сайпрса
     })
 }) 

 describe('Домашка покемоны', function () {

    beforeEach('Начало каждого автотеста', function () {
         cy.visit('https://pokemonbattle.ru/');
        });

     it('Автотест покупка аватара покемонбатл', function() {
        cy.get ('#k_email');
        cy.get('#k_email').type('CORRECT_LOGIN_POKEMON');
        cy.get('#k_password').type('CORRECT_PASSWORD_POKEMON');
        cy.get('.MuiButton-root').click();
        cy.wait(1000);
        cy.get('.header_card_trainer').click();
        cy.wait(1000);
        cy.get('[data-qa="shop"]').click();
        cy.wait(1000);
        cy.get('.available>button').first().click();
        cy.wait(1000);
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
        cy.get(':nth-child(1) > .style_1_base_input').type('0327');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('username');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(1000);
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
     })
    })