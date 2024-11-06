# Make Your First API Call

This section describes the process to send an API request to the server and receive a response payload. To test the APIs, use the third-party API testing tool.

## Using Third-Party API Testing Tools

You can test our APIs in the Sandbox environment using third-party API testing tools, such as Postman, Apigee, JMeter and others.

<!-- theme: info -->
> #### Tip
>
> We recommend you to refer to the <a href="?path=docs/getting-started/know-our-standard-api-structure.md#know-our-standard-api-structure" title="Click to open">Know Our Standard API Structure</a> section to understand the API structure prior to testing the APIs in any third-party tool.


### Prerequisites
To make an API call, you need:
- An active user account on Fiserv Dev Studio
- An access token


**Creating an account on Dev Studio**


To create an account on Fiserv Developer Studio, refer to the [Register on Fiserv Developer Studio](?path=docs/getting-started/before-you-start.md#register-on-fiserv-developer-studio) section. 
After successful registration, you will be able to create a workspace. You can obtain the following credentials from the workspace:

* Product name  
* Org ID   
* API key name
* API key type
* API key
* API secret
* Host URL
  
These credentials are important to send in API requests. **API key** and **API secret** values are used to generate access token, whereas **Org ID** value is required to be passed as header parameter under the [EFXHeader](?path=docs/api-ref-EFX-header.md) parameter.


**Generating an Access Token**
   
An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. **API key** and **API secret** values obtained from Workspace are required to generate an access token. 
  
To generate an access token, refer to the [Generating Access Token](?path=docs/getting-started/before-you-start.md#generating-access-token) section.


<!-- theme: info -->
> #### Note
>
> Once generated, the access token is valid for approximately 15 minutes. You can reuse the access token until it expires.


### Example
  
The following example illustrates the process to test an API using Postman application:
  
  
Postman is a client that lets you test RESTful APIs. If you are familiar with Postman, refer to the following steps to test Fiserv APIs in the sandbox environment. 
  
<!-- theme: info -->  
> #### Recommendation
>
> Keep the API documentation accessible to refer to the default request-payload for the request message. You may also download the Postman collection and refer to sample API requests from the **Resources** section. 

#### Resources

* **API Specifications**

  [![downoad-icon-BH]][BH]  

* **Postman Collection**

  [![downoad-icon-PRM]][PRM]      [![downoad-icon-SIG]][SIG]   


[downoad-icon-PRM]: https://github.com/Fiserv/banking-hub/assets/81968767/934da291-c743-41cb-9325-16cf2c8d7bda
[PRM]: (../assets/MakeYourFirstAPICallResources/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip)

[SIG]: (../assets/MakeYourFirstAPICallResources/Banking.Hub.-.Signature.-.Trial.Plan.Postman.Collection.zip)

[downoad-icon-BH]: https://github.com/Fiserv/banking-hub/assets/81968767/4c31d642-7574-413e-b02e-32f7ad1ae504
[BH]: (../assets/MakeYourFirstAPICallResources/esf-service-swagger-release-11.0.0.2023.1.zip)


<!--

* [Download Banking Hub API Specifications](https://github.com/Fiserv/banking-hub/files/11222397/esf-service-swagger-release-11.0.0.2023.1.zip)
* [Download Postman Collection - Premier Core](https://github.com/Fiserv/banking-hub/files/11449420/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip "Click to Download")

-->

#### Prerequisite to run Postman collection

The attached Postman collection use variables to store and reuse few values such as Hostname, Username and Password. To update the variable values, perform the below steps in Postman.
1.	From the **Collections** tab, select the root folder of Banking Hub Postman collection 
2.	Select the **Variables** tab
3.	Insert the variable values in the **Current value** column for the following variables:
    * **authToken_UserName**: _API key value_
    * **authToken_Password**: _API secret value_
    * **OrgId**: _Org Id value_
    
      <!-- theme: info -->
      > #### Note
      > 
      > You can obtain the _API key_, _API secret_ and _Org Id_ values from the Credentials tab of My workspaces. 

    <kbd>![Postman-collection-steps](https://user-images.githubusercontent.com/81968767/225672853-7c17109c-3969-4ab7-9fa5-282b335e9b72.png) </kbd>


To  test an API using Postman application: 

1. Open a web or desktop application of Postman
2.	Create a new HTTP request
3.	Set the API method to POST or PUT, as mentioned in the API document which you want to test 
    <!-- theme: info -->
    > #### Note
    >
    > API method of all Fiserv APIs is either set to POST or PUT for all operations.

5.	Insert the request URL 
6.	Under the **Authentication** tab, select the **Type** value as **Bearer Token** and insert access token in the **Token** box

    ![image](https://user-images.githubusercontent.com/81968767/220967588-52eec24d-4b13-4d26-ba28-a9ad90943e26.png)
    
6.	Add EFXHeader as new parameters under the **Headers** section and insert the <EFXHeader> value in JSON format 
7.	Insert the request-payload under the **Body** tab. Make sure that the **raw** radio button is activated and the text format is set to **JSON** 
  
    <kbd><img src="https://user-images.githubusercontent.com/81968767/145019152-399b813e-61a6-41c1-9e79-2e3cfd10015f.png" width="70%" /></kbd><br>
    
    <!-- theme: info -->
    > #### Note
    >
    > Default request-payload can be copied from the API Explorer document and you may modify certain fields as mentioned in the documentation.
  
8.	Modify the field values in JSON code that you want to test 
9.	Click **Send**. API response is generated in the Response section

  
<kbd>
  <img src="https://user-images.githubusercontent.com/81968767/145146913-16d54888-1e48-46b7-99f5-64827a78e21f.gif" />
</kbd>
  
  
