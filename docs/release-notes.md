# Release Notes

This section provides information about the latest improvements made in Fiserv Open Banking APIs in the course of product support and development.

##  Release 2021.02
  
 <html> 
  <table style="width: 100%;margin-left: 0;margin-right: auto;">
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>API</th>
                    <th>Type</th>
                    <th>Release Details</th>
                </tr>
            </thead>
            <tbody>                
                <tr>
                  <td>POST /Credit  <br> <br> <span style="font-size: 80%; color: #666;">CreditAdd</span></td>
                    <td>ENH</td>
                    <td>Updated the <code>CreditAdd</code> service implementation of Cleartouch core to enable a service provider to process the debit card transactions. ESF can configure the environment to activate or deactivate the debit card transactions. <br/> To process the debit card transactions, a service provider needs to pass the Debit Card Identifier value in the following field:
                        <ul>
                          <li> PmtData.AcctKeys.CardKeys.CardId </li>
                        </ul> 
                  </td>
                </tr>
                <tr>
                    <td>POST /Credit  <br> <br> <span style="font-size: 80%; color: #666;">CreditRev</span></td>
                      <td>ENH</td>
                      <td>Updated the <code>CreditRev</code> service implementation of Cleartouch core to enable a service provider to process the debit card transactions. ESF can configure the environment to activate or deactivate the debit card transactions. <br/> To process the debit card transactions, a service provider needs to pass the Debit Card Identifier value in the following field:
                          <ul>
                              <li>PmtData.AcctKeys.CardKeys.CardId</li>
                          </ul> 
                    </td>
                 </tr>
                <tr>
                <tr>
                    <td>POST /Card  <br> <br> <span style="font-size: 80%; color: #666;">CardListInq</span></td>
                      <td>MAINT</td>
                      <td>Updated the transformation of the <code>ProductIdent</code> field to send the ISO number in a new field in place of sending it within the <code>ProdId</code> tag of the AcctListInq message.<br/> Updated field:
                          <ul>
                              <li>CardListRec.CardListInfo.ProductIdent</li>                              
                          </ul> 
                    </td>
                 </tr>                   
               <td>POST /Deposit  <br> <br> <span style="font-size: 80%; color: #666;">DepositApplAdd</span></td>
                    <td>ENH</td>
                    <td>Updated the <code>PersonName</code> aggregate to remove the dependency on  submitting PostAddr field in the request. </td>
               </tr>
              <tr>
                    <td>POST /Party  <br> <br> <span style="font-size: 80%; color: #666;">PartyAdd</span></td>
                      <td>MAINT</td>
                      <td>Added <code>IsAlienInd</code> as a new field to indicate whether the status of a party is alien  or not.<br/> Added fields:
                          <ul>
                              <li>PersonPartyInfo/IsAlienInd</li>
                              <li>OrgPartyInfo/IsAlienInd</li>
                          </ul> 
                    </td>
                 </tr>
                  <tr>
                    <td>POST /Party  <br> <br> <span style="font-size: 80%; color: #666;">PartyAdd</span></td>
                      <td>MAINT</td>
                      <td>Updated the <code>PartyAdd</code> service implementation for Precision core to support foreign country codes for identifying a party. This update transforms the issue identifier country code to the standard country code provided in the ESF transfer rule (Xref) to match with the country code records of a financial institution. <br/> Following fields have been updated in order to execute this change:
                          <ul>
                              <li>PersonPartyInfo.PersonData.IssuedIdent.GovIssuedIdent.CountryCode</li>
                              <li>PersonPartyInfo.PersonData.IssuedIdent.GovIssuedIdent.CountryCode.CountryCodeSource</li>
                              <li>PersonPartyInfo.PersonData.IssuedIdent.GovIssuedIdent.CountryCode.CountryCodeValue</li>
                              <li>OrgPartyInfo.OrgData.IssuedIdent.GovIssuedIdent.CountryCode</li>
                              <li>OrgPartyInfo.OrgData.IssuedIdent.GovIssuedIdent.CountryCode.CountryCodeSource</li>
                              <li>OrgPartyInfo.OrgData.IssuedIdent.GovIssuedIdent.CountryCode.CountryCodeValue</li>
                          </ul> 
                    </td>
                 </tr>
                <tr>
                    <td>POST /Party  <br> <br> <span style="font-size: 80%; color: #666;">PartyPartyRelInq</span></td>
                      <td>MAINT</td>
                      <td>Deleted the <code>ReversePartyRelType</code> field due to inaccurate reverse relationship transformation and unavailability of ESF to find the correct relationship between the parties. <br/> Deleted field:
                          <ul>
                              <li>PartyPartyRelRec.PartyPartyRelInfo.RelPartyRef.ReversePartyRelType</li>                              
                          </ul> 
                    </td>
                 </tr> 
                <tr>
                    <td>POST /Party  <br> <br> <span style="font-size: 80%; color: #666;">PartyMod</span></td>
                      <td>MAINT</td>
                      <td>Updated the <code>PersonName</code> aggregate to remove the dependency on  submitting <code>PostAddr</code> field in the request. </td>
                 </tr> 
            </tbody>
        </table>
 </html> 
