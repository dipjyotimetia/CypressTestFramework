/// <reference types="Cypress" />

/**
 * navigate to url
 * @param {url} url
 */
export const navigate = (url: string) => {
    cy.visit(url, {
        retryOnNetworkFailure: true,
        timeout: 30000
    }).viewport('macbook-15');
}

/**
 * LogInfo
 * @param {String} value 
 */
export const logInfo = (value: any) => {
    cy.task('info', value);
}

/**
 * LogFail
 * @param {String} value 
 */
export const logFail = (value: any) => {
    cy.task('fail', value);
}

/**
 * Click
 * @param {Element} element
 */
export const click = (element: string) => {
    cy.get(element).click();
}

/**
 * Click By xpath
 * @param {Element} element 
 */
export const clickXpath = (element: string) => {
    cy.xpath(element).click();
}

/**
 * Submit
 * @param {Element} element 
 */
export const submit = (element: any) => {
    cy.get(element).submit();
}

/**
 * Click by position
 * @param {Element} element
 * @param {Position} position
 */
export const clickByPosition = (element: any, position: Partial<Cypress.ClickOptions>) => {
    cy.get(element).click(position);
}

/**
 * Click by coordinates
 * @param {Element} element
 * @param {X axis} x
 * @param {Y axis} y
 */
export const clickByCoordinates = (element: any, x: any, y: Partial<Cypress.ClickOptions>) => {
    cy.get(element).click(x, y);
}

/**
 * Click all elements
 * @param {Element} element
 */
export const clickAllElements = (element: any) => {
    cy.get(element).click({ multiple: true});
}

/**
 * Wait
 * @param {time} time
 */
export const wait = (time: string) => {
    cy.wait(time);
}

/**
 * Check
 * @param {Element} element
 */
export const check = (element: any) => {
    cy.get(element).check();
}

/**
 * Check first one
 * @param {Element} element
 */
export const checkFirst = (element: any) => {
    cy.get(element).first().check();
}

/**
 * CheckValue
 * @param {Element} element
 * @param {value} value
 */
export const checkValue = (element: any, value: Partial<Cypress.CheckOptions>) => {
    cy.get(element).check(value);
}

/**
 * CheckValues
 * @param {Element} element
 * @param  {...any} value
 */
export const checkValues = (element: any, ...value: any[]) => {
    cy.get(element).check(value);
}

/**
 * Enter
 * @param {Element} element
 * @param {Value} value
 */
export const enter = (element: string, value: string) => {
    cy.get(element).type(value);
}

/**
 * Enter by xpath
 * @param {Element} element 
 * @param {Value} value 
 */
export const enterXpath = (element: string, value: string) => {
    cy.xpath(element).type(value);
}

/**
 * Select Dropdown
 * @param {Element} element
 * @param {Value} value
 */
export const selectDropdown = (element: any, value: string | string[]) => {
    cy.get(element).select(value);
}

/**
 * Is Enabled and visible
 * @param {Element} element
 */
export const isEnabledAndVisible = (element: any) => {
    cy.get(element).should('exist').and('be.visible').and('be.enabled');
}

/**
 * Verify Text Content
 * @param {Element} element
 * @param {Contain Value} value
 */
export const verifyTextContent = (element: any, value: any) => {
    cy.get(element).should('have.text', value);
}

/**
 * IsVisible
 * @param {Element} element
 */
export const isVisible = (element: any) => {
    cy.get(element).should('be.visible');
}

/**
 * Is Not Visible
 * @param {Element} element
 */
export const isNotVisible = (element: any) => {
    cy.get(element).should('not.be.visible');
}

/**
 * Is Enable
 * @param {Element} element
 */
export const isEnable = (element: any) => {
    cy.get(element).should('be.enabled');
}

/**
 * Is Not Enable
 * @param {Element} element
 */
export const isNotEnable = (element: any) => {
    cy.get(element).should('not.be.enabled');
}

/**
 * Is Checked
 * @param {Element} element
 */
export const isChecked = (element: any) => {
    cy.get(element).should('be.checked');
}

/**
 * Is Disabled
 * @param {Element} element
 */
export const isDisabled = (element: any) => {
    cy.get(element).should('be.disabled');
}

/**
 * Is Selected
 * @param {Element} element
 */
export const isSelected = (element: any) => {
    cy.get(element).should('be.selected');
}

/**
 * Is Not Selected
 * @param {Element} element
 */
export const isNotSelected = (element: any) => {
    cy.get(element).should('not.be.selected');
}

/**
 * Scroll to bottom
 * @param {Element} element
 */
export const scrollToBottom = (element: any) => {
    cy.get(element).scrollTo('bottom');
}

/**
 * Scroll to center
 * @param {Element} element
 */
export const scrollToCenter = (element: any) => {
    cy.get(element).scrollTo('center');
}

/**
 * Scroll to right
 * @param {Element} element
 */
export const scrollToRight = (element: any) => {
    cy.get(element).scrollTo('right');
}

/**
 * Scroll into view
 * @param {Element} element
 */
export const scrollToView = (element: any) => {
    cy.get(element).scrollIntoView();
}

/**
 * Capture Screen
 * @param {ScreenName} screenName
 */
export const captureScreen = (screenName: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.ScreenshotOptions>) => {
    cy.screenshot(screenName);
}

/**
 * Set Cookie
 * @param {Cookie Name} name
 * @param {Value} value
 */
export const setCookie = (name: string, value: string, url: any) => {
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
export const clearCookie = (cokkie: string) => {
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
export const clearLocalStorageKey = (key: string) => {
    cy.clearLocalStorage(key);
}

/**
 * Execute Script
 * @param {script} script
 */
export const execute = (script: string) => {
    cy.exec(script, { timeout: 30000 });
}

/**
 * GetApi Request
 * @param {url endpoint} url
 */
export const getApiRequest = (url: string | object) => {
    return cy.route('GET', url).its('body');
}

/**
 * Post Api Request
 * @param {url endpoint} url
 * @param {payload} body
 */
export const postApiRequest = (url: string | RegExp, body: string | object) => {
    return cy.route('POST', url, body).its('body');
}

/**
 * Query By Label Text
 * @param {labelText} labelText
 * @param {Value} value
 */
export const queryByLabelText = (labelText: string, value: string) => {
    cy.queryByLabelText(labelText).click().type(value);
}

/**
 * Find By Label Text
 * @param {Label Text} labelText
 * @param {value} value
 */
export const findByLabelText = (labelText: any, value: any) => {
    cy.findByLabelText(labelText).click().type(value);
}

/**
 * Query By PlaceholderText
 * @param {PlaceHolder Text} placeHolderText
 * @param {Value} value
 */
export const queryByPlaceholderText = (placeHolderText: any, value: any) => {
    cy.queryByPlaceholderText(placeHolderText).click().type(value);
}

/**
 * Find By Placeholder text
 * @param {Text} text
 * @param {Value} value
 */
export const findByPlaceholderText = (text: any, value: any) => {
    cy.findByPlaceholderText(text).click().type(value);
}

/**
 * Query By Text
 * @param {Text} text
 * @param {Value} value
 */
export const queryByText = (text: any, value: any) => {
    cy.queryByText(text).click().type(value);
}

/**
 * Find by Text
 * @param {Text} text
 * @param {Value} value
 */
export const findByText = (text: any, value: any) => {
    cy.findByText(text).click().type(value);
}

/**
 * Query By Display Value
 * @param {Display Value} displayValue
 * @param {Value} value
 */
export const queryByDisplayValue = (displayValue: any, value: any) => {
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
export const findByDisplayValue = (displayValue: any, value: any) => {
    cy.findByDisplayValue(displayValue)
        .click()
        .clear()
        .type(value)
}

// /**
//  * Wait for function to complete
//  * @param {Function} func 
//  */
// export const waitForFunction = (func) => {
//     cy.waitUntil(func, {
//         interval: 100,
//         timeout: 900
//     });
// }

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
