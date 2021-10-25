# Before You Start
Registration and authentication to the Fiserv Developer studio are required to test the APIs in Sandbox and live environments. 
However, registration is not required to learn about our API integration process and test the APIs in API Explorer.

## Register to Fiserv Developer Studio
To validate and deploy Fiserv banking APIs into production, you are required to create an account with Fiserv Developer Studio. This registration helps to get credentials for sandbox testing and live environments. 
Setting up an Account


To set up an account on Fiserv Developer Studio, follow the steps below:
1.	Go to Fiserv Developer Studio 
2.	From the top-right corner of the screen, click Create Account
3.	Populate the required fields and click Create Account
4.	Follow the instructions on the screen to set up your account based on integration requirements
5.	Sign on to your Fiserv Developer Studio account after it is activated


## Get Authentication Keys
Once the account setup process is complete, you need to authenticate your API build. Authentication is required for the secure testing or integration of Integrated Banking APIs.
Authentication Keys


To authenticate your application, you need test and live API authentication keys, which can be obtained from the dashboard of Developer Studio. You may reuse the authentication keys until they expire. If a key expires, you can create a new key from the Credentials section of the dashboard.
Steps for Authentication

Follow these steps to authenticate your API build:
1.	Obtain the API authentication keys from the Credentials section of the Developer Studio dashboard
2.	Authenticate your user account with the acquired keys and retrieve the authorization code
3.	Use the provided authorization code to access the API and Sandbox resources


## Know Our Standard API structure 
All API requests must contain the following components:

*	Host URL  https://api.abc.com/v3/
*	Request Header parameters (API Key)
*	Request Body

API request consists of following two elements:
* Request Header
*	Request Body

For every API request you will receive a response payload mentioning the status of API request.

### Request Header
Header parameters are consistent for all API requests of Fiserv Banking RESTful APIs and these parameters are generally used to authenticate the user credentials to access the APIs. Header parameters of Fiserv Banking APIs should be sent as a JSON object under EFXHeader header parameter.

```
"EFXHeader": {
    "OrganizationId": "CTOrg",
    "TrnId": "622182",
    "VendorId": "112233",
    "Context": {
      "Channel": "WEB"
    }
    }
```
To view the documentation of all header parameters, click <a href="../docs?path=docs/api-ref-EFX-header.md"> EFX Header Parameters </a>.

### Request Body
Request body of an API changes based on the type of transaction being processed. Request body contains the detailed information that is required to perform the given transaction.


Following example shows the sample request body for AcctHoldInq API request.

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

### Response Payload
Upon a successful API request you will receive response payload. The response payload contains the returned parameter and value details of the requested API. The default response format is JSON (JavaScript Object Notation). 


Following example shows the sample response payload for AcctHoldInq API request.

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

View the complete documentation of AcctHoldInq service in <a href="#" >Developer Studio portal</a>.
   
   
   
   
   
