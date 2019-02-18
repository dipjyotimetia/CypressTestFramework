const urgPrjCarouselElement = '.projects-most-urgent  .fluid-container';
const urgPrjCarouselItemElement = '.project-card-small';

export const homePage = {
    hasUrgentProjectCarousel() {
        cy.get(urgPrjCarouselElement).find(urgPrjCarouselItemElement).should('be.visible');
    }

}