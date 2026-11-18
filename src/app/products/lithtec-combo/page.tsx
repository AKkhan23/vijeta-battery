import type { Metadata } from "next";
import { HomePowerCategory } from "@/components/site/HomePowerCategory";
import { getHomePowerGroup } from "@/lib/homePower";
import { pageMetadata } from "@/lib/seo";

const group = getHomePowerGroup("lithtec-combo")!;

export const metadata: Metadata = pageMetadata({
  title: "LithTec Combo",
  description:
    "Explore the VIJETA LithTec range — LithTec Combo, Lithium Battery, Sine Wave Home UPS and Square Wave Home UPS. Lithium-native backup, matched as one system.",
  path: "/products/lithtec-combo",
});

export default function LithTecComboPage() {
  return <HomePowerCategory group={group} />;
}
