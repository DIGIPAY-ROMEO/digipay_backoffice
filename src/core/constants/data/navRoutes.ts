const NAV_ROUTES = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    hasChildRoute: false,
    id: "dashboard",
  },
  {
    name: "Admin Users",
    href: "/admin/admin_users",
    hasChildRoute: true,
    id: "admin_users",
    childRoutes: [
      {
        name: "Admin Users",
        href: "/admin/admin_users",
      },
      {
        name: "Roles",
        href: "/admin/admin_users/roles",
      },
    ],
  },
  {
    name: "Billers",
    href: "/admin/billers",
    hasChildRoute: true,
    id: "billers",
    childRoutes: [
      {
        name: "Billers",
        href: "/admin/billers",
      },
      {
        name: "Consumer Accounts",
        href: "/admin/billers/consumer_accounts",
      },
      {
        name: "Bill Statements",
        href: "/admin/billers/bill_statements",
      },
    ],
  },
  {
    name: "Digipay Agent Asms",
    href: "/admin/agent_asms",
    hasChildRoute: false,
    id: "agent_asms",
  },
  {
    name: "Digipay Agents",
    href: "/admin/agents",
    hasChildRoute: false,
    id: "agents",
  },
  {
    name: "Digipay Top-ups",
    href: "/admin/digipay_top-ups",
    hasChildRoute: true,
    id: "topups",
    childRoutes: [
      {
        name: "Digipay Top-ups",
        href: "/admin/digipay_top-ups",
      },
      {
        name: "Thunder Top-ups",
        href: "/admin/digipay_top-ups/thunder_topups",
      },
    ],
  },
  {
    name: "Ledgers",
    href: "/admin/ledgers",
    hasChildRoute: false,
    id: "agents",
  },
  {
    name: "Merchant",
    href: "/admin/merchants",
    hasChildRoute: true,
    id: "merchants",
    childRoutes: [
      {
        name: "Merchants",
        href: "/admin/merchants",
      },
      {
        name: "Branches",
        href: "/admin/merchants/branches",
      },
      {
        name: "Branch Agents",
        href: "/admin/merchants/branch_agents",
      },
      {
        name: "Customers",
        href: "/admin/merchants/customers",
      },
      {
        name: "Customer Infos",
        href: "/admin/merchants/customer_in",
      },
    ],
  },
  {
    name: "Plans",
    href: "/admin/plans",
    hasChildRoute: true,
    id: "plans",
    childRoutes: [
      {
        name: "Plans",
        href: "/admin/plans",
      },
      {
        name: "Subscriptions",
        href: "/admin/plans/subscriptions",
      },
    ],
  },
  {
    name: "Product Operations",
    href: "/admin/products_operations",
    hasChildRoute: true,
    id: "products",
    childRoutes: [
      {
        name: "Product Operations",
        href: "/admin/products_operations",
      },
      {
        name: "Product Categories",
        href: "/admin/products_operations/product_categories",
      },
      {
        name: "Providers",
        href: "/admin/products_operations/providers",
      },
      {
        name: "Provider Products",
        href: "/admin/products_operations/provider_products",
      },
    ],
  },
  {
    name: "SMS",
    href: "/admin/sms",
    hasChildRoute: false,
    id: "sms",
  },
  {
    name: "Transactions",
    href: "/admin/transactions",
    hasChildRoute: true,
    id: "transactions",
    childRoutes: [
      {
        name: "Transactions",
        href: "/admin/transactions",
      },
      {
        name: "Transaction Statuses",
        href: "/admin/transactions/transaction_statuses",
      },
    ],
  },
  {
    name: "Registrants",
    href: "/admin/registrants",
    hasChildRoute: false,
    id: "registrants",
  },
  {
    name: "Announcements",
    href: "/admin/announcements",
    hasChildRoute: false,
    id: "announcements",
  },
  {
    name: "Promo Codes",
    href: "/admin/promo_codes",
    hasChildRoute: false,
    id: "promo_codes",
  },
  {
    name: "Support Tools",
    href: "/admin/support_tools",
    hasChildRoute: true,
    id: "support_tools",
    childRoutes: [
      {
        name: "Support Tools",
        href: "/admin/support_tools",
      },
      {
        name: "Banks",
        href: "/admin/support_tools/banks",
      },
      {
        name: "Change Password Request",
        href: "/admin/support_tools/change_password_requests",
      },
    ],
  },
  {
    name: "Configurations",
    href: "/admin/configurations",
    hasChildRoute: false,
    id: "configurations",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    hasChildRoute: false,
    id: "analytics",
  },
  {
    name: "Plutus Entries",
    href: "/admin/plutus_entries",
    hasChildRoute: false,
    id: "plutus_entries",
  },
];

export default NAV_ROUTES;
