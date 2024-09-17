describe('Create Event User Flow', () => {
  const url = 'http://localhost:5173'
  beforeEach(() => {
    cy.visit(url)
  })
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
  it.only('should get an error message if user doesnt select all fields', () => {
    cy.visit(`${url}`)
    cy.get('button').click()
    cy.get('input').type('kylemboomer@gmail.com')
    cy.get('button').click()
    // cy.get('.bttn-box p').first().click()
    // cy.get('.artist-card').first().click()
    // cy.get('button').contains('Create Event').click()
    // cy.get('.form-error').should('be.visible')
  })
})