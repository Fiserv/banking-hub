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
        <col  />
        <tbody>
            <tr>
                <td>Field Name</td>
                <td>Core Usage</td>
                <td>Core Field length</td>
                <td>Implementation Note</td>
            </tr>
            <tr>
                <td><code>Status</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlIn</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlIn.MaxRecLimit</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlIn.Cursor</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlOut</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlOut.SentRecCount</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>RecCtrlOut.Cursor</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableSel</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableSel.EnumTableKeys</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr style="height : 60px;">
                <td><code>EnumTableSel.EnumTableKeys.EnumTableIdent</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>"Region" refers to a Branch Region, also known as Originating Branch.
    "Branch" refers to Accounting Branch/Group also known as Responsible Branch.  </td>
            </tr>
            <tr>
                <td><code>EnumTableRec</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableKeys</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableKeys.EnumTableIdent</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableInfo</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableInfo.EnumTableData</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableStatus</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableStatus.EnumTableStatusCode</code>
                </td>
                <td>Default</td>
                <td>Default</td>
                <td>&#160;</td>
            </tr>
            <tr>
                <td><code>EnumTableRec.EnumTableStatus.EffDt</code>
                </td>
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
           
<col  />
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
        <td><code>Status</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>RecCtrlOut</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>RecCtrlOut.SentRecCount</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableSel</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableSel.EnumTableKeys</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableSel.EnumTableKeys.BranchIdent</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>If no branch is input, Premier searches using the default branch name.</td>
    </tr>
    <tr>
        <td><code>EnumTableSel.EnumTableKeys.DataApplType</code></td>
        <td>Required</td>
        <td>Default</td>
        <td>Required only if the BranchIdent value is sent in the request.</td>
    </tr>
    <tr>
        <td><code>EnumTableSel.EnumTableKeys.EnumTableIdent</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>"Region" refers to a Branch Region, also known as Originating Branch.
"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  </td>
    </tr>
    <tr>
        <td><code>EnumTableSel.EnumFilter</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableKeys</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableKeys.BranchIdent</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableKeys.DataApplType</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableKeys.EnumTableIdent</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableInfo</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableInfo.EnumTableData</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableStatus</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableStatus.EnumTableStatusCode</code></td>
        <td>Default</td>
        <td>Default</td>
        <td>&#160;</td>
    </tr>
    <tr>
        <td><code>EnumTableRec.EnumTableStatus.EffDt</code></td>
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
            <td><code>Status</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>RecCtrlOut</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>RecCtrlOut.SentRecCount</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableSel</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableSel.EnumTableKeys</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableSel.EnumTableKeys.EnumTableIdent</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableKeys</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableKeys.EnumTableIdent</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableInfo</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableInfo.EnumTableData</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValue</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableStatus</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableStatus.EnumTableStatusCode</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>EnumTableRec.EnumTableStatus.EffDt</code></td>
            <td>Default</td>
            <td>Default</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---

<!--type: tab-end -->
<!--type: tab-end -->
