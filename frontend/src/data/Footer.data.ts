import { FooterTypes } from "types";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon,
} from "assets/icons";

namespace FooterData {
  export const lists: FooterTypes.List[] = [
    {
      title: "Solutions",
      items: [
        { name: "Marketing", to: "/" },
        { name: "Analytics", to: "/" },
        { name: "Commerce", to: "/" },
        { name: "Insights", to: "/" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Pricing", to: "/" },
        { name: "Documentation", to: "/" },
        { name: "Guides", to: "/" },
        { name: "API Status", to: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", to: "/" },
        { name: "Blog", to: "/" },
        { name: "Jobs", to: "/" },
        { name: "Press", to: "/" },
        { name: "Partners", to: "/" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Claim", to: "/" },
        { name: "Privacy", to: "/" },
        { name: "Terms", to: "/" },
      ],
    },
  ];

  export const icons: FooterTypes.Icon[] = [
    {
      name: "Facebook",
      to: "/",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      to: "/",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      to: "/",
      icon: TwitterIcon,
    },
    {
      name: "GitHub",
      to: "/",
      icon: GithubIcon,
    },
    {
      name: "Dribbble",
      to: "/",
      icon: DribbbleIcon,
    },
  ];
}

export default FooterData;
