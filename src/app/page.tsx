import Image from "next/image";
import Header from './components/header';
import Frame from './components/frame';
import Footer from './components/footer';
import RandomTheme from './components/random-bg';

async function getContent() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/2`);
  const content = await response.json();
  return content;
}

const Home = async () => {

  const beegee = RandomTheme();
  const content = await getContent();

  if(!content) {
    return <div>We are having difficulty</div>
  }

  return (
      <div className="min-h-screen bg-[#E3E6F2]">

        <Header
          border={beegee.border}
         />

        <Frame
          content={content.content.rendered}
         />

        <Footer
          nav={content.acf.root_navigation}
          socials={content.acf.root_socials}
          bg={beegee.bg}
         />

        <Image
          aria-hidden
          src={beegee.file}
          alt="stone"
          width={1800}
          height={1200}
          className="
            absolute
            top-[0]
            left-[0]
            z-[0]
            w-[100%]
            h-[100%]
            object-cover
          "
         />

      </div>
  )
}

export default Home;

