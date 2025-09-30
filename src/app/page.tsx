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
    return <div>Not quite yet</div>
  }
  return (
    <>
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
    </>
  )
}

export default Home;

/*export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}*/
