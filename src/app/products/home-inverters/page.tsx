import type { Metadata } from "next";
import { HomePowerCategory } from "@/components/site/HomePowerCategory";
import { getHomePowerGroup } from "@/lib/homePower";
import { pageMetadata } from "@/lib/seo";

const group = getHomePowerGroup("home-inverters")!;

export const metadata: Metadata = pageMetadata({
  title: "Home Inverters",
  description:
    "Explore VIJETA home inverters — Sino, Electro, Omega, Sigma, SinoSpark and Wattrix. Pure sine and square wave backup from 700 VA to 15,000 VA.",
  path: "/products/home-inverters",
});

export default function HomeInvertersPage() {
  return <HomePowerCategory group={group} />;
}
