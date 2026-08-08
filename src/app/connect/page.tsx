import { Metadata } from "next";
import { ConnectContent } from "./ConnectContent";

export const metadata: Metadata = {
  title: "AEXYL | Connect",
  description: "Connect with AEXYL — websites, AI systems, automation and growth infrastructure for modern businesses.",
};

export default function ConnectPage() {
  return <ConnectContent />;
}
