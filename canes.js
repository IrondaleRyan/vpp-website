/* ============================================================================
   canes.js — the ONLY place cane photos are defined.
   Used by cane-gallery.html (grid + carousel) and index.html (preview strip).

   To swap a photo:      change `img`.
   To reorder:           move the object.
   To add a cane:        copy a block, drop the file in images/canes/.
   To remove one:        delete the block.
   Nothing else in the site needs touching. No numbers are shown to visitors,
   so reordering can never make a caption lie.

   fit  — "cover"   fills the frame, crops the edges. For photos already near 3:4.
          "contain" fits the whole photo inside the frame, no crop. The card
                    background (#16181B) is sampled from Ryan's charred board,
                    so the letterboxing is invisible.
   home — true means this cane also shows in the homepage strip. A flag, not an
          index, so reordering this file can never break the homepage.
   NOTE ON CAPTIONS — these are placeholders. They describe only what is visible
   in each photo: handle type, hardware, construction, inlay. Wood species are a
   VISUAL READ, not confirmed — "walnut" is inferred from tone, and every pale
   wood is called "pale" rather than guessed at. Ryan should replace all twelve
   with his own words; he knows the species, the veteran, and the build.

   pos  — object-position. Keeps the cane centred when `cover` crops.
          Measured from the pixels, not eyeballed.
   ==========================================================================*/

const CANES = [
  {
    img:   "images/canes/cane-06.jpg",
    home:  true,
    title: "USMC Derby",
    desc:  "Cast brass derby handle over a pale, straight-grained shaft, with thin dark accent rings at the collar. The Marine Corps Eagle, Globe and Anchor is burned into the wood at hand height.",
    fit: "cover",  pos: "38% 46%",
  },
  {
    img:   "images/canes/cane-11.jpg",
    home:  true,
    title: "Burl and Cross",
    desc:  "Full length. A burl crown, brass collar, a segmented band of pale and dark wood beneath it, and a slim walnut shaft carrying a small inlaid cross.",
    fit: "cover",  pos: "36% 46%",
  },
  {
    img:   "images/canes/cane-10.jpg",
    title: "Burl and Cross, Up Close",
    desc:  "The grip of the same cane: a broad, palm-fitting handle carved from burl — the dark flecks are the burl's own eyes. Below the brass collar, a segmented band of pale wood inlaid with dark rectangles.",
    fit: "contain",  pos: "42% 62%",
  },
  {
    img:   "images/canes/cane-02.jpg",
    title: "Horse Head",
    desc:  "A one-piece wooden derby handle in the same warm hardwood as the shaft, with a cast silver horse's head at the crown. A patterned silver band sits below the grip, then thin accent rings. The maker's roundel is burned into the shaft.",
    fit: "cover",  pos: "37% 45%",
  },
  {
    img:   "images/canes/cane-08.jpg",
    home:  true,
    title: "The Seam",
    desc:  "A laminated shaft — pale hardwood bonded either side of a dark walnut core. Above it, an engraved brass collar. Below it, a stack of contrasting segments: dark blocks split by a fine pale line, a pale ring, then the shaft continues in a third wood.",
    fit: "contain",  pos: "44% 69%",
  },
  {
    img:   "images/canes/cane-12.jpg",
    title: "A Matched Pair",
    desc:  "Two canes built as a set, one pale and one walnut, sharing the same cast brass derby, the same pale collar ring, and the same service seal. Rubber ferrules on both.",
    fit: "cover",  pos: "40% 41%",
  },
  {
    img:   "images/canes/cane-05.jpg",
    title: "Faith and Service",
    desc:  "Two walnut canes with cast brass derby handles and pale collar rings. One carries a cross inlaid into the shaft; the other a service seal above the crossed-swords roundel.",
    fit: "cover",  pos: "37% 39%",
  },
  {
    img:   "images/canes/cane-03.jpg",
    title: "Two Crosses",
    desc:  "Two walnut canes cut with a gentle sculpted waist. Cast derby handles — polished brass on one, antiqued bronze on the other. A plain Latin cross medallion on the left, a Celtic cross on the right. Rubber ferrules on both.",
    fit: "contain",  pos: "39% 42%",
  },
  {
    img:   "images/canes/cane-07.jpg",
    title: "Cross and Wreath",
    desc:  "A walnut shaft that keeps its natural sway, topped with a rounded knob crown rather than a derby. Brass collar, contrasting accent rings, and a brass cross-and-wreath medallion set into the shaft.",
    fit: "cover",  pos: "37% 48%",
  },
  {
    img:   "images/canes/cane-04.jpg",
    title: "Carved Palm Rest",
    desc:  "A rounded palm-rest crown carved from dark walnut, with a pale accent line laminated along its outer edge. Brass collar below, and a small dark roundel set into the flat of the grip.",
    fit: "cover",  pos: "41% 42%",
  },
  {
    img:   "images/canes/cane-09.jpg",
    title: "Inlaid Cross",
    desc:  "A cross inlaid flush into the walnut — wood set into wood, not a medallion. Above it, a band of figured burl framed in pale rings, then a brass collar and a cast brass derby handle.",
    fit: "contain",  pos: "51% 45%",
  },
  {
    img:   "images/canes/cane-01.jpg",
    title: "Collar and Burl",
    desc:  "Detail at the collar. A pale shaft meets a band of figured burl, framed top and bottom by darker rings and seated against an engraved brass ferrule. The Spartan helmet and crossed swords are struck into the brass.",
    fit: "cover",  pos: "54% 38%",
  },
];

/* ---------------------------------------------------------------------------
   Canes used in slots elsewhere on the site. Named, never positional — change
   the filename here and that page follows. Both slots are LANDSCAPE frames
   (blog card = 200px tall, service card = 260px tall), so they're filled with
   the two landscape photos in the set. Those are the same two that need
   `contain` in the 3:4 gallery grid — here they fit natively, no crop at all.
   --------------------------------------------------------------------------*/
const CANE_SLOTS = {
  blogCraftingCanes:  "images/canes/cane-10.jpg",  // blog.html  -> "Crafting Custom Canes"
  servicesCustomCane: "images/canes/cane-09.jpg",  // services.html -> "Free Custom Walking Canes"
};

/* Look up a cane's title/desc/pos by its file, so alt text stays in sync. */
function caneByFile(f) { return CANES.find(c => c.img === f); }

/* ---------------------------------------------------------------------------
   Social links + footer rendering. Defined once, used by every page.
   To add, remove or reorder a network: edit SOCIAL. Nothing else changes.
   A page opts in by having <div class="foot-social" id="social"></div>.
   --------------------------------------------------------------------------*/
const SOCIAL = {
  facebook:  "https://www.facebook.com/VeteransPromiseProject",
  instagram: "https://www.instagram.com/theveteranpromiseproject",
  youtube:   "https://www.youtube.com/@VeteranPromiseProject",
};

const SOCIAL_ICONS = {
  facebook:  '<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>',
  instagram: '<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>',
  youtube:   '<path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>',
};

function renderSocial() {
  const box = document.getElementById('social');
  if (!box) return;
  Object.entries(SOCIAL).forEach(([name, url]) => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', name[0].toUpperCase() + name.slice(1));
    a.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${SOCIAL_ICONS[name]}</svg>`;
    box.appendChild(a);
  });
}
