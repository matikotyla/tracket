import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

import { HomeTypes } from "types";

namespace HomeData {
  export const logos: HomeTypes.Logo[] = [
    {
      src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
      alt: "Workcation",
      className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
    },
    {
      src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
      alt: "Mirage",
      className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
    },
    {
      src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
      alt: "StaticKit",
      className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
    },
    {
      src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
      alt: "Transistor",
      className: "col-span-1 flex justify-center md:col-span-3 lg:col-span-1",
    },
    {
      src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
      alt: "Tuple",
      className: "col-span-2 flex justify-center md:col-span-3 lg:col-span-1",
    },
  ];

  export const features: HomeTypes.Feature[] = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: BoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  export const questions: HomeTypes.Question[][] = [
    [
      {
        question: "How do you make holy water?",
        answer:
          "Find what you need with advanced filters, bulk actions, and quick views.",
      },
      {
        question: "What's the best thing about Switzerland?",
        answer:
          "Find what you need with advanced filters, bulk actions, and quick views.",
      },
      {
        question: "What do you call someone with no body and no nose?",
        answer:
          "Find what you need with advanced filters, bulk actions, and quick views.",
      },
      {
        question: "Why do you never see elephants hiding in trees?",
        answer:
          "Find what you need with advanced filters, bulk actions, and quick views.",
      },
    ],
    [
      {
        question: "How do you make holy water?",
        answer:
          "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "What do you call someone with no body and no nose?",
        answer:
          "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "Why do you never see elephants hiding in trees?",
        answer:
          "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ],
  ];
}

export default HomeData;
