// app/page.tsx
import Image from "next/image";
// import Header from './components/header';
import Frame from './components/frame';
// import Footer from './components/footer';
import { ThemeWrapper } from './components/theme-wrapper';

async function getContent() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/2`);
  const content = await response.json();
  return content;
}

const Home = async () => {
  const content = await getContent();

  if(!content) {
    return <div>We are having difficulty</div>
  }

  return (
    <ThemeWrapper content={content} nav={content.acf.root_navigation} socials={content.acf.root_socials} >
      <div className="min-h-screen">
        {/*<Header />*/}
        <Frame content={content.content.rendered} />
        {/*<Footer
          nav={content.acf.root_navigation}
          socials={content.acf.root_socials}
        />*/}
      </div>
    </ThemeWrapper>
  )
}

export default Home;
