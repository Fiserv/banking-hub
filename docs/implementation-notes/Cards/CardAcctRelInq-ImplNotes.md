# Implementation Notes for Inq CardAcctRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`|||
|`RecCtrlIn.MaxRecLimit`|||
|`CardAcctRelSel`|||
|`CardAcctRelSel.CardKeys`|||
|`CardAcctRelSel.CardKeys.CardId`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRec`|||
|`CardAcctRelRec`|||
|`CardAcctRelRec.CardAcctRelKeys`|||
|`CardAcctRelRec.CardAcctRelKeys.CardKeys`|||
|`CardAcctRelRec.CardAcctRelKeys.CardKeys.CardId`|||
|`CardAcctRelRec.CardAcctRelInfo`|||
|`CardAcctRelRec.CardAcctRelInfo.CardRef`|||
|`CardAcctRelRec.CardAcctRelInfo.CardRef.CardKeys`|||
|`CardAcctRelRec.CardAcctRelInfo.CardRef.CardKeys.CardId`|||
|`CardAcctRelRec.CardAcctRelInfo.AcctRef`|||
|`CardAcctRelRec.CardAcctRelInfo.AcctRef.AcctKeys`|||
|`CardAcctRelRec.CardAcctRelInfo.AcctRef.AcctKeys.AcctId`|||
|`CardAcctRelRec.CardAcctRelInfo.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN||
|`CardAcctRelRec.CardAcctRelInfo.OtherAcctRel`|||
|`CardAcctRelRec.CardAcctRelInfo.Nickname`|||
|`CardAcctRelRec.CardAcctRelStatus`|||
|`CardAcctRelRec.CardAcctRelStatus.CardAcctRelStatusCode`|Valid||
|`CardAcctRelRec.CardAcctRelStatus.EffDt`|||
<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
