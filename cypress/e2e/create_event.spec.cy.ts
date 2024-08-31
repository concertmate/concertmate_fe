describe('Create Event User Flow', () => {

  it('should navigate to the Create Event page from My Events', () => {
    cy.visit('http://localhost:5173/landing')
    cy.get('.bttn-box').contains('Create Event').click()
    cy.url().should('include', '/createEvent')
    cy.get('h3').should('contain', 'Create Event')
  })

  it('should display top artists in the TopArtist component', () => {
    cy.visit('http://localhost:5173/createEvent')
    cy.get('.top-artist').should('be.visible')
    cy.get('.top-artist').contains('Top Artists')
    cy.get('.artist-card').should('have.length', 2)
  })

  // it('should allow the user to select an artist, view shows, and create an event', () => {
  //   cy.visit('http://localhost:5173/createEvent')
  //   cy.get('.artist-card').first().click()
  //   cy.get('.show-card').should('be.visible')
  //   cy.get('.show-card').contains('Upcoming Shows')
  //   cy.get('.concert-card').should('have.length.greaterThan', 0)
  //   cy.get('input[type="text"]').type('My Concert Event')
  //   cy.get('input[type="radio]').first().check()
  //   cy.get('form').submit()
  //   cy.url().should('include', '/myEvents')
  //   cy.contains('My Events').should('be.visible')
  // })

  it('should display a message when no shows are available', () => {
    cy.visit('http://localhost:5173/createEvent')
    cy.get('.artist-card').contains('Foo Fighters').click()
    cy.get('p').should('contain', 'No concerts available for Foo Fighters. Try another artist, or check back soon!')
  })

  it('should navigate My Events page when the link is clicked', () => {
    cy.visit('http://localhost:5173/createEvent')
    cy.get('.bttn-box').contains('Events').click()
    cy.url().should('include', '/allEventsPage')
    cy.get('h2').contains('All Events')
  })

})