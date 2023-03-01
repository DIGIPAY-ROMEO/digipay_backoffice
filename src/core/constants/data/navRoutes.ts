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
    childRoutes: [
      {
        name: "Users",
        href: "/admin/admin_users/users",
      },
      {
        name: "Roles",
        href: "/admin/admin_users/roles",
      },
    ],
    id: "admin_users",
  },
  {
    name: "Billers",
    href: "/admin/billers",
    hasChildRoute: true,
    id: "billers",
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
    href: "/admin/topups",
    hasChildRoute: false,
    id: "agents",
  },
  {
    name: "Ledgers",
    href: "/admin/ledgers",
    hasChildRoute: false,
    id: "agents",
  },
  {
    name: "Merchants",
    href: "/admin/merchants",
    hasChildRoute: true,
    id: "merchants",
  },
  {
    name: "Plans",
    href: "/admin/plans",
    hasChildRoute: true,
    id: "plans",
  },
  {
    name: "Products",
    href: "/admin/products",
    hasChildRoute: true,
    id: "products",
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
