import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import { serif, sans, chineseSans, chineseSerif } from "./fonts"; // 引入所有字体
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      {/* 同时应用中英文字体（无衬线和衬线） */}
      <html
        lang="en"
        className={`${serif.className} ${chineseSerif.className}`}
      >
        <body
          className={`mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text] ${sans.className} ${chineseSans.className}`}
        >
          <header className="mb-14 flex flex-row place-content-between">
            <HomeLink />
            <span className="relative top-[4px] italic">
              by{" "}
              <Link href="https://github.com/Ericufo" target="_blank">
                <img
                  alt="Eric Ou"
                  src="https://s21.ax1x.com/2024/10/21/pAaTXgU.jpg"
                  className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                />
              </Link>
            </span>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </AutoRefresh>
  );
}
