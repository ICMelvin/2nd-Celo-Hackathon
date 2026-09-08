# Bug Report Template — Track 5 (buy/cPay Feedback)

**Repository:** celo-org/buy-skill
**Date:** YYYY-MM-DD
**Attribution Tag:** celo_3712ca0f1cdc

---

## Title
[Short, specific summary of the bug — e.g., "Quote endpoint returns $0.05 but charges $0.07"]

---

## Severity / Impact

**Severity:** [Low / Medium / High / Critical]

**Impact:**
- **Who is affected:** [e.g., All users attempting to rent GCP VMs via buy]
- **What breaks:** [e.g., Users are overcharged by 40% compared to quoted price]
- **Consequence:** [e.g., Financial loss, blocked workflow, data loss, etc.]

---

## Steps to Reproduce

1. [Exact step 1 — e.g., "Run `npx @celo/buy pay-quote --sku gcp-n1-standard-1 --region us-central1`"]
2. [Exact step 2 — e.g., "Note the quoted price: $0.05"]
3. [Exact step 3 — e.g., "Execute the payment via `npx @celo/buy curl https://usebuy.ai/gcloud/vm/...`"]
4. [Exact step 4 — e.g., "Check the transaction hash on Celo Explorer"]
5. [Exact step 5 — e.g., "Compare actual charged amount to quoted price"]

**Environment:**
- Network: [Celo mainnet / Celo Sepolia]
- CLI version: [e.g., `@celo/buy@0.5.0`]
- Wallet address: [0x... — optional, if relevant]
- Timestamp: [YYYY-MM-DD HH:MM:SS UTC]

---

## Expected Behavior

[What should happen according to documentation or reasonable expectations — e.g., "The quoted price should match the actual amount charged on-chain"]

---

## Actual Behavior

[What actually happened — e.g., "Quote returned $0.05, but the settlement transaction shows $0.07 was deducted"]

---

## Evidence

**Status Codes:**
- [e.g., HTTP 402 response: `{"price": "$0.05", ...}`]
- [e.g., HTTP 200 response after payment: `{"charged": "$0.07", ...}`]

**Error Strings:**
- [e.g., "Error: insufficient_funds" or exact error message from logs]

**Transaction Hash:**
- [e.g., `0x1234...abcd` — verify on Celo Explorer: https://celoscan.io/tx/0x1234...abcd]

**Screenshots / Logs:**
- [Paste relevant log excerpts here — redact any private keys, poll URLs, or Self proofs]
- [e.g., "Console output: Quote: $0.05, Settlement: $0.07"]

**Additional Context:**
- [Any other relevant evidence — e.g., "This happened on 3 consecutive attempts"]

---

## Suggested Fix or Workaround

**If you have a fix:**
- [Describe the fix — e.g., "The quote endpoint should include the facilitator fee in the quoted amount"]

**If you have a workaround:**
- [Describe how users can avoid the bug — e.g., "Manually add 40% to the quoted price before approving payment"]

**If you don't have a fix:**
- [Leave this section blank or note: "No workaround identified"]

---

## Related Documentation

**Relevant docs that contradict reality:**
- [e.g., "Pricing docs state: 'Quote includes all fees' — https://docs.celo.org/..."]

**Related issues (if any):**
- [e.g., "Similar to issue #123 but different root cause"]

---

## Self-Check Before Filing

- [ ] Report is specific and reproducible (not vague "it didn't work")
- [ ] Includes exact URLs, status codes, or error strings
- [ ] No private keys, seed phrases, or Self proofs included
- [ ] No poll URLs (e.g., `https://usebuy.ai/gcloud/vm/<token>`) included
- [ ] Transaction hash is provided and verifiable on-chain
- [ ] Steps are numbered and can be followed by another developer
- [ ] Not a duplicate of another report I've filed
- [ ] Not similar to another report I've filed (self-similarity check)

---

## Notes for Reviewers

[Any additional context that helps the maintainer understand or reproduce the issue]
