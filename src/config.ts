// Site-wide configuration. Only file besides content.ts you should need to touch.

// Reusing Jennifer's existing CRM lead-intake Google Form (same one wired into the
// Lucerne Grand site) so every project's leads land in one pipeline.
// PLACEHOLDER: confirm this is still the right form before going live — if a
// Thomson-Reserve-specific form is preferred instead, swap the URL below.
export const LEAD_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc2tfP6H7Kvp-M9cnOS4-vnOlCbbZ8lpe2iUDSLwP2r_4x3fQ/viewform'

// WhatsApp deep link for the "Contact Agent for Latest Layout" CTAs on gated
// unit-mix cards. Not wired in yet — genuinely unknown, and a placeholder
// number would be a broken/dead link for a real visitor (fails the launch
// safety check). Falls back to a working mailto: below until Jennifer
// supplies her WhatsApp number, then swap CONTACT_URL to this instead.
export const WHATSAPP_URL_PLACEHOLDER_NOT_WIRED =
  'https://wa.me/65XXXXXXXX?text=Hi%20Jennifer%2C%20I%27m%20interested%20in%20the%20latest%20Thomson%20Reserve%20unit%20layouts.'

export const CONTACT_URL =
  'mailto:jenniferWong.YL@propnex.com?subject=Thomson%20Reserve%20-%20Latest%20Unit%20Layouts&body=Hi%20Jennifer%2C%20I%27m%20interested%20in%20the%20latest%20Thomson%20Reserve%20unit%20layouts.'
