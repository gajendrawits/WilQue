// ** Next Imports
import Head from "next/head";
import router, { Router, useRouter } from "next/router";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthentication } from "src/security";
// ** Loader Import
import NProgress from "nprogress";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";

// ** Config Imports
import themeConfig from "src/configs/themeConfig";

// ** Component Imports
import UserLayout from "src/layouts/UserLayout";
import ThemeComponent from "src/@core/theme/ThemeComponent";

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settingsContext";

// ** Utils Imports
import { createEmotionCache } from "src/@core/utils/create-emotion-cache";

// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Global css styles
import "../../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const [getQuestionValue, setQuestionValue] = useState({});
  const clientId =
    "603187839996-vvgv5f0i7pcm5hbtkfhkov64i5unf80f.apps.googleusercontent.com";

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);

  const { authenticated, redirect } = useAuthentication();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && authenticated && !redirect) {
      router.push("/dashboard");
    } else if (!token && redirect) {
      router.push("/");
    }
  }, [redirect]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName}`}</title>
          <meta
            name="description"
            content={`${themeConfig.templateName} – M`}
          />
          <meta name="keywords" content="WilQue" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <QueryClientProvider client={queryClient}>
          <QuestionContext.Provider
            value={{ getQuestionValue, setQuestionValue }}
          >
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      {getLayout(<Component {...pageProps} />)}
                    </ThemeComponent>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </QuestionContext.Provider>
        </QueryClientProvider>
      </CacheProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
