import { validate } from '../../dist/index';

context('validate', () => {
  it('should return true for a kebab-case property with a valid value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'background-color', 'red')
      .should('eq', true);
  });

  it('should return false for a kebab-case property with an invalid value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'background-color', 'rud')
      .should('eq', false);
  });

  it('should return true for a camelCase property with a valid value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'backgroundColor', 'red')
      .should('eq', true);
  });

  it('should return false for a camelCase property with an invalid value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'backgroundColor', 'rud')
      .should('eq', false);
  });

  it('should return true for a valid shorthand value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'border', '1px solid red')
      .should('eq', true);
  });

  it('should return false for an invalid shorthand value', () => {
    cy.wrap({ validate })
      .invoke('validate', 'border', '-1px occasional rud')
      .should('eq', false);
  });
});
