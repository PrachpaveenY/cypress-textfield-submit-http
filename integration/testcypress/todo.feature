Feature: Todo Page

  Scenario: Open to do page and verify title
    Given open todo page
    Then verify to do title page "To-Do List"

Scenario: Verify label of completed todo
    Given open todo page
    When click checkbox todo at 1
    Then verify completed todo item is "3 out of 4 items completed"

Scenario: Edit description of todo
    Given open todo page
    When click edit todo at 1
    And input description todo at 1 to "Start Cypress"
    And click save todo at 1
    Then verify description at index 1 is "Start Cypress"

Scenario: Delete item in todo list
    Given open todo page
    When click delete todo at 1
    Then verify completed todo item is "2 out of 3 items completed"