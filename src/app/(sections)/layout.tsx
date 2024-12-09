import Header2 from "@/components/Header2";
import './globals.css'
import Hero2 from "@/components/Hero2";
import Footer2 from "@/components/Footer2";


export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main>
          <Header2/>
          <Hero2/>
          {children}
          </main>
        <Footer2/>
      </body>
    </html>
  );
}
