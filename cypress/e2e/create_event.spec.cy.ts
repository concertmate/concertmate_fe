describe('Create Event User Flow', () => {
  const url = 'http://127.0.0.1:5173/'
  let data;
  beforeEach(() => {
    cy.visit(url)
    // cy.intercept('POST', , {fixture: 'postEvent.json'}).as('postEvent')
    cy.fixture('postEvent').then((json) => {
      data = json;
    })
  })
  it('should navigate to the Create Event page from My Events', () => {
    cy.visit(`${url}landing`)
    cy.get('.bttn-box').contains('Create Event').click()
    cy.url().should('include', '/createEvent')
    cy.get('h3').should('contain', 'Create Event')
  })

  it('should display top artists in the TopArtist component', () => {
    cy.visit(`${url}createEvent`)
    cy.get('.top-artist').should('be.visible')
    cy.get('.top-artist').contains('Top Artists')
    cy.get('.artist-card').should('have.length', 2)
  })

  it('should display a message when no shows are available', () => {
    cy.visit(`${url}createEvent`)
    cy.get('.artist-card').contains('Foo Fighters').click()
    cy.get('p').should('contain', 'No concerts available for Foo Fighters. Try another artist, or check back soon!')
  })

  it('should navigate My Events page when the link is clicked', () => {
    cy.visit(`${url}createEvent`)
    cy.get('.bttn-box').contains('Events').click()
    cy.url().should('include', '/allEventsPage')
    cy.get('h2').contains('All Events')
  })
  it.only('should get an error message if user doesnt select all fields', () => {
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
    cy.get('.logo').click()
    cy.get('.event-card').should('have.length',35)
  
    // cy.get('.form-error').should('be.visible')
  })
})