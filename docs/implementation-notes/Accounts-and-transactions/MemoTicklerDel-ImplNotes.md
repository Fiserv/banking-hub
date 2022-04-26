# Implementation Notes for Del MemoTickler
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
|`MemoTicklerKeys`||  |
|`MemoTicklerKeys.AcctKeys`||  |
|`MemoTicklerKeys.AcctKeys.AcctId`||  |
|`MemoTicklerKeys.AcctKeys.AcctType`|CDA|  |
|`MemoTicklerKeys.MemoTicklerUse`|Memo<br>Tickler|  |
|`MemoTicklerKeys.MemoTicklerIdent`||0|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`MemoTicklerStatusRec`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctId`||  |
|`MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctType`|CDA|  |
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
