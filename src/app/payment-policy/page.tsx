import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL_DOCUMENTS } from "@/data/legalDocs";

export const metadata: Metadata = {
  title: "Платежная политика и безопасность сделки | Happy Fly Travel & Logistics",
  description:
    "Описание процедур оплаты банковскими картами UZCARD, HUMO, Visa, Mastercard, UnionPay, технология 3D-Secure и правила безопасности.",
};

export default function PaymentPolicyPage() {
  return <LegalPageLayout doc={LEGAL_DOCUMENTS["payment-policy"]} />;
}
