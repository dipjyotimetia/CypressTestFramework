/// <reference types="Cypress" />

describe('Test Registration', () => {

    it('Test new registration', () => {
        cy.visit('https://beteasy.com.au')
            .viewport('iphone-6+')
            .get("a[href='/join-now']").click()
            .get("input[name='FirstName']").type('testautonew')
            .get("input[name='Surname']").type("newtest")
            .get("input[name='DOB']").type("12/12/1990")
            .get("input[name='AutoResidentialAddress1']").type('L 26 120 collins street , Melbourne VIC 3000')
            .get(".cb-scroll-trap--at-bottom button").click()
            .get("input[name='MobileNo']").type('0400000000')
            .get("input[name='Email']").type('testtts@gmail.com');
    })

    it('Login Test',() => {
        cy.visit('https://beteasy.com.au')
        .server()
        .route({
            method: 'POST',      // Route all GET requests
            url: 'https://api.beteasy.com.au/api/account/login',    // that have a URL that matches '/users/*'
            response: {
                "result": {
                    "userHeader": {
                        "balance": 207.007,
                        "bettingBalance": 203.16,
                        "pendingBets": 0,
                        "CrownMembershipLinked": true,
                        "ResidentialPostCode": "3000",
                        "Title": null,
                        "Surname": "mockSTAGLast",
                        "MiddleName": null,
                        "FirstName": "mockStagFirst"
                    },
                    "html": {
                        "top-menu": "<ul>\n    <li><a class=\"racing-nav \" href=\"\/racing-betting\">\n        <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#racing-icon\"><\/use><\/svg>\n        <div>Racing<\/div><\/a>\n    <\/li>\n    <li><a class=\"sports-nav \" href=\"\/sports-betting\">\n        <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#sports-icon\"><\/use><\/svg>\n        <div>Sports<\/div><\/a>\n    <\/li>\n        <li>\n    <a class=\"live-betting-nav \" href=\"\/live-in-play-betting\">\n        <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#stopwatch\"><\/use><\/svg>\n        <div>Live Betting<\/div>\n    <\/a>\n<\/li>\n\n        <li><a class=\"multi-express-nav \"\n        href=\"\/multi-express\">\n        <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#multi-express-icon\"><\/use><\/svg>\n        <div>Multi Express<\/div>\n    <\/a><\/li>\n\n\n\n<li>\n    <a class=\"rewards-nav \"\n       href=\"\/rewards\">\n        <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#rewards\"><\/use><\/svg>\n        <div>Rewards<\/div>\n    <\/a>\n<\/li>\n\n<li><a class=\"promotions-nav \"\n    href=\"\/betting-promotions\">\n    <svg role=\"presentation\" class=\"sprite-icon-nav\"><use xlink:href=\"#promotions\"><\/use><\/svg>\n    <div>Promotions<\/div>\n<\/a><\/li>\n\n\n<\/ul>\n"
                    },
                    "customerType": "2",
                    "ShowWelcomeBack": false,
                    "JsonTakeABreakOptions": null,
                    "isBoostEligible": false
                },
                "success": true
            }
        })
        .server()
        .route({
            method: 'GET',      // Route all GET requests
            url: 'https://api.beteasy.com.au/api/account/detail',    // that have a URL that matches '/users/*'
            response: {
                "result": [
                    {
                        "ClientID": 1907441,
                        "OrgID": 1,
                        "AccountNumber": "1104047",
                        "PhoneId": "1104047",
                        "BPayReference": "19074418",
                        "Surname": "mockSurname",
                        "FirstName": "mockStagName",
                        "Gender": "",
                        "DOBDatetime": "1981-01-15T00:00:00Z",
                        "DOB": "15\/01\/1981",
                        "Username": "mockSTAGUser",
                        "PasswordReset": true,
                        "Email": "Cardinalsuser151@crownbet.com.au",
                        "MobileNo": "9414225215",
                        "SignupDate": "2018-06-21T04:00:42.553Z",
                        "SignupChannelID": 7,
                        "IsCreditClient": false,
                        "ClientProfileID": 0,
                        "BetInterceptRuleID": 1,
                        "IsTest": true,
                        "IsBookmaker": false,
                        "LedgerID": 0,
                        "VerificationID": 1,
                        "ResidentialAddress1": "120 Collins Street",
                        "ResidentialSuburb": "Melbourne",
                        "ResidentialStateCode": "VIC",
                        "ResidentialPostCode": "3000",
                        "ResidentialCountryCode": "AUS",
                        "ClientHandlerID": 0,
                        "CrownPatronID": "1907441",
                        "IsSelfExcluded": false,
                        "Migration": {
                            "IsMigratedCustomer": true,
                            "HasAcceptedTerms": true,
                            "HasSeenPromo": true
                        },
                        "LiveVision": {
                            "SportVisionAvailable": true,
                            "RacingVisionAvailable": true
                        },
                        "CrownMembershipLinked": true,
                        "CrownMembershipLinkStatus": "Linked",
                        "ClientProfile": {
                            "ClientProfileID": 0,
                            "ClientProfile": "Standard",
                            "OverridePriceTypeID": 0
                        },
                        "Verification": {
                            "VerificationID": 1,
                            "Verification": "Verified Manually"
                        },
                        "Accounts": [
                            {
                                "ClientID": 0,
                                "AccountTypeID": 1,
                                "CurrencyCode": "AUD",
                                "StatusCode": "A",
                                "Balance": 103.16,
                                "WithdrawableBalance": 203.16,
                                "AvailableBettingBalance": 203.16,
                                "AvailableRGBettingBalance": -1,
                                "MaximumDepositableAmount": -1,
                                "AccountStatusReasonID": 0,
                                "AccountType": {
                                    "AccountTypeID": 1,
                                    "AccountType": "Primary Betting Account"
                                }
                            },
                            {
                                "ClientID": 0,
                                "AccountTypeID": 2,
                                "CurrencyCode": "AUD",
                                "StatusCode": "A",
                                "Balance": 0,
                                "WithdrawableBalance": 0,
                                "AvailableBettingBalance": 0,
                                "AvailableRGBettingBalance": -1,
                                "MaximumDepositableAmount": 0,
                                "AccountStatusReasonID": 0,
                                "AccountType": {
                                    "AccountTypeID": 2,
                                    "AccountType": "Bonus Account"
                                }
                            }
                        ],
                        "ACTransactions": [],
                        "Bets": [],
                        "FreeBets": [
                            {
                                "FreeBetID": 8221904,
                                "PromotionID": 2698,
                                "FreeBetCriteriaID": 3,
                                "ClientID": 0,
                                "IssuedDate": "2018-06-22T00:23:02.883Z",
                                "ExpiryDate": "2019-06-22T00:24:01.817Z",
                                "FreeBetAmount": 25,
                                "WinningTurnoverFactor": 1,
                                "Notes": "",
                                "SplitGroupID": 0,
                                "FreeBetCriteria": {
                                    "FreeBetCriteriaID": 3
                                },
                                "Promotion": {
                                    "PromotionID": 2698,
                                    "PromoDescription": "CS Goodwill Manual Uploads",
                                    "IsActive": true,
                                    "PromoStartDate": "2016-02-17T21:10:17.3Z",
                                    "PromoEndDate": "2020-12-31T13:00:00Z",
                                    "IsRestrictedToClientList": false,
                                    "IsRestrictedToReferredClient": false
                                }
                            }
                        ],
                        "RClientAccountRules": [],
                        "ClientEmailVerifications": [],
                        "ClientMobileVerifications": [],
                        "PendingBets": [],
                        "isBoostEligible": false
                    }
                ],
                "success": true
            }
        })
        .visit('https://beteasy.com.au')
        .pause()
        .wait(300000)

    })

})