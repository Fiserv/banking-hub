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

![image](/assets/images/KnowOurStandard_Image_1.png)



If host URL of the product is https://cert.api.fiservapps.com/banking/efx/v1/, then request URL will be:

![image](/assets/images/KnowOurStandard_Image_2.png)


### Access Token

An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely. Banking Hub API uses bearer access token, and API key and API secret are required to generate an access token. A generated access token is valid for approximately 15 minutes.
To generate an access token, refer to the [Generating Access Token](?path=docs/getting-started/before-you-start.md#generating-access-token) section.


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
