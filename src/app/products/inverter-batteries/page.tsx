import type { Metadata } from "next";
import { HomePowerCategory } from "@/components/site/HomePowerCategory";
import { getHomePowerGroup } from "@/lib/homePower";
import { pageMetadata } from "@/lib/seo";

const group = getHomePowerGroup("inverter-batteries")!;

export const metadata: Metadata = pageMetadata({
  title: "Inverter Batteries",
  description:
    "Explore VIJETA inverter batteries — Regular, Smart and CitiMax. Tall tubular deep-cycle power from 100 Ah to 400 Ah for Indian outage patterns.",
  path: "/products/inverter-batteries",
});

export default function InverterBatteriesPage() {
  return <HomePowerCategory group={group} />;
}
