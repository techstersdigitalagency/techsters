// All editable site content lives here.
export const WHATSAPP = '234XXXXXXXXXX' // replace with your number, country code first, no +
export const EMAIL = 'hello@techsters.com.ng'

export const NAV = [['home','Home'],['about','About'],['services','Services'],['work','Portfolio'],['team','Team'],['pricing','Pricing'],['book','Contact']]

export const SERVICES = [
  { t: 'Web design & development', c: ['#7c3cff','#3d7bff'], p: 'Business sites, online stores and web apps that load fast and work on every phone.', tags: ['WordPress','E-commerce','Custom builds'] },
  { t: 'Graphic design', c: ['#ff2e63','#ff7a59'], p: 'Logos, flyers, menus and social visuals with one consistent look.', tags: ['Logos','Brand kits','Print'] },
  { t: 'Digital marketing', c: ['#0aa77a','#3d7bff'], p: 'Content, ads and social media management that put you in front of buyers.', tags: ['Social media','Ads','SEO'] },
  { t: 'Digital skills training', c: ['#c2307f','#7c3cff'], p: 'Practical courses for individuals and teams, taught by people who do the work.', tags: ['Design','Marketing','Web'] },
]

const I = (c) => <svg viewBox="0 0 24 24">{c}</svg>
export const OFFERS = [
  { t: 'Business websites', p: 'Clean, fast sites that explain what you do and make it easy to contact you.', i: I(<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></>) },
  { t: 'Online stores', p: 'Shops with product pages, payments and order flow set up properly.', i: I(<><path d="M6 6h15l-2 9H8zM6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></>) },
  { t: 'Logo & brand identity', p: 'A mark, colours and type system you can use everywhere.', i: I(<><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></>) },
  { t: 'Social media growth', p: 'Planned content and community management that builds a following.', i: I(<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>) },
  { t: 'SEO & ads', p: 'Be found on Google and run paid campaigns you can measure.', i: I(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></>) },
  { t: 'Training & mentorship', p: 'Hands-on classes so you or your staff can do it yourselves.', i: I(<><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></>) },
]

export const STEPS = [
  ['Discover','We learn your business, audience and goals before touching a design.'],
  ['Design','You see the look and layout early and shape it with us.'],
  ['Build','We develop, test and polish every page and detail.'],
  ['Launch & grow','We go live, then support you with marketing and training.'],
]

// Add  img: "url"  to a project to show a real screenshot instead of the gradient.
export const PROJECTS = [
  { n: 'Fourwall Models Awards', k: 'Website', t: 'web', m: 'Fw', a: '#7c3cff', b: '#ff2e63' },
  { n: 'Tobrem', k: 'Branding & website', t: 'brand web', m: 'Tb', a: '#ff2e63', b: '#ff7a59' },
  { n: 'Model booking app', k: 'Mobile app', t: 'app', m: 'PM', a: '#3d7bff', b: '#7c3cff' },
  { n: 'Empress Cakes', k: 'Branding', t: 'brand', m: 'Ec', a: '#c2307f', b: '#2a1260' },
  { n: 'Sweet Bakes', k: 'Logo & flyers', t: 'brand', m: 'Sb', a: '#0aa77a', b: '#3d7bff' },
  { n: "Sam's Fries", k: 'Menu & promo design', t: 'web brand', m: 'Sf', a: '#ff7a59', b: '#7c3cff' },
]
export const FILTERS = [['all','All'],['web','Websites'],['brand','Branding'],['app','Apps']]

// Placeholder numbers: replace with your real figures.
export const STATS = [[100,'Projects delivered'],[60,'Happy clients'],[500,'People trained'],[5,'Years of experience']]
export const CLIENTS = ['Fourwall Models','Tobrem','Empress Cakes','Sweet Bakes',"Sam's Fries",'Jolie','Bans Cleaning','Retro']

// Replace names/roles/bios. Add  img: 'url'  for a real photo.
export const TEAM = [
  { n: 'Full Name', r: 'Founder & Creative Director', b: 'Leads the studio and sets the creative direction for every project.', a: '#7c3cff', c: '#ff2e63' },
  { n: 'Full Name', r: 'Lead Web Developer', b: 'Builds fast, secure websites and web apps that scale with your business.', a: '#3d7bff', c: '#2dffb3' },
  { n: 'Full Name', r: 'Brand & Graphic Designer', b: 'Turns ideas into logos, identities and visuals people remember.', a: '#ff2e63', c: '#ff7a59' },
  { n: 'Full Name', r: 'Marketing Strategist', b: 'Plans campaigns and content that grow your audience and your sales.', a: '#0aa77a', c: '#7c3cff' },
]

// Placeholder prices: edit freely. Plan = [name, price, suffix, note, features[]]; the middle plan is highlighted.
export const PRICING = {
  web: { label: 'Websites', plans: [
    ['Starter','₦150,000','one-time','5-page business website',['Mobile-ready design','Contact form and WhatsApp button','Basic SEO setup','1 round of revisions']],
    ['Business','₦350,000','one-time','Up to 10 pages or a small store',['Everything in Starter','Blog or product pages','Speed and security setup','3 rounds of revisions','1 month of support']],
    ['Premium','Custom','quote','Large sites, stores and web apps',['Custom design and features','Payments and integrations','Training for your team','Priority support']] ] },
  brand: { label: 'Branding', plans: [
    ['Logo','₦50,000','one-time','A clean logo for a new business',['3 concepts','Colour palette','Files for print and web']],
    ['Brand kit','₦120,000','one-time','Full visual identity',['Logo and variations','Brand colours and type','Social media templates','Brand guide PDF']],
    ['Full identity','Custom','quote','Identity plus packaging and print',['Everything in Brand kit','Packaging and print design','Menus, flyers and stationery','Rollout support']] ] },
  social: { label: 'Social media', plans: [
    ['Starter','₦80,000','/month','Keep your pages active',['12 designed posts','Captions and hashtags','Monthly report']],
    ['Growth','₦180,000','/month','Grow your audience',['20 posts and reels','Community management','Ad campaign setup','Weekly report']],
    ['Scale','Custom','quote','Full marketing support',['Content and paid ads','Strategy sessions','Dedicated manager','Priority support']] ] },
}

// Sample quotes: replace with real reviews.
export const QUOTES = [
  ['Our new website made us look like the serious business we always were. Enquiries picked up within weeks.','Founder, Brand name'],
  ['They understood our brand quickly and delivered a logo and visuals we use everywhere.','Owner, Brand name'],
  ['The training was practical. My team now manages our social pages without outside help.','Manager, Brand name'],
]

export const FAQS = [
  ['How long does a website take?','Most business websites take two to four weeks. It depends on the number of pages and how quickly we receive your text and images.'],
  ['Can I update the website myself?',"Yes. We build on WordPress and show you how to edit text, images and products, so you don't wait on us for small changes."],
  ['Do you work with businesses outside Nigeria?','Yes. We work remotely with clients anywhere through calls, chat and shared project boards.'],
  ['What do your training classes cover?','Graphic design, digital marketing and web basics. Classes are hands-on, so you finish with real work for your portfolio.'],
  ['How do I start?',"Book a free consultation below. Tell us about your business and we'll recommend the right next step."],
]
