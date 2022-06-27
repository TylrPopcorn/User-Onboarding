describe("form test possibilities", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("form fields are present", () => {
        cy.get(`[data-test-id="formName"]`);
        cy.get("input[name=email]");
        cy.get("input[name=password]")
        cy.get("input[name=checked]")
        cy.get("input[name=submit]")
    })

    it("able to submit form", () => {
        cy.get(`[data-test-id="formName"]`).type("Leo")
        cy.get("input[name=email]").type("Leo@email.com")
        cy.get("input[name=password]").type("password")
        cy.get("input[name=checked]").click()
        cy.get("input[name=submit]").click()

        cy.contains("Leo@email.com");
    })

    //How to test negative normally:
    it("not able to submit form when name is too short", () => {
        cy.get(`[data-test-id="formName"]`).type("BE")
        cy.get("input[name=email]").type("BE@email.com")
        cy.get("input[name=password]").type("password")
        cy.get("input[name=checked]").click()
        cy.get("input[name=submit]").click()

        cy.contains("BE@email.com").should("not.exist")
    })


})


