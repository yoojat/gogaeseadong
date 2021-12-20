import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(
//               <>
//                 <GlobalStyles />
//                 <App {...props} />
//               </>
//             ),
//         });

//       const initialProps = await Document.getInitialProps(ctx);

//       return {
//         ...initialProps,
//         styles: (
//           <Html>
//             <Head>
//               {initialProps.styles}
//               {sheet.getStyleElement()}
//             </Head>
//             <body>
//               <Main />
//               <NextScript />
//             </body>
//           </Html>
//         ),
//       };
//     } catch (error) {
//       throw error;
//     } finally {
//       sheet.seal();
//     }
//   }
// }

export default MyDocument;
