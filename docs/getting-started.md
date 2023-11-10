<!-- 
type: tab 
titles: Before You Start, Know Our Standard API Structure, Make Your First API Call
-->

# Before You Start
<!-- theme: info -->
> #### Note for Developers 
>
> The current user journey enables developers to register for a trial plan that provides access to a range of Standard Bank Platform APIs on Banking Hub. <br><br>To get access to a dedicated test environment, optional and ancillary services, including dedicated technical services, upgrade to a paid Developer Studio subscription plan <a href="https://appmarket.fiservapps.com/company/account/create/" > here</a>.

Before you start integration, it is important to register on the Fiserv Developer Studio to test the Banking Hub APIs in the Sandbox environment. You may choose to test APIs using the [Third-party API Testing Tools](#tab-make_your_first_api_call) of your choice. However, registration is not required to learn about our APIs and reference documentation.

<!--

[![Video Thumbnail]][Video]  

-->

[![Video Thumbnail]][Video1]  

[Video]: https://user-images.githubusercontent.com/81968767/231950346-2b13475d-f395-4b11-8a55-2d0c93f45813.mp4
[Video Thumbnail]: https://user-images.githubusercontent.com/81968767/232030323-bbde320a-2bf5-4e21-97c0-8fe1a8895913.png

[Video1]: https://github.com/Fiserv/banking-hub/assets/81706748/a776e7c8-bea8-410e-9529-43ca3968327d


## Register on Fiserv Developer Studio
This section describes the process to create an account and workspace on Fiserv Developer Studio to obtain credentials for sandbox testing.

### Creating an Account

Perform the following steps to create an account on Fiserv Developer Studio:
1.	From the top-right corner of the screen, click **Create account**
2.	Populate the required fields and click **Next**
3.	Follow the instructions on the screen to set up your account
4.	Sign in to your Fiserv Developer Studio account once it is activated

### Creating a Banking Hub Workspace

Workspaces are dedicated spaces for developers to obtain API key, API secret and product related details.

Perform the following steps to create a workspace on Fiserv Developer Studio:

1.	Sign in to your Fiserv Developer Studio account
2.	From the top-right corner of the screen, click **Workspaces**. My Workspace page displays
    <!-- theme: info -->
    > #### Note
    >
    > All previously created workspaces are listed on the **My workspaces** page. 
    
3.	To create a new workspace, click the **Add a new workspace** button or click the **Create a new workspace** card. Create a workspace dialog box displays
4.	Enter workspace name and description
5.	From the **Product** drop-down list, select **Banking Hub** and click **Create**. A new workspace is created and three tabs of your workspace, namely Summary, Credentials and Settings are visible

    <!-- theme: info -->
    > #### Note
    >
    > Currently, only one workspace can be created for Banking Hub. Also, the Trial Plan is available only for a shared Premier Sandbox Environment. <br> To know our core products [click here](?path=docs/products.md "Products"). 
    
    ![image](https://user-images.githubusercontent.com/81968767/220959037-4fb7f53e-4655-4086-a0a2-8994ee505cb0.png)

Every workspace has following three sections:

* **Summary**: Displays workspace details and list of activities performed on the workspace
* **Credentials**: Lists all active API keys. From this section, you can view or download the following details of an API key:
    * Product name: _Name of the product, for example, Banking Hub_    
    * Org ID: _Organization ID is required to send in all API requests under the [Request Header](#tab-know_our_standard_api_structure)_    
    * API key name: _Name of the API key_
    * API key type: _Type of API key, for example, Trial_
    * API key: _Alphanumeric value of the API key. API key is used as username while generating the access token_
    * API secret: _Alphanumeric value of the API secret. API secret is used as password while generating the access token_
    * Host URL: _Host URL path to send API requests_
      
      ![image](https://github.com/Fiserv/banking-hub/assets/85101648/3832fa3e-867f-4ffd-b8ec-857418bd4fbe)

* **Settings**: Used to modify or delete the workspace

<kbd>
    <img src="https://github.com/Fiserv/banking-hub/assets/85101648/477d8d1b-bfca-428b-84e0-b956a78eb097" />
</kbd>
              

## Generating Access Token

An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. **API key** and **API secret** values obtained from the Workspace are required to generate an access token. 

Use the API mentioned below to generate an access token using Postman.

### URL

``POST https://cert.api.fiservapps.com/fts-apim/oauth2/v2 ``


### Headers

|     Header Name      |     Description                                          |     Required      |
|---------------------|----------------------------------------------------------|---------------|
|     ``Authorization`` |    <p>Base64 encoded string representing your username and password values, appended to the text Basic as follows: </p> <p> <code> Basic <Base64 encoded username and password> </code></p> <p> **Important:** In Postman, use the **Authorization** tab to enter Username and Password values and set authentication type to **Basic Auth**. Use your **API key** as username and **API secret** as password. </p>                      |     Required    |

![image](https://user-images.githubusercontent.com/81968767/220961162-0931a990-f69a-4be7-a6bb-ab847f9464b2.png)


### Request Body

From the Body tab, select the **x-www-form-urlencoded** radio button and enter the following key-value pair:

``grant_type = client_credentials``

![image](https://user-images.githubusercontent.com/81968767/220961197-8e76ec1f-b291-4dfd-8287-c4a83b4ecf40.png)

### Response

|     Field Name      |     Description                                          |     Type      |
|---------------------|----------------------------------------------------------|---------------|
|   ``access_token``    |     Generated access token   value                       |     string    |
|``expires_in``       | <p>Time in milliseconds until the generated token is valid.</p> <p>**Note:** Once generated, the access token is valid for approximately 15 minutes. You can reuse the access token until it expires. </p> | number        |
|    ``token_type``   |     Type of access token                                 |     string    |

**Sample Response**
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJwaS5hdG0iOiJhYXVxIn0.eyJzY29wZSI6IiIsImNsaWVudF9pZCI6ImdxNHpvZDB6Wng3NkVPTUtKQUlQUlJUZHJHOENWNGdJIiwiaXNzIjoiaHR0cHM6Ly9mZGMtZmVkc3NvLWNhdC5maXJzdGRhdGEuY29",
    "expires_in": "899000",
    "token_type": "Bearer"
}
```


<kbd>
    <img src="https://user-images.githubusercontent.com/85101648/221878635-c859cc8d-98a3-47a3-8e57-2299af44b26e.gif" />
</kbd>

<br>
<br>

<a href="#tab-know_our_standard_api_structure" >Next - Know Our Standard API Structure</a> 


<!-- type: tab -->

# Know Our Standard API Structure 

This section describes a standard structure of request and response message of Banking Hub RESTful APIs. 

## Request Message

All API requests must contain the following components:

*	[API Method](#api-method)
* [Request URL](#request-url)
* [Access Token](#access-token)
*	[Request Header](#request-header)
*	[Request Body](#request-body)

For every API request, a response message is obtained that contains a response payload and the status of the API request.

### API Method

For security reasons, all API methods are set to POST or PUT, irrespective of the operation. 

### Request URL

Request URL is formed by appending Host URL and API path. 

<!-- theme: info -->
> **Request URL = Host URL + API path**


To get Host URL, go to API key section of your Workspace. The API path along with the method (POST or PUT) is listed under the API Explorer section of that API on Fiserv Developer Studio. 
Refer the following example to construct a request URL for [**Add Account**](../api/?type=post&path=/acctservice/acctmgmt/accounts) API:

![image](https://user-images.githubusercontent.com/81968767/224235588-d0eb8fd0-6408-475e-99ba-a0a7b06c95b2.png)


If host URL of the product is https://cert.api.fiservapps.com/banking/efx/v1/, then request URL will be:

![image](https://user-images.githubusercontent.com/81968767/220958136-563f1974-a241-42e5-886c-e00e5af08ce0.png)


### Access Token

An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. Banking Hub API uses bearer access token, and API key and API secret are required to generate an access token. A generated access token is valid for approximately 15 minutes.
To generate an access token, refer to the "Generating Access Token" section under the [Before You Start](#tab-before_you_start) tab.


### Request Header
  
  
Header parameters are common for all API requests of Banking Hub APIs. Header parameters are sent as a JSON object under EFXHeader header parameter.

For more information on EFXHeader and to view the list of all header parameters,<a href="?path=docs/api-ref-EFX-header.md" title="Click to view the list of EFX header parameters"> click here</a>.

**Sample Header Example**
```
"EFXHeader": {
    "OrganizationId":"999990010"   }
    }

```

### Request Body

The request body of an API changes based on the type of transaction being processed. Request body contains the detailed information that is required to perform a particular transaction.

**Request Payload** 

The following example shows the sample request payload for **Get Party List** API request.

```
{
  "RecCtrlIn": {
    "MaxRecLimit": 0,
    "Cursor": "string"
  },
  "PartyListSel": {
    "Name": "string",
    "NameSearchCode": "string",
    "NameTypeOption": "string",
    "TaxIdent": "string",
    "Phone": "string",
    "EmailAddr": "string",
    "AcctId": "string",
    "AcctType": "string"
  }
}
```


## Response Message

Upon a successful API request, a response payload is received. The response payload contains the status and the returned details of the requested API in key-value pairs. The default response format is JSON. 


### Response Payload

The following example shows the sample response payload for **Get Party List** API request.

```
{
  "Status": {
    "Id": "string",
    "StatusCode": "string",
    "StatusDesc": "string",
    "Severity": "string",
    "SvcProviderName": "string",
    "ServerStatusCode": "string",
    "ServerStatusDesc": "string",
    "OvrdExceptionInd": true,
    "SubjectRole": "string",
    "SubjectElement": [
      {
        "Path": "string",
        "ServerPath": "string",
        "Value": "string"
      }
    ],
    "ContentHTML": "string",
    "AdditionalStatus": [
      {
        "StatusCode": "string",
        "StatusDesc": "string",
        "Severity": "string",
        "SvcProviderName": "string",
        "ServerStatusCode": "string",
        "ServerStatusDesc": "string",
        "OvrdExceptionInd": true,
        "SubjectElement": [
          {
            "Path": "string",
            "ServerPath": "string",
            "Value": "string"
          }
        ]
      }
    ]
  },
  "RecCtrlOut": {
    "SentRecCount": 0
  },
  "PartyListRec": [
    {
      "PartyKeys": {
        "PartyId": "string"
      },
      "PersonPartyListInfo": {
        "PartySelType": "string",
        "Contact": [
          {
            "PhoneNum": {
              "PhoneType": "string",
              "PhoneTypeEnumDesc": "string",
              "Phone": "string",
              "PreferredPhone": true,
              "PhoneDesc": "string"
            },
            "PostAddr": {
              "AddrFormatType": "string",
              "Addr1": "string",
              "Addr2": "string",
              "City": "string",
              "StateProv": "string",
              "PostalCode": "string",
              "AddrType": "string"
            },
            "Email": {
              "EmailAddr": "string"
            }
          }
        ],
        "TaxIdentType": "string",
        "TaxIdent": "string",
        "PersonName": {
          "NameType": "string",
          "FullName": "string",
          "FamilyName": "string",
          "GivenName": "string",
          "MiddleName": "string"
        },
        "BirthDt": "string"
      },
      "OrgPartyListInfo": {
        "PartySelType": "string",
        "Contact": [
          {
            "PhoneNum": {
              "PhoneType": "string",
              "PhoneTypeEnumDesc": "string",
              "Phone": "string",
              "PreferredPhone": true
            },
            "PostAddr": {
              "AddrFormatType": "string",
              "Addr1": "string",
              "Addr2": "string",
              "City": "string",
              "StateProv": "string",
              "PostalCode": "string",
              "AddrType": "string"
            }
          }
        ],
        "TaxIdentType": "string",
        "TaxIdent": "string",
        "OrgName": {
          "NameType": "string",
          "Name": "string"
        }
      },
      "PartyStatus": {
        "PartyStatusCode": "string",
        "EffDt": "string"
      }
    }
  ]
}
```

To view the API documentation of **Get Party List** API in API Explorer, [click here](../api/?type=post&path=/partyservice/parties/parties/secured/list).



[Next - Make Your First API Call](#tab-make_your_first_api_call)

<!-- type: tab -->

# Make Your First API Call

This section describes the process to send an API request to the server and receive a response payload. To test the APIs, use the third-party API testing tool.

## Using Third-Party API Testing Tools

You can test our APIs in the Sandbox environment using third-party API testing tools, such as Postman, Apigee, JMeter and others.

<!-- theme: info -->
> #### Tip
>
> We recommend you to refer to the [Know Our Standard API Structure](#tab-know_our_standard_api_structure) section to understand the API structure prior to testing the APIs in any third-party tool.


### Prerequisites
To make an API call, you need:
- An active user account on Fiserv Dev Studio
- An access token


**Creating an account on Dev Studio**


To create an account on Fiserv Developer Studio, refer to the [Register on Fiserv Developer Studio](#tab-before_you_start) section. 
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
  
To generate an access token, refer to the "Generating Access Token" section under the [Before You Start](#tab-before_you_start) tab.


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
> Keep the API documentation accessible to refer to the default request-payload for the request message. You may also download the Postman collection and refer to sample API requests from the **[Resources](?path=/docs/resources/resources.md)** section. 

<!--
#### Resources

* **API Specifications**

  [![downoad-icon-BH]][BH]  

* **Postman Collection**

  [![downoad-icon-PRM]][PRM]      [![downoad-icon-SIG]][SIG]     [![downoad-icon-FN]][FN]   


[downoad-icon-PRM]: https://github.com/Fiserv/banking-hub/assets/81968767/934da291-c743-41cb-9325-16cf2c8d7bda
[PRM]: https://github.com/Fiserv/banking-hub/files/12247349/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip


[downoad-icon-SIG]: https://github.com/Fiserv/banking-hub/assets/81968767/b4c09878-6e73-4e9e-9171-74bcd3e4f8b6
[SIG]: https://github.com/Fiserv/banking-hub/files/11710490/Banking.Hub.-.Signature.-.Trial.Plan.Postman.Collection.zip


[downoad-icon-BH]: https://github.com/Fiserv/banking-hub/assets/81968767/4c31d642-7574-413e-b02e-32f7ad1ae504
[BH]: https://github.com/Fiserv/banking-hub/files/11222397/esf-service-swagger-release-11.0.0.2023.1.zip

[downoad-icon-FN]: https://github.com/Fiserv/banking-hub/assets/81968767/76dd0525-220e-4c1e-90c8-b612eed002db
[FN]: https://github.com/Fiserv/banking-hub/files/12358606/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip

-->

<!--
FN: https://github.com/Fiserv/banking-hub/assets/81968767/28cc543b-7bd6-4f57-b282-725b15d289f3
SIG: https://github.com/Fiserv/banking-hub/assets/81968767/b4c09878-6e73-4e9e-9171-74bcd3e4f8b6
PRM: https://github.com/Fiserv/banking-hub/assets/81968767/934da291-c743-41cb-9325-16cf2c8d7bda

Postman PRM old: https://github.com/Fiserv/banking-hub/files/11728540/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip

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

1. Open a web or desktop application of Postman.
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


  

<!-- type: tab-end -->
