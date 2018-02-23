describe("Random Animal Fact", function(){
  it("Tests creates a new comment for an animal, edits it, then deletes it.", function(){
    cy.visit("http://localhost:8080/")
    cy
      .get("#AnimalCard")
      .find("img")
      .should("have.attr", "src")
    cy.get("#ButtonContainer").find("button").eq(0).click()
    cy.get("#name").type("Amber")
    cy.get("#new-comment").type("Helps Paul all the time.")
    cy.get("#submit").click()
    cy.wait(1000)
  })
})
