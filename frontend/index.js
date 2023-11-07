function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const navigate = document.createElement('nav');
    links.forEach(link => {
    const aLink = document.createElement('a');
    aLink.href = link.href;
    aLink.title = link.title;
    aLink.textContent = link.textContent;
   //document.body.appendChild(navigate);
    navigate.appendChild(aLink);

    })
    return navigate
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
     const cardDiv = document.createElement('div');
     cardDiv.classList.add('learner-card');
     //cardDiv.textContent = 'WIP';
     const para1 = document.createElement('p');
     para1.textContent = learner.fullName
     const para2 = document.createElement('p');
     para2.textContent = `Learner ID: ${learner.id}`
     const para3 = document.createElement('p');
     para3.textContent = ` Date of Birth: ${learner.dateOfBirth}`;
     const para4 = document.createElement('p');
     const favLang = languages.find(lang => lang.id === learner.favLanguage);
     para4.textContent = `Favorite Language: ${favLang.name}`;
    cardDiv.appendChild(para1)
    cardDiv.appendChild(para2)
    cardDiv.appendChild(para3)
    cardDiv.appendChild(para4)
    cardDiv.addEventListener('click', evt => {
     document.querySelectorAll('.learner-card').forEach(card => {
      card.classList.remove('active')
      })
      cardDiv.classList.add('active')
    } )

     
     return cardDiv;

  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
    const card = buildLearnerCard(learner, languages);
    document.querySelector('section').appendChild(card)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer')
    const div1 = document.createElement('div')
    div1.classList.add('company-info')
    const div2 = document.createElement('div')
    div2.classList.add('social-media')
    const d1p1 = document.createElement('p')
    const d1p2 = document.createElement('p')
    const d1p3 = document.createElement('p')
    const d1p3A = document.createElement('a')
    d1p1.textContent = footerData.companyName
    d1p1.classList.add('company-name')
    d1p2.textContent = footerData.address
    d1p2.classList.add('address')
    d1p3A.href = 'mailto:' + footerData.contactEmail
    d1p3A.textContent = footerData.contactEmail
    d1p3.classList.add('contact-email')
    const d2p1 = document.createElement('a')
    const d2p2 = document.createElement('a')
    const d2p3 = document.createElement('a')
    d2p1.href = footerData.socialMedia.twitter;
    d2p1.textContent = 'Twitter'
    d2p2.href = footerData.socialMedia.facebook;
    d2p2.textContent = 'Facebook'
    d2p3.href = footerData.socialMedia.instagram;
    d2p3.textContent = 'Instagram'
    const div3 = document.createElement('div')
    div3.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2023'
    footer.appendChild(div1)
    footer.appendChild(div2)
    footer.appendChild(div3)
    div1.appendChild(d1p1)
    div1.appendChild(d1p2)
    div1.appendChild(d1p3)
    div2.appendChild(d2p1)
    div2.appendChild(d2p2)
    div2.appendChild(d2p3)
    d1p3.appendChild(d1p3A)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
    

  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
