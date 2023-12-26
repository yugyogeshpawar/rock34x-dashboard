export const paths = {
  index: '/',
  checkout: '/checkout',
  contact: '/contact',
  pricing: '/pricing',
  auth: {
    auth0: {
      callback: '/auth/auth0/callback',
      login: '/auth/auth0/login'
    },
    jwt: {
      login: '/auth/jwt/login',
      register: '/auth/jwt/startup-register'
    },
    firebase: {
      login: '/auth/firebase/login',
      register: '/auth/firebase/register'
    },
    amplify: {
      confirmRegister: '/auth/amplify/confirm-register',
      forgotPassword: '/auth/amplify/forgot-password',
      login: '/auth/amplify/login',
      register: '/auth/amplify/register',
      resetPassword: '/auth/amplify/reset-password'
    }
  },
  authDemo: {
    forgotPassword: {
      classic: '/auth-demo/forgot-password/classic',
      modern: '/auth-demo/forgot-password/modern'
    },
    login: {
      classic: '/auth-demo/login/classic',
      modern: '/auth-demo/login/modern'
    },
    register: {
      classic: '/auth-demo/register/classic',
      modern: '/auth-demo/register/modern'
    },
    resetPassword: {
      classic: '/auth-demo/reset-password/classic',
      modern: '/auth-demo/reset-password/modern'
    },
    verifyCode: {
      classic: '/auth-demo/verify-code/classic',
      modern: '/auth-demo/verify-code/modern'
    }
  },
  deals: {
    index: '/admin/deals',
  },
  dashboard: {
    index: '/dashboard',
    academy: {
      index: '/dashboard/academy',
      courseDetails: '/dashboard/academy/courses/:courseId'
    },
    account: '/dashboard/account',
    portfolio: '/dashboard/portfolio',
    analytics: '/dashboard/analytics',
    deals: '/dashboard/deals',
    contribute: '/dashboard/contribute',
    blank: '/dashboard/blank',
    blog: {
      index: '/dashboard/blog',
      postDetails: '/dashboard/blog/:postId',
      postCreate: '/dashboard/blog/create'
    },
    news:{
      index: '/dashboard/news',
      newsDetails :'/dashboard/news/:newsId',
      newsCreate :'/dashboard/news/create'
    },
    events:{
      index: '/dashboard/events',
      eventCreate: '/dashboard/events/create'
    },
    calendar: '/dashboard/calendar',
    chat: '/dashboard/chat',
    crypto: '/dashboard/crypto',
    customers: {
      index: '/dashboard/customers',
      details: '/dashboard/customers/:customerId',
      edit: '/dashboard/customers/:customerId/edit'
    },
    startups: {
      index: '/admin/startups',
      details: '/admin/startups/:startupsId',
      edit: '/admin/startups/:startupsId/edit'
    },
    investors: {
      index: '/admin/investors',
      details: '/admin/investors/:investorsId',
      edit: '/admin/investors/:investorsId/edit'
    },
    ecommerce: '/dashboard/ecommerce',
    fileManager: '/dashboard/file-manager',
    invoices: {
      index: '/dashboard/invoices',
      details: '/dashboard/invoices/:orderId'
    },
    jobs: {
      index: '/dashboard/jobs',
      create: '/dashboard/jobs/create',
      companies: {
        details: '/dashboard/jobs/companies/:companyId'
      }
    },
    kanban: '/dashboard/kanban',
    logistics: {
      index: '/dashboard/logistics',
      fleet: '/dashboard/logistics/fleet'
    },
    mail: '/dashboard/mail',
    orders: {
      index: '/dashboard/orders',
      details: '/dashboard/orders/:orderId'
    },
    products: {
      index: '/dashboard/products',
      create: '/dashboard/products/create'
    },
    social: {
      index: '/dashboard/social',
      profile: '/dashboard/social/profile',
      feed: '/dashboard/social/feed'
    }
  },
  rock34x: {
    index: '/rock34x',
    academy: {
      index: '/rock34x/academy',
      courseDetails: '/rock34x/academy/courses/:courseId'
    },
    account: '/rock34x/account',
    analytics: '/rock34x/analytics',
    blank: '/rock34x/blank',
    blog: {
      index: '/rock34x/blog',
      postDetails: '/rock34x/blog/:postId',
      postCreate: '/rock34x/blog/create'
    },
    calendar: '/rock34x/calendar',
    chat: '/rock34x/chat',
    crypto: '/rock34x/crypto',
    customers: {
      index: '/rock34x/customers',
      details: '/rock34x/customers/:customerId',
      edit: '/rock34x/customers/:customerId/edit'
    },
    ecommerce: '/rock34x/ecommerce',
    fileManager: '/rock34x/file-manager',
    invoices: {
      index: '/rock34x/invoices',
      details: '/rock34x/invoices/:orderId'
    },
    jobs: {
      index: '/rock34x/jobs',
      create: '/rock34x/jobs/create',
      companies: {
        details: '/rock34x/jobs/companies/:companyId'
      }
    },
    kanban: '/rock34x/kanban',
    logistics: {
      index: '/rock34x/logistics',
      fleet: '/rock34x/logistics/fleet'
    },
    mail: '/rock34x/mail',
    orders: {
      index: '/rock34x/orders',
      details: '/rock34x/orders/:orderId'
    },
    products: {
      index: '/rock34x/products',
      create: '/rock34x/products/create'
    },
    social: {
      index: '/rock34x/social',
      profile: '/rock34x/social/profile',
      feed: '/rock34x/social/feed'
    }
  },
  components: {
    index: '/components',
    dataDisplay: {
      detailLists: '/components/data-display/detail-lists',
      tables: '/components/data-display/tables',
      quickStats: '/components/data-display/quick-stats'
    },
    lists: {
      groupedLists: '/components/lists/grouped-lists',
      gridLists: '/components/lists/grid-lists'
    },
    forms: '/components/forms',
    modals: '/components/modals',
    charts: '/components/charts',
    buttons: '/components/buttons',
    typography: '/components/typography',
    colors: '/components/colors',
    inputs: '/components/inputs'
  },
  docs: {
    analytics: {
      configuration: '/docs/analytics-configuration',
      eventTracking: '/docs/analytics-event-tracking',
      introduction: '/docs/analytics-introduction'
    },
    auth: {
      amplify: '/docs/auth-amplify',
      auth0: '/docs/auth-auth0',
      firebase: '/docs/auth-firebase',
      jwt: '/docs/auth-jwt'
    },
    changelog: '/docs/changelog',
    contact: '/docs/contact',
    dependencies: '/docs/dependencies',
    deployment: '/docs/deployment',
    environmentVariables: '/docs/environment-variables',
    gettingStarted: '/docs/getting-started',
    guards: {
      auth: '/docs/guards-auth',
      guest: '/docs/guards-guest',
      roleBased: '/docs/guards-role-based'
    },
    furtherSupport: '/docs/further-support',
    internationalization: '/docs/internationalization',
    mapbox: '/docs/mapbox',
    redux: '/docs/redux',
    routing: '/docs/routing',
    rtl: '/docs/rtl',
    serverCalls: '/docs/server-calls',
    settings: '/docs/settings',
    theming: '/docs/theming',
    welcome: '/docs/welcome'
  },
  401: '/401',
  404: '/404',
  500: '/500'
};
