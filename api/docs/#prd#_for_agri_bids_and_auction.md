# PRD: Agriculture Bids And Auction

- Buyer (looking to bid for Products (Agri Produce) available in Auction)
- Buyer app (providing the interface for the buyer looking forAuctions available on the product)
- Seller (selling products in an Auction to the relevant and highest bidder)
- Seller app (providing the interface for the seller looking to sell their products via Auction on the network)

## Booking order placement
- Buyer browses through the offerings and selects a particular Agri Produce and examines the various details, prices, specifications and terms and conditions while Buyer App shares the buyer ID for verification
- Seller App verifies the Buyer ID, terminates the transaction if ineligible.
- Buyer then proceeds with bidding for the crop keeping Floor Price and Bid Increment in mind
- Seller responds to the initiation of the booking with confirmed pricing details and settlement details are exchanged depending
 on the application collecting the payment. If the buyer app is collecting payment from the buyer, the seller app shares their settlement details and vice versa
- The participation fee or EMD (Earnest Money Deposit) is often used to check the seriousness of the Buyer
    - EMD Required
        EMD shared as per the Seller’s T & C
    - Other Charges
        No Participation Fee Required (Jump to Fulfilment)
- Payment is collected for order confirmation initiation 1. BAP Collecting, 2. BPP Collecting
- Order confirmation request is then placed by the buyer by confirming the Bid. All the bids defined by the Buyer will be accepted (even if its less than the current Highest price)
- Once the order is confirmed, Order ID will be created and Bid State will be defined as “Placed”

## Post Order confirmation 
- Step 1 : Buyer will requests the update on the Auction like current Highest BidPost Order Placement/ Fulfilment
- Seller notifies the current Highest Bid and if the Buyer wants to update the Bid he can (before the End Date)
- Buyer updates the Bid and the same is reflected at both ends. Back to step 1 until the End date arrives.
- Once the auction ends, Buyer requests for the final update
    If Buyer wins, Bid State will be defined as “Awarded”
    If Buyer loses, a Cancel call will be made. The buyer will be made aware of the winning Bid and Bid State will be “Not Awarded”
- If Buyer is awarded the Bid, payment (Security Deposit) will be collected for order confirmation initiation
Case 1: Buyer app collects payment and initiates the confirmation call
Case 2: Seller app collects payment, seller app provides its payment collection details and shares confirmation on the payment successful post confirmation initiation received form the buyer app
- If Buyer loses the Bid, the refund for EMD will be initiated.
- Buyer leaves a detailed review on the buyer, sharing both positive and negative aspects. Buyer app shares the same with the seller app following the rating framework

## Serviciability and Polygon
serviceability details and how its work and also time selection can be reffered from <a href="https://docs.google.com/document/d/1f4QbVstY5m-L_-Jut5jvbeiaBKLR1ttJL_am6GG2Fko/edit">[this document]</a> and for polygon geoJSON check <a href="https://docs.google.com/document/d/1R4tw3L5jjjqxHxP21sLlSO2YQqpwn3ln0I5Eo7kintM/edit">[here]</a>




