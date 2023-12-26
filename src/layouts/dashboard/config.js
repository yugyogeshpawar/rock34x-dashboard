import { Chip, SvgIcon } from "@mui/material";
import AlignLeft02Icon from "../../icons/untitled-ui/duocolor/align-left-02";
import BarChartSquare02Icon from "../../icons/untitled-ui/duocolor/bar-chart-square-02";
import Building04Icon from "../../icons/untitled-ui/duocolor/building-04";
import CalendarIcon from "../../icons/untitled-ui/duocolor/calendar";
import CheckDone01Icon from "../../icons/untitled-ui/duocolor/check-done-01";
import CreditCard01Icon from "../../icons/untitled-ui/duocolor/credit-card-01";
import CurrencyBitcoinCircleIcon from "../../icons/untitled-ui/duocolor/currency-bitcoin-circle";
import File01Icon from "../../icons/untitled-ui/duocolor/file-01";
import GraduationHat01Icon from "../../icons/untitled-ui/duocolor/graduation-hat-01";
import HomeSmileIcon from "../../icons/untitled-ui/duocolor/home-smile";
import LayoutAlt02Icon from "../../icons/untitled-ui/duocolor/layout-alt-02";
import LineChartUp04Icon from "../../icons/untitled-ui/duocolor/line-chart-up-04";
import Lock01Icon from "../../icons/untitled-ui/duocolor/lock-01";
import LogOut01Icon from "../../icons/untitled-ui/duocolor/log-out-01";
import Mail03Icon from "../../icons/untitled-ui/duocolor/mail-03";
import Mail04Icon from "../../icons/untitled-ui/duocolor/mail-04";
import MessageChatSquareIcon from "../../icons/untitled-ui/duocolor/message-chat-square";
import ReceiptCheckIcon from "../../icons/untitled-ui/duocolor/receipt-check";
import Share07Icon from "../../icons/untitled-ui/duocolor/share-07";
import ShoppingBag03Icon from "../../icons/untitled-ui/duocolor/shopping-bag-03";
import ShoppingCart01Icon from "../../icons/untitled-ui/duocolor/shopping-cart-01";
import Truck01Icon from "../../icons/untitled-ui/duocolor/truck-01";
import Upload04Icon from "../../icons/untitled-ui/duocolor/upload-04";
import Users03Icon from "../../icons/untitled-ui/duocolor/users-03";
import XSquareIcon from "../../icons/untitled-ui/duocolor/x-square";
import { tokens } from "../../locales/tokens";
import { paths } from "../../paths";

export const getSections = (t) => [
  {
    items: [
      {
        title: t(tokens.nav.overview),
        path: paths.dashboard.index,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.deals),
        path: paths.dashboard.deals,
        icon: (
          <SvgIcon fontSize="small">
            <BarChartSquare02Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.portfolio),
        path: paths.dashboard.portfolio,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.cryptonews),
        path: paths.dashboard.cryptonews,
        icon: (
          <SvgIcon fontSize="small">
            <ReceiptCheckIcon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.kanban),
        path: paths.dashboard.kanban,
        icon: (
          <SvgIcon fontSize="small">
            <ReceiptCheckIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  // {
  //   subheader: t(tokens.nav.admin),
  //   items: [
  //     {
  //       title: t(tokens.nav.adminDashboard),
  //       path: paths.dashboard.crypto,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <CurrencyBitcoinCircleIcon />
  //         </SvgIcon>
  //       ),
  //       label: <Chip color="primary" label="New" size="small" />,
  //     },
  //     {
  //       title: t(tokens.nav.startups),
  //       path: paths.dashboard.startups.index,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <Users03Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: t(tokens.nav.list),
  //           path: paths.dashboard.startups.index,
  //         },
  //         {
  //           title: t(tokens.nav.details),
  //           path: paths.dashboard.startups.details,
  //         },
  //         {
  //           title: t(tokens.nav.edit),
  //           path: paths.dashboard.startups.edit,
  //         },
  //       ],
  //     },
  //     {
  //       title: t(tokens.nav.investors),
  //       path: paths.dashboard.investors.index,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <Users03Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: t(tokens.nav.list),
  //           path: paths.dashboard.investors.index,
  //         },
  //         {
  //           title: t(tokens.nav.details),
  //           path: paths.dashboard.investors.details,
  //         },
  //         {
  //           title: t(tokens.nav.edit),
  //           path: paths.dashboard.investors.edit,
  //         },
  //       ],
  //     },

  //     {
  //       title: t(tokens.nav.deals),
  //       path: paths.deals.index,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <Users03Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: t(tokens.nav.all),
  //           path: paths.deals.index,
  //         }
  //       ],
  //     },

  //     {
  //       title: t(tokens.nav.productList),
  //       path: paths.dashboard.products.index,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <ShoppingBag03Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: t(tokens.nav.list),
  //           path: paths.dashboard.products.index,
  //         },
  //         {
  //           title: t(tokens.nav.create),
  //           path: paths.dashboard.products.create,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    subheader: t(tokens.nav.pages),
    items: [
      {
        title: t(tokens.nav.account),
        path:  paths.dashboard.account,
        icon: (
          <SvgIcon fontSize="small">
            <Users03Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.auth),
        icon: (
          <SvgIcon fontSize="small">
            <Lock01Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.login),
            items: [
              {
                title: "Classic",
                path: paths.authDemo.login.classic,
              },
              {
                title: "Modern",
                path: paths.authDemo.login.modern,
              },
            ],
          },
          {
            title: t(tokens.nav.register),
            items: [
              {
                title: "Classic",
                path: paths.authDemo.register.classic,
              },
              {
                title: "Modern",
                path: paths.authDemo.register.modern,
              },
            ],
          },
          {
            title: t(tokens.nav.forgotPassword),
            items: [
              {
                title: "Classic",
                path: paths.authDemo.forgotPassword.classic,
              },
              {
                title: "Modern",
                path: paths.authDemo.forgotPassword.modern,
              },
            ],
          },
          {
            title: t(tokens.nav.resetPassword),
            items: [
              {
                title: "Classic",
                path: paths.authDemo.resetPassword.classic,
              },
              {
                title: "Modern",
                path: paths.authDemo.resetPassword.modern,
              },
            ],
          },
          {
            title: t(tokens.nav.verifyCode),
            items: [
              {
                title: "Classic",
                path: paths.authDemo.verifyCode.classic,
              },
              {
                title: "Modern",
                path: paths.authDemo.verifyCode.modern,
              },
            ],
          },
        ],
      },
      {
        title: t(tokens.nav.pricing),
        path: paths.pricing,
        icon: (
          <SvgIcon fontSize="small">
            <CreditCard01Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.checkout),
        path: paths.checkout,
        icon: (
          <SvgIcon fontSize="small">
            <LogOut01Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.contact),
        path: paths.contact,
        icon: (
          <SvgIcon fontSize="small">
            <Mail04Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.error),
        icon: (
          <SvgIcon fontSize="small">
            <XSquareIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: "401",
            path: paths["401"],
          },
          {
            title: "404",
            path: paths["404"],
          },
          {
            title: "500",
            path: paths["500"],
          },
        ],
      },
    ],
  },
  // {
  //   subheader: "Misc",
  //   items: [
  //     {
  //       title: "Level 0",
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <AlignLeft02Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: "Level 1a",
  //           items: [
  //             {
  //               title: "Level 2a",
  //               items: [
  //                 {
  //                   title: "Level 3a",
  //                 },
  //                 {
  //                   title: "Level 3b",
  //                   disabled: true,
  //                 },
  //               ],
  //             },
  //             {
  //               title: "Level 2b",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Level 1b",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Disabled",
  //       disabled: true,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <XSquareIcon />
  //         </SvgIcon>
  //       ),
  //     },
  //     {
  //       title: "Label",
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       ),
  //       label: <Chip color="primary" label="New" size="small" />,
  //     },
  //     {
  //       title: "Blank",
  //       path: paths.dashboard.blank,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       ),
  //     },
  //     {
  //       title: "External Link",
  //       path: "https://rock34x.io",
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       ),
  //     },
  //   ],
  // },
];
