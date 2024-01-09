import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const preferredLocale = context.req.headers['accept-language'];
  return {
    props: {
      preferredLocale,
    },
  };
};

const Home = ({ preferredLocale }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const locales = ['en', 'ko'];
  return (
    <div>
      <h1>Routing Test</h1>
      <ul>
        <li>Your Locale: {router.locale}</li>
        <li>Preferred Locale: {preferredLocale}</li>
        <li>
          Change Locale:{' '}
          <span style={{display: "inline-flex", gap: 5}}>
            {locales.map((l) => (
              <Link locale={l} key={l} href="/">
                {l}
              </Link>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
