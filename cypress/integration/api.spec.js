/// <reference types="cypress" />

context ('Testes automatizados de API - ViaCEP', () => {

    it.only('Consulta de um CEP válido', () => {
        cy.request({
            method: 'GET', //tipo da requisição que está sendo enviada
            url: 'https://viacep.com.br/ws/01415003/json/', //url que será chamada
            // body: 'requisicao' - caso seja necessário enviar algum paramêtro no body request (requisição POST)
            failOnStatusCode: false //serve para que o teste não quebre mesmo que ocorra um erro
        }).as('response')

        cy.get('@response').should((response) => {
            expect(response.status).to.equal(200),
            expect(response.body.cep).to.equal('01415-003'),
            expect(response.body.logradouro).to.equal('Rua Bela Cintra')
            expect(response.body.complemento).to.equal('de 587 a 1183 - lado ímpar'),
            expect(response.body.bairro).to.equal('Consolação'),
            expect(response.body.localidade).to.equal('São Paulo'),
            expect(response.body.uf).to.equal('SP'),
            expect(response.body.ibge).to.equal('3550308'),
            expect(response.body.gia).to.equal('1004'),
            expect(response.body.ddd).to.equal('11'),
            expect(response.body.siafi).to.equal('7107')
        })
    })

});