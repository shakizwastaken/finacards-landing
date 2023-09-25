import { type AppType } from "next/app";
import { ReactLenis } from "@studio-freight/react-lenis";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ReactLenis root>
        <Toaster />
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
};

export default api.withTRPC(MyApp);
