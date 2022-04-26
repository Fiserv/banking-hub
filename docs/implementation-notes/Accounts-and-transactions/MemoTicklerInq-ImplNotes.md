# Implementation Notes for Inq MemoTickler
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
|`MemoTicklerSel`||  |
|`MemoTicklerSel.MemoTicklerKeys`||Provide memo/tickler number and account number associated with a memo/tickler to retrieve a memo/tickler record.|
|`MemoTicklerSel.MemoTicklerKeys.AcctKeys`||  |
|`MemoTicklerSel.MemoTicklerKeys.AcctKeys.AcctId`||  |
|`MemoTicklerSel.MemoTicklerKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>|  |
|`MemoTicklerSel.MemoTicklerKeys.MemoTicklerUse`|Memo<br>Tickler|It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.|
|`MemoTicklerSel.MemoTicklerKeys.MemoTicklerIdent`||This field refers to addenda number and is required to identify the memo/tickler.|
|`MemoTicklerSel.AcctKeys`||This aggregate is used to retrieve all the memo or ticklers associated with an account.|
|`MemoTicklerSel.AcctKeys.AcctId`||  |
|`MemoTicklerSel.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|  |
|`MemoTicklerSel.MemoTicklerUse`|Memo<br>Tickler|It is required to select an item in this tag to get a memo or tickler record else, both memo and ticklers will be returned in response.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||Maximum 99 memos and ticklers are supported.|
|`MemoTicklerRec`||  |
|`MemoTicklerRec.MemoTicklerKeys`||  |
|`MemoTicklerRec.MemoTicklerKeys.AcctKeys`||  |
|`MemoTicklerRec.MemoTicklerKeys.AcctKeys.AcctId`||  |
|`MemoTicklerRec.MemoTicklerKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|  |
|`MemoTicklerRec.MemoTicklerKeys.MemoTicklerUse`|Memo<br>Tickler|It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.|
|`MemoTicklerRec.MemoTicklerKeys.MemoTicklerIdent`||This field refers to addenda number and is required to identify the memo/tickler.|
|`MemoTicklerRec.MemoTicklerInfo`||  |
|`MemoTicklerRec.MemoTicklerInfo.MemoTicklerUse`|Memo<br>Tickler|It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.|
|`MemoTicklerRec.MemoTicklerInfo.MemoTicklerText`||0|
|`MemoTicklerRec.MemoTicklerInfo.MemoTicklerExtendedText`||0|
|`MemoTicklerRec.MemoTicklerInfo.RelationshipMgr`||  |
|`MemoTicklerRec.MemoTicklerInfo.RelationshipMgr.RelationshipMgrIdent`||0|
|`MemoTicklerRec.MemoTicklerInfo.RelationshipMgr.RelationshipRole`|Officer|0|
|`MemoTicklerRec.MemoTicklerInfo.RequiredViewInd`|true<br>false|0|
|`MemoTicklerRec.MemoTicklerInfo.DeliveryInstruction`||  |
|`MemoTicklerRec.MemoTicklerInfo.DeliveryInstruction.DeliveryMethod`|Notice|  |
|`MemoTicklerRec.MemoTicklerInfo.DeliveryInstruction.DeliveryMedia`||This field indicates the client-defined format used to generate an 8 1/2" x 11" or side-by-side notification form.|
|`MemoTicklerRec.MemoTicklerInfo.ReportGroupCode`||This tag refers to miscellaneous code for both memos and tickelers.|
|`MemoTicklerRec.MemoTicklerInfo.RecurRule`||0|
|`MemoTicklerRec.MemoTicklerInfo.RecurRule.RecurType`|Daily<br>Quaterly<br>SemiYearly<br>Monthly<br>Yearly<br>Once<br><br><br>|Additional yearly frequencies of every two years, every four years and every five years is supported.|
|`MemoTicklerRec.MemoTicklerInfo.RecurRule.RecurInterval`||  |
|`MemoTicklerRec.MemoTicklerInfo.NextMemoTicklerDt`||0|
|`MemoTicklerRec.MemoTicklerInfo.ExpDt`|<br>|0|
|`MemoTicklerRec.MemoTicklerStatus`||  |
|`MemoTicklerRec.MemoTicklerStatus.MemoTicklerStatusCode`|Valid|  |
|`MemoTicklerRec.MemoTicklerStatus.EffDt`||  |
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
