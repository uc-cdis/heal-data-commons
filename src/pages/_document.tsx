import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

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
        <Head />
        <body className="flex flex-col min-h-screen">
          <main id="main-content" className="flex-grow">
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    );
  }
}

export default Gen3Document;
