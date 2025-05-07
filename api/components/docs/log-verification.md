## Log submission Scenarios for Invoice based Loan & Igm

#### Instructions

Create a fork of the [verification-logs](https://github.com/ONDC-Official/verification-logs) repository.
Create a folder with the name of your entity under your domain folder "SRV13" for credit.
Commit your logs in the folder (logs should include request & response payloads for all enabled APIs as per the scenarios below).
Create PR and label it with your domain name.
Once submitted, please refer to the comments on logs submitted and update the PR based on the comments provided.
Once the reviews are done, the PR will be merged and the logs shall be considered as approved on pr merge
For IGM logs, create a folder with name igm under your entity named folder.

### File Naming conventions:

1. **Single Endpoint Naming**:

   - For a single API endpoint, the file name should precisely match the name of the endpoint. For example:
     - search: search.json (for the "search" endpoint)
     - on_search: on_search.json (for the "on_search" endpoint)
2. **Multiple Calls for Same Endpoint**:

   - When there are multiple API calls for the same endpoint, the naming convention should reflect the sequence of calls using numeric suffixes:
     - select 1: select_1.json (for the first call of the "select" endpoint)
     - select 2: select_2.json (for the second call of the "select" endpoint)
     - status 1: status_1.json (for the first call of the "status" endpoint)
     - status 2: status_2.json (for the second call of the "status" endpoint)

These naming conventions ensure clear identification and organization of files based on the corresponding API endpoints and their respective calls.

### Scenarios

**Flow 1**
- a. Buyer NP initiates a full catalog pull
- b. Seller NP responds with full catalog

**Flow 2 (Order flow)**
- a. Buyer NP selects multiple (>1) services for checkout
- b. Seller NP provides all fulfillment slots (different fulfillment types)
- c. Buyer NP proceeds with the booking of the services for desired duration and desired fulfillment.
- d. Seller responds to the initiation of the booking with confirmed pricing details and settlement details are exchanged depending on the application collecting the   payment. If the buyer app is collecting payment from the buyer, the seller app shares their settlement details and vice versa
- e. Order confirmation request is done then placed by the buyer and the seller confirms the order. 
- f. After this all the status of fulfilment provided by seller till completion of the order

**Flow 3 (Service slot not available flow)**

- a. Buyer selects multiple (>1) services for checkout;
- b. Seller NP provides all fulfilment slots (different fulfilment types);
- c. Seller NP responds with no services available for the requested duration
- d. Buyer creates another intent for booking a equipment for different duration
- e. Buyer complete the order journey same as flow 2

**Flow 4 (Availability changes during the transaction journey)**
- a. Buyer creates an intent for booking a service
- b. The intent is broadcasted from the buyer app to all the relevant seller apps and get the intent
- c. Buyer browses through the offerings and selects a particular service (of a particular provider) views the various details, prices, specifications, amenities and terms and conditions
- d. Buyer then proceeds with booking the service for the desired duration and the desired fulfilment option
- e. Seller responds to the initiation of the booking by mentioning that the requested service is no longer available
- f. Buyer goes back to the listing page and looks for other available service

**Flow 5 (Buyer cancels the placed order)**
- a. Buyer NP completes the order journey and places the order for service;
- b. Buyer NP cancels order before pickup/delivery based on seller NP Cancellation Terms
    - i. The sellers T&C’s to be followed here which were shown at the time of the Booking.
    - ii. If the Order is prepaid, the refund or part payment should be made by the Buyer App and cancelation details should be informed to the Seller

**Flow 6 (Seller cancels the placed Order)**
- a. Buyer NP completes the order journey and places the order for equipment;
- b. Seller NP cancel order due to buyer unavailability;

**Flow 7 (Seller partially cancel the placed order)**
- a. Buyer NP complete the order journey with multiple (>1) items and placed the order for services;
- b. Merchant cancels one of the services from the order before fulfillment as per cancellation policy;

### Optional Flows:
**Flow 8 (Service is re-scheduled)**
- a. Buyer completes the order journey and places order for service;
- b. Buyer wants to reschedule the service to a different time slot or day;
- c. Seller responds with acceptance of reschedule;

Note: Log verification will follow a FIFO model with a TAT of 4 days