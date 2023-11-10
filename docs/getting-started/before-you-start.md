# Before You Start
<!-- theme: info -->
> #### Note for Developers 
>
> The current user journey enables developers to register for a trial plan that provides access to a range of Standard Bank Platform APIs on Banking Hub. 

Before you start integration, it is important to register on the Fiserv Developer Studio to test the Banking Hub APIs in the Sandbox environment. You may choose to test APIs using the <a href="?path=docs/getting-started/make-your-first-api-call.md#using-third-party-api-testing-tools" >Third-party API Testing Tools</a> of your choice. However, registration is not required to learn about our APIs and reference documentation.
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
    > Currently, only one workspace can be created for Banking Hub. Also, the Trial Plan is available only for a shared Premier Sandbox Environment.
    
    ![image](https://user-images.githubusercontent.com/81968767/220959037-4fb7f53e-4655-4086-a0a2-8994ee505cb0.png)

Every workspace has following three sections:

* **Summary**: Displays workspace details and list of activities performed on the workspace
* **Credentials**: Lists all active API keys. From this section, you can view or download the following details of an API key:
    * Product name: _Name of the product, for example, Banking Hub_    
    * Org ID: _Organization ID is required to send in all API requests under the <a href="?path=docs/getting-started/know-our-standard-api-structure.md#request-body" >Request Header</a>_    
    * API key name: _Name of the API key_
    * API key type: _Type of API key, for example, Trial_
    * API key: _Alphanumeric value of the API key. API key is used as username while generating the access token_
    * API secret: _Alphanumeric value of the API secret. API secret is used as password while generating the access token_
    * Host URL: _Host URL path to send API requests_

    ![image](https://github.com/Fiserv/banking-hub/assets/85101648/afd91e3b-9541-41e5-9c3e-dd595b6fcc2a)


 * **Settings**: Used to modify or delete the workspace

<kbd>
    <img src="https://github.com/Fiserv/banking-hub/assets/85101648/a64bb3e0-c9f1-471a-b2a2-1e9e14731c60.gif" />
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
