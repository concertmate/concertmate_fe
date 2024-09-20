describe('Join and leave Events', () => {
  let url;
   beforeEach(() => {
       url = 'http://127.0.0.1:5173'
   })

   it(('user be able to join an event'),() => {
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
       cy.get('.event-wrapper').should('exist')
       cy.fixture('userEventPost').then((json) => {
        cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/events`, {
          statusCode: 200,
          fixture: 'userEventPost.json'
        })
      })
       cy.get('[href="/allEventsPage"] > button').click({force: true})
       cy.get('.event-card').should('have.length',4)
       cy.get('.event-card button').first().click({force: true})
       cy.get('p#status').should('have.text','Successfully joined event')
   })

   it (("user be able to leave an event, unless user is not found"),() => {
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
    cy.get('.event-wrapper').should('exist')
    cy.fixture('userEventPost').then((json) => {
     cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/events`, {
       statusCode: 200,
       fixture: 'userEventPost.json'
     })
   })
    cy.get('[href="/allEventsPage"] > button').click()
    cy.get('.event-card').should('have.length',4)
    cy.get('.event-card button').last().click()
    cy.get('p#status').should('have.text','Attendee not found')
   })

   it(('user be able to leave an event'),() => {
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
    cy.get('.event-wrapper').should('exist')
    cy.fixture('userEventPost').then((json) => {
     cy.intercept(`https://concertmate-rails-9f7aa871924c.herokuapp.com/api/v1/events`, {
       statusCode: 200,
       fixture: 'userEventPost.json'
     })
   })
    cy.get('[href="/allEventsPage"] > button').click({force: true})
    cy.get('.event-card').should('have.length',4)
    cy.get(':nth-child(1) > div > #leave-btn').click({force: true})
    cy.get('.leave-text').should('contain.text','Successfully left the event')
})
})