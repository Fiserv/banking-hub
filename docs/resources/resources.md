<!-- 
type: tab 
titles: Downloads, Guidelines
-->

# API Specifications

<!-- theme: info -->  
> [Download API Specifications (v11.0.0.2024.3.3)](download/assets/ResourcesDownloads/esf-service-swagger-release-11.0.0.2024.3.3.zip "download")


# Postman Collection

<!-- theme: info -->  
> ![Finxact](/assets/images/Finxact-e8e8e8.svg) [Download Postman Collection for Finxact Core (v1.29)](download/assets/ResourcesDownloads/Banking.Hub.-.Finxact.-.Trial.Plan.Postman.Collection_v1.29.postman_collection.zip "download")


<!-- theme: info -->  
> ![Premier](/assets/images/Premier-e8e8e8.svg) [Download Postman Collection for Premier Core](download/assets/ResourcesDownloads/Banking.Hub.-.Premier.-.Trial.Plan.Postman.Collection_V1.zip "download")


<!-- theme: info -->  
> ![Precision](/assets/images/Precision-e8e8e8.svg) [Download Postman Collection for Precision Core](download/assets/ResourcesDownloads/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.zip "download")


<!-- theme: info -->  
> ![Signature](/assets/images/Signature-e8e8e8.svg) [Download Postman Collection for Signature Core](download/assets/ResourcesDownloads/Banking.Hub.-.Signature.-.Trial.Plan.Postman.Collection.zip "download")

<!-- theme: info -->  
> ![Cleartouch](/assets/images/Cleartouch-e8e8e8.svg) [Download Postman Collection for Cleartouch Core](download/assets/ResourcesDownloads/Cleartouch-Trial.Plan.Postman.Collection_V1.postman_collection.zip "download")


<!-- theme: info -->  
> ![DNA](/assets/images/DNA-e8e8e8.svg) [Download Postman Collection for DNA Core](download/assets/ResourcesDownloads/Banking.Hub.-.DNA.-.Trial.Plan.Postman.Collection.zip "download")


<!-- theme: info -->  
> ![Onboard-Advisor](/assets/images/OnboardAdvisor-e8e8e8.svg) [Download Postman Collection for Identity Domain](download/assets/ResourcesDownloads/Download.Postman.Collection.for.Identity.zip "download")

<!-- type: tab -->

# DPoP Token Implementation


DPoP is an OAuth 2.0 Demonstration of Proof-of-Possession at the application layer. It is a security mechanism that uses temporary bound (short-lived) tokens that are exclusively valid for a single request or interaction. These tokens provide a high level of security and assurance in authentication and access control systems.<br>
Let us consider the following pictures to understand the difference between bound and bearer tokens:<br>
- Picture 1: Represents a car-key, which is like a bearer token. Anyone with an access or possession can use it.<br>
- Picture 2: Represents a passport, which is like a bound token. Such a token needs holder's identity and authenticity through face detection, fingerprint, attribute matching, and document interrogation. <br>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![car key](https://github.com/Fiserv/banking-hub/assets/135122880/20f45721-7dcf-45b1-b2c2-5e164596a63e)    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![passport](https://github.com/Fiserv/banking-hub/assets/135122880/5040658c-35a0-41be-9d8e-be6b9e8000d1)



> #### Note
> If you are a paid subscriber, click the [Developer Studio Connection Plan](https://appmarket.fiservapps.com/fintech) to access the Banking Hub API endpoints over the internet.
>
>  

## JWT & DPoP Integrations
JSON Web Tokens (JWTs) use digital signatures to authorize and authenticate users.  whereas DPoP creates a unique proof-of-possession key, often linked to the user's session. In JWTs, if the signatures match, the token is considered valid, and the claims in the payload is trusted. The following is a comparative analysis based on mode, verification method and authentication process carried out for signature-based tokens and JWT + DPoP combination tokens. 


  |Details|Signature-based Tokens|JWT + DPoP|
|-----------|------------|------------|
|**Mode**|Standalone JWTs use digital signatures to ensure authenticity and integrity in authentication and authorization.|DPoP creates a unique proof-of-possession key, often linked to the user's session.|
|**Verification Method**|Verification involves running the header and payload with a secret key and comparing signatures through the same algorithm.| Servers use the JWT's public key and proof-of-possession key as a combination to confirm the client's private key possession.|
|**Authentication Process**|In JWTs, If the signatures match, the token is considered valid, and the claims in the payload can be trusted.|When a client makes a request with a JWT+DPoP token, it includes a signature proving that it possesses the private key corresponding to the public key used in the JWT.|

## DPoP Process Flow

![DPoP Architecture](https://github.com/Fiserv/banking-hub/assets/135122880/0b3e7ee2-a39e-4971-87d2-de798997a2f8)


## How to Setup DPoP Mechanism
To implement the DPoP Security, follow the listed steps:
1.	Generate the Public/Private Key Pair
2.	Onboard the Consumer
3.	Select the style for signing the DPoP Token
4.	Create DPoP Generator Library on Consumer side
5.	Generate and use DPoP Token for Token API Call
6.	Generate and use DPoP Token for Functional API Call

## Step 1 - Generate Public/Private Key Pair
1. Generate an RSA Public/Private Key Pair using any cryptography & SSL/TLS toolkit that is compatible with OpenSSL.
2. This cryptotools link [Public/Private Key Generator](https://cryptotools.net/rsagen ) is provided as an example to generate the public/private key pair. <br>
<!-- theme: info -->
> #### Note
>
> Fiserv strongly suggests to use the minimum Key Length of 2048 and above (2048 or 4096) for generating the key pair.

  ![Step 1 diagram_editedMJS](https://github.com/Fiserv/banking-hub/assets/135122880/33f3b957-51db-458f-bce1-e862a6d3bfb3)

## Step 2 - Onboard the Consumer
Register consumer with public key through AppMarket from Fiserv.
<br> For **Communicator Open**, share the public key with Communicator Open project team for seamless integration in this onboarding process. <br>
  <!-- theme: info -->
> #### Note
>
> AppMarket stores and returns the consumer key and shares with the consumer.
  ![Step 2 diagram_editedMJS](https://github.com/Fiserv/banking-hub/assets/135122880/6f5e4b9e-c36d-4142-93e3-fc532e4a32bf)

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
> Download [pom.xml](https://github.com/user-attachments/files/17684790/PoM.xml.zip)


<!-- theme: info --> 
> Download [DPoPGenerator](https://github.com/user-attachments/files/17684794/DPoPGenerator.zip)

## Step 5 - Generate and Use DPoP Token for Token API Call
Consumer should generate the DPoP token for the token API call using the library created in the previous step (pass the token API URL and HTTP method and other required attributes for the library)

<!-- theme: info --> 
> Download [Request Response 1](https://github.com/user-attachments/files/17684798/Request-Response-1.zip)


## Step 6 - Generate and Use DPoP Token for Functional API Call
Consumer should generate new DPoP token using the library for the functional API call by passing the functional API URL, the http method and other attributes required for signing
> Download [Request Response 2](https://github.com/user-attachments/files/17684801/Request-Response-2.zip)

<!-- theme: info -->
> #### Note
> 
> The DPoP token is a unique key for each request. For Example, DPoP token signed with a specific URL and Method should be used for that specific API Call only. You should generate a new DPoP token request for the next functional API call.


<!-- theme: info --> 


# Debugging DPoP Errors
Error codes help you to debug errors related to your DPoP implementation and provide initial guidance to resolve issues in your code. For example, if you receive an error code 1002- Invalid DPoP, then make sure the public key you are using and the one sent to Fiserv are the same. 

The following table lists the standard error codes along with the descriptions and possible reasons. 
|     Error   Code             |     Short   Description                 | 
|------------------------------|-----------------------------------------|
| 1001   – <br> Invalid DPoP | Expired DPoP Token| 
| 1002   – <br> Invalid DPoP | Public Key Mismatch |
| 1003   – <br> Invalid DPoP | Invalid HTTP method | 
| 1004  – <br> Invalid DPoP | Invalid URL | 
| 1005  – <br> Invalid DPoP | Invalid Header | 
| 1006  – <br> Invalid DPoP | Invalid Request Body| 
| 1007   – <br> Invalid DPoP | Invalid Selective Payload| 
| 1008   – <br>  Invalid DPoP | Invalid form URL encoded parameters|
| 1009  – <br>  Invalid DPoP | No Such Algorithm Exception|
| 1010  – <br> Invalid DPoP | Invalid KeySpec Exception| 
| 1011   – <br> Invalid DPoP | Error generating JWK Thumbprint| 
| 1012   – <br> Invalid DPoP | Unknown Error in Java Callout | 
| 1013  – <br> Invalid DPoP | Non-numeric date value in the claim `iat`| 
| 1014  – <br> Invalid DPoP | Missing or incorrect JWK format| 
| 1015   – <br> Invalid DPoP | Verification failure of decoded JWT |
| 1016  – <br> Invalid DPoP | Missing mandatory part of token| 
| 1017  – <br> Invalid DPoP | Incorrect format of token parts| 
| 1018  – <br> Invalid DPoP | Algorithm mismatch | 
| 1019   – <br> Invalid DPoP | Claim value mismatch| 
| 1020   – <br> Invalid DPoP | Invalid signature| 
| 1021   – <br> Invalid DPoP | Invalid key| 
| 1022   – <br> Invalid DPoP | Invalid arguments| 
| 1023  – <br> Invalid DPoP | Invalid state exception | 
| 1024  – <br> Invalid DPoP | Algorithm mismatch| 
| 1025   – <br> Invalid DPoP | Signature Verification Exception | 
| 1026   – <br> Invalid DPoP | Null JWT | 
| 1027   – <br> Invalid DPoP | Empty JWT | 
| 1028   – <br> Invalid DPoP | Invalid JWT format | 
| 1029   – <br> Invalid DPoP | Query string decoding failure | 
| 1099   – <br> Invalid DPoP | Unexpected generic error on APIM | 


<!-- theme: info -->
> #### Note
> 
> If you are unable to resolve the issue after reviewing above listed descriptions of the errors generated, please reach out to Fiserv contact person for further assistance.
 
# Benefits to Consumers
- Using DPoP helps the clients to prevent unauthorized or illegitimate parties from using leaked or stolen access tokens.
- This mechanism enables the identification of replay attacks involving access and refresh tokens.
- Given that DPoP functions at the application layer, using asymmetric cryptography and lightweight JSON Web Tokens, it becomes easily accessible to developers.
- Eliminates the need to manage certificates in the mTLS setup, streamlining the process and reducing administrative burdens.

<!-- type: tab-end -->
