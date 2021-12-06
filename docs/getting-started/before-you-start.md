# Before You Start
> #### Note to Unregistered Users
>
> The unregistered user journey enables an excellent introduction to the range of functions developers can access using our Integrated Banking APIs, but not all nuances regarding how those APIs connect to our different platforms are available. <br><br> By contrast, the registered user journey (a work in progress) will enable developers to understand how to use our Integrated Banking APIs to integrate with any or all of our banking platforms.


Registration to the Fiserv Developer Studio is required to test the APIs in test and live environments. However, registration is not required to learn about our API integration process and test the APIs in API Explorer.

## Register to Fiserv Developer Studio
To validate and deploy Fiserv banking APIs into production, you are required to create an account with Fiserv Developer Studio. This registration helps to get credentials for sandbox testing and live environments.


### Setting up an Account

To set up an account on Fiserv Developer Studio, follow the steps below:
1.	From the top-right corner of the screen, click **Create Account**
2.	Populate the required fields and click **Create Account**
3.	Follow the instructions on the screen to set up your account based on integration requirements
4.	Sign in to your Fiserv Developer Studio account after it is activated


After a successful registration, you will receive the following credentials via email:
- API Key
- Username/Password
- OrgId 
- AppId
- VendorId 
- ChannelId



## Know Our Standard API structure 
<!-- theme: info -->
> #### Information
>
> This section is under development and you may expect some changes in the final version of documentation.

<Introduction>

### Request Message

All API requests must contain the following components:

*	API Method: POST or PUT
* Host URL  https://api.abc.com/v3/
*	Request Header
*	Request Body

For every API request you will receive a response payload mentioning the status of API request.

#### Request Header
Header parameters are common for all API requests of Integrated Banking APIs and these parameters are generally used to authenticate the user credentials to access the APIs. Header parameters of Fiserv Banking APIs should be sent as a JSON object under EFXHeader header parameter.

Sample header parameters:
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

#### Request Body
Request body of an API changes based on the type of transaction being processed. Request body contains the detailed information that is required to perform the given transaction.

**Request Payload:** 


Following example shows the sample request body for Get Account Hold API request.

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


Upon a successful API request you will receive response payload. The response payload contains the returned parameter and value details of the requested API. The default response format is JSON (JavaScript Object Notation). 


**Response Payload:**


Following example shows the sample response payload for Get Account Hold API request.

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

View the complete documentation of Get Account Hold API in [API Explorer](../api/?type=post&path=/accountHolds/secured).
   
