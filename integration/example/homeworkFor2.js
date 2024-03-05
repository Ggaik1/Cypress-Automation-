// describe('Find expected product by its name and click', () => {
//     it('Check all products and click expected one by its name', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//         cy.get('button.btn.btn-primary').each(($buttons) => {
//             if ($buttons.text().includes('Login')) {
//                 cy.wrap($buttons).click()
//             }
//         })
//     })
// })


describe('Find expected product by its name and click', () => {
    it('Check all products and click expected one by its name', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('button.btn.btn-primary').then(($buttons) => {
           
            for(let i = 0; i < $buttons.length; i++) {
                const buttonText = $buttons.eq(i).text();
                if (buttonText.includes('Login')) {

                    cy.wrap($buttons.eq(i)).click();

                    break;

            
                }
            }
        });
    })
})


// fra radio buttonneri vrov test vorn uni text radio3 click ara

// describe('Find expected product by its name and click', () => {
//     it('Check all products and click expected one by its name', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//         cy.get('#radio-btn-example').find('input[type="radio"]').then(($radioButtons) => {
//             for (let i = 0; i < $radioButtons.length; i++) {
//                 const buttonText = $radioButtons.eq(i).text();
//                 if (buttonText.includes('radio3')) {
//                     cy.wrap($radioButtons.eq(i)).click();
                    
//                 }
//             }
//         });
//     });
// });
                


