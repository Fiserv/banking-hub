# Implementation Notes for Add MemoTickler
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.


<!-- 
type: tab 
titles: Premier, , , Precision, Signature, Cleartouch, DNA, 
-->

<!-- 
type: tab 
titles: DDA_CDA_SDA, LOAN, Party 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`MemoTicklerInfo`||  |
|`MemoTicklerInfo.AcctKeys`||  |
|`MemoTicklerInfo.AcctKeys.AcctId`||  |
|`MemoTicklerInfo.AcctKeys.AcctType`|CDA<br>DDA<br>SDA<br>|  |
|`MemoTicklerInfo.MemoTicklerUse`|Memo<br>Tickler|  |
|`MemoTicklerInfo.MemoTicklerText`||For Ticklers, one-liner description of 40 characters is accepted and, for LOAN account 60 characters are accepted.<br><br>For Memos, upto 5 description lines of 60 characters are accepted.<br>|
|`MemoTicklerInfo.MemoTicklerExtendedText`||For Ticklers, additional message line of 60 characters is accepted by the service.<br>This message prints in addition to a standard message from the notification format specifications.<br><br>|
|`MemoTicklerInfo.RelationshipMgr`||  |
|`MemoTicklerInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`MemoTicklerInfo.RelationshipMgr.RelationshipRole`|Officer|  |
|`MemoTicklerInfo.RequiredViewInd`|true<br>false|  |
|`MemoTicklerInfo.DeliveryInstruction`||  |
|`MemoTicklerInfo.DeliveryInstruction.DeliveryMethod`|Notice|Item appears as a notice printed during nightly processing.|
|`MemoTicklerInfo.DeliveryInstruction.DeliveryMedia`||Applicable only for ticklers. <br>This field must be provided, if the DeliveryMethod value is set to "Notice"<br><br>This field indicates the client-defined format used to generate an 8 1/2" x 11" or side-by-side notification form.<br>|
|`MemoTicklerInfo.ReportGroupCode`||This tag refers to Miscellaneous Code for both memos and ticklers.|
|`MemoTicklerInfo.RecurRule`||  |
|`MemoTicklerInfo.RecurRule.RecurType`|Daily<br>Monthly<br>Quaterly<br>SemiYearly<br>Yearly<br>Once<br><br><br>|  |
|`MemoTicklerInfo.RecurRule.RecurInterval`||  |
|`MemoTicklerInfo.NextMemoTicklerDt`||If the tickler frequency is monthly or greater, next tickler date will be automatically advanced, whereas for one-time/blank frequency the date should be manually advanced whenever the tickler is reported. |
|`MemoTicklerInfo.ExpDt`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`MemoTicklerStatusRec`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctId`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctType`|CDA<br>DDA<br>SDA<br><br><br>|  |
|`MemoTicklerStatusRec.MemoTicklerKeys.MemoTicklerUse`|Memo<br>Tickler|  |
|`MemoTicklerStatusRec.MemoTicklerKeys.MemoTicklerIdent`||  |
|`MemoTicklerStatusRec.MemoTicklerStatus`||  |
|`MemoTicklerStatusRec.MemoTicklerStatus.MemoTicklerStatusCode`|Valid|  |
|`MemoTicklerStatusRec.MemoTicklerStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->

<!-- type: tab -->

#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
