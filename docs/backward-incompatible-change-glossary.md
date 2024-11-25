# Backward-incompatible Change

Backward-incompatible changes are modifications in a service operation that can potentially disrupt existing functionality for the users or dependent systems. Identifying and handling these changes is essential to ensure a smooth transition and maintain system stability. 
<br>The following are the backward-incompatible change types that developer portal supports:

| **Code** |**Change Type** | **Description**   | **Scope**          |
|----------|----------------|--------------------|--------------------|
| 01 | **Code Breaking**| Change in the end consumer experience that may require additional development.| Service Operation  |
| 02 | **External Dependencies**| Change in external dependencies like springboot version or other security elements.| Global|
| 03 | **New Element Required** | Update in the message payload or header that adds a new required field or aggregate. This is not applicable when the new field is a child element of a new optional aggregate. | Service Operation|
| 04 | **Updated Enumerations**| Update in enumerations value(s) that causes a change in the end consumer experience. This update may add, delete or rename values in the enumeration list. These changes may require additional development.| Service Operation|
| 05 | **Updated Authorization Router** | Update in the authorization router. | Global|
| 06 | **Updated Core Connectors**| Update in provider connectors or shared libraries.| Global|
| 07 | **Updated Data Format**| Update in the data format of the field. <br> For example, the phone format is updated from “4077883302” to “+1-407-788-3302”.| Service Operation|
| 08 | **Updated Data Type**| Update in the data type or length of a field. <br> For example, data type updated from integer to decimal or vice-versa, or update from ExtendedEnum or OpenEnum to ClosedEnum. | Service Operation |
| 09 | **Updated Element From Option To Required** | Update in the usage of the field from optional to required that may require additional development.| Service Operation|
| 10 | **Updated Element Occurrence**| Update in the maximum occurrence of the field or aggregate from single to repeating.| Service Operation|
| 11 | **Updated Framework**| Update in the framework clients or libraries.| Global|
| 12 | **Updated Infrastructure**| Update in the infrastructure, such as redis implementation, deployment platform changes or database changes.| Global|
| 13 | **Updated Service Configuration**| Update in the service configuration that requires pre-installations in Developer Studio. Additional steps are required to consume the service.| Service Operation|
| 14 | **Updated Status Code Global**| Update to the correlation between a status code and the reporting HTTP status that may affect one or many service operations.| Global|
| 15 | **Updated Status Code Service**| Update to the exception handling values HTTP status and status code for a particular service outcome. This update is localized to a single service provider operation.| Service Operation  |
