export default class SignupController {
  handle = (httpRequest: any): any => (
    {
      statusCode: 400,
      body: new Error('Missing param: name'),
    }
  );
}
