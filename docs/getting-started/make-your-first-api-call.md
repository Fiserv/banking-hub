# Make Your First API Call

This section describes the process to send an API request to the server and receive a response payload. To test the APIs, use the built-in API Explorer in Fiserv Developer Studio or any third-party API testing tool.


## Using the Built-in API Explorer

To test our APIs in Sandbox environment, no API Keys or Access Token is required. The advanced Developer Studio of Fiserv is connected to our Sandbox environment that lets you test the APIs you want without configuring your system or installing any tool. 

To test an API, do the following:
1.	From API Explorer, click the API you want to test 
2.	Enter the values you want to test under the **Request Schema** tab
3.	Click **Run**. Response payload of API request displays under the **Response** tab

<kbd>
  <img src="https://user-images.githubusercontent.com/81968767/145146944-6285dfe4-898a-4b9c-bda4-d351a6a9568f.gif" alt="API Explorer" />
</kbd> <br><br>

<!-- theme: success -->
> #### Tip
> 
> Sample API request payloads are added under the drop-down, and you can select the drop-down options to view the response for such requests.

## Using Third-party API Testing Tools

You can also test our APIs in Sandbox environment using third-party API testing tools, for example, Postman, Apigee, JMeter and others.

<!-- theme: info -->
> #### Note
> 
> Registration to Fiserv Developer Studio (a work in progress) is required to test the APIs using third-party API testing tools. Currently we are working on enhancing the registered user experience. Please stay tuned for updates.

<!-- theme: success -->
> #### Tip
>
> We recommend you to refer the <a href="?path=docs/getting-started/before-you-start.md#know-our-standard-api-structure" title="Click to open">Know Our Standard API Structure</a> section to understand the API structure prior to test the APIs in any third-party tool.


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

Some of these credentials are required to be passed as header parameters under the EFXHeader parameter. For more information, refer to the [EFXHeader](?path=docs/api-ref-EFX-header.md) section.

**Generating an Access Token**
   
An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. 

To generate the access token, follow the steps below:
1.	Sign on to your Fiserv Developer Studio account
2.	Go to the Dashboard
3.	From the top-right corner of the screen, click **Credentials**
4.	Click **Generate Access Token**

<!-- theme: info -->
> #### Note
>
> Once generated, the access token is valid for 15 mins. You can reuse the access token until it expires.


### Example
  
Following example illustrates the process to test an API using Postman application.
  
  
Postman is a REST API GUI client that lets you test RESTful APIs. If you are familiar with the Postman tool, you may want to refer this section to test Fiserv APIs in the test environment. 
  
<!-- theme: success -->  
> #### Tip
>
> We recommend you have the API documentation accessible to refer the default request-payload for the request message.

  
Open a web or desktop application of Postman and follow the steps below:

1.	Create a new HTTP Request
2.	Set the API method to POST or PUT as mentioned in the documentation of the API that you want to test <br> **Note:** *API method of all Fiserv APIs is either set to POST or PUT for all operations*
3.	Insert the host URL 
4.	Add EFXHeader and Authorization as new parameters under the **Headers** section and insert the {EFXHeader} and {token} values in the respective fields
5.	Insert the request-payload under the **Body** tab. Make sure that the **raw** button activated, and text format is set to **JSON** (refer the screenshot)<br> <kbd><img src="https://user-images.githubusercontent.com/81968767/145019152-399b813e-61a6-41c1-9e79-2e3cfd10015f.png" width="70%" /></kbd><br> **Note:** *Default request-payload can be copied from the API Explorer documentation and you may modify certain fields as mentioned in the documentation*
6.	Modify the field values in JSON code that you want to test 
7.	Click **Send**. API Response is generated in the Response section.

  
<kbd>
  <img src="https://user-images.githubusercontent.com/81968767/145146913-16d54888-1e48-46b7-99f5-64827a78e21f.gif" />
</kbd> <br><br>

## Downloads (test)

[Download File](?path=docs/resources/esf-service-swagger-release-11.0.0.2023.1%20(3).zip)
[Postman Collection](?path=docs/resources/Banking%20Hub%20-%20Premier%20-%20Trial%20Plan%20Postman%20Collection.json)

<a download="Banking%20Hub%20-%20Premier%20-%20Trial%20Plan%20Postman%20Collection.json" href="?path=docs/resources/" title="ImageName"> Download </a>

