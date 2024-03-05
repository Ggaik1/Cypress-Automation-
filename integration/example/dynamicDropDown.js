// describe('Testing dynamic drop-down', () => {
    // it('Selectting and checking dynamic dropdowns', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#autocomplete').type('Fra');
        // cy.get('.ui-autocomplete').find('.ui-menu-item').eq(0).click();
        // cy.get('#autocomplete').should('have.value', 'France');
    // });

    // it('Select 2nd dropdown option', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //     cy.get('input[value="radio2"]').click()
    //     cy.get('input[value="radio2"').should('be.checked');
        
    // });

//Homework1 for in the li and div text and check that it's exactly "France" and click
    
    // it('search "Fra" and find exactly "France" from suggestions and check', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //     cy.get('#autocomplete').type('Fra');
    //     cy.get('.ui-autocomplete').find('.ui-menu-item').each(($el) => {
    //     const countryName = $el.text();
    
    //         if (countryName === 'France') {
    //             cy.wrap($el).click();
    //         }
    //     });
    //     cy.get('#autocomplete').should('have.value', 'France');
    // });



// Homework2 Need to select option which contains "Option2" text and then check that select value is option2
//cy.get('#dropdown-class-example').find('option').contains('Option2').click();

//     it('select option containing "Option2" text and check if value is "Option2"', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//         cy.get('#dropdown-class-example').select('option2');
//         cy.get('#dropdown-class-example').should('have.value', 'option2');
//         cy.get('option:selected').should('have.text', 'Option2');
//     });
// });


describe("Testing select box", () => {
    it("Checking that the selected option contains 'Option2' text and the check that select value is option2", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cy.get("select").select("option2");
        // cy.get("option:selected").contains("Option2").should("have.text", "Option2");
        cy.get("#dropdown-class-example").find("option").each(($el) => {
            const optionName = $el.text();
            if(optionName.includes("Option2")) {
                $el.select();
            }
        });

            cy.get("select[value='option2']").should("have.value", "Option2");

        });
    });