import { navHeader } from '../support/pageObjects/nav_header';
import { searchArea } from '../support/pageObjects/search_area';
import { homePage } from '../support/pageObjects/home_page';

describe.skip('Home page test', () => {
    beforeEach(function () {
        cy.visit('https://www.donorschoose.org/');
    });

    it('should show header', () => {
        navHeader.verifyHeader();
    });

    it('should have search area', function () {
        searchArea.verifyExist();
    });

    it('should return at least one search result', function () {
        searchArea.canSearch('reading', 'New York, NY');
    });

    it('should have urgent project carousel', function () {
        homePage.hasUrgentProjectCarousel();
    });
})