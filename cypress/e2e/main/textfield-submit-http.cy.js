describe('Web React UI TextField', () => {
    let buttonOutlined1, buttonFilled1, buttonStandard1, nativeSelect1, nativeSelectOptions1, inputPassword1, inputPasswordVisibility1;

    beforeEach(() => {
        cy.visit('https://mui.com/material-ui/react-text-field/', { failOnStatusCode: false })
        // cy.visit('/')

        buttonOutlined1 = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[1]/div/input';
        buttonFilled1 = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[2]/div/input';
        buttonStandard1 = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[3]/div/input';
        
        nativeSelect1 = '/html/body/div[1]/div/main/div/div[20]/div[2]/form/div[3]/div[2]';
        nativeSelectOptions1 = '/html/body/div[1]/div/main/div/div[20]/div[2]/form/div[3]/div[2]/div/select';

        inputPassword1 = '/html/body/div[1]/div/main/div/div[24]/div[2]/div/div[1]/div[3]/div/input';
        inputPasswordVisibility1 = '/html/body/div[1]/div/main/div/div[24]/div[2]/div/div[1]/div[3]/div/div/button';
    })
    // beforeEach
    // before

        // สร้างคำสั่งเพิ่มเติมใน Cypress
    Cypress.Commands.add('checkAllElements', (xpathToElement, textToCheck) => {
        // เพิ่มการตรวจสอบที่คุณต้องการทำที่นี่
        cy.xpath(xpathToElement, { timeout: 5000 }).should('exist');

        if (textToCheck !== undefined) {
            cy.xpath(xpathToElement).should('have.text', textToCheck);
        }
        // เพิ่มการตรวจสอบอื่นๆ ตามที่คุณต้องการ
    });

    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อกดปุ่มตาม XPath
    Cypress.Commands.add('clickElementByXPath', (xpathToElement) => {
        cy.xpath(xpathToElement).click();
    });
    
    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อกรอกข้อความตาม XPath
    Cypress.Commands.add('typeTextByXPath', (xpathToElement, text) => {
        cy.xpath(xpathToElement).type(text).should('have.value', text);
    });
    
    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อตรวจสอบการแจ้งเตือนตาม XPath
    Cypress.Commands.add('checkAlertByXPath', (xpathToElement, expectedText) => {
        cy.xpath(xpathToElement).should('have.text', expectedText);
    });

    it('Test Case 1 : Test all Element and all Request', () => {
        const buttonOutline = buttonOutlined1;
        const buttonOutlineColor = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[1]/label';
        const buttonFilled = buttonFilled1;
        const buttonFilledColor = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[2]/label';
        const buttonStandard = buttonStandard1;
        const buttonStandardColor = '/html/body/div[1]/div/main/div/div[12]/div[2]/form/div[3]/label';
        const textOfTextField = '';

        // cy.intercept('GET', 'https://raw.githubusercontent.com/mui/material-ui/master/docs/notifications.json', {
        //     statusCode: 200
        // }).as('getNotificationsRequest');
    
        // cy.intercept('GET', 'https://srv.carbonads.net/ads/CK7DT53I.json?segment=placement:material-uicom', {
        //     statusCode: 200
        // }).as('getCarbonAdsRequest');        

        // cy.wait('@getNotificationsRequest').its('response.statusCode').should('eq', 200);
        // cy.wait('@getCarbonAdsRequest').its('response.statusCode').should('eq', 200);

        cy.wait(1000)
        cy.xpath(buttonOutline, { timeout: 2000 }).should('have.attr', 'id', 'outlined-basic');
        cy.checkAllElements(buttonOutline, textOfTextField).xpath(buttonOutline, { timeout: 2000 }).invoke('val').should('have.length', 0);
        cy.clickElementByXPath(buttonOutline).xpath(buttonOutlineColor, { timeout: 2000 }).should('have.attr', 'data-shrink').and('match', /true|false/);
        cy.xpath(buttonOutline, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonOutline, { timeout: 2000 }).invoke('val').should('have.length', 14);

        cy.xpath(buttonFilled, { timeout: 2000 }).should('have.attr', 'id', 'filled-basic');
        cy.checkAllElements(buttonFilled, textOfTextField).xpath(buttonFilled, { timeout: 2000 }).invoke('val').should('have.length', 0);
        cy.clickElementByXPath(buttonFilled).xpath(buttonFilledColor, { timeout: 2000 }).should('have.attr', 'data-shrink').and('match', /true|false/);
        cy.xpath(buttonFilled, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonFilled, { timeout: 2000 }).invoke('val').should('have.length', 14);

        cy.xpath(buttonStandard, { timeout: 2000 }).should('have.attr', 'id', 'standard-basic');
        cy.checkAllElements(buttonStandard, textOfTextField).xpath(buttonStandard, { timeout: 2000 }).invoke('val').should('have.length', 0);
        cy.clickElementByXPath(buttonStandard).xpath(buttonStandardColor, { timeout: 2000 }).should('have.attr', 'data-shrink').and('match', /true|false/);
        cy.xpath(buttonStandard, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonStandard, { timeout: 2000 }).invoke('val').should('have.length', 14);
    });

    it('Test Case 2 : Users can use TextField of outlined', () => {
        const buttonOutline = buttonOutlined1;
        const textOfTextField = '';

        cy.xpath(buttonOutline, { timeout: 2000 }).should('have.attr', 'id', 'outlined-basic');
        cy.checkAllElements(buttonOutline, textOfTextField);
        cy.xpath(buttonOutline, { timeout: 2000 }).invoke('val').should('have.length', 0);

        cy.xpath(buttonOutline, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonOutline, { timeout: 2000 }).invoke('val').should('have.length', 14);
    });

    it('Test Case 3 : Users can use TextField of filled', () => {
        const buttonFilled = buttonFilled1;
        const textOfTextField = '';

        cy.xpath(buttonFilled, { timeout: 2000 }).should('have.attr', 'id', 'filled-basic');
        cy.checkAllElements(buttonFilled, textOfTextField);
        cy.xpath(buttonFilled, { timeout: 2000 }).invoke('val').should('have.length', 0);

        cy.xpath(buttonFilled, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonFilled, { timeout: 2000 }).invoke('val').should('have.length', 14);
    });

    it('Test Case 4 : Users can use TextField of standard', () => {
        const buttonStandard = buttonStandard1;
        const textOfTextField = '';

        cy.xpath(buttonStandard, { timeout: 2000 }).should('have.attr', 'id', 'standard-basic');
        cy.checkAllElements(buttonStandard, textOfTextField);
        cy.xpath(buttonStandard, { timeout: 2000 }).invoke('val').should('have.length', 0);

        cy.xpath(buttonStandard, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(buttonStandard, { timeout: 2000 }).invoke('val').should('have.length', 14);
    });

    it('Test Case 5 : Users can use Native Select', () => {
        const nativeSelect = nativeSelect1;
        const nativeSelectOptions = nativeSelectOptions1;
        const textOfTextField = '';

        cy.checkAllElements(nativeSelectOptions).xpath(nativeSelectOptions, { timeout: 2000 }).invoke('val').should('have.length', 3);
        cy.xpath(nativeSelectOptions).select('USD').should('have.value', 'USD').wait(1000);
        cy.xpath(nativeSelectOptions).select('EUR').should('have.value', 'EUR').wait(1000);
        cy.xpath(nativeSelectOptions).select('BTC').should('have.value', 'BTC').wait(1000);
        cy.xpath(nativeSelectOptions).select('JPY').should('have.value', 'JPY').wait(1000);
    });
    it('Test Case 6 : Users can use Input Password', () => {
        const inputPassword = inputPassword1;
        const inputPasswordVisibility = inputPasswordVisibility1;
        const textOfTextField = '';
        cy.checkAllElements(inputPassword).xpath(inputPassword, { timeout: 2000 }).invoke('val').should('have.length', 0);
        cy.checkAllElements(inputPasswordVisibility).xpath(inputPasswordVisibility, { timeout: 2000 }).invoke('val').should('have.length', 0);
        cy.xpath(inputPassword, { timeout: 2000 }).type('0Outlined01230').should('have.value', '0Outlined01230');
        cy.xpath(inputPassword, { timeout: 2000 }).invoke('val').should('have.length', 14);
        cy.xpath(inputPassword, { timeout: 2000 }).should('have.attr', 'type', 'password');
        cy.xpath(inputPasswordVisibility, { timeout: 2000 }).click().xpath(inputPassword).should('have.attr', 'type', 'text').wait(1000);
        cy.xpath(inputPasswordVisibility, { timeout: 2000 }).click().xpath(inputPassword).should('have.attr', 'type', 'password').wait(1000);
        for (let i = 0; i < 3; i++) {
            cy.xpath(inputPasswordVisibility, { timeout: 2000 }).click();
            cy.xpath(inputPassword).should('have.attr', 'type', i % 2 === 0 ? 'text' : 'password');
            cy.wait(1000);
        }
    });
    
});

describe('Web UI cypress.io', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions', { failOnStatusCode: false })
        // cy.visit('/')
    })
    // beforeEach
    // before

        // สร้างคำสั่งเพิ่มเติมใน Cypress
    Cypress.Commands.add('checkAllElements', (xpathToElement, textToCheck) => {
        // เพิ่มการตรวจสอบที่คุณต้องการทำที่นี่
        cy.xpath(xpathToElement, { timeout: 5000 }).should('exist');

        if (textToCheck !== undefined) {
            cy.xpath(xpathToElement).should('have.text', textToCheck);
        }
        // เพิ่มการตรวจสอบอื่นๆ ตามที่คุณต้องการ
    });

    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อกดปุ่มตาม XPath
    Cypress.Commands.add('clickElementByXPath', (xpathToElement) => {
        cy.xpath(xpathToElement).click();
    });
    
    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อกรอกข้อความตาม XPath
    Cypress.Commands.add('typeTextByXPath', (xpathToElement, text) => {
        cy.xpath(xpathToElement).type(text).should('have.value', text);
    });
    
    // สร้างคำสั่งเพิ่มเติมใน Cypress เพื่อตรวจสอบการแจ้งเตือนตาม XPath
    Cypress.Commands.add('checkAlertByXPath', (xpathToElement, expectedText) => {
        cy.xpath(xpathToElement).should('have.text', expectedText);
    });

    it('Test Case 1 : Users can use submit of the form', () => {
        const submitForm = '//*[@id="actions"]/div/div[14]/div/form';
        const inputSubmitForm = '//*[@id="couponCode1"]';
        const textOfTextField = '';

        cy.xpath(submitForm, { timeout: 2000 }).find('[type="text"]').should('have.attr', 'id', 'couponCode1');
        cy.checkAllElements(inputSubmitForm, textOfTextField);
        cy.xpath(submitForm, { timeout: 2000 }).find('[type="text"]').invoke('val').should('have.length', 0);

        cy.xpath(submitForm)
            .find('[type="text"]').type('0Action01230')
        cy.xpath(submitForm).submit()
            .next().should('contain', 'Your form has been submitted!')

        cy.get('.action-form')
            .find('[type="text"]').type('0Action01230')
        cy.get('.action-form').submit()
            .next().should('contain', 'Your form has been submitted!')
    });
    
});

describe('Test HTTP requests', () => {

    beforeEach(() => {
        cy.visit('https://mui.com/material-ui/react-text-field/', { failOnStatusCode: false })
        // cy.visit('/')
    })
    // beforeEach
    // before

    it('Test Case 1 : Test HTTP requests of GET - 1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(500)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
    });

    it('Test Case 2 : Test HTTP requests of GET - 2', () => {
    });

    it('Test Case 3 : Test HTTP requests of POST - 1', () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
            .its('body.0') // yields the first element of the returned list
            .then((user) => {
                expect(user).property('id').to.be.a('number')
                // make a new post on behalf of the user
                cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
                userId: user.id,
                title: 'Cypress Test Runner',
                body: 'Fast, easy and reliable testing for anything that runs in a browser.',
                })
            })
            // note that the value here is the returned value of the 2nd request
            // which is the new post object
            .then((response) => {
                expect(response).property('status').to.equal(201) // new entity created
                expect(response).property('body').to.contain({
                title: 'Cypress Test Runner',
                })
                // we don't know the exact post id - only that it will be > 100
                // since JSONPlaceholder has built-in 100 posts
                expect(response.body).property('id').to.be.a('number')
                .and.to.be.gt(100)
                // we don't know the user id here - since it was in above closure
                // so in this test just confirm that the property is there
                expect(response.body).property('userId').to.be.a('number')
            })
    });

    it('Test Case 4 : Test HTTP requests of POST - 2', () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
            .its('body.0') // yields the first element of the returned list
            .as('user') // saves the object in the test context
            .then(function () {
                // NOTE 👀
                //  By the time this callback runs the "as('user')" command
                //  has saved the user object in the test context.
                //  To access the test context we need to use
                //  the "function () { ... }" callback form,
                //  otherwise "this" points at a wrong or undefined object!
                cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
                userId: this.user.id,
                title: 'Cypress Test Runner',
                body: 'Fast, easy and reliable testing for anything that runs in a browser.',
                })
                .its('body').as('post') // save the new post from the response
            })
            .then(function () {
                // When this callback runs, both "cy.request" API commands have finished
                // and the test context has "user" and "post" objects set.
                // Let's verify them.
                expect(this.post, 'post has the right user id')
                .property('userId').to.equal(this.user.id)
            })
    });

    it('Test Case 5 : Test HTTP requests of POST - 2', () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
    });

    it('Test Case 6 : Test HTTP requests of PUT - 1', () => {
          // JSON body ที่คุณต้องการส่งใน PUT request
        const requestBody = {
            "id": 1,
            "title": "Updated Title",
            "body": "Updated Body",
            "userId": 1
        };

        // ส่ง HTTP PUT request พร้อมกับ JSON body
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: requestBody, // เพิ่ม JSON body ที่คุณต้องการส่ง
            headers: {
            'Content-Type': 'application/json', // ระบุ Content-Type เป็น JSON
            },
        })
        .then((response) => {
            // ตรวจสอบสถานะของการ PUT (ควรเป็น 200 ถ้าสำเร็จ)
            expect(response.status).to.equal(200);

            // ตรวจสอบข้อมูลใน response body (อาจต้องปรับแต่งตาม API ที่ใช้)
            expect(response.body).to.deep.equal(requestBody);
            // expect(response.body).to.deep.include({ "id": 1 });
        });
    });

    it('Test Case 7 : Test HTTP requests of DELETE - 1 "DELETE Request with JSON Body"', () => {
        const requestBody = {
            "postId": 1,
            "id": 1,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "email": "Presley.Mueller@myrl.com",
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
          };
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: requestBody, // เพิ่ม JSON body ที่คุณต้องการส่ง
            headers: {
            'Content-Type': 'application/json', // ระบุ Content-Type เป็น JSON
            },
        })
        .then((response) => {
            // ตรวจสอบสถานะของการ DELETE (ควรเป็น 200 หรือ 204 ถ้าสำเร็จ)
            expect(response.status).to.be.oneOf([200, 204]);

            // ตรวจสอบข้อความใน response body (จะอยู่ใน response.body)
            expect(response.body).to.deep.equal({});
        });
    });
    
    it('Test Case 8 : Test HTTP requests of DELETE - 2', () => {
    });
    
});