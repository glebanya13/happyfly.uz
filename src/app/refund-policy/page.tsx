import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL_DOCUMENTS } from "@/data/legalDocs";

export const metadata: Metadata = {
  title: "Политика возврата и отмены услуг | Happy Fly Travel & Logistics",
  description:
    "Условия, порядок и сроки возврата денежных средств и отмены бронирований туристических и визовых услуг.",
};

export default function RefundPolicyPage() {
  return <LegalPageLayout doc={LEGAL_DOCUMENTS["refund-policy"]} />;
}
