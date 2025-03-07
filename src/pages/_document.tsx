import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ColorSchemeScript } from '@mantine/core';
import HealHeader from '@/lib/HealNav/HealHeader';
import HealFooter from '@/lib/HealNav/HealFooter';

class Gen3Document extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ColorSchemeScript defaultColorScheme="auto" />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <HealHeader />
          <main id="main-content">
            <Main />
            <NextScript />
          </main>
          <HealFooter />
        </body>
      </Html>
    );
  }
}

export default Gen3Document;
