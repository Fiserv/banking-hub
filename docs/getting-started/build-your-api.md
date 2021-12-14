# Build Your Application

> #### Information
> 
> This section is under development.

## Certification

To authenticate your application, you are required to certify the application against an environment that mirrors production in a bank or credit union.

### Test Certification 

To get a certification for test environment, you are required to register for an API key. After successful registration, you will be assigned an endpoint that you can use for testing and validating your application.

### Production Certification

Upon successful application validation, your application will be ready for production.  Fiserv will issue you the endpoints available for your application.  


## Environments: 
1. Sandbox – Test environment
2. Development – Build your app 
3. Production – Launch your app
<What credentials are required for each environment>


### Sandbox
The Sandbox allows you to simulate a production environment with mock users and transactions to test the application. Using the simulated environment, you can also view the HTTP requests and responses to gain an understanding of the behavior and capabilities of the APIs. 

Follow these steps to test your application in the Sandbox environment:
1.	**Choose the Application:** Access the Sandbox environment and choose an application to use for testing
2.	**Create a mock user database:** Create user accounts that reflect the sorts of banking accounts your application will be accessing
3.	**Create mock transactions:** In the Sandbox environment, add transactions to simulate the kinds of transactions that occur on the banking accounts your application will be accessing
4.	**Test the environment:** With the mock data setup, you can now make API calls and test your application

> #### Note
> 
> Use the Sandbox authorization code while making the API calls.


### Development Environment
The development environment allows you to simulate a production environment with mock users and transactions to test the application. Using the simulated environment, you can also view the HTTP requests and responses to gain an understanding of the behavior and capabilities of the APIs.

Prerequisites:
* Test certificate <link>
* Authentication Key

To authenticate your application, you are required to certify the application against an environment that mirrors production in a bank or credit union. To get a certification for test environment, you are required to register for an API key. After successful registration, you will be assigned an endpoint that you can use for testing and validating your application.


### Production Environment
Upon successful application validation, your application will be ready for production. Fiserv will issue you the endpoints available for your application.

Prerequisites:
* Production certificate <link>
*	Authentication Key
*	Organization ID
*	Vendor ID
