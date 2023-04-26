// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('GetMethod', (cep) => {
    cy.request({
        method: 'GET', //tipo da requisição que está sendo enviada
        url: `https://viacep.com.br/ws/${cep}/json/`, //url que será chamada
        // body: 'requisicao' - caso seja necessário enviar algum paramêtro no body request (requisição POST)
        failOnStatusCode: false //serve para que o teste não quebre mesmo que ocorra um erro
    }).as('response')
})