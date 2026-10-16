// ✏️ Edit everything about the wedding here.
// Images live in public/images (palace photo: Mysuru Palace by Ingo Mehling, CC BY-SA 4.0).
const dewas = {
  name: 'God Gift Hotel & Resort',
  address: 'Survey No. 197/3, 192/1, Nousarabad, Dewas, Madhya Pradesh 455001',
  mapQuery: 'God Gift Hotel & Resort, by pass, Noshrabad, Dewas, Madhya Pradesh 455001',
  city: 'Dewas, Madhya Pradesh',
  mapLink: 'https://maps.app.goo.gl/KKUDZuEqiSicBhNs8',
}

export const wedding = {
  groom: 'Akash',
  bride: 'Ankita',
  groomHindi: 'आकाश',
  brideHindi: 'अंकिता',
  // Blessing titles placed before the Hindi names
  groomTitleHindi: 'आयुष्मान',
  brideTitleHindi: 'आयुष्मती',
  hashtag: '#AnkitaWedsAkash',
  // Wedding day, used for the countdown (IST).
  date: '2026-12-12T19:30:00+05:30',
  displayDate: 'Saturday, 12th December 2026',
  city: 'Dewas, Madhya Pradesh',
  families: {
    groom: {
      title: 'Groom’s Family',
      hindi: 'वर पक्ष',
      relation: ['S/o', ['Shri Krishna Das', 'Smt. Rakhi']],
      // Full names for the invitation line in the hero
      parents: 'Shri Krishna Das & Smt. Rakhi',
      grandRelation: ['Grand S/o', ['Shri Gopi Vallabh Ji Zalani', 'Smt. Radhika']],
      address: '71, Karamchari Colony, Dewas, Madhya Pradesh',
    },
    bride: {
      title: 'Bride’s Family',
      hindi: 'वधू पक्ष',
      relation: ['D/o', ['Shri Anup', 'Smt. Rita']],
      // Full names for the invitation line in the hero
      parents: 'Shri Anup & Smt. Rita',
      grandRelation: ['Grand D/o', ['Late Fulchandji Biharilalji Rawat', 'Smt. Vidyadevi']],
      address: 'Narkher, Maharashtra',
    },
  },
  // icon: small round picture on the event card (optional)
  // bgLandscape / bgPortrait: event screen artwork for wide / tall screens (default couple art if omitted)
  // bgPortraitX: horizontal focus of the portrait art; cardSide: 'left' puts the card left of the couple on wide screens
  // start/end: used by "Add to Calendar" (IST)
  events: [
    { name: 'Haldi', hindi: 'हल्दी', icon: '', bgLandscape: '/images/haldi-bg-landscape.jpg', bgPortrait: '/images/haldi-bg-portrait.jpg', bgPortraitX: '50%', cardSide: 'left', date: 'Friday, 11 Dec 2026', time: 'Evening onwards', venue: dewas, dress: 'Indo-Western Glam', start: '2026-12-11T18:00:00+05:30', end: '2026-12-11T23:00:00+05:30' },
    { name: 'Engagement & Sangeet', hindi: 'सगाई एवं संगीत', icon: '/images/events/icon-sangeet.jpg', bgLandscape: '/images/sangeet-bg-landscape.jpg', bgPortrait: '/images/sangeet-bg-portrait.jpg', bgPortraitX: '50%', cardSide: 'left', date: 'Friday, 11 Dec 2026', time: 'Evening onwards', venue: dewas, dress: 'Indo-Western Glam', start: '2026-12-11T18:00:00+05:30', end: '2026-12-11T23:00:00+05:30' },
    { name: 'Wedding Ceremony', hindi: 'शुभ विवाह', icon: '/images/events/icon-wedding.jpg', bgLandscape: '/images/vivah-bg-landscape.jpg', bgPortrait: '/images/vivah-bg-portrait.jpg', bgPortraitX: '50%', cardSide: 'left', date: 'Saturday, 12 Dec 2026', time: '7:30 PM onwards', venue: dewas, dress: 'Traditional Ethnic', start: '2026-12-12T19:30:00+05:30', end: '2026-12-12T23:59:00+05:30' },
    { name: 'Reception', hindi: 'वर-वधू स्वागत समारोह', icon: '/images/events/icon-reception.jpg', bgLandscape: '/images/reception-bg-landscape.jpg', bgPortrait: '/images/reception-bg-portrait.jpg', bgPortraitX: '100%', cardSide: 'left', date: 'Saturday, 12 Dec 2026', time: 'Evening onwards', venue: dewas, dress: 'Festive Formal', start: '2026-12-12T19:00:00+05:30', end: '2026-12-12T23:00:00+05:30' },
  ],
  // Every event is at the same place, so the Venue section shows it once
  venues: [
    { ...dewas, label: 'Haldi · Engagement · Sangeet · Wedding · Reception' },
  ],
  contacts: [
    { name: 'Akash', phone: '+91 90394 71881' },
  ],
  // Where RSVP replies are sent (opens the guest's email app).
  rsvpEmail: 'zalaniaakash@gmail.com',
}
