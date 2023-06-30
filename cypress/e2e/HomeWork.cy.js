describe('Implicit assertions', () => {
    it('How to perform implicit checks', () => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com', { Timeout: 25000 });
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Modal & Overlays"]', { Timeout: 25000 }).click();
      cy.get('[title="Toastr"]', { Timeout: 25000 }).click();
      
    })
  })