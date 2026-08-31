# Thomson Reserve — Research Notes

Compiled 31 Aug 2026 for the lead-capture site build. Save this file alongside the
project code, per the playbook ("Where research docs live").

## Sources checked

1. **No public PropNex microsite found** for Thomson Reserve as at 31 Aug 2026
   (Lucerne Grand had one at `lucernegrand-XXXXXXXX.propnex.net`; a search for a
   Thomson Reserve equivalent turned up nothing — worth re-checking closer to
   preview, since these are often stood up later).
2. **Thomson Reserve Ebook V3 & V4** (PDF, Google Drive, developer-issued PropNex
   agent collateral). Two independent versions, internally consistent with each
   other. This is the primary source for all facts on the site.
3. **Thomson_Reserve_Cheat_Sheet.docx** (Jennifer's own, 6 Aug 2026) — matches the
   ebook on every fact. Used as the secondary/confirming source.
4. **ThonsonReserveCheatSheet_V1.pdf** (Jennifer's own, 7 Aug 2026, PropNex-branded)
   — **NOT used**. It conflicts with sources 2 and 3 on several facts:
   - Says location is "Lentor Central" next to Lentor MRT (the ebook and the docx
     both say Bright Hill Drive / Upper Thomson, District 20)
   - Says 6 blocks of 15 storeys (the other two sources say 2×30-storey + 4×21-storey)
   - Says Expected TOP 31 Dec 2030 (the other two sources say "not yet released")
   - Unit split is 1,064/204 units vs. 1,066/202 in the other two sources
   - This reads like a template left over from a different project that wasn't
     fully updated. **Flagged to Jennifer — recommend she archive or fix this file
     so it doesn't get used or sent to a client by mistake.**
5. **The Edge Singapore** (public news article) — independently corroborates the
   Thomson View → UOL/CapitaLand/SingLand $810M collective sale, confirming that
   figure is public knowledge and safe to publish, not something exclusive to the
   agent-only ebook.
6. **Public competitor "Thomson Reserve" microsites** (thomsonreservescondo.sg,
   newlaunchesreview.com, propertynet.sg, and similar) — these are unofficial
   marketing sites built by other agents/marketers (the same kind of site being
   built here for Jennifer). Used only as a sanity-check signal that the core
   facts (D20, 1,268 units, UOL/Singland/CapitaLand) are already circulating
   publicly — not treated as an authoritative source in their own right.

## Confirmed facts used on the site

District 20; address 1, 3, 5, 7, 9, 11 Bright Hill Drive; 99-year leasehold;
1,268 total units; 2 blocks of 30-storeys + 4 blocks of 21-storeys; 1,014 carpark
lots; 5-hectare site; developer Tamarind Development Pte. Ltd. (JV: UOL Group
Limited, Singapore Land Group Limited, CapitaLand Development Pte. Ltd.); main
contractor Lian Beng Construction; architect P&T Consultants; landscape architect
2nd Edition Pte. Ltd.; interior design Eco Plan Asia Pte. Ltd.; former Thomson
View Condominium site (5 collective sale attempts, sold for S$810M / ~S$1,178 psf
ppr — corroborated externally); 2-minute sheltered walk to Upper Thomson MRT
(TEL) Exit 2; Ai Tong School within 1km (Phase 2C priority); Catholic High,
CHIJ St Nicholas Girls', Marymount Convent, Eunoia JC within 2km, Raffles
Institution nearby; borders Windsor Nature Park & Central Catchment Nature
Reserve; Thomson Plaza directly opposite; Grand Clubhouse / Island Club /
Wellness Club, 80+ facilities.

## Genuinely not yet public — left as honest holding lines

- **Pricing / PSF**: not released by the developer.
- **TOP / VP date**: not released by the developer (the V1 cheat sheet's "31 Dec
  2030" is not corroborated elsewhere and was not used).
- **Exact unit sizes and the full floor-plan set**: gated behind the ebook's
  "private distribution to clients of PropNex agents only" disclaimer.

## Deliberately withheld per Jennifer's standing instruction

Exact unit counts and % mix (1,066 / 202, 84% / 16%) are known (from sources 2
and 3, and already public on several competitor sites) but were **not** put on
the public site — matching her Lucerne Grand precedent of showing unit type
*names* only, gated behind blurred "Draft" cards with a "Contact Agent for
Latest Layout" CTA.

## Flagged for Jennifer's decision — not resolved unilaterally

1. **CEA registration number typo**: `Thomson_Reserve_Cheat_Sheet.docx` shows
   "R033754G" — this looks like a digit transposition of her verified number
   "R073354G" (used on the Lucerne Grand site and given for this project). The
   site uses **R073354G**. Worth fixing the docx so it doesn't go out to a
   client with the wrong number.
2. **Image rights**: The Thomson Reserve Ebook carries an explicit disclaimer —
   *"This eBook is for private distribution to clients of PropNex agents only.
   Reproduction or redistribution without prior consent is strictly
   prohibited."* A public lead-capture website is broader distribution than
   "private distribution to clients," so this site does **not** embed any
   renderings extracted from the ebook. The Gallery section instead uses
   labelled placeholder tiles (facility names only, no imagery). If Jennifer has
   a separate, cleared media/marketing kit from the developer (common for
   appointed agents), swap those images in; otherwise this may need explicit
   consent from the developer's marketing team first.
3. **Lead form reused**: `src/config.ts` points at the same Google Form used for
   Lucerne Grand (her general CRM intake form), per her stated preference to
   keep everything in one pipeline. Flagging in case a Thomson-Reserve-specific
   form is actually wanted this time.
4. **WhatsApp CTA**: no WhatsApp number on file for her, so the gated "Contact
   Agent for Latest Layout" buttons currently open a pre-filled `mailto:` to
   jenniferWong.YL@propnex.com instead of a broken placeholder WhatsApp link.
   Swap in `CONTACT_URL` inside `src/config.ts` once she gives a number.
