/// <reference types="cypress" /> 

const { it } = require("mocha");

context('Dev Finances Agilizei', () => {
    it('Cadastrar entradas', () => {
        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir 
        // - descrever as interações com o cypress 
        // - adicionar as asserções que a gente precisa

        cy.visit('https://devfinance-agilizei.netlify.app')

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Salário') // id
        cy.get('[name=amount]').type(1300) // atributos
        cy.get('[type=date]').type('2023-04-19')  // atributos
        cy.get('button').contains('Salvar').click() //tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)
    });

    //Cadastrar saídas
    //Remover entradas e saídas
});