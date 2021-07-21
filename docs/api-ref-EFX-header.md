# EFX Header Parameters


The EFX Header parameters listed in the table below are required to send as a JSON object in the request. 

Sample EFX Header JSON object:

```
{
  "EFXHeader": {    
    "Context": {
      "Channel": "WEB"
    },
    "TrnId": "622182",
    "OrganizationId": "CTOrg",
    "VendorId": "112233"
    }
}

```



|Parameter | Description | Data Type | Required|
|---------|----------|---------|-----------|
|OrganizationId | Identification number of the organization. | string | Required |
| TrnId | Transaction identification number. <br> maxLength: 30| string | |
| VendorId | Unique identification number provided by Fiserv to identify the vendor.| string| |
| Context  | Details of the context object. | object  |  |
| Context.ClientAppName| Name of the client application making the service request, such as Architect, Commercial Center and others. | string| |
|Context.NoConductorReason|No Conductor Reason. Used when a conductor cannot be identified. |String | |
| Context.Channel|Channel name used by the client application. |string | |
| Context.TrnIdent| Transaction identification number. | string| |
| Context.ClientDateTime| Client date and time value in {yyyy-MM-ddTHH:mm:ss.SSS} format as reported by the client application that is making the service request. <br> example: 2021-01-31T23:59:59.999 |string | |
| Context.ClientTerminalSeqNum| Used to allow the client terminal to set a unique identifier for the transaction. When used by a Network defined transaction the value of this identifier is typically set to narrow character of 12. <br> maxLength: 36|string | |
| Context.OriginatorType| Type of the originator. This is usually a coded value representing the industry of the organization. |int64 | |
| Context.TerminalIdent| Unique code to identify a terminal at the card acceptor location, such as terminal code or terminal number of ATM. <br> maxLength: 36 |string | |
| Context.TerminalAddr1| Terminal Address 1. <br> maxLength: 64| string| |
| Context.TerminalAddr2| Terminal Address 2. <br> maxLength: 64| string| |
| Context.TerminalAddr3| Terminal Address 3. <br> maxLength: 64| string| |
| Context.TerminalAddr4| Terminal Address 4. <br> maxLength: 64| string| |
| Context.TerminalCity| Terminal city name. <br> maxLength: 32|string | |
| Context.TerminalCounty|Terminal county name. <br> maxLength: 32 | string| |
| Context.TerminalStateProv| State province value as per ISO 3166-2:US codes. <br> maxLength: 32| string| |
| Context.TerminalPostalCode| Terminal postal code. <br> maxLength: 32| string| |
| Context.TerminalCountryCodeSource|  Standard country code format.<br> Valid values are: <ul><li>ISO3166Numeric</li> <li>ISO3166Alpha3</li></ul>| string| |
| Context.TerminalCountryCodeValue| Terminal country code value. <br> maxLength: 80| string| |
| Context.PhoneType|  Type of a phone | string| |
| Context.PhoneNum| Phone number.|string | |
| Context.PhoneExchange| Phone exchange.|string | |
| Context.TerminalOwnerName| Name of the owner or operator of the terminal.| string| |
| Context.SystTraceAuditNum| Number assigned by the transaction originator to assist in identifying a transaction uniquely. <br>  maxLength: 36|string | |
| Context.NetworkIdent|Network identifier is used to identify the interchange network for the transaction. <br> maxLength: 80| string| |
| Context.NetworkRefIdent|Document reference supplied by the system retaining the original source document and used to assist in locating that document.  <br> maxLength: 36| string| |
| Context.AcquirerIdent|Identifies the acquirer of the authorization or financial transaction.<br> maxLength: 36 | string| |
| Context.AcquirerCountryCodeSource|Standard country code source value.<br> Valid values are: <ul><li>US</li> <li>IND</li></ul> | string| |
| Context.AcquirerCountryCodeValue| Acquirer country code value.| string| |
| Context.MerchNum|Merchant Number.  <br> maxLength: 23 | string| |
| Context.SettlementDate| Transaction settlement date.| string| |
| Context.SettlementIdent| Identification of the settlement account in which the transaction will be settled.| string| |
| Context.BusinessApplIdent| Business application identification.| string| |
| Context.BranchIdent| Branch identification number. <br> maxLength: 22| string| |
| Context.TellerIdent| Teller identification number| string| |
| Context.AMPMCode| AMPM code| string| |
| Context.ReentryType| Reentry type <br> Valid values are: <ul><li>Manual</li><li>Auto</li></ul>| string| |

 
