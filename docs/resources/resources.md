<!-- 
type: tab 
titles: Downloads, Guidelines
-->

# API Specifications

<!-- theme: info -->  
> [Download API Specifications](https://github.com/Fiserv/banking-hub/files/11222397/esf-service-swagger-release-11.0.0.2023.1.zip)

# Postman Collection

<!-- theme: info -->  
> [Download Postman Collection for Finxact Core (v1.23)](https://github.com/Fiserv/banking-hub/files/14585882/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)


<!-- theme: info -->  
> [Download Postman Collection for Premier Core](https://github.com/Fiserv/banking-hub/files/14125603/Premier.-.Trial.Plan.Postman.Collection.zip)


<!-- theme: info -->  
> [Download Postman Collection for Signature Core](https://github.com/Fiserv/banking-hub/files/12516540/Banking.Hub.-.Signature.-.Trial.Plan.Postman.Collection.zip)




<!--

changed on 13 march: [Banking Hub - Finxact - Trial Plan Postman Collection.zip](https://github.com/Fiserv/banking-hub/files/14585882/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)
(https://github.com/Fiserv/banking-hub/files/13785041/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)

[Banking Hub - Finxact - Trial Plan Postman Collection.zip](https://github.com/Fiserv/banking-hub/files/13785041/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)

Premier core old: https://github.com/Fiserv/banking-hub/files/13785021/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip

Finxact Core (v1.21)](https://github.com/Fiserv/banking-hub/files/12461848/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)

[Banking Hub - Premier - Trial Plan Postman Collection.zip](https://github.com/Fiserv/banking-hub/files/13785021/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip)

Premier old: https://github.com/Fiserv/banking-hub/files/11728540/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip
[Banking Hub - Finxact - Trial Plan Postman Collection.zip](https://github.com/Fiserv/banking-hub/files/12461848/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip)

FNX postman old:   https://github.com/Fiserv/banking-hub/files/12359747/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection.zip
## API Specifications

  [![downoad-icon-BH]][BH]  

## Postman Collection

  [![downoad-icon-PRM]][PRM]      [![downoad-icon-SIG]][SIG]  


[downoad-icon-PRM]: https://github.com/Fiserv/banking-hub/assets/81968767/934da291-c743-41cb-9325-16cf2c8d7bda
[PRM]: https://github.com/Fiserv/banking-hub/files/11728540/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection.zip


[downoad-icon-SIG]: https://github.com/Fiserv/banking-hub/assets/81968767/b4c09878-6e73-4e9e-9171-74bcd3e4f8b6
[SIG]: https://github.com/Fiserv/banking-hub/files/11710490/Banking.Hub.-.Signature.-.Trial.Plan.Postman.Collection.zip


[downoad-icon-BH]: https://github.com/Fiserv/banking-hub/assets/81968767/4c31d642-7574-413e-b02e-32f7ad1ae504
[BH]: https://github.com/Fiserv/banking-hub/files/11222397/esf-service-swagger-release-11.0.0.2023.1.zip

-->

<!-- type: tab -->

# DPoP Token Implementation

DPoP (for Demonstration of Proof-of-Possession) is an application-level mechanism for sender-constraining OAuth  access and refresh tokens. DPoP verifies the authenticity of the owner accessing the token in the client application. If the client application is not the valid owner of the access token, the API access is rejected. The authorized sender of the access token must have the access to the private key. This confirms the server that the sender is authorized to access it. 
How to Setup DPoP mechanism
To implement the DPoP Security, follow the listed steps.
1.	Generate the Public/Private Key Pair
2.	Onboard the Consumer
3.	Choose style for signing the DPoP Token
4.	Create DPoP Generator Library on Consumer side
5.	Generate and use DPoP Token for Token API Call
6.	Generate and use DPoP Token for Functional API Call

## Step 1 - Generate Public/Private Key Pair
1.	Generate an RSA Public/Private Key Pair using any cryptography & SSL/TLS toolkit that is compatible with OpenSSL
2.	(Optional step) Reference commands to generate an RSA Public/Private Key pair using OpenSSL 
openssl genrsa -out private_key.pem 4096
openssl rsa -pubout -in private_key.pem -out public_key.pem
![image](https://github.com/Fiserv/banking-hub/assets/135122880/284b796f-16f2-4316-9c86-b177d400a758)

## Step 2 - Onboarding of the Consumer
1.	Register consumer with public key through AppMarket from Fiserv
2.	AppMarket will store and return the consumer key and share with the consumer
 ![image](https://github.com/Fiserv/banking-hub/assets/135122880/912df1f0-3b80-4e06-8e36-09de51e9466a)

## Step 3 - Select the Style for signing DPoP Token

### Step 3.1 - Sign with DPoP Token
1.	**HTTP Method (GET, POST and so on)** of the corresponding API call in which DPoP token is passed
2.	**URL of the API call** (including the query parameters) in which DPoP token is passed
    
### Step 3.2 - Use Request Data for Data Integrity
    
1.	**ReqHeaderMap** - Map created with business-critical request headers and its value that are required to be validated by APIM security framework
2.	**FormParamMap** - Map created with form URL encoded key-value that are required to be validated by APIM security framework
3.	**Payload** - JSON string of the request body that is required to be validated by APIM security framework
If case payload size is larger than **100 KB**, use **SelectivePayloadMap**. This Map is created with business-critical attributes of the request payload which are required to be validated by APIM security framework. 
Following are the few examples of business-critical attributes.

    •	accountNumber

    •	amount

    •	personalDetails/name

    •	organizationId


<!-- theme: info -->
> #### Note
>
> ReqHeaderMap and FormParamMap currently support signing or validation of headers and form params where its value is a string.

|Details|Supported Formats|Not Supported Formats|
|-----------|------------|------------|
|For Headers|sample-header: value-can-be-any-string|`EFXHeader: {"OrganizationId":"DemoOrgId", "TrnId":"3dab21d2-2ab7"}`|
|For Form Params|sample-formparam: value-can-be-any-string|`EFXFormParam: {"OrganizationId":"DemoOrgId", "TrnId":"3dab21d2-2ab7"}`|  

## Step 4 - Create DPoP Generator Library on Consumer Side
1.	Use the below JAVA code (DPoPGenerator.java) to create the library or use below code as a reference in consumer existing code
2.	Update the following details in the JAVA code (DPoPGenerator.java)
   
    2.1. Replace with your private/public key pair (String privateKey, String publicKey)
  	
    2.2. Replace with your HTTP method (GET, POST and so on) and URL (String URL, String httpMethod) 
  	
    2.3. Enable one or more of the following functions based on the selection in the step 3.2 and replace with actual values

    •	noPayloadGenerateDPoP

    •	requestBodyPayloadGenerateDPoP (includes request headers)

    •	formUrlEncodedPayloadGenerateDPoP

    •	selectivePayloadGenerateDPoP

<!-- theme: info --> 
> [Download pom.xml](https://github.com/Fiserv/banking-hub/files/13915765/PoM.xml.zip "download") 

<!-- theme: info --> 
> [Download DPoPGenerator](https://github.com/Fiserv/banking-hub/files/13915803/DPoPGenerator.zip "download")

## Step 5 - Generate and Use DPoP Token for Token API Call
•	Consumer should generate the DPoP token for the token API call using the library created in the previous step (passing the token API URL and http method and other required attributes for the library)

<!-- theme: info --> 
> [Download Request Response 1](https://github.com/Fiserv/banking-hub/files/13901969/Request-Response-1.zip "download")

## Step 6 - Generate and Use DPoP Token for Functional API Call
•	Consumer should generate new DPoP token using the library for the functional API call by passing the functional API URL, the http method and other attributes are required for signing

<!-- theme: info --> 
> [Download Request Response 2](https://github.com/Fiserv/banking-hub/files/13915815/Request-Response-2.zip "download")

# Debugging DPoP Errors
Error codes help you to debug errors related to your DPoP implementation and provide initial guidance to resolve issues in your code. For example, if you receive an error code 1002- Invalid DPoP, then make sure the public key you are using and the one sent to Fiserv are the same. 

The following table lists the standard status codes:

|     Error   Code             |     Error   Description                 |
|------------------------------|-----------------------------------------|
|     1001   – Invalid DPoP    |     Expired DPoP Token                  |
|     1002   – Invalid DPoP    |     Public Key Mismatch                 |
|     1003   – Invalid DPoP    |     Invalid HTTP method                 |
|     1004   – Invalid DPoP    |     Invalid URL                         |
|     1005   – Invalid DPoP    |     Invalid Header                      |
|     1006   – Invalid DPoP    |     Invalid Request Body                |
|     1007   – Invalid DPoP    |     Invalid Selective Payload           |
|     1008   – Invalid DPoP    |     Invalid Form URL encoded            |
|     1009   – Invalid DPoP    |     NoSuchAlgorithmException            |
|     1010   – Invalid DPoP    |     InvalidKeySpecException             |
|     1011   – Invalid DPoP    |     Error generating JWK Thumbprint     |
|     1012   – Invalid DPoP    |     Unknown Error in Java Callout       |
|     1099   – Invalid DPoP    |     Unexpected generic error on APIM    |

<!-- theme: info -->
> #### Note
> 
> If you are unable to  resolve the issue after reviewing above listed descriptions, please reach out to Fiserv contact person for further assistance.


<!-- type: tab-end -->
