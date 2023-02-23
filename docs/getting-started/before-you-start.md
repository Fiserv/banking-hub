# Before You Start
<!-- theme: info -->
> #### Note for Developers 
>
> The current user journey enables developers to access a range of Standard Bank Platform APIs on Banking Hub. We continue to refine the API content on Banking Hub with the goal of showing clearly how our Banking Hub APIs facilitate integration to each of our banking solutions.  <br> <br> We are working on developing a registered user journey. Once registration is enabled on Developer Studio, you can sign up to obtain credentials along with the instructions to integrate Banking Hub APIs with our banking platforms. Additionally, you get access to our Sandbox environment to test APIs or may choose to test <a href="?path=docs/getting-started/make-your-first-api-call.md#using-third-party-api-testing-tools" > Using Third-party API Testing Tools</a>.


Register to the Fiserv Developer Studio to test the APIs in test and live environments. However, registration is not required to learn about our API integration process and test the APIs in API Explorer.

## Register to Fiserv Developer Studio
To validate and deploy Fiserv banking APIs into production, create an account with Fiserv Developer Studio to obtain credentials for sandbox testing and live environments.


### Setting up an Account
<!-- theme: info -->
> #### Note
>
> Registration to Fiserv Developer Studio is not enabled yet.

To set up an account on Fiserv Developer Studio, follow the steps below:
1.	From the top-right corner of the screen, click **Create Account**
2.	Populate the required fields and click **Next**
3.	Follow the instructions on the screen to set up your account based on integration requirements
4.	Sign on to your Fiserv Developer Studio account once it is activated

### Creating a Workspace

Workspaces are dedicated spaces for developers to manage their Fiserv product integrations and projects. You can obtain API Key, API Secret and product related details from the workspace.

To create a workspace in Developer Studio, follow the steps below:

1.	Sign into your Fiserv Developer Studio account
2.	From the top-right corner of the screen, click Workspaces. My Workspace page appears.
3.	To create new workspace click Add a new workspace button or click Create a new Workspace card
    <!-- theme: info -->
    > #### Note
    >
    > All previously created workspaces are listed on the Workspaces page. 
4.	Enter workspace name and description
5.	In the Product list, select Banking Hub and then click Create. A new workspace is created and three tabs of your workspace, namely – Summary, Credentials and Settings are visible.
![image](https://user-images.githubusercontent.com/81968767/220959037-4fb7f53e-4655-4086-a0a2-8994ee505cb0.png)


Every workspace has following three sections:

* **Summary** : Displays workspace details and list of activities performed on the workspace
* **Credentials** : Lists all active API keys. From this section, you can view or download the following details of an API key:
    * Product name :_Name of the product, for example, Banking Hub._
    
    * Org ID :_Organization ID is required to send in all API requests as a header parameter._
    
    * API key name :_Name of API key_
    * API key type :_Type of API key, for example, Trial._
    * API key :_Alphanumeric value of API key. API key is used as username while generation access token._
    * API secret :_Alphanumeric value of API secret. API secret is used as password while generation access token._
    * Host URL :_Host URL path to send API requests._
    
    ![image](https://user-images.githubusercontent.com/81968767/220959851-a1d25503-93fb-4d51-8057-b2aa66d34fe8.png)
    
* **Settings** :Used to modify or delete the workspace

![image](https://user-images.githubusercontent.com/81968767/220960606-ed60419a-f6e2-4022-bf1c-2d15142b5f01.png)


## Generating Access Token

An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. API Key and API Secret values obtained from the Workspace are required to generate an access token. 

Use below API to generate an access token using Postman.

### URL

``POST https://cert.api.fiservapps.com/fts-apim/oauth2/v2 ``


### Headers

|     Header Name      |     Description                                          |     Required      |
|---------------------|----------------------------------------------------------|---------------|
|     ``Authorization`` |    <p>Base64 encoded string representing your username and password values, appended to the text Basic as follows: </p> <p> <code> Basic &lt; Base64 encoded username and password &gt; </code></p> <p> **Important:** In Postman, use Authorization tab to enter Username and Password value and set authentication type to Basic Auth. Use your **API Key** as Username and **API Secret** as password. </p>                      |     Required    |

![image](https://user-images.githubusercontent.com/81968767/220961162-0931a990-f69a-4be7-a6bb-ab847f9464b2.png)


### Request Body

Enter the following key value pair in the request body under the x-www-form-urlencoded option

``grant_type = client_credentials``

![image](https://user-images.githubusercontent.com/81968767/220961197-8e76ec1f-b291-4dfd-8287-c4a83b4ecf40.png)

### Response

Field Name	Description	Type
access_token	Generated access token value	string
expiries_in
Time in milliseconds until the generated token is valid. 
Note: Once generated, the access token is valid for 15 mins. You can reuse the access token until it expires. 	number
Token_type	Type of access token	string

|     Field Name      |     Description                                          |     Type      |
|---------------------|----------------------------------------------------------|---------------|
|   ``access_token``    |     Generated access token   value                       |     string    |
|``expiries_in``       | <p>Time in milliseconds until the generated token is valid.</p> <p>**Note:** Once generated, the access token is valid for 15 mins. You can reuse the access token until it expires. </p> | number        |
|    ``Token_type``   |     Type of access token                                 |     string    |

**Sample Response:**
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJwaS5hdG0iOiJhYXVxIn0.eyJzY29wZSI6IiIsImNsaWVudF9pZCI6ImdxNHpvZDB6Wng3NkVPTUtKQUlQUlJUZHJHOENWNGdJIiwiaXNzIjoiaHR0cHM6Ly9mZGMtZmVkc3NvLWNhdC5maXJzdGRhdGEuY29",
    "expires_in": "899000",
    "token_type": "Bearer"
}
```

![image](https://user-images.githubusercontent.com/81968767/220961415-46799965-9fee-4d45-88bf-fdfa5563477b.png)





