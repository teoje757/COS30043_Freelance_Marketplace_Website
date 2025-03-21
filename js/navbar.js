function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar navbar-expand-lg navbar-light fixed-top navbar-custom';

  // Navbar brand
  const brandLink = document.createElement('a');
  brandLink.className = 'navbar-brand';
  brandLink.href = 'index.html';
  const logoImg = document.createElement('img');
  logoImg.src = 'images/logo.png';
  logoImg.alt = 'Freelance Marketplace - Artisan Network Logo';
  brandLink.appendChild(logoImg);
  navbar.appendChild(brandLink);

  // Navbar toggler button
  const togglerButton = document.createElement('button');
  togglerButton.className = 'navbar-toggler';
  togglerButton.type = 'button';
  togglerButton.setAttribute('data-toggle', 'collapse');
  togglerButton.setAttribute('data-target', '#navbarNavDropdown');
  togglerButton.setAttribute('aria-controls', 'navbarNavDropdown');
  togglerButton.setAttribute('aria-expanded', 'false');
  togglerButton.setAttribute('aria-label', 'Toggle navigation');
  togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
  navbar.appendChild(togglerButton);

  // Navbar collapse content
  const collapseContent = document.createElement('div');
  collapseContent.className = 'collapse navbar-collapse';
  collapseContent.id = 'navbarNavDropdown';

  // Navbar links
  const navLinks = document.createElement('ul');
  navLinks.className = 'navbar-nav mr-auto';

  // Home link
  const homeLink = document.createElement('li');
  homeLink.className = 'nav-item';
  const homeNavLink = document.createElement('a');
  homeNavLink.className = 'nav-link';
  homeNavLink.href = 'index.html';
  homeNavLink.textContent = 'Home';
  homeLink.appendChild(homeNavLink);
  navLinks.appendChild(homeLink);

  // Services dropdown
  const servicesDropdown = document.createElement('li');
  servicesDropdown.className = 'nav-item dropdown';
  const servicesLink = document.createElement('a');
  servicesLink.className = 'nav-link dropdown-toggle';
  servicesLink.href = '#';
  servicesLink.setAttribute('role', 'button');
  servicesLink.setAttribute('data-toggle', 'dropdown');
  servicesLink.setAttribute('aria-haspopup', 'true');
  servicesLink.setAttribute('aria-expanded', 'false');
  servicesLink.textContent = 'Services';
  const servicesDropdownMenu = document.createElement('div');
  servicesDropdownMenu.className = 'dropdown-menu';
  servicesDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdownServices');
  
  const services = [
    { name: 'Graphic Design', link: 'graphicdesign.html' },
    { name: 'Writing', link: 'writing.html' },
    { name: 'Photography and Videography', link: 'photography_and_videography.html' }
  ];
  
  services.forEach(service => {
    const serviceLink = document.createElement('a');
    serviceLink.className = 'dropdown-item';
    serviceLink.href = service.link;
    serviceLink.textContent = service.name;
    servicesDropdownMenu.appendChild(serviceLink);
  });

  servicesDropdown.appendChild(servicesLink);
  servicesDropdown.appendChild(servicesDropdownMenu);
  navLinks.appendChild(servicesDropdown);

  // Forms dropdown
  const formsDropdown = document.createElement('li');
  formsDropdown.className = 'nav-item dropdown';
  const formsLink = document.createElement('a');
  formsLink.className = 'nav-link dropdown-toggle';
  formsLink.href = '#';
  formsLink.setAttribute('role', 'button');
  formsLink.setAttribute('data-toggle', 'dropdown');
  formsLink.setAttribute('aria-haspopup', 'true');
  formsLink.setAttribute('aria-expanded', 'false');
  formsLink.textContent = 'Forms';
  const formsDropdownMenu = document.createElement('div');
  formsDropdownMenu.className = 'dropdown-menu';
  formsDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdownForms');

  const forms = [
    { name: 'Project Brief', link: 'project_brief.html' },
    { name: 'Contact', link: 'contact.html' }
  ];

  forms.forEach(form => {
    const formLink = document.createElement('a');
    formLink.className = 'dropdown-item';
    formLink.href = form.link;
    formLink.textContent = form.name;
    formsDropdownMenu.appendChild(formLink);
  });

  formsDropdown.appendChild(formsLink);
  formsDropdown.appendChild(formsDropdownMenu);
  navLinks.appendChild(formsDropdown);

  // Sign Up / Login link
  const signUpLoginLink = document.createElement('li');
  signUpLoginLink.className = 'nav-item';
  const signUpLoginNavLink = document.createElement('a');
  signUpLoginNavLink.className = 'nav-link';
  signUpLoginNavLink.href = 'signup-login.html';
  signUpLoginNavLink.textContent = 'Sign Up / Login';
  signUpLoginLink.appendChild(signUpLoginNavLink);
  navLinks.appendChild(signUpLoginLink);

  collapseContent.appendChild(navLinks);
  navbar.appendChild(collapseContent);

  // Search form
  const searchForm = document.createElement('form');
  searchForm.className = 'form-inline my-2 my-lg-0';
  const searchInput = document.createElement('input');
  searchInput.className = 'form-control mr-sm-2';
  searchInput.type = 'search';
  searchInput.placeholder = 'Search';
  searchInput.setAttribute('aria-label', 'Search');
  const searchButton = document.createElement('button');
  searchButton.className = 'btn btn-outline-success my-2 my-sm-0';
  searchButton.type = 'submit';
  searchButton.textContent = 'Search';
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  navbar.appendChild(searchForm);

  return navbar;
}

document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbarContainer');
  const navbar = createNavbar();
  navbarContainer.appendChild(navbar);
});
