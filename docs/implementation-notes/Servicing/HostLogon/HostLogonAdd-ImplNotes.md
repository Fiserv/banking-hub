# Implementation Notes for Add HostLogon
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`HostCredentialsRqHdr`|||
|`HostCredentialsRqHdr.SecTokenLogin`|||
|`HostCredentialsRqHdr.SecTokenLogin.LoginName`||LoginName is the service provider defined user ID of the person logged into the system for which the credentials are requested. Typically, LoginName is a user name and not a numeric value.|
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd`|||
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptType`|Base-64||
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.Pswd`||Password should be Base-64 Encoded.|
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd`|||
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd.BinLength`|||
|`HostCredentialsRqHdr.SecTokenLogin.SubjectPswd.CryptPswd.BinData`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`HostCredentialsRsHdr`|||
|`HostCredentialsRsHdr.SessKey`||SessKey value is used in future communication with ESF for the same user.|
|`HostCredentialsRsHdr.AuthCode`|||
|`HostCredentialsRsHdr.UserCode`|||
|`HostCredentialsRsHdr.UserName`|||
|`HostCredentialsRsHdr.Assertion`|||
|`HostCredentialsRsHdr.Assertion.AssertionType`|SDA<br>CDA<br>CRD<br>LOAN<br>DDA<br>Customer<br>BankAdmin|This field should be combined with the values for the AssertionValueInd and Operation fields to determine the proper authority level for the requested user.<br><br>Presently only a subset of the supported of assertion type by Precision are made available for integration.|
|`HostCredentialsRsHdr.Assertion.AssertionValueInd`||This field should be used in addition with the AssertionType and Operation fields to  determine whether the requested user has the permission to perform the action.|
|`HostCredentialsRsHdr.Assertion.Operation`|Add<br>Inq<br>Mod<br>Del|This field in combination with the AssertionType and AssertionValueInd fields depicts the action intitled to the request user.|
<!-- type: tab-end -->
