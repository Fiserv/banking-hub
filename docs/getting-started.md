# Getting Started

Cards APIs support the creation, maintenance and retrieval of card records. This guide provides quick steps to use our Cards APIs during integration with your applications.

Following topics are covered in this guide:
* Registration
* Authentication
* Sandbox
* Certification
* Resources

## Registration

To validate and deploy Fiserv banking APIs into production, you are required to create an account on Fiserv Developer Studio. This registration helps to get credentials for sandbox testing and live environments. However, registration is not required to learn about our API integration process and test the APIs.

### Setting up an Account

To set up an account on Fiserv Developer Studio, follow the steps below:
1.	Go to [Fiserv Developer Studio](../../..) 
2.	From the top-right corner of the screen, Click **Create Account** 
3.	Populate the required fields and click **Create Account** 
4.	Follow the instructions on the screen to set up your account based on integration requirements
5.	Sign on to your Fiserv Developer Studio account after it is activated

## Authentication

Once the account setup process is complete, you need to authenticate your API build. Authentication is required for the secure testing or integration of your API. 

### Authentication Keys

To authenticate your application, you need *test* and *live* API authentication keys, which can be obtained  from the dashboard of Developer Studio. You may reuse the authentication keys until they expire. If a key expires, you can create a new key from the **Credentials** section of the dashboard.

### Steps for Authentication 

Follow these steps to authenticate your API build:
1.	Obtain the API authentication keys from the **Credentials** section of the Developer Studio dashboard
2.	Authenticate your user account with the acquired keys and retrieve the authorization code
3.	Use the provided authorization code to access the API and Sandbox resources

## Sandbox

The Sandbox allows you to simulate a production environment with mock users and transactions to test the application. Using the simulated environment, you can also view the HTTP requests and responses to gain an understanding of the behavior and capabilities of the APIs. 

Follow these steps to test your application in the Sandbox environment:
1.	**Choose the Application:** Access the Sandbox environment and choose an application to use for testing
2.	**Create a mock user database:** Create user accounts that reflect the sorts of banking accounts your application will be accessing
3.	**Create mock transactions:** In the Sandbox environment, add transactions to simulate the kinds of transactions that occur on the banking accounts your application will be accessing
4.	**Test the environment:** With the mock data setup, you can now make API calls and test your application

> Note: Use the Sandbox authorization code while making the API calls.

## Certification

To authenticate your application, you are required to certify the application against an environment that mirrors production in a bank or credit union.

### Test Certification 

To get a certification for test environment, you are required to register for an API key. After successful registration, you will be assigned an endpoint that you can use for testing and validating your application.

### Production Certification

Upon successful application validation, your application will be ready for production.  Fiserv will issue you the endpoints available for your application.  


## Resources

Refer to the following links for more information on the Fiserv Open Banking API integration:

* [GitHub repository](https://github.com/Fiserv/Banking-Product-Cards) 
* [API libraries](http://swaggerhub.onefiserv.net/)
* [AppMarket](https://appmarket.fiservapps.com/)

> Note: Registration is required to access the Fiserv Open Banking API libraries.

## Feedback and Support


Dig in and start coding your applications using our APIs. If you should need additional support, please include the GitHub definition for each API you are inquiring about. Contact our team using the Support link on the homepage.
