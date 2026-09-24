function addSeoSchema() {
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = canonical ? canonical.href : window.location.href.split('#')[0];
  const title = document.title;
  const description = document.querySelector('meta[name="description"]');
  const siteUrl = 'https://techsprint.dev';
  const pagePath = new URL(url).pathname;
  const isHome = pagePath === '/' || pagePath === '/index.html';
  const isRoadmap = pagePath.includes('/roadmaps/') && !pagePath.endsWith('/roadmaps/');
  const isListing = pagePath.endsWith('/roadmaps/') || pagePath.endsWith('/tutorials/') || pagePath.endsWith('/tech/') || pagePath.endsWith('/career/');
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'TechSprint',
      url: siteUrl,
      description: 'Practical developer roadmaps, tutorials, and career guidance.'
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description: description ? description.content : '',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` }
    }
  ];

  if (isHome) {
    graph.push({
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'TechSprint',
      url: siteUrl,
      description: 'Developer roadmaps, tutorials, and career guidance.',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
  }

  const breadcrumbItems = Array.from(document.querySelectorAll('.breadcrumb a, .breadcrumb > span:last-child'))
    .map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.textContent.trim(),
      ...(item.href ? { item: item.href } : {})
    }));
  if (isHome) breadcrumbItems.push({ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' });
  if (breadcrumbItems.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    });
  }

  if (isListing) {
    const items = Array.from(document.querySelectorAll('.card[href]')).map((card, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: (card.querySelector('h2, h3') || card).textContent.trim(),
      item: new URL(card.getAttribute('href'), url).href
    }));
    if (items.length) graph.push({ '@type': 'ItemList', itemListElement: items });
  }

  if (isRoadmap) {
    graph.push({
      '@type': 'Course',
      name: title.replace(/\s*[—|]\s*TechSprint.*$/, ''),
      description: description ? description.content : '',
      provider: { '@id': `${siteUrl}/#organization` },
      url,
      isAccessibleForFree: true,
      educationalLevel: 'Beginner to advanced'
    });
  } else if (!isHome && !isListing) {
    graph.push({
      '@type': 'Article',
      headline: title.replace(/\s*[—|]\s*TechSprint.*$/, ''),
      description: description ? description.content : '',
      url,
      author: { '@id': `${siteUrl}/#organization` },
      publisher: { '@id': `${siteUrl}/#organization` },
      mainEntityOfPage: { '@id': `${url}#webpage` }
    });
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(script);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSeoSchema);
} else {
  addSeoSchema();
}
