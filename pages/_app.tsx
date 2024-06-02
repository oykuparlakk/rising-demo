import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect } from "react";
import Font from "@/components/common/Font";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!!token && router.pathname !== "/dashboard") {
      router.push("/dashboard");
    } else if (!token && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [router.pathname, Component]);

  return (
    <>
      <Font />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
