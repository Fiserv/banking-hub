### DPoP Token Implementation



> #### Note
> Once you are a paid subscriber, you can use the DPOP tokens [Developer Studio Connection Plan](https://appmarket.fiservapps.com/fintech) to access the Banking Hub API endpoints over the internet. 
>
> 
## JWT & DPoP Integrations
Jason Web Tokens (JWTs) use digital signatures to ensure authenticity and integrity in authentication and authorization where as DPoP creates a unique proof-of-possession key, often linked to the user's session. In JWTs, If the signatures match, the token is considered valid, and the claims in the payload can be trusted.


  |Details|Signature based verifications|JWT + DPoP|
|-----------|------------|------------|
|**Mode**|Standalone JWTs use digital signatures to ensure authenticity and integrity in authentication and authorization.|DPoP creates a unique proof-of-possession key, often linked to the user's session.|
|**Verification Methods**|Verification involves running the header and payload with a secret key and comparing signatures through the same algorithm.| Servers use the JWT's public key and proof-of-possession key to confirm the client's private key possession.|
|**Authentication Process**|In JWTs, If the signatures match, the token is considered valid, and the claims in the payload can be trusted.|When a client makes a request with a JWT+DPoP token, it includes a signature proving that it possesses the private key corresponding to the public key used in the JWT.|

DPoP (for Demonstration of Proof-of-Possession) is an application-level mechanism for sender-constraining OAuth access and refresh tokens. DPoP verifies the authenticity of the owner accessing the token in the client application. If the client application is not the valid owner of the access token, the API access is rejected. The authorized sender of the access token must have the access to the private key. This confirms the server that the sender is authorized to access it. 

## Architecture

![DPoP Architecture](https://github.com/Fiserv/banking-hub/assets/135122880/e92ec8b1-3305-4b99-add8-ad2caf6661ec)

## How to Setup DPoP Mechanism
To implement the DPoP Security, follow the listed steps:
1.	Generate the Public/Private Key Pair
2.	Onboard the Consumer
3.	Select the style for signing the DPoP Token
4.	Create DPoP Generator Library on Consumer side
5.	Generate and use DPoP Token for Token API Call
6.	Generate and use DPoP Token for Functional API Call

## Step 1 - Generate Public/Private Key Pair
1. Generate an RSA Public/Private Key Pair using any cryptography & SSL/TLS toolkit that is compatible with OpenSSL<br>
2. (Optional Step) - Reference commands to generate an RSA Public/Private Key Pair using OpenSSL <br>

`openssl genrsa -out private_key.pem 4096` <br>
`openssl rsa -pubout -in private_key.pem -out public_key.pem`<br>
 ![image](https://github.com/Fiserv/banking-hub/assets/135122880/284b796f-16f2-4316-9c86-b177d400a758)
<!-- theme: info -->
> #### Note
> 
> If you are unable to generate an RSA Public/Private Key Pair using any cryptography & SSL/TLS toolkit, click the Cryptotools link [Public/Private Key Pair](https://cryptotools.net/rsagen ) to generate it.
>
> 
## Step 2 - Onboard the Consumer
  1. Register consumer with public key through AppMarket from Fiserv
  2. AppMarket stores and returns the consumer key and shares with the consumer <br>
 ![image](https://github.com/Fiserv/banking-hub/assets/135122880/912df1f0-3b80-4e06-8e36-09de51e9466a)

## Step 3 - Select the Style to Sign in DPoP Token
### Step 3.1 - Sign in with DPoP Token
- **HTTP Method (GET, POST and so on)** of the corresponding API call in which DPoP token is passed
- **URL of the API call** (including the query parameters) in which DPoP token is passed
    
### Step 3.2 - Use Request Data for Data Integrity   
- **ReqHeaderMap** - Map created with business-critical request headers and its value that are required to be validated by the APIM security framework <br>
- **FormParamMap** - Map created with form URL encoded key-value that are required to be validated by the APIM security framework <br>
- **Payload** - JSON string of the request body that is required to be validated by APIM security framework<br>
If case payload size is larger than **100 KB**, use **SelectivePayloadMap**. This map is created with business-critical attributes of the request payload, which are required to be validated by the APIM security framework <br>

Following are the examples of business-critical attributes:
- accountNumber
- amount
- personalDetails/name
- organizationId
- SelectivePayloadMap - Map 

<!-- theme: info -->
> #### Note
>
> `ReqHeaderMap` and `FormParamMap` currently support signing or validation of headers and form parameters where its value is a string.

|Details|Supported Formats|Not Supported Formats|
|-----------|------------|------------|
|For Headers|sample-header: value-can-be-any-string|`EFXHeader: {"OrganizationId":"DemoOrgId", "TrnId":"3dab21d2-2ab7"}`|
|For Form Params|sample-formparam: value-can-be-any-string|`EFXFormParam: {"OrganizationId":"DemoOrgId", "TrnId":"3dab21d2-2ab7"}`|  

## Step 4 - Create DPoP Generator Library on Consumer Side
1. Use the below JAVA code (DPoPGenerator.java) to create the library or use below code as a reference in consumer existing code
2. Update the following details in the JAVA code (DPoPGenerator.java):<br>
  a. Replace with your private/public key pair (String privateKey, String publicKey)<br>
  b. Replace with your HTTP method (GET, POST and so on) and URL (String URL, String httpMethod)<br>
  c. Enable one or more of the following functions based on the selection in the step 3.2 and replace with actual values:<br>
    - noPayloadGenerateDPoP
    - requestBodyPayloadGenerateDPoP (includes request headers)
    - formUrlEncodedPayloadGenerateDPoP
    - selectivePayloadGenerateDPoP

<!-- theme: info --> 
> Download [pom.xml](download/assets/DPoPGuidelinesResources/PoM.xml.zip "download")

<!-- theme: info --> 
> Download [DPoPGenerator](download/assets/DPoPGuidelinesResources/DPoPGenerator.zip "download")

## Step 5 - Generate and Use DPoP Token for Token API Call
Consumer should generate the DPoP token for the token API call using the library created in the previous step (pass the token API URL and HTTP method and other required attributes for the library)

<!-- theme: info --> 
> Download [Request Response 1](download/assets/DPoPGuidelinesResources/Request-Response-1.zip "download")

## Step 6 - Generate and Use DPoP Token for Functional API Call
Consumer should generate new DPoP token using the library for the functional API call by passing the functional API URL, the http method and other attributes are required for signing

<!-- theme: info --> 
> Download [Request Response 2](download/assets/DPoPGuidelinesResources/Request-Response-2.zip "download")

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
>
> 
# Benefits to Fiserv
- Using DPoP has helped Fiserv prevent unauthorized or illegitimate parties from using leaked or stolen access tokens
- This mechanism enables the identification of replay attacks involving access and refresh tokens
- Given that DPoP functions at the application layer, using asymmetric cryptography and lightweight JSON Web Tokens, it becomes easily accessible to developers
- Eliminates the need to manage certificates in the mTLS setup,streamlining the process and reducing administrative burdens
