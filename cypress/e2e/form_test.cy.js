//FAILED FIRST ATTEMPT :/

describe('Form test', () => {


  beforeEach(() => {
    // cy.visit("http://localhost:1234") //IDK HOW TO GET TO MY SERVER :(
    cy.visit("http://localhost:3000/")
    //cy.visit("http://google.com")

    const nameInput = () => {
      cy.get(`[data-test-id="formName"]`);
    }


  })

  const emailInput = () => {
    cy.get("input[name=email]");
  }
  const passInput = () => {
    cy.get("input[name=password]")
  }

  const tosInput = () => {
    cy.get("input[name=tos]")
  }

  const subButn = () => {
    cy.get("input[name=submit]")
  }

  it("Sanity check. I shall always make sure tests work.", function () {
    //'it' is a test
    expect(1 + 2).to.equal(3);
  })

  //Verify that elements exist
  it("proper elements are here", function () {
    const nameInput = cy.get(`[data-test-id="formName"]`);

    nameInput()
  })

  describe("filling out the inputs", function () {
    it("can navigate to the website", function () {
      cy.url().should("include", "localhost");
    })

    //Check that text input work:
    it('can fill in inputs', function () {
      nameInput()
        .should("have value", "")
        .type('test username')
        .should("have value", "test username");

      emailInput()
        .should("have value", "email here")
        .type("")
        .should("have value", "")
        .type("testemail@gmail.com")
        .should('have value', "testemail@gmail.com");

      passInput()
        .should("have value", "password")
        .type("")
        .type("passwordtest1234")
        .should("have value", "passwordtest1234")
    })

    //Check to see if a user can use checkbox [*********]
    it("can allow tos to be checked", function () {

    })

    //Check to see if user can submit form
    it("can submit form", () => {
      submitBtn().should("not.be.disabled")

      //Check for form validation: [*********]
    })

  })



})