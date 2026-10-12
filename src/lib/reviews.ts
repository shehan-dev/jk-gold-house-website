/**
 * Customer reviews from the JK Gold House Google Business Profile.
 * Text is quoted verbatim (only emojis removed and spacing/full stops tidied); "…" marks where a
 * longer review was shortened. `highlight` is an exact phrase from that review.
 *
 * Rating summary last checked: October 2026 — update `googleRating` when it changes.
 */
export const googleRating = { score: 4.9, count: 34 };

export type Review = { name: string; rating: number; text: string; highlight?: string };

export const reviews: Review[] = [
  {
    name: "Kaveesha Sithumini",
    rating: 5,
    highlight: "A very pleasant experience",
    text: "Thank you so much for your kind service. I had a very pleasant experience at JK Gold House. The staff were professional, courteous, and attentive throughout my visit. They patiently helped me make a suitable choice. The designs were elegant, and the quality of the jewellery was impressive. Overall, I am very satisfied with the service provided and would confidently highly recommend this!",
  },
  {
    name: "Resha Devendra",
    rating: 5,
    highlight: "It’s beautifully done",
    text: "JK Gold House thank you so much for your kind service and support to make our wedding jewelry - It’s beautifully done. Your service is truly appreciated and we are very thankful for your incredible support throughout the entire process. … Thank you so much JK Gold House for making our day so memorable and we highly recommend you!",
  },
  {
    name: "Shakila Silva",
    rating: 5,
    highlight: "Genuine and timeless gold jewelry",
    text: "An excellent place to buy gold jewelry! The designs are elegant and beautifully crafted, with a great variety to choose from. The quality of the gold is outstanding, and the prices are fair and transparent. The staff are knowledgeable, and very helpful, making the whole experience comfortable. Highly recommended for anyone looking for genuine and timeless gold jewelry around Negombo.",
  },
  {
    name: "Kehan Sandaru",
    rating: 5,
    highlight: "Creative designs and quality work",
    text: "Highly recommending J.K Gold House for your Gold purchases and truly grateful for the creative designs and quality work. Thank you (owner) for coming to my residence and surprising me on my birthday & highly appreciating your hard-work in giving us a quality jewelry!! Excellent service & Truly Amazing",
  },
  {
    name: "Kaushalya Perera",
    rating: 5,
    highlight: "Definitely a trusted place",
    text: "Highly impressed with J. K. Gold House! They offer a beautiful selection of gold jewellery with excellent craftsmanship. The staff was helpful and knowledgeable, making the shopping experience smooth and enjoyable. Definitely a trusted place for quality gold jewellery.",
  },
  {
    name: "Shariya De Silva",
    rating: 5,
    highlight: "Exquisite rings",
    text: "We extend our heartfelt gratitude for crafting the exquisite rings. Your craftsmanship and attention to detail exceeded our expectations. Thank you",
  },
];
