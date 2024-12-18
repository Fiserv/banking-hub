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
1.	Generate the Public/Private Key Pair.
2.	Onboard the Consumer.
3.	Select the style for signing the DPoP Token.
4.	Create DPoP Generator Library on Consumer side.
5.	Generate and use DPoP Token for Token API Call.
6.	Generate and use DPoP Token for Functional API Call.

## Step 1 - Generate Public/Private Key Pair
1. Generate an RSA Public/Private Key Pair using any cryptography & SSL/TLS toolkit that is compatible with OpenSSL.<br>
2. (Optional Step) - Reference commands to generate an RSA Public/Private Key Pair using OpenSSL. <br>

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
  1. Register consumer with public key through AppMarket from Fiserv.
  2. AppMarket stores and returns the consumer key and shares with the consumer. <br>
 ![image](https://github.com/Fiserv/banking-hub/assets/135122880/912df1f0-3b80-4e06-8e36-09de51e9466a)

## Step 3 - Select the Style to Sign in DPoP Token
### Step 3.1 - Sign in with DPoP Token
- **HTTP Method (GET, POST and so on)** of the corresponding API call in which DPoP token is passed.
- **URL of the API call** (including the query parameters) in which DPoP token is passed.
    
### Step 3.2 - Use Request Data for Data Integrity   
- **ReqHeaderMap** - Map created with business-critical request headers and its value that are required to be validated by the APIM security framework. <br>
- **FormParamMap** - Map created with form URL encoded key-value that are required to be validated by the APIM security framework. <br>
- **Payload** - JSON string of the request body that is required to be validated by APIM security framework.<br>
If case payload size is larger than **100 KB**, use **SelectivePayloadMap**. This map is created with business-critical attributes of the request payload, which are required to be validated by the APIM security framework. <br>

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
1. Use the below JAVA code (DPoPGenerator.java) to create the library or use below code as a reference in consumer existing code.
2. Update the following details in the JAVA code (DPoPGenerator.java):<br>
  a. Replace with your private/public key pair (String privateKey, String publicKey).<br>
  b. Replace with your HTTP method (GET, POST and so on) and URL (String URL, String httpMethod).<br>
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
Consumer should generate the DPoP token for the token API call using the library created in the previous step (pass the token API URL and HTTP method and other required attributes for the library).

<!-- theme: info --> 
> Download [Request Response 1](download/assets/DPoPGuidelinesResources/Request-Response-1.zip "download")

## Step 6 - Generate and Use DPoP Token for Functional API Call
Consumer should generate new DPoP token using the library for the functional API call by passing the functional API URL, the http method and other attributes are required for signing.

<!-- theme: info --> 
> Download [Request Response 2](download/assets/DPoPGuidelinesResources/Request-Response-2.zip "download")

# Debugging DPoP Errors
Error codes help you to debug errors related to your DPoP implementation and provide initial guidance to resolve issues in your code. For example, if you receive an error code 1002- Invalid DPoP, then make sure the public key you are using and the one sent to Fiserv are the same. 

The following table lists the standard error codes along with the descriptions and possible reasons. 
|     Error   Code             |     Short   Description                 | Possible Error Reason |
|------------------------------|-----------------------------------------|-----------------------------------------|
| 1001   – <br> Invalid DPoP | Expired DPoP Token| Time difference between the 'issued at' timestamp and the current timestamp is more than 60 seconds even if the same token is reused.|
| 1002   – <br> Invalid DPoP | Public Key Mismatch | Combination mismatch of the public/private key used as compared to the key configured at Fiserv for application.|
| 1003   – <br> Invalid DPoP | Invalid HTTP method | Difference between the HTTP method used for signing and the HTTP method sent in the API call.|
| 1004  – <br> Invalid DPoP | Invalid URL | Difference between the HTTP URL used for signing and the URL sent in the API call.|
| 1005  – <br> Invalid DPoP | Invalid Header | Difference between the request headers used in signing and the request headers sent in the API call. <br> **Note:** Currently, the header in JSON format is not supported and should be excluded at the time of  DPoP token generation.|
| 1006  – <br> Invalid DPoP | Invalid Request Body| Difference between the request body used in signing and the request body sent in the API call.|
| 1007   – <br> Invalid DPoP | Invalid Selective Payload| Difference between the parameters within the request body used for signing and the parameters sent in the API call.|
| 1008   – <br>  Invalid DPoP | Invalid form URL encoded parameters| Difference between the form parameters within the body used for signing and the parameters sent in the API call. <br> **Note:** Currently, the FormParam in JSON format is not supported and should be excluded at the time of DPoP token generation.|
| 1009  – <br>  Invalid DPoP | No Such Algorithm Exception| Unavailability of the requested cryptographic algorithm in the environment.|
| 1010  – <br> Invalid DPoP | Invalid KeySpec Exception| Incorrect construction of the public key specification created with the extraction of JWK (JSON Web Key) variables (modules & exponent).|
| 1011   – <br> Invalid DPoP | Error generating JWK Thumbprint| Issue in the JWK (JSON Web Key) algorithm specified in the variable {kty}.|
| 1012   – <br> Invalid DPoP | Unknown Error in Java Callout | Generic error when decoding the token.|
| 1013  – <br> Invalid DPoP | Non-numeric date value in the claim `iat`| Claim `iat` is typecast as a string. |
| 1014  – <br> Invalid DPoP | Missing or incorrect JWK format| Missing or incorrect format of the JWK (JSON Web Key) in the header claims. |
| 1015   – <br> Invalid DPoP | Verification failure of decoded JWT | Validation failure of the decoded JWT (JSON Web Token). |
| 1016  – <br> Invalid DPoP | Missing mandatory part of token| Missing one of the three mandatory parts of the token: header, payload and signature. |
| 1017  – <br> Invalid DPoP | Incorrect format of token parts| Incorrect encoded format (not in `base64EncodedString` format) of the token’s mandatory parts: header, payload and signature. 
| 1018  – <br> Invalid DPoP | Algorithm mismatch | Mismatch of the token generation algorithm with the algorithm defined in the JWT's (JSON Web Token) header functional call.|
| 1019   – <br> Invalid DPoP | Claim value mismatch| Claim values do not match the required values as per the JWT (JSON Web Token) standard. |
| 1020   – <br> Invalid DPoP | Invalid signature| Invalid signature (mandatory token part) in DPoP token generation. |
| 1021   – <br> Invalid DPoP | Invalid key| Invalid public-private key pair at the time of JWT (JSON Web Token) generation. |
| 1022   – <br> Invalid DPoP | Invalid arguments| Illegal mandatory parts (header, payload and signature) of the token.  |
| 1023  – <br> Invalid DPoP | Invalid state exception | Null value of the public and/or private key at the time of token generation. |
| 1024  – <br> Invalid DPoP | Algorithm mismatch| Mismatch of the token generation algorithm with the algorithm defined in the JWT's (JSON Web Token) header functional call. |
| 1025   – <br> Invalid DPoP | Signature Verification Exception | Validation failure of signature. |
| 1026   – <br> Invalid DPoP | Null JWT | Null value of the JWT (JSON Web Token). |
| 1027   – <br> Invalid DPoP | Empty JWT | Empty value of the JWT (JSON Web Token). |
| 1028   – <br> Invalid DPoP | Invalid JWT format | Invalid JSON format of some JWT (JSON Web Token) parts. |
| 1029   – <br> Invalid DPoP | Query string decoding failure | Invalid characters in the URL query string.|
| 1099   – <br> Invalid DPoP | Unexpected generic error on APIM | Unexpected generic error on API Gateway.|


<!-- theme: info -->
> #### Note
> 
> If you are unable to  resolve the issue after reviewing above listed descriptions and possible reasons of the errors generated, please reach out to Fiserv contact person for further assistance.
>
> 
# Benefits to Fiserv
- Using DPoP has helped Fiserv prevent unauthorized or illegitimate parties from using leaked or stolen access tokens.
- This mechanism enables the identification of replay attacks involving access and refresh tokens.
- Given that DPoP functions at the application layer, using asymmetric cryptography and lightweight JSON Web Tokens, it becomes easily accessible to developers.
- Eliminates the need to manage certificates in the mTLS setup,streamlining the process and reducing administrative burdens.

