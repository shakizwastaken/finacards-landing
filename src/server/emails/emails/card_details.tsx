import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { DownloadIcon } from "lucide-react";
import { Img } from "@react-email/img";
import * as React from "react";
import { Body } from "@react-email/body";
import { Font } from "@react-email/font";

export default function CardDetailsEmail({ name }: { name: string }) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                main: ["Poppins", "sans-serif"],
              },
              colors: {
                primary: "#1256a1",
                foreground: "#181818",
                background: "#f6f9fc",
              },
            },
          },
        }}
      >
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTucHtA.woff2",
            format: "woff2",
          }}
          fontWeight={100}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2",
            format: "woff2",
          }}
          fontWeight={200}
          fontStyle="normal"
        />

        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />

        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <Body className="flex h-full items-center justify-center bg-background font-main text-foreground">
          <Container className="flex w-full flex-col items-start justify-center border-2 border-primary bg-white p-8">
            <Img src="/public/assets/logo.svg" />

            <p className="font-semibold">
              Bonjour {name},<br />
              Veuillez trouver ci-joint les document sur les details de cartes
              que vous avez demandé.
            </p>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
