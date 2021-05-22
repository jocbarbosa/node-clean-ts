import SignupController from './signup';

describe('Signup controller', () => {
  test('Should return 400 if name is not provided', () => {
    const sut = new SignupController();
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
