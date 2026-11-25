import { ImageResponse } from "next/og";
import PortfolioSocialImage from "@/components/PortfolioSocialImage";

export const alt =
  "Mohit Kumar Singh — Software Engineering, Backend Development and AI Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<PortfolioSocialImage />, {
    ...size,
  });
}