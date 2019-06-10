import Link from 'next/link';
import { withRouter } from 'next/router';

function Home({ router }) {
  console.log('router');
  console.log(router);
  return (
    <div>
      <h1>about</h1>
      <Link href="/"><a>index</a></Link>
      <br />
      <Link href="/about?xxx=1"><a>index 1</a></Link>
      <br />
      <Link href="/about?xxx=2"><a>index 2</a></Link>
      <br />
      <Link href="/about?xxx=3"><a>index 3</a></Link>
    </div>
  );
}

export default withRouter(Home);
