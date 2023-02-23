# Know Our Standard API structure 

This section describes a standard structure of request and response message of Banking Hub RESTful APIs. 

## Request Message

All API requests must contain the following components:

*	API Method
* Request URL
*	Request Header
*	Request Body

For every API request, a response message is obtained that contains a response payload and status of the API request.

### API Method

For the security reasons all API method are set to POST or PUT irrespective of the operation. 

### Request URL

Request URL is formed by appending Host URL and API path. 

**Request URL = Host URL + API path**

To get Host URL, go to API key section of your Workspace. And API path along with the method (POST or PUT) is listed under the API Explorer section of that API on Developer Studio. 
Refer following example to construct a request URL for AcctAdd API:

![image](https://user-images.githubusercontent.com/81968767/220958005-84e01e43-ff91-4240-a1d7-0e4a888655d5.png)


If Host URL of the product is https://cert.api.fiservapps.com/banking/efx/v1/, then request URL will be:

![image](https://user-images.githubusercontent.com/81968767/220958136-563f1974-a241-42e5-886c-e00e5af08ce0.png)



### Access Token

An access token is used to authenticate your API build and allows you to use the Fiserv APIs securely.  Banking Hub API uses Bearer Access token, and API key and API Secret are required to generate access token. A generated access token is valid for 15 minutes.
To generate an access token, refer to <Generating Access Token> section.


### Request Header
  
  
Header parameters are common for all API requests of Banking Hub APIs. Header parameters are sent as a JSON object under EFXHeader header parameter.

For more information on EFXHeader and to view the list of all header parameters, <a href="?path=docs/api-ref-EFX-header.md" title="Click to view the list of EFX header parameters" > click here.</a>

Sample Header Example:
```
"EFXHeader": {
    "OrganizationId":"999990010"   }
    }

```

#### Request Body
Request body of an API that changes based on the type of transaction being processed. Request body contains the detailed information that is required to perform a particular transaction.

**Request Payload:** 

Following example shows the sample request payload for Get Account Hold API request.

```
{
  "AcctHoldSel": {
    "AcctHoldKeys": [
      {
        "AcctKeys": {
          "AcctId": "string",
          "AcctType": "string"
        },
        "AcctHoldIdent": "string"
      }
    ],
    "AcctKeys": [
      {
        "AcctId": "string",
        "AcctType": "string"
      }
    ]
  }
}
```


### Response Message


Upon a successful API request, a response payload is received. The response payload contains the status and the returned details of the requested API in key-value pairs. The default response format is JSON (JavaScript Object Notation). 


**Response Payload:**

Following example shows the sample response payload for **Get Account Hold** API request.

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
  "AcctHoldRec": [
    {
      "AcctHoldKeys": {
        "AcctKeys": {
          "AcctId": "string",
          "AcctType": "string"
        },
        "AcctHoldIdent": "string"
      },
      "AcctHoldInfo": {
        "AcctRef": {
          "AcctKeys": {
            "AcctId": "string",
            "AcctType": "string"
          }
        },
        "CurAmt": {
          "Amt": 0,
          "CurCode": {
            "CurCodeType": "string",
            "CurCodeValue": "string"
          }
        },
        "RelationshipMgr": [
          {
            "RelationshipMgrIdent": "string",
            "RelationshipRole": "string"
          }
        ],
        "ReportGroupCode": "string",
        "SecuredAcctRef": {
          "AcctKeys": {
            "AcctId": "string",
            "AcctType": "string"
          }
        },
        "MaxPledgeAmt": {
          "Amt": 0,
          "CurCode": {
            "CurCodeType": "string",
            "CurCodeValue": "string"
          }
        },
        "HoldReason": [],
        "ExpDt": "string",
        "EffDt": "string",
        "AcctHoldOption": "string",
        "AcctHoldIdent": "string",
        "PendingHoldAmt": {
          "Amt": 0,
          "CurCode": {
            "CurCodeType": "string",
            "CurCodeValue": "string"
          }
        },
        "PendingHoldDt": "string"
      },
      "AcctHoldStatus": {
        "AcctHoldStatusCode": "string",
        "EffDt": "string"
      }
    }
  ]
}
```

To view the API documentation of **Get Account Hold** API in API Explorer, [click here.](../api/?type=post&path=/accountHolds/secured)
