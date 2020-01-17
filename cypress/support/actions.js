/// <reference types="Cypress" />

/**
 * navigate to url
 * @param {url} url
 */
export const navigate = (url) => {
    cy.visit(url, {
        retryOnNetworkFailure: true,
        timeout: 30000
    }).viewport('macbook-15');
}

/**
 * LogInfo
 * @param {String} value 
 */
export const logInfo = (value) => {
    cy.task('info', value);
}

/**
 * LogFail
 * @param {String} value 
 */
export const logFail = (value) => {
    cy.task('fail', value);
}

/**
 * Click
 * @param {Element} element
 */
export const click = (element) => {
    cy.get(element).click();
}

/**
 * Click By xpath
 * @param {Element} element 
 */
export const clickXpath = (element) => {
    cy.xpath(element).click();
}

/**
 * Submit
 * @param {Element} element 
 */
export const submit = (element) => {
    cy.get(element).submit();
}

/**
 * Click by position
 * @param {Element} element
 * @param {Position} position
 */
export const clickByPosition = (element, position) => {
    cy.get(element).click(position);
}

/**
 * Click by coordinates
 * @param {Element} element
 * @param {X axis} x
 * @param {Y axis} y
 */
export const clickByCoordinates = (element, x, y) => {
    cy.get(element).click(x, y);
}

/**
 * Click all elements
 * @param {Element} element
 */
export const clickAllElements = (element) => {
    cy.get(element).click({ multiple: true});
}

/**
 * Wait
 * @param {time} time
 */
export const wait = (time) => {
    cy.wait(time);
}

/**
 * Check
 * @param {Element} element
 */
export const check = (element) => {
    cy.get(element).check();
}

/**
 * Check first one
 * @param {Element} element
 */
export const checkFirst = (element) => {
    cy.get(element).first().check();
}

/**
 * CheckValue
 * @param {Element} element
 * @param {value} value
 */
export const checkValue = (element, value) => {
    cy.get(element).check(value);
}

/**
 * CheckValues
 * @param {Element} element
 * @param  {...any} value
 */
export const checkValues = (element, ...value) => {
    cy.get(element).check(value);
}

/**
 * Enter
 * @param {Element} element
 * @param {Value} value
 */
export const enter = (element, value) => {
    cy.get(element).type(value);
}

/**
 * Enter by xpath
 * @param {Element} element 
 * @param {Value} value 
 */
export const enterXpath = (element, value) => {
    cy.xpath(element).type(value);
}

/**
 * Select Dropdown
 * @param {Element} element
 * @param {Value} value
 */
export const selectDropdown = (element, value) => {
    cy.get(element).select(value);
}

/**
 * Is Enabled and visible
 * @param {Element} element
 */
export const isEnabledAndVisible = (element) => {
    cy.get(element).should('exist').and('be.visible').and('be.enabled');
}

/**
 * Verify Text Content
 * @param {Element} element
 * @param {Contain Value} value
 */
export const verifyTextContent = (element, value) => {
    cy.get(element).should('have.text', value);
}

/**
 * IsVisible
 * @param {Element} element
 */
export const isVisible = (element) => {
    cy.get(element).should('be.visible');
}

/**
 * Is Not Visible
 * @param {Element} element
 */
export const isNotVisible = (element) => {
    cy.get(element).should('not.be.visible');
}

/**
 * Is Enable
 * @param {Element} element
 */
export const isEnable = (element) => {
    cy.get(element).should('be.enabled');
}

/**
 * Is Not Enable
 * @param {Element} element
 */
export const isNotEnable = (element) => {
    cy.get(element).should('not.be.enabled');
}

/**
 * Is Checked
 * @param {Element} element
 */
export const isChecked = (element) => {
    cy.get(element).should('be.checked');
}

/**
 * Is Disabled
 * @param {Element} element
 */
export const isDisabled = (element) => {
    cy.get(element).should('be.disabled');
}

/**
 * Is Selected
 * @param {Element} element
 */
export const isSelected = (element) => {
    cy.get(element).should('be.selected');
}

/**
 * Is Not Selected
 * @param {Element} element
 */
export const isNotSelected = (element) => {
    cy.get(element).should('not.be.selected');
}

/**
 * Scroll to bottom
 * @param {Element} element
 */
export const scrollToBottom = (element) => {
    cy.get(element).scrollTo('bottom');
}

/**
 * Scroll to center
 * @param {Element} element
 */
export const scrollToCenter = (element) => {
    cy.get(element).scrollTo('center');
}

/**
 * Scroll to right
 * @param {Element} element
 */
export const scrollToRight = (element) => {
    cy.get(element).scrollTo('right');
}

/**
 * Scroll into view
 * @param {Element} element
 */
export const scrollToView = (element) => {
    cy.get(element).scrollIntoView();
}

/**
 * Capture Screen
 * @param {ScreenName} screenName
 */
export const captureScreen = (screenName) => {
    cy.screenshot(screenName);
}

/**
 * Set Cookie
 * @param {Cookie Name} name
 * @param {Value} value
 */
export const setCookie = (name, value, url) => {
    cy.setCookie(name, value, { domain: url });
}

/**
 * Clear Cookies
 */
export const clearCookies = () => {
    cy.clearCookies();
}

/**
 * Clear Cookie
 * @param {Cookie} cokkie
 */
export const clearCookie = (cokkie) => {
    cy.clearCookie(cokkie);
}

/**
 * Clear local storage
 */
export const clearLocalStorage = () => {
    cy.clearLocalStorage();
}

/**
 * Clear local storage key
 * @param {Key} key
 */
export const clearLocalStorageKey = (key) => {
    cy.clearLocalStorage(key);
}

/**
 * Execute Script
 * @param {script} script
 */
export const execute = (script) => {
    cy.exec(script, { timeout: 30000 });
}

/**
 * GetApi Request
 * @param {url endpoint} url
 */
export const getApiRequest = (url) => {
    return cy.route('GET', url).its('body');
}

/**
 * Post Api Request
 * @param {url endpoint} url
 * @param {payload} body
 */
export const postApiRequest = (url, body) => {
    return cy.route('POST', url, body).its('body');
}

/**
 * Query By Label Text
 * @param {labelText} labelText
 * @param {Value} value
 */
export const queryByLabelText = (labelText, value) => {
    cy.queryByLabelText(labelText).click().type(value);
}

/**
 * Find By Label Text
 * @param {Label Text} labelText
 * @param {value} value
 */
export const findByLabelText = (labelText, value) => {
    cy.findByLabelText(labelText).click().type(value);
}

/**
 * Query By PlaceholderText
 * @param {PlaceHolder Text} placeHolderText
 * @param {Value} value
 */
export const queryByPlaceholderText = (placeHolderText, value) => {
    cy.queryByPlaceholderText(placeHolderText).click().type(value);
}

/**
 * Find By Placeholder text
 * @param {Text} text
 * @param {Value} value
 */
export const findByPlaceholderText = (text, value) => {
    cy.findByPlaceholderText(text).click().type(value);
}

/**
 * Query By Text
 * @param {Text} text
 * @param {Value} value
 */
export const queryByText = (text, value) => {
    cy.queryByText(text).click().type(value);
}

/**
 * Find by Text
 * @param {Text} text
 * @param {Value} value
 */
export const findByText = (text, value) => {
    cy.findByText(text).click().type(value);
}

/**
 * Query By Display Value
 * @param {Display Value} displayValue
 * @param {Value} value
 */
export const queryByDisplayValue = (displayValue, value) => {
    cy.queryByDisplayValue(displayValue)
        .click()
        .clear()
        .type(value)
}

/**
 * Find by display Value
 * @param {Display Value} displayValue
 * @param {Value} value
 */
export const findByDisplayValue = (displayValue, value) => {
    cy.findByDisplayValue(displayValue)
        .click()
        .clear()
        .type(value)
}

/**
 * Wait for function to complete
 * @param {Function} func 
 */
export const waitForFunction = (func) => {
    cy.waitUntil(func, {
        interval: 100,
        timeout: 900
    });
}

/**
 * Accept Alert
 */
export const acceptAlert = () => {
    cy.on('window:alert', () => {
        return true;
    })
}

/**
 * Dismiss Alert
 */
export const dismissAlert = () => {
    cy.on('window:alert', () => {
        return false;
    })
}
