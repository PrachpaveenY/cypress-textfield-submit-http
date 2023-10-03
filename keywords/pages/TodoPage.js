/// <reference types="cypress" />

class TodoPage {
  static verifyCheckedTodo(no){
    cy.get("#list-summary").should("contain", `${no} out of 4 items completed`);
  }

  static verifyTitle(title) {
    cy.get("#app > h1").should("contain", title);
  }
}

export default TodoPage;
