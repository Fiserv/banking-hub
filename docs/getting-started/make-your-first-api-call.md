# Make Your First API Call

This section describes how to send an API request to server and receive response payload. You can test the APIs using the inbuilt API Explorer in Fiserv Developer Studio or using third-party API testing tools.

> #### Note
> 
> Registration is required to test the APIs using third-party API testing tools.

## Using API Explorer:

To test our APIs in Sandbox environment, you do not need API Keys or Access Token. Advanced Developer Studio of Fiserv is connected to our Sandbox environment, which lets you test the APIs you want without installing any tool or configuring your system. 

To test an API, do the following:
1.	Click the API from API Explorer 
2.	Enter the values that you want to test under the Parameters and Request Schema tab
3.	Click Run. Response payload of API request will display under the Response tab

![API-Explorer](https://user-images.githubusercontent.com/81968767/144227101-5db72316-f533-4557-8c8e-360f3465371a.gif)

> #### Note
> 
> Standard API requests are added under the dropdown, and you can select the dropdown options to see the response for such requests.

## Using Third-party API Testing Tools:
> #### Information
> 
> This section is under development.


You can also test our APIs in Sandbox environment using third-party API testing tools, for example, Postman, Apigee, JMeter and others.

> #### Tip
>
> We recommend to refer the Know Our Standard API Structure section to understand the API structure before testing an API


### Postman API Platform

Postman is a REST API GUI client that lets you test RESTful APIs. If you are familiar with the Postman tool, you may want to refer this section to test Fiserv APIs in the test environment. 

#### Prerequisites:
To make an API call, you will need the following:
- An active user account on Fiserv Dev Studio
- Access Token


**How to create an account on Dev Studio:**
To create an account on Fiserv Developer Studio, refer to the Register to Fiserv Developer Studio section. After a successful registration, you will receive the following credentials via email:
- API Key
- Username/Password
- OrgId 
- AppId
- VendorId 
- ChannelId


**How to generate Access Token:**
An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. 

To generate the access token, follow the steps below:
1.	Sign in to your Fiserv Developer Studio account
2.	Click Credentials
3.	Click generate Access Token

> #### Note
>
> Once generated, the access token is valid for 15 mins, you may reuse the access token until it expires.


#### API testing in Postman

This section describes how to test Fiserv APIs in Postman application.

> #### Note
>
> We recommend you to keep the API documentation accessible to refer the default request-payload  that is required to be sent in the request message.

Open a web or desktop application of Postman and follow the steps below:

1.	Create a new HTTP Request
2.	Set the API method to POST or PUT as mentioned in the documentation of the API that you want to test <br> **Note:** *API method of all Fiserv APIs is set to either POST or PUT for all kind of operations*
3.	Insert the host URL 
4.	Add EFXHeader and Authorization as new parameters under the Headers section and insert the EFXHeader and Token values in the respective fields
5.	Insert the request-payload under the Body tab. Make sure that the raw button activated <br> **Note:** *Default request-payload can be copied form the API Explorer documentation and you may modify certain fields as mentioned in the documentation*
6.	Click Send. API Response will be generated in the Response section
