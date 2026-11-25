import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL_DOCUMENTS } from "@/data/legalDocs";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Happy Fly Travel & Logistics",
  description:
    "Положение о соблюдении конфиденциальности данных Покупателя и обращение о методах и средствах защиты персональных данных.",
};

export default function PrivacyPage() {
  return <LegalPageLayout doc={LEGAL_DOCUMENTS.privacy} />;
}
