# Track 5 Testing Checklist — buy/cPay Feedback Bounty
**Window:** Sept 9 (workshop) → Sept 14, 09:00 GMT (deadline)
**Goal:** File the 5 most valuable, reproducible reports. Quality over quantity — self-similarity is checked across submissions.

Scored categories only (per hackathon rules):
- Reproducible bugs with steps
- Step-count and latency findings
- Where the agent flow breaks down (auth, pricing, payment method)
- Documentation gaps

---

## Day 1 (Sept 9 — Workshop Day): Foundation
- [ ] Complete signup / auth flow — note every step and timestamp
- [ ] Generate API key, confirm it works on a real call
- [ ] Make your **first real payment** end-to-end via x402
- [ ] Log the tx hash immediately (check `tx-log.md`)
- [ ] Run `npx @celo/attribution-tags verifyTx <tx_hash> --network celo` to confirm your tag `celo_3712ca0f1cdc` is embedded
- [ ] Note total step count and elapsed time from signup → first successful payment

**Report candidate:** anything that broke, was unclear, or took longer than expected in this flow.

---

## Day 2: Pricing & Quote Accuracy
- [ ] Request a quote via `buy_pay_quote` for at least 3 different request sizes
- [ ] Compare quoted price to actual amount charged — log any mismatch exactly (numbers, not "it felt off")
- [ ] Check if quote includes all fees (facilitator fee, gas) or hides any
- [ ] Test one edge case: a very small request and a larger one
- [ ] Note quote response latency

**Report candidate:** any quote-vs-charge discrepancy, hidden fee, or slow quote response — these are concrete and easy to prove.

---

## Day 3: Real GCP Compute Rental (mandatory — feedback must be grounded in a real rental)
- [ ] Order a small VM instance through `buy`
- [ ] Time each stage: order → provisioning → ready
- [ ] SSH in and run a simple workload
- [ ] Log exact status codes / errors at each stage, even on success
- [ ] Terminate the VM, confirm cleanup and billing accuracy
- [ ] Record total latency and step count for the full rental lifecycle

**Report candidate:** any step where the flow was slower, unclear, or didn't match expectations — this satisfies the "real rental" requirement directly.

---

## Day 4: Documentation vs Reality
- [ ] Re-read the auth docs, follow them literally, note every place reality diverges
- [ ] Re-read pricing docs against what Day 2 actually showed
- [ ] Re-read payment flow docs against what Day 1/3 actually did
- [ ] Check documented error codes against any errors you actually triggered
- [ ] Check documented rate limits against anything you observed

**Report candidate:** doc gaps are often your highest-value, easiest-to-prove reports — you're just fact-checking against your own logs.

---

## Day 5 (Buffer): Write, Rank, Submit
- [ ] Draft all candidate reports (aim for 6–8 candidates to choose from)
- [ ] Cut anything vague — no "I asked my agent to try it" or "it didn't work" phrasing
- [ ] Confirm each report includes: exact URL, status code or error string, reproduction steps
- [ ] Check your candidates aren't near-duplicates of each other (self-similarity is scored across your own submissions too)
- [ ] Pick your strongest 5
- [ ] File each via the `file-feedback` skill as a public issue on `celo-org/buy-skill` (never `celo-org/cpay`)
- [ ] Never publish: poll URLs, private keys, seed phrases, Self proofs — transaction hashes are fine and useful

---

## Explicitly cut from original checklist (doesn't map to scoring)
Load testing, concurrent payment stress tests, memory usage under extended sessions, multiple wallet provider testing, performance under high concurrency. None of these are in the win condition — skip them unless you finish everything above with real time to spare.
