function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'text-left text-black footer';

  const container = document.createElement('div');
  container.className = 'container';

  // Apply special class if the page is project_brief.html to position the footer
  if (window.location.pathname.includes('project_brief.html')) {
    container.classList.add('no-margin-left');
  }

  // Grid row
  const row = document.createElement('div');
  row.className = 'row';

  // Logo column
  const logoCol = document.createElement('div');
  logoCol.className = 'col-md-4';
  const logoLink = document.createElement('a');
  logoLink.className = 'navbar-brand';
  logoLink.href = 'index.html';
  const logoImg = document.createElement('img');
  logoImg.src = 'images/logo.png';
  logoImg.alt = 'Freelance Marketplace - Artisan Network Logo';
  logoLink.appendChild(logoImg);
  logoCol.appendChild(logoLink);

  // Contact column
  const contactCol = document.createElement('div');
  contactCol.className = 'col-md-4';
  const contactP = document.createElement('p');
  contactP.innerHTML = `
    Artisan Network Contact:<br>
    +01 234 567 88 <br>
    artisannetwork@gmail.com <br>
    New York, NY 10012, US
  `;
  contactCol.appendChild(contactP);

  // Links column
  const linksCol = document.createElement('div');
  linksCol.className = 'col-md-4';
  const linksList = document.createElement('ul');
  linksList.className = 'list-unstyled';

  const links = [
    { name: 'Home', link: 'index.html' },
    { name: 'Graphic Design', link: 'graphicdesign.html' },
    { name: 'Writing', link: 'writing.html' },
    { name: 'Photography and Videography', link: 'photography_and_videography.html' },
    { name: 'Project Brief', link: 'project_brief.html' },
    { name: 'Contact', link: 'contact.html' },
    { name: 'Sign Up / Login', link: 'signup-login.html' }
  ];

  links.forEach(linkObj => {
    const linkItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = linkObj.link;
    link.textContent = linkObj.name;
    linkItem.appendChild(link);
    linksList.appendChild(linkItem);
  });

  linksCol.appendChild(linksList);

  row.appendChild(logoCol);
  row.appendChild(contactCol);
  row.appendChild(linksCol);
  container.appendChild(row);
  footer.appendChild(container);

  return footer;
}

document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footerContainer');
  const footer = createFooter();
  footerContainer.appendChild(footer);
});
