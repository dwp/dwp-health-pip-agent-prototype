const express = require('express')
const path = require('path')

const router = new express.Router()

function makeAStay(data) {
  const admission = new Date(`${data['admission-year']}-${data['admission-month']}-${data['admission-day']}`)
  const discharge = new Date(`${data['discharge-year']}-${data['discharge-month']}-${data['discharge-day']}`)
  const totalDays = Math.max(differenceInDays(discharge, admission) - 1, 0)
  return {admission, discharge, totalDays}
}

// PDF DOWNLOADER
router.use(`/pip-letter.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-letter.pdf')))
router.use(`/pip-doc1.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc1.pdf')))
router.use(`/pip-doc2.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc2.pdf')))
router.use(`/pip-doc3.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc3.pdf')))
router.use(`/pip-doc4.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc4.pdf')))
router.use(`/pip-doc5.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc5.pdf')))
router.use(`/pip-doc6.pdf`, express.static(path.resolve('app/views/agent-0-11/pip-doc6.pdf')))



// —————————————————————————————————


router.post(`/test-radio-router`, (req, res) => {
  const testRadio = req.session.data['test-router']

  if (testRadio == 'test1') {
    res.redirect(`xx1`)
  }
  else if (testRadio == 'test2') {
    res.redirect(`xx2`)
  }
   else {
    res.redirect(`XXX`)
  }
})


router.post(`/section-4-add-1-router`, (req, res) => {
  const add1 = req.session.data['section-4-add-1']

  if (add1 == 'Yes') {
    res.redirect(`section-4-hcp-1`)
  }
  else if (add1 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/section-4-add-2-router`, (req, res) => {
  const add2 = req.session.data['section-4-add-2']

  if (add2 == 'Yes') {
    res.redirect(`section-4-hcp-2`)
  }
  else if (add2 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/section-4-add-3-router`, (req, res) => {
  const add3 = req.session.data['section-4-add-3']

  if (add3== 'Yes') {
    res.redirect(`section-4-hcp-3`)
  }
  else if (add3 == 'No') {
    res.redirect(`cya-4`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-1-outcome-letter-check-router`, (req, res) => {
  const letterEdit = req.session.data['application-1-outcome-letter-check']

  if (letterEdit== 'Yes') {
    res.redirect(`application-1-letter-edit`)
  }
  else if (letterEdit == 'No') {
    res.redirect(`application-1-letter-review`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-5-outcome-letter-check-router`, (req, res) => {
  const letter5Edit = req.session.data['application-5-outcome-letter-check']

  if (letter5Edit== 'Yes') {
    res.redirect(`application-5-letter-edit`)
  }
  else if (letter5Edit == 'No') {
    res.redirect(`application-5-letter-review`)
  }
   else {
    res.redirect(`XXX`)
  }
})




router.post(`/inbound-1-greeting-router`, (req, res) => {
  const inboundGreeting = req.session.data['inbound-1-greeting']

  if (inboundGreeting == 'Yes') {
    res.redirect(`find-someone-1-gather`)
  }
  else if (inboundGreeting == 'No') {
    res.redirect(`inbound-1-other-help`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/ecp-other-help-router`, (req, res) => {
  const inboundEndCallProcess = req.session.data['ecp-other-help']

  if (inboundEndCallProcess == 'Yes') {
    res.redirect(`record-other-actions`)
  }
  else if (inboundEndCallProcess == 'No') {
    res.redirect(`ecp-goodbye`)
  }
   else {
    res.redirect(`XXX`)
  }
})



router.post(`/record-other-actions-router`, (req, res) => {
  const endCallProcessReturnToRecord = req.session.data['record-other-actions']

  if (endCallProcessReturnToRecord == 'A') {
    res.redirect(`record-other-actions-request-callback`)
  }
  else if (endCallProcessReturnToRecord == 'B') {
    res.redirect(`record-1-overview`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/application-3-lpa-1-router`, (req, res) => {
  const lpaChangeMade = req.session.data['application-3-lpa-1']

  if (lpaChangeMade == 'Yes') {
    res.redirect(`record-1-overview`)
  }
  else if (lpaChangeMade == 'No') {
    res.redirect(`inbound-1-end-call-process`)
  }
   else {
    res.redirect(`XXX`)
  }
})



router.post(`/application-selector-router`, (req, res) => {
  const applicationSelector = req.session.data['application-selector']

  if (applicationSelector == '1') {
    res.redirect(`application-1-overview`)
  }
  else if (applicationSelector == '2') {
    res.redirect(`application-2-overview`)
  }
  else if (applicationSelector == '3') {
    res.redirect(`application-3-overview`)
  }
  else if (applicationSelector == '4') {
    res.redirect(`application-4-overview`)
  }
  else if (applicationSelector == '5') {
    res.redirect(`application-5-overview`)
  }
  else if (applicationSelector == '5a') {
    res.redirect(`application-prompt-whats-done`)
  }
  else if (applicationSelector == 'A') {
    res.redirect(`assurance-overview`)
  }
  else if (applicationSelector == 'AM') {
    res.redirect(`assurance-overview`)
  }
  else if (applicationSelector == 'APR') {
    res.redirect(`assurance-overview`)
  }
   else {
    res.redirect(`XXX`)
  }
})


router.post(`/outbound-precall-router`, (req, res) => {
  const preCall = req.session.data['outbound-precall']

  if (preCall == 'Yes') {
    res.redirect(`find-someone-1-offline-gather`)
  }
  else if (preCall == 'No') {
    res.redirect(`XXX`)
  }
   else {
    res.redirect(`XXX`)
  }
})

// Scenario 1 routers


router.post(`/application-1-about-a1-router`, (req, res) => {
  const aboutA1 = req.session.data['application-1-about-a1']

  if (aboutA1 == 'Agree') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA1 == 'Amended') {
    res.redirect(`application-1-about-a1-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})

router.post(`/application-1-about-a6-router`, (req, res) => {
  const aboutA6 = req.session.data['application-1-about-a6']

  if (aboutA6 == 'No-change') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA6 == 'Amended') {
    res.redirect(`application-1-about-a6-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})


router.post(`/application-1-about-a12-router`, (req, res) => {
  const aboutA12 = req.session.data['application-1-about-a12']

  if (aboutA12 == 'Agree') {
    res.redirect(`application-1-about`)
  }
  else if (aboutA12 == 'Amended') {
    res.redirect(`application-1-about-a12-reason`)
  }
   else {
    res.redirect(`application-1-about`)
  }
})

// Scenario 5 routers

router.post(`/application-5-about-a1-router`, (req, res) => {
  const about5_A1 = req.session.data['application-5-about-a1']

  if (about5_A1 == 'Agree') {
    res.redirect(`application-5-about-a1-reason`)
  }
  else if (about5_A1 == 'Amended') {
    res.redirect(`application-5-about-a1-score`)
  }
   else {
    res.redirect(`application-5-about-clear`)
  }
})

router.post(`/application-5-about-a6-router`, (req, res) => {
  const about5_A6 = req.session.data['application-5-about-a6']

  if (about5_A6 == 'Agree') {
    res.redirect(`application-5-about-a6-reason`)
  }
  else if (about5_A6 == 'Amended') {
    res.redirect(`application-5-about-a6-score`)
  }
   else {
    res.redirect(`application-5-about`)
  }
})


router.post(`/application-5-about-a12-router`, (req, res) => {
  const about5_A12 = req.session.data['application-5-about-a12']

  if (about5_A12 == 'Agree') {
    res.redirect(`application-5-about-a12-reason`)
  }
  else if (about5_A12 == 'Amended') {
    res.redirect(`application-5-about-a12-score`)
  }
   else {
    res.redirect(`application-5-about`)
  }
})

router.post(`/application-5-award-review-check-router`, (req, res) => {
  const awardReview = req.session.data['application-5-award-review-check']

  if (awardReview == 'No') {
    res.redirect(`application-5-award-review-date-manual`)
  }
   else {
    res.redirect(`application-5-award-review-date-prompt`)
  }
})

router.post(`/record-1-event-history-filter-router`, (req, res) => {
  const eventFilter = req.session.data['record-1-event-history-filter']

  if (eventFilter == '1') {
    res.redirect(`record-1-event-history-inbound-calls`)
  }
   else {
    res.redirect(`record-1-event-history`)
  }
})


router.post(`/application-5-about-a1-ap-justification-routers`, (req, res) => {
  const apJustification = req.session.data['application-5-about-a1-ap-justification']

  if (apJustification == 'Yes') {
    res.redirect(`application-5-about-a1-ap-justification-overwrite`)
  }
   else {
    res.redirect(`application-5-about-a-autofill`)
  }
})

router.post(`/application-1-task-t3-routers`, (req, res) => {
  const t3check = req.session.data['application-1-task-t3']

  if (t3check == 'Request') {
    res.redirect(`application-1-task-t3-action`)
  }
   else {
    res.redirect(`application-5-tasklist`)
  }
})



router.post(`/check-outcome-routers`, (req, res) => {
  const checkOutcome = req.session.data['check-outcome']

  if (checkOutcome == 'Yes') {
    res.redirect(`application-activity-selector`)
  }
   else {
    res.redirect(`application-5-award-review-check`)
  }
})

router.post(`/application-5-letter-review-router`, (req, res) => {
  const letterReview = req.session.data['application-5-letter-review']

  if (letterReview == 'Yes') {
    res.redirect(`entry-home`)
  }
   else {
    res.redirect(`letter-error`)
  }
})

router.post(`/outbound-2-finder-router`, (req, res) => {
  const outboundFinder = req.session.data['outbound-2-finder-name']

  if (outboundFinder == 'No') {
    res.redirect(`outbound-2-finder-fail`)
  }
   else {
    res.redirect(`outbound-2-security-a`)
  }
})

router.post(`/outbound-2-call-prep-router`, (req, res) => {
  const outboundPrep = req.session.data['outbound-2-call-prep']

  if (outboundPrep == 'Yes') {
    res.redirect(`outbound-2-greeting`)
  }
   else {
    res.redirect(`record-1-overview`)
  }
})

router.post(`/application-1-task-t6-router`, (req, res) => {
  const applicationCheckT6 = req.session.data['application-1-task-t6']

  if (applicationCheckT6 == 'Call') {
    res.redirect(`outbound-2-exit-to-call`)
  }
   else {
    res.redirect(`application-5-tasklist`)
  }
})

router.post(`/application-rates-check-router`, (req, res) => {
  const applicationCheckRates = req.session.data['application-rates-check']

  if (applicationCheckRates == 'Call') {
    res.redirect(`outbound-2-exit-to-call`)
  }
  else if (applicationCheckRates == 'Pause') {
    res.redirect(`application-1-exit-early`)
  }
   else {
    res.redirect(`application-rates-actions`)
  }
})

router.post(`/eject-reason-router`, (req, res) => {
  const ejectReason = req.session.data['eject-reason']

  if (ejectReason == 'a') {
    res.redirect(`eject-reason-justification`)
  }
  else if (ejectReason == 'eject-reason-other') {
    res.redirect(`eject-reason-justification`)
  }
  else if (ejectReason == 'extend') {
    res.redirect(`extend-journey`)
  }
   else {
    res.redirect(`eject-reason-justification`)
  }
})

router.post(`/service-app-claim-details-router`, (req, res) => {
  const serviceAppClaimActions = req.session.data['service-app-claim-details']

  if (serviceAppClaimActions == '1') {
    res.redirect(`service-app-status-change`)
  }
  else if (serviceAppClaimActions == '2') {
    res.redirect(`../v13/case-review/event-history.html`)
  }
  else if (serviceAppClaimActions == '3') {
    res.redirect(`/agent-day-0-1-4/application-6-view-evidence`)
  }
   else {
    res.redirect(`eject-overview`)
  }
})

router.post(`/ecp-washup-router`, (req, res) => {
  const ecpWashup = req.session.data['ecp-washup']

  if (ecpWashup == '1') {
    res.redirect(`XXX`)
  }
  else if (ecpWashup == '2') {
    res.redirect(`XXX`)
  }
  else if (ecpWashup == '3') {
    res.redirect(`XXX`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/record-foundation-application-overview-router`, (req, res) => {
  const recordOverviewRouter = req.session.data['applicaiton-actions']

  if (recordOverviewRouter == '1') {
    res.redirect(`XXX`)
  }
  else if (recordOverviewRouter == '2') {
    res.redirect(`an-de-overview`)
  }
  else if (recordOverviewRouter == '3') {
    res.redirect(`XXX`)
  }
   else {
    res.redirect(`XXX`)
  }
})




router.post(`/an-de-doc-check-router`, (req, res) => {
  const anDeDocCheck = req.session.data['an-de-doc-check']

  if (anDeDocCheck == 'YesAdvanced') {
    res.redirect(`an-de-find-docs`)
  }
  else if (anDeDocCheck == 'YesAdvancedAlt1') {
    res.redirect(`an-de-find-docs-alt1`)
  }
  else if (anDeDocCheck == 'YesBasic') {
    res.redirect(`an-de-select-docs`)
  }
  else if (anDeDocCheck == 'No') {
    res.redirect(`an-de-next-steps`)
  }
   else {
    res.redirect(`an-de-find-docs`)
  }
})

router.post(`/an-de-select-docs-router`, (req, res) => {
  const anDeBasicDocSelect = req.session.data['an-de-select-docs']

  if (anDeBasicDocSelect == 'Advanced') {
    res.redirect(`an-de-find-docs`)
  }
   else {
    res.redirect(`an-de-next-steps`)
  }
})



router.post(`/an-de-overview-router`, (req, res) => {
  const recordEscalationCheckToContinue = req.session.data['an-de-overview']

  if (recordEscalationCheckToContinue == 'Yes') {
    res.redirect(`an-de-letter-check`)
  }
  else if (recordEscalationCheckToContinue == 'NoPaper') {
    res.redirect(`an-de-move-paper`)
  }
  else if (recordEscalationCheckToContinue == 'NoTime') {
    res.redirect(`an-de-callback`)
  }
  else if (recordEscalationCheckToContinue == 'MoveOnline') {
    res.redirect(`an-de-move-online`)
  }
   else {
    res.redirect(`XXX`)
  }
})

router.post(`/an-de-letter-check-router`, (req, res) => {
  const anDeLetterCheck = req.session.data['an-de-letter-check']

  if (anDeLetterCheck == 'Yes') {
    res.redirect(`an-de-disagree-reasons`)
  }
  else if (anDeLetterCheck == 'No') {
    res.redirect(`an-de-reissue-letter`)
  }
  else if (anDeLetterCheck == 'NoLetter') {
    res.redirect(`an-de-callback`)
  }
   else {
    res.redirect(`XXX`)
  }
})


// From colin about selecting more than one

router.post(`/an-de-disagree-reasons-router`, (req, res) => {
  const anDEdisagreeReasons = req.session.data['an-de-disagree-reasons']

  if (anDEdisagreeReasons.includes ('Points') && anDEdisagreeReasons.includes ('Dates')  && anDEdisagreeReasons.length === 2 ) {
    console.log("VERY SPECIAL ROUTE");
    res.redirect("an-de-disagree-dates");
  }
  else if (anDEdisagreeReasons.includes ('Points') && anDEdisagreeReasons.length > 1  ) {
    res.redirect("an-de-warmhandover?points-redirect")
  }
  else if (anDEdisagreeReasons == '1') {
    res.redirect(`an-de-disagree-reasons-points`)
  }
  else if (anDEdisagreeReasons == 'Dates') {
    res.redirect(`an-de-disagree-dates`)
  }
  else if (anDEdisagreeReasons == 'Doc') {
    res.redirect(`XXX`)
  }
  else if (anDEdisagreeReasons == 'Points') {
    res.redirect(`an-de-points-reasons-conditional`)
  }
  else if (anDEdisagreeReasons == 'Award') {
    res.redirect(`an-de-warmhandover`)
  }
  else if (anDEdisagreeReasons == 'Payments') {
    res.redirect(`an-de-warmhandover`)
  }
  else if (anDEdisagreeReasons == 'Report') {
    res.redirect(`XXX`)
  }
   else {
    res.redirect(`an-de-warmhandover`)
  }
})

router.post(`/r-address-add-outcomes-router`, (req, res) => {
  const addressOutcomeNextSteps = req.session.data['r-address-add-outcomes']

  if (addressOutcomeNextSteps == 'OutcomeAwardReview') {
    res.redirect(`r-address-add-nextsteps`)
  }
  else if (addressOutcomeNextSteps == 'OutcomeMove') {
    res.redirect(`r-address-add-nextsteps`)
  }
  else if (addressOutcomeNextSteps == 'OutcomeNoChange') {
    res.redirect(`r-address`)
  }
   else {
    res.redirect(`address`)
  }
})


router.post(`/r-bank-details-add-router`, (req, res) => {
  const bankAddCheck = req.session.data['r-bank-details-add']

  if (bankAddCheck == 'amend') {
    res.redirect(`r-bank-details-amend`)
  }
   else {
    res.redirect(`r-bank-details-new`)
  }
})

router.post(`/an-de-reissue-letter-router`, (req, res) => {
  const bankAddCheck = req.session.data['an-de-reissue-letter']

  if (bankAddCheck == 'Yes') {
    res.redirect(`an-de-exit`)
  }
   else {
    res.redirect(`an-de-callback`)
  }
})




module.exports = router
