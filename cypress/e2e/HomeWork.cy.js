describe('pop-up tests', () => {

  
  before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com', { Timeout: 35000 });
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]', { Timeout: 35000 }).click();
    cy.get('[title="Toastr"]', { Timeout: 35000 }).click();
    cy.wait(7500, { Timeout: 35000 });
  })
    it('top-right primary', () => {
      cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]', { Timeout: 35000 }).click();
      cy.get('[class="option-list"]').should('be.visible');
      cy.get('[ng-reflect-value="top-right"]').click();
      cy.get('[class="form-group"] [class="select-button"]:last-of-type').click();
      cy.get('[class="option-list"]').should('be.visible');
      cy.get('[ng-reflect-value="primary"]').click();
      cy.get('[name="title"][ng-reflect-name="title"]').clear().type('top-right');
      cy.get('[name="content"][ng-reflect-name="content"]').clear().type('1st one');
      cy.get('[name="timeout"][ng-reflect-name="timeout"]').clear().type('1000');
      cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
      cy.get('[class="ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-primary destroy-by-click has-icon custom-icon ng-star-inserted"]')
      .then( popUp1 => {
        expect(popUp1).to.include.text('top-right');
        expect(popUp1).to.include.text('1st one');
        expect(popUp1).to.contain('[data-name="email"]'); //contain
      })
        
        
      //   expectedResult: {
      //   icon: 'email',
      //   title: 'test title',
      //   content: 'test content', 
      //   color: ' ... ',
      //   position: ...
      //   }
      // //* //*[@id="cdk-overlay-3"]/nb-toastr-container/nb-toast
      
    })
  })