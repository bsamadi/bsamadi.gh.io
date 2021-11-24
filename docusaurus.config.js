module.exports = {

  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
    localeConfigs: {
      'fa': {
        label: "فارسی",
        direction: "rtl"
      },
      'en': {
        label: "English",
        direction: "ltr"
      }
    }
  },
  title: 'برنامه‌نویسی برای ماها',
  tagline: 'خسته نشوید!',
  url: 'https://bsamadi.github.io',
  baseUrl: '/coding/',
  trailingSlash: false,
  organizationName: 'bsamadi', // Usually your GitHub org/user name.
  projectName: 'coding', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks:'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/metaImage.png',
    hideableSidebar: true,
    onBrokenLinks: 'pass',
    //gtag: {
    //  trackingID: '',
    //},

    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      disableSwitch: true,

      // Important to enforce light mode
      respectPrefersColorScheme: false,
    },
    navbar: {

      title: 'هم‌افزایی',
      logo: {
        alt: 'هم‌افزایی',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: "/docs/introduction",
          label: 'نکته‌ها',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'وبلاگ',
          position: 'left'
        },
        {
          to: "contactus",
          label: "تماس با من",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ],
    },
    footer: {
      // style: 'light',
      // logo: {
      //   alt: 'لوگو دیتاگیت',
      //   src: 'img/logoGray.svg',
      //    href: 'https://datagit.ir',
      // },
      copyright: `بهزاد صمدی - هم‌افزایی © 2021-${new Date().getFullYear()}`,
    },

    // CodeBlock Theme,
    // By default, we use Palenight as syntax highlighting theme.
    prism: {
      additionalLanguages: ['r'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'وبلاگ!',
          blogDescription: 'نامه',
          showReadingTime: true,
          blogSidebarTitle: 'تازه‌ها'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    //['@docusaurus/plugin-google-gtag',
    //  {
    //    id: 'gtag'
    //  }
    //],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5
      },
    ],
  ],
  scripts: [
  ],
};
