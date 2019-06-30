import { getGreeting } from '../support/app.po';

describe('nx-is-broken', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-is-broken!');
  });
});
