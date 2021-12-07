# Make Your First API Call

This section describes the process to send an API request to server and receive a response payload. To test the APIs, use the inbuilt API Explorer in Fiserv Developer Studio or any third-party API testing tool.

> #### Note
> 
> Registration is required to test the APIs using third-party API testing tools.

## Using the Inbuilt API Explorer

To test our APIs in Sandbox environment, no API Keys or Access Token is required. The advanced Developer Studio of Fiserv is connected to our Sandbox environment that lets you test the APIs you want without configuring your system or installing any tool. 

To test an API, do the following:
1.	From API Explorer, click the API you want to test 
2.	Enter the values you want to test under the **Request Schema** tab
3.	Click **Run**. Response payload of API request displays under the **Response** tab

<kbd>
  <img src="https://user-images.githubusercontent.com/81968767/144993021-1d4a7bbc-7ae5-477e-937b-9ace379e6142.gif" alt="API Explorer" />
</kbd> <br><br>

> #### Note
> 
> Standard API requests are added under the drop-down, and you can select the drop-down options to view the response for such requests.

## Using Third-party API Testing Tools

You can also test our APIs in Sandbox environment using third-party API testing tools, for example, Postman, Apigee, JMeter and others.

> #### Tip
>
> We recommend you to refer the [Know Our Standard API Structure](path=docs/getting-started/before-you-start.md#know-our-standard-api-structure) section to understand the API structure prior to test the APIs in any third-party tool.


### Prerequisites
To make an API call, you need the following:
- An active user account on Fiserv Dev Studio
- Access Token


**Creating an account on Dev Studio**


To create an account on Fiserv Developer Studio, refer to the [Register to Fiserv Developer Studio](?path=docs/getting-started/before-you-start.md#register-to-fiserv-developer-studio) section. After successful registration, following credentials are obtained via email:
- API Key
- Username/Password
- OrgId 
- AppId
- VendorId 
- ChannelId

These credentials are required to passed as header parameters under the [EFXHeader](?path=docs/api-ref-EFX-header.md) parameter. For more information, refer to the <EFXHeader> section.

**Generating an Access Token**
   
An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. 

To generate the access token, follow the steps below:
1.	Sign on to your Fiserv Developer Studio account
2.	Click **Credentials**
3.	Click **Generate Access Token**

> #### Note
>
> Once generated, the access token is valid for 15 mins. You can reuse the access token until it expires.


### Example
  
Following example illustrates the process to test an API using Postman application.
  
  
Postman is a REST API GUI client that lets you test RESTful APIs. If you are familiar with the Postman tool, you may want to refer this section to test Fiserv APIs in the test environment. 
  
  
> #### Tip
>
> We recommend you have the API documentation accessible to refer the default request-payload for the request message.

  
Open a web or desktop application of Postman and follow the steps below:

1.	Create a new HTTP Request
2.	Set the API method to POST or PUT as mentioned in the documentation of the API that you want to test <br> **Note:** *API method of all Fiserv APIs is either set to POST or PUT for all operations*
3.	Insert the host URL 
4.	Add EFXHeader and Authorization as new parameters under the **Headers** section and insert the {EFXHeader} and {token} values in the respective fields
5.	Insert the request-payload under the **Body** tab. Make sure that the **raw** button activated, and text format is set to **JSON** (refer the screenshot)<br> <kbd><img src="https://user-images.githubusercontent.com/81968767/145019152-399b813e-61a6-41c1-9e79-2e3cfd10015f.png" width="70%" /></kbd><br> **Note:** *Default request-payload can be copied form the API Explorer documentation and you may modify certain fields as mentioned in the documentation*
6.	Click Send. API Response is generated in the Response section

  
<kbd>
  <img src="https://user-images.githubusercontent.com/81968767/145018795-9d83eaac-0606-4469-b6d0-bec2d3aa9d96.gif" />
</kbd> <br><br>
