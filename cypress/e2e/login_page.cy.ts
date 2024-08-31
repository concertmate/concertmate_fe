describe('Login Page Flow', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('should display the initial login button', () => {
    cy.contains('button', 'Login with Spotify').should('be.visible');
  });

  it('should display the login form when "Login with Spotify" is clicked', () => {
    cy.contains('button', 'Login with Spotify').click();
    cy.get('.login-form').should('be.visible');
    cy.get('input[name="email"]').should('exist').and('be.visible');
  });

  it('should successfully log in with a valid email', () => {
    cy.contains('button', 'Login with Spotify').click();
    cy.get('input[name="email"]').type('baileyjarvis2814@gmail.com');
    cy.contains('button', 'Login').click();
    cy.url().should('include', '/landing');
  });

  it('should display an error message for an invalid email', () => {
    cy.contains('button', 'Login with Spotify').click();
    cy.get('input[name="email"]').type('invaliduser@example.com');
    cy.contains('button', 'Login').click();
    cy.get('.error').should('be.visible').and('contain', 'Could not find user');
    cy.url().should('not.include', '/landing');
  });
});
