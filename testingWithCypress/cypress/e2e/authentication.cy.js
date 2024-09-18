describe("Authentication Tests", () => {
  it("should redirect to /login if not authenticated", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  it("should redirect to / if login details are correct", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("validUser");
    cy.get('input[name="password"]').type("validPassword");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/");
  });

  it("should stay on /login if login details are incorrect", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("invalidUser");
    cy.get('input[name="password"]').type("invalidPassword");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/login");
  });
});
