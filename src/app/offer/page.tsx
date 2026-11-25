import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL_DOCUMENTS } from "@/data/legalDocs";

export const metadata: Metadata = {
  title: "Публичная оферта | Happy Fly Travel & Logistics",
  description:
    "Договор публичной оферты на оказание туристических, круизных, визовых и трансферных услуг ООО «HAPPY FLY TRAVEL & LOGISTICS».",
};

export default function OfferPage() {
  return <LegalPageLayout doc={LEGAL_DOCUMENTS.offer} />;
}
