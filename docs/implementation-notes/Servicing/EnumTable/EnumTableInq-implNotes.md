# Implementation Notes for Enum Table inquiry

This section provides the provider-specific request schema and implementation notes applicable for Enum Table inquiry API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 

 <!--
type: tab
titles: By Branch, By DataDesc, By RelSpec
-->


The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table cellspacing="0">
    <col  />
    <col  />
    <col  />
    <col />
    <tbody>
        <tr>
            <td>Field Name</td>
            <td>Core Usage</td>
            <td>Core Field length</td>
            <td>Implementation Note</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlIn</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlIn.MaxRecLimit</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlIn.Cursor</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut.SentRecCount</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut.Cursor</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr style="height : 60px;">
            <td>EnumTableSel.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>"Region" refers to a Branch Region, also known as Originating Branch.
"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  </td>
        </tr>
        <tr>
            <td>EnumTableRec</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EnumTableStatusCode</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EffDt</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---

<!--type: tab --> 

The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table cellspacing="0">
    <col />
    <col />
    <col />
    <col />
    <tbody>
        <tr>
            <td>Field Name</td>
            <td>Core Usage</td>
            <td>Core Field length</td>
            <td>Implementation Note</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut.SentRecCount</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys.BranchIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>If no branch is input, Premier searches using the default branch name.</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys.DataApplType</td>
            <td>Required</td>
            <td>Default</td>
            <td>Required only if the BranchIdent value is sent in the request.</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>"Region" refers to a Branch Region, also known as Originating Branch.
"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  </td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumFilter</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys.BranchIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys.DataApplType</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EnumTableStatusCode</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EffDt</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---

<!--type: tab --> 
The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

  <table cellspacing="0">
    <col />
    <col />
    <col />
    <col />
    <tbody>
        <tr>
            <td>Field Name</td>
            <td>Core Usage</td>
            <td>Core Field length</td>
            <td>Implementation Note</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>RecCtrlOut.SentRecCount</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableSel.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableKeys.EnumTableIdent</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EnumTableStatusCode</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>EnumTableRec.EnumTableStatus.EffDt</td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---

<!--type: tab-end -->
<!--type: tab-end -->