import Header from "./.components/header/Header.jsx"

module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/blog",
    entries: {},
  },
  props: {
    header: {
      customComponent: Header,
      logo: {
        imageUrl: 'https://assets-global.website-files.com/6582e53622faa84165a9174f/6582eb16ed0b1cfa07fee730_Den%20AI%20Full%20Logo.svg',
        title: 'The Den AI',
      },
      navLinks: {
        alignment: 'right',
        links: [
          { title: 'Product', url: 'https://www.theden.ai/chatden' },
          {
            title: 'Solutions',
            subtitle: 'The ultimate demo platform for all your GTM needs',
            sublinks: [
              {
                title: 'Customer Support',
                url: 'https://sharefable.com/solutions/marketing'
              },
              {
                title: 'Lead Generation',
                url: 'https://sharefable.com/solutions/sales'
              },
              {
                title: 'e-Commerce',
                url: 'https://sharefable.com/solutions/presales'
              },
              {
                title: 'Internal Wiki',
                url: 'https://sharefable.com/solutions/partnerships'
              },
              {
                title: 'HR Assistant',
                url: 'https://sharefable.com/solutions/partnerships'
              },
              {
                title: 'Academic Research',
                url: 'https://sharefable.com/solutions/partnerships'
              },
            ]
          },
          { title: 'Pricing', url: 'https://www.theden.ai/pricing' },
          { title: 'Blog', url: 'https://www.theden.ai/blog' },
        ]
      },
      cta: {
        title: 'Hello world',
        link: '#somewhere'
      },
      ctas: [
        {
          type: 'secondary',
          title: 'Start 14 days free trial',
          url: 'https://app.sharefable.com/login',
        },
        {
          type: 'primary',
          title: 'Get a demo',
          url: 'https://sharefable.com/get-a-demo',
        }
      ]
    },
    sidepanel: {
      showSidePanel: false
    },
    content: {},
    footer: {
      logo: 'https://sharefable.com/fable_footer-logo.svg',
      copyright: 'Fable © 2024',
      links: [
        {
          heading: 'Solutions',
          links: [
            { title: 'Marketing', url: 'https://sharefable.com/solutions/marketing' },
            { title: 'Sales', url: 'https://sharefable.com/solutions/sales' },
            { title: 'Presales', url: 'https://sharefable.com/solutions/presales' },
            { title: 'Partnerships', url: 'https://sharefable.com/solutions/partnerships' },
          ]
        },
        {
          heading: 'Resources',
          links: [
            { title: 'Fable Champs', url: 'https://sharefable.com/growth-stories' },
            { title: 'Fable Untold', url: 'https://sharefable.com/podcast/mastering-b2b-demand-generation' },
            { title: 'E-books', url: 'https://sharefable.com/ebooks' },
            { title: 'Fable blog', url: 'https://sharefable.com/blog' },
            { title: 'Privacy Policy', url: 'https://sharefable.com/privacy-policy' },
          ]
        },
        {
          heading: 'Company',
          links: [
            { title: 'LinkedIn', url: 'https://www.linkedin.com/company/sharefable/' },
            { title: 'Twitter', url: 'https://twitter.com/sharefable' },
          ]
        },
        {
          heading: 'Competitors',
          links: [
            { title: 'Fable vs Navattic', url: 'https://sharefable.com/comparison/fable-vs-navattic' },
            { title: 'Fable vs Demostack', url: 'https://sharefable.com/comparison/fable-vs-demostack' },
            { title: 'Fable vs Reprise', url: 'https://sharefable.com/comparison/fable-vs-reprise' },
            { title: 'Fable vs Walnut', url: 'https://sharefable.com/comparison/fable-vs-walnut' },
            { title: 'Fable vs Storylane', url: 'https://sharefable.com/comparison/fable-vs-storylane' },
            { title: 'Fable vs Testbox', url: 'https://sharefable.com/comparison/fable-vs-testbox' },
          ]
        },
      ]
    },
  },
  theme: {
    colors: {
      primary: "#16023e",
      textPrimary: "#ffffff",
      textSecondary: "#fff",
      textTertiary: "#713aff",
      backgroundPrimary: "#fff",
      backgroundSecondary: "#16023e",
      accent: "#ff5cc5",
      border: "#d1d5db",
    },
    typography: {
      fontSize: 16,
      fontFamily: "IBM Plex Sans",
      lineHeight: 1.5,
      h1: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '3.62rem',
        fontWeight: 700,
        lineHeight: '4.25rem'
      },
      h2: {
        margin: '0 0 2rem 0',
        padding: 0,
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: '2.25rem'
      },
      h3: {
        margin: '2rem 0 2rem 0',
        padding: 0,
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: '1.625rem'
      },
      h4: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      h5: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      h6: {
        margin: '0 0 1.5rem 0',
        padding: 0,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1.375rem'
      },
      p: {
        margin: '1.5rem 0 1.5rem 0',
        padding: 0,
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: '1.625rem'
      }
    },
  }
}
