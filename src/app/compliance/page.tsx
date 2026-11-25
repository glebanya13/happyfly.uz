import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL_DOCUMENTS } from "@/data/legalDocs";

export const metadata: Metadata = {
  title: "Политика соответствия законодательству РУз | Happy Fly Travel & Logistics",
  description:
    "Политика соответствия действующему законодательству Республики Узбекистан, контроля получения заказов и ограничения рисков мошенничества.",
};

export default function CompliancePage() {
  return <LegalPageLayout doc={LEGAL_DOCUMENTS.compliance} />;
}
