describe('Create Event User Flow', () => {
const url = 'http://127.0.0.1:5173/'
  beforeEach(() => {
    cy.visit(url)
  })
 
  it('should be able to POST event and see updated events in my event', () => {
    cy.visit(`${url}`)
    cy.get('button').click()
    cy.get('input').type('kylemboomer@gmail.com')
    cy.fixture('allUsers').then((json) => {
      cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/users`, {
        statusCode: 200,
        fixture: 'allUsers.json'
      })
    })
    cy.get('button').click()
    cy.fixture('userEvents').then((json) => {
      cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/users/36/user_events`, {
        statusCode: 200,
        fixture: 'userEvents.json'
      })
    })
    cy.get('.bttn-box button').first().click()
    cy.get('.artist-card').first().click()
    cy.get('.concert-wrapper').first().click()
    cy.get('#event-name').type('Modest Mouse')
    cy.fixture('postEvent').then((json) => {
      cy.intercept('POST',`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/users/36/user_events`, {
        statusCode: 201,
        fixture:'postEvent.json'
      })
    })
    cy.get('button').contains('Create Event').click()
    cy.fixture('userEventPost').then((json) => {
      cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/users/36/user_events`, {
        statusCode: 200,
        fixture: 'userEventPost.json'
      })
    })
    cy.get('.logo').click()
    cy.get('.event-card').should('have.length',4)
  })
})