# Release Notes

This section provides information about the latest improvements made in Fiserv Open Banking APIs in the course of product support and development.

# Release 2021.02

<span style="color: #666; font-weight: normal; font-size: 75%; "> Release Date: June 2021 </span>
  <br/>
 <html> 
  <table style="width: 100%;margin-left: 0;margin-right: auto;">
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

# Payment Source Types

The variable `sourceType` is used to determine the source of the transaction. Depending on the source the required variables change. 

| sourceType | Description |
| ----- | ----- |
| PaymentCard | **Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay online or in person. *PaymentCard* is used to submit a [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), Gift Card, EMV and Track Data transaction to our application. |
| ApplePay | **Apple Pay** is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web using Safari. Supported on the iPhone, Apple Watch, iPad, and Mac. Used to submit [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) transaction to our application. |
| GooglePay | **Google Pay** is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) transaction to our application. |
| DecryptedWallet | **Decrypted Wallet** is used by the merchant while sending the transaction to the Commerce Hub when they are using their own certificate to encrypt the data received from Apple Pay and Google Pay. |
| PaymentToken | **Payment Token** is a created by submitting a [token request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) using a payment card. Used to submit a [Network Token](?path=docs/Resources/Guides/Payment-Sources/Network-Token.md) or Payment Token transaction to our application. |
| Payment3DS | **3-D Secure** authentication provides an additional security layer for online card transactions. If the merchant account is enabled for 3-D Secure, all [charge](?path=docs/Resources/API-Documents/Payments/Charges.md) transactions merchant initiate by posting an HTML form will by default go through the 3-D Secure process i.e. cardholders with an enrolled card will see a page from the card issuer to enter the password unless the card issuer decides not to check it. Used to submit [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) transaction to our application. |