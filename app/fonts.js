import {
  Montserrat,
  Merriweather,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";

// 英文字体：Montserrat 无衬线
export const sans = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal"],
});

// 英文字体：Merriweather 衬线
export const serif = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// 中文字体：Noto Sans SC (无衬线)
export const chineseSans = Noto_Sans_SC({
  subsets: ["latin", "chinese"], // 使用 'chinese' 子集
  display: "swap",
  weight: ["400", "700"],
  style: ["normal"],
});

// 中文字体：Noto Serif SC (衬线)
export const chineseSerif = Noto_Serif_SC({
  subsets: ["latin", "chinese"], // 使用 'chinese' 子集
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
