# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities management >> Create an opportunity with <type> >> Create an opportunity with New Business
- Location: tests/generated/features/opportunities.feature.spec.js:57:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
AggregateError: Failed to delete one or more test-created accounts.
```

```
TimeoutError: locator.waitFor: Timeout 20000ms exceeded.
Call log:
  - waiting for getByRole('tabpanel', { name: /^overview$/i }) to be visible

```

```
Error: page.waitForURL: Test timeout of 90000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://suite8demo.suiteondemand.com/#/accounts/record/ac3be64a-b77c-4f42-a91d-ec8533e8b5c6"
  navigated to "https://suite8demo.suiteondemand.com/#/accounts/record/ac3be64a-b77c-4f42-a91d-ec8533e8b5c6"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
          - listitem [ref=e43]:
            - generic [ref=e44]: Leads
          - listitem [ref=e51]:
            - generic [ref=e52]: Quotes
          - listitem [ref=e59]:
            - generic [ref=e60]: Calendar
          - listitem [ref=e67]:
            - generic [ref=e68]: Documents
        - list [ref=e77]:
          - listitem [ref=e78]:
            - generic [ref=e79]: More
      - generic [ref=e81]:
        - list [ref=e83]:
          - listitem [ref=e84]:
            - generic "Quick Create" [ref=e85] [cursor=pointer]
        - list [ref=e92]:
          - listitem [ref=e93]:
            - generic "Recently Viewed" [ref=e94] [cursor=pointer]
        - generic [ref=e104]:
          - textbox "Search" [ref=e105]:
            - /placeholder: Search...
          - button "Search" [ref=e107] [cursor=pointer]
        - list [ref=e117]:
          - listitem [ref=e118]:
            - generic [ref=e119] [cursor=pointer]
      - list [ref=e127]:
        - listitem [ref=e128]
    - generic [ref=e139]:
      - generic [ref=e143]:
        - generic [ref=e144]:
          - button [ref=e148] [cursor=pointer]
          - generic [ref=e155]:
            - button [ref=e159] [cursor=pointer]
            - generic [ref=e166]: Numpy New Business Account
        - generic [ref=e172]:
          - button "Edit" [ref=e174] [cursor=pointer]
          - button "Insights" [ref=e177] [cursor=pointer]
          - button "Actions" [ref=e181] [cursor=pointer]
      - separator [ref=e183]
      - generic [ref=e186]:
        - generic [ref=e188]:
          - generic [ref=e192]:
            - tablist [ref=e194]:
              - tab "OVERVIEW" [selected] [ref=e195] [cursor=pointer]
              - tab "MORE INFORMATION" [ref=e196] [cursor=pointer]
              - tab "OTHER" [ref=e197] [cursor=pointer]
            - tabpanel "OVERVIEW" [ref=e199]:
              - generic [ref=e202]:
                - generic [ref=e203]:
                  - generic [ref=e205]:
                    - strong [ref=e207]:
                      - generic [ref=e208]: NAME
                    - generic [ref=e209]:
                      - generic [ref=e210]: Numpy New Business Account
                      - button [ref=e217] [cursor=pointer]
                  - generic [ref=e229]:
                    - strong [ref=e231]:
                      - generic [ref=e232]: ASSIGNED TO
                    - generic [ref=e233]:
                      - link "Will Westin" [ref=e239] [cursor=pointer]:
                        - /url: "#/users/record/seed_will_id"
                      - button [ref=e241] [cursor=pointer]
                - generic [ref=e252]:
                  - generic [ref=e254]:
                    - strong [ref=e256]:
                      - generic [ref=e257]: WEBSITE
                    - generic [ref=e258]:
                      - generic [ref=e259]:
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - link:
                                    - /url: ""
                      - button [ref=e261] [cursor=pointer]
                  - generic [ref=e273]:
                    - strong [ref=e275]:
                      - generic [ref=e276]: OFFICE PHONE
                    - generic [ref=e277]:
                      - generic [ref=e278]:
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - link:
                                    - /url: ""
                      - button [ref=e280] [cursor=pointer]
                - generic [ref=e293]:
                  - strong [ref=e295]:
                    - generic [ref=e296]: EMAIL ADDRESS
                  - button [ref=e303] [cursor=pointer]
                - generic [ref=e315]:
                  - generic [ref=e317]:
                    - strong [ref=e319]:
                      - generic [ref=e320]: BILLING ADDRESS
                    - button [ref=e324] [cursor=pointer]
                  - generic [ref=e336]:
                    - strong [ref=e338]:
                      - generic [ref=e339]: SHIPPING ADDRESS
                    - button [ref=e343] [cursor=pointer]
                - generic [ref=e356]:
                  - strong [ref=e358]:
                    - generic [ref=e359]: DESCRIPTION
                  - button [ref=e363] [cursor=pointer]
          - heading "Relationships Activities - History - Documents - Contacts -" [ref=e380]:
            - generic [ref=e381]:
              - generic [ref=e382]: Relationships
              - generic [ref=e385]:
                - generic [ref=e386]:
                  - generic [ref=e390] [cursor=pointer]:
                    - generic [ref=e401]: Activities
                    - generic [ref=e404]: "-"
                  - generic [ref=e409] [cursor=pointer]:
                    - generic [ref=e421]: History
                    - generic [ref=e424]: "-"
                  - generic [ref=e429] [cursor=pointer]:
                    - generic [ref=e443]: Documents
                    - generic [ref=e446]: "-"
                  - generic [ref=e451] [cursor=pointer]:
                    - generic [ref=e462]: Contacts
                    - generic [ref=e465]: "-"
                - generic [ref=e468] [cursor=pointer]
        - generic [ref=e474]:
          - generic [ref=e479]:
            - generic [ref=e480]:
              - generic [ref=e481]: .
              - generic [ref=e484]: .
            - generic [ref=e485]:
              - generic [ref=e486]: .
              - generic [ref=e489]: .
          - generic [ref=e496]:
            - generic [ref=e497]: Closed Per Year
            - generic [ref=e501]: No Data
          - generic [ref=e523]:
            - generic [ref=e524]: Timeline
            - generic [ref=e535]:
              - paragraph [ref=e544]
              - paragraph [ref=e567]
              - paragraph [ref=e590]
              - paragraph [ref=e613]
              - paragraph [ref=e636]
              - paragraph [ref=e659]
  - generic [ref=e675]:
    - generic [ref=e676]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e677]: Back To Top
```

# Test source

```ts
  563 |     await expect(amountDetail).toBeVisible();
  564 | 
  565 | 
  566 |     await expect(amountDetail).toContainText(
  567 |       expectedCurrencyDisplay
  568 |     );
  569 | 
  570 | 
  571 |     await expect.poll(
  572 |       async () => {
  573 |         const displayedAmount =
  574 |           await amountDetail.innerText();
  575 | 
  576 | 
  577 |         if (
  578 |           !displayedAmount.includes(
  579 |             expectedCurrencyDisplay
  580 |           )
  581 |         ) {
  582 |           return null;
  583 |         }
  584 | 
  585 | 
  586 |         const normalizedAmount = displayedAmount
  587 |           .replace(expectedCurrencyDisplay, '')
  588 |           .replace(/USD/gi, '')
  589 |           .replace(/[,\s]/g, '');
  590 | 
  591 | 
  592 |         if (
  593 |           !/^\d+(?:\.\d+)?$/.test(normalizedAmount)
  594 |         ) {
  595 |           return null;
  596 |         }
  597 | 
  598 | 
  599 |         return Number(normalizedAmount);
  600 |       },
  601 |       {
  602 |         message:
  603 |           'Saved USD display and opportunity amount should match Excel'
  604 |       }
  605 |     ).toBe(expectedAmount);
  606 | 
  607 | 
  608 |     logger.info(
  609 |       'Opportunity created with the expected USD display and amount',
  610 |       {
  611 |         scenario: opportunity.scenario,
  612 |         opportunityName: opportunity.name,
  613 |         expectedCurrencyCode,
  614 |         expectedCurrencyDisplay,
  615 |         expectedAmount,
  616 |         opportunityRecordUrl
  617 |       }
  618 |     );
  619 |   }
  620 | );
  621 | 
  622 | 
  623 | // --------------------------------------------------
  624 | // Create opportunity with Type
  625 | // --------------------------------------------------
  626 | 
  627 | 
  628 | When(
  629 |   'the user enters mandatory opportunity data, selects the type from Excel, and saves',
  630 |   async ({
  631 |     page,
  632 |     opportunitiesPage,
  633 |     opportunityTestData,
  634 |     opportunityCleanup,
  635 |     logger
  636 |   }) => {
  637 |     const opportunity =
  638 |       opportunityTestData.opportunity;
  639 | 
  640 | 
  641 |     if (!opportunity) {
  642 |       throw new Error(
  643 |         'Opportunity test data was not initialized ' +
  644 |         'by the Given step.'
  645 |       );
  646 |     }
  647 | 
  648 | 
  649 |     await opportunitiesPage
  650 |       .enterMandatoryOpportunityDetails(
  651 |         opportunity
  652 |       );
  653 | 
  654 | 
  655 |     await opportunitiesPage.selectOpportunityType(
  656 |       opportunity.type
  657 |     );
  658 | 
  659 | 
  660 |     await opportunitiesPage.saveOpportunity();
  661 | 
  662 | 
> 663 |     await page.waitForURL(OPPORTUNITY_RECORD_URL);
      |                ^ Error: page.waitForURL: Test timeout of 90000ms exceeded.
  664 | 
  665 | 
  666 |     const opportunityRecordUrl = page.url();
  667 | 
  668 | 
  669 |     opportunityCleanup.register(
  670 |       opportunityRecordUrl
  671 |     );
  672 | 
  673 | 
  674 |     opportunityTestData.opportunityRecordUrl =
  675 |       opportunityRecordUrl;
  676 | 
  677 | 
  678 |     logger.info(
  679 |       'Opportunity created with the selected type',
  680 |       {
  681 |         scenario: opportunity.scenario,
  682 |         opportunityName: opportunity.name,
  683 |         opportunityType: opportunity.type,
  684 |         opportunityRecordUrl
  685 |       }
  686 |     );
  687 |   }
  688 | );
  689 | 
  690 | 
  691 | Then(
  692 |   'the opportunity should be created with the selected type from Excel',
  693 |   async ({
  694 |     page,
  695 |     opportunitiesPage,
  696 |     opportunityTestData,
  697 |     logger
  698 |   }) => {
  699 |     const {
  700 |       opportunity,
  701 |       opportunityRecordUrl
  702 |     } = await verifyCreatedOpportunity(
  703 |       page,
  704 |       opportunitiesPage,
  705 |       opportunityTestData
  706 |     );
  707 | 
  708 | 
  709 |     const typeDetail =
  710 |       opportunitiesPage.getOpportunityTypeDetail();
  711 | 
  712 | 
  713 |     await expect(typeDetail).toBeVisible();
  714 | 
  715 | 
  716 |     await expect(typeDetail).toHaveText(
  717 |       opportunity.type
  718 |     );
  719 | 
  720 | 
  721 |     logger.info(
  722 |       'Saved opportunity type verified',
  723 |       {
  724 |         scenario: opportunity.scenario,
  725 |         opportunityName: opportunity.name,
  726 |         expectedType: opportunity.type,
  727 |         opportunityRecordUrl
  728 |       }
  729 |     );
  730 |   }
  731 | );
  732 | 
  733 | 
  734 | // --------------------------------------------------
  735 | // Create opportunity with Lead Source
  736 | // --------------------------------------------------
  737 | 
  738 | 
  739 | When(
  740 |   'the user enters mandatory opportunity data, selects the lead source from Excel, and saves',
  741 |   async ({
  742 |     page,
  743 |     opportunitiesPage,
  744 |     opportunityTestData,
  745 |     opportunityCleanup,
  746 |     logger
  747 |   }) => {
  748 |     const opportunity =
  749 |       opportunityTestData.opportunity;
  750 | 
  751 | 
  752 |     if (!opportunity) {
  753 |       throw new Error(
  754 |         'Opportunity test data was not initialized ' +
  755 |         'by the Given step.'
  756 |       );
  757 |     }
  758 | 
  759 | 
  760 |     await opportunitiesPage
  761 |       .enterMandatoryOpportunityDetails(
  762 |         opportunity
  763 |       );
```