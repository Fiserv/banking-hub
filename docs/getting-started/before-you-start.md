# Before You Start
> #### Note to Unregistered Users
>
> The unregistered user journey enables an introduction to the range of functions developers can access using our Banking Hub APIs, but not all nuances regarding how those APIs connect to our different platforms are available. <br> By contrast, the registered user journey (a work in progress) will enable developers to understand how to use our Banking Hub APIs to integrate with any or all of our banking platforms.


Register to the Fiserv Developer Studio to test the APIs in test and live environments. However, registration is not required to learn about our API integration process and test the APIs in API Explorer.

## Register to Fiserv Developer Studio
To validate and deploy Fiserv banking APIs into production, create an account with Fiserv Developer Studio to obtain credentials for sandbox testing and live environments.


### Setting up an Account

To set up an account on Fiserv Developer Studio, follow the steps below:
1.	From the top-right corner of the screen, click **Create Account**
2.	Populate the required fields and click **Next**
3.	Follow the instructions on the screen to set up your account based on integration requirements
4.	Sign on to your Fiserv Developer Studio account once it is activated


After successful registration, following credentials are sent via email:
- API Key
- Username/Password
- OrgId 
- AppId
- VendorId 
- ChannelId

These credentials are required to send as header parameters under the EFXHeader parameter. For more information, refer to the <a href="?path=docs/api-ref-EFX-header.md" title="Click to open" >EFXHeader</a>.
## Know Our Standard API structure 

This section describes a standard structure of request and response message of Banking Hub RESTful APIs. 

### Request Message

All API requests must contain the following components:

*	API Method: POST or PUT
*   Host URL:  https://{_url_}/v{_version_}/
*	Request Header
*	Request Body

For every API request, a response message is obtained that contains a response payload and status of the API request.
#### Request Header
Header parameters are common for all API requests of Banking Hub APIs. Header parameters are sent as a JSON object under EFXHeader header parameter.

For more information on EFXHeader and to view the list of all header parameters, <a href="?path=docs/api-ref-EFX-header.md" title="Click to view the list of EFX header parameters" > click here.</a>

Sample Header Example:
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
   
