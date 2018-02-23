describe("Random Animal Fact", function(){
  it("Tests app grabs random fact", function(){
    cy.visit("https://daily-animal-fact.firebaseapp.com/")
    cy
      .get("#AnimalCard")
      .find("h2")
      .should("exist")
    cy.get("#scientific-name").should("exist")
    cy
      .get("#AnimalCard")
      .find("img")
      .should("have.attr", "src")
    cy
      .get("#AnimalCard")
      .find("p")
      .eq(1)
      .then(($p) => {
        const fact = $p.text()
        console.log(fact, $p)
        cy.get("#new-fact").click()
        cy.get("#AnimalCard").find("p").eq(1).should("not.have.text", fact)
      })

  })
})
