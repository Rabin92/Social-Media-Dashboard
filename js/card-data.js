const cards = [
  {
    heading: `Page Views`,
    img: `images/icon-facebook.svg`,
    alt: `facebook-icon`,
    followers: `87`,
    icon: `images/icon-up.svg`,
    iconClass: `up-icon`,
    iconAlt: `up-icon`,
    totalFollowers: `3%`,
    spanClass: `card__follower-count--col`,
  },
  {
    heading: `Likes`,
    img: `images/icon-facebook.svg`,
    alt: `facebook-icon`,
    followers: `52`,
    icon: `images/icon-down.svg`,
    iconClass: `down-icon`,
    iconAlt: `down-icon`,
    totalFollowers: `2%`,
    spanClass: `card__follower-count--redCol`,
  },
  {
    heading: `Likes`,
    img: `images/icon-instagram.svg`,
    alt: `instagram-icon`,
    followers: `5462`,
    icon: `images/icon-up.svg`,
    iconClass: `up-icon`,
    iconAlt: `up-icon`,
    totalFollowers: `2257%`,
    spanClass: `card__follower-count--col`,
  },
  {
    heading: `Profile Views`,
    img: `images/icon-instagram.svg`,
    alt: `instagram-icon`,
    followers: `52k`,
    icon: `images/icon-up.svg`,
    iconClass: `up-icon`,
    iconAlt: `up-icon`,
    totalFollowers: `1375%`,
    spanClass: `card__follower-count--col`,
  },
  {
    heading: `Retweets`,
    img: `images/icon-twitter.svg`,
    alt: `twitter-icon`,
    followers: `117`,
    icon: `images/icon-up.svg`,
    iconClass: `up-icon`,
    iconAlt: `up-icon`,
    totalFollowers: `303%`,
    spanClass: `card__follower-count--col`,
  },
  {
    heading: `Likes`,
    img: `images/icon-twitter.svg`,
    alt: `twitter-icon`,
    followers: `507`,
    icon: `images/icon-up.svg`,
    iconClass: `up-icon`,
    iconAlt: `up-icon`,
    totalFollowers: `553%`,
    spanClass: `card__follower-count--col`,
  },
  {
    heading: `Likes`,
    img: `images/icon-youtube.svg`,
    alt: `youtube-icon`,
    followers: `107`,
    icon: `images/icon-down.svg`,
    iconClass: `down-icon`,
    iconAlt: `down-icon`,
    totalFollowers: `19%`,
    spanClass: `card__follower-count--redCol`,
  },
  {
    heading: `Total Views`,
    img: `images/icon-youtube.svg`,
    alt: `youtube-icon`,
    followers: `1407`,
    icon: `images/icon-down.svg`,
    iconClass: `down-icon`,
    iconAlt: `down-icon`,
    totalFollowers: `12%`,
    spanClass: `card__follower-count--redCol`,
  },
];

// Insert data
const sectionCard = document.querySelector('.card-overview');
let cardsData = '';

cards.forEach(card => {
  cardsData += `
    <div class="container dark-mode">
      <div class="card-overview__body">
        <h3>${card.heading}</h3>
        <img src="${card.img}" alt="${card.alt}" />
      </div>

      <div class="card-overview__content">
          <p class="card-overview__number darkmode-textcol">${card.followers}</p>
      
      <div class="card__footer">
          <img class="${card.iconClass}" src="${card.icon}" alt="${card.iconAlt}" />
          <span class="card__follower-count ${card.spanClass}">${card.totalFollowers}</span>
      </div>
      </div>
    </div>
    `;
});

sectionCard.innerHTML = cardsData;
