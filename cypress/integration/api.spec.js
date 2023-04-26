/// <reference types="cypress" />

context ('Testes automatizados de API - ViaCEP', () => {

    it.only('Consulta de um CEP válido', () => {
        const cep = '01415003'
        cy.GetMethod(cep).as('response')

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