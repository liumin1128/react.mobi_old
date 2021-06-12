import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "@/components/Layouts/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/container/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Breadcrumbs
          title="About"
          routes={[
            {
              title: "Home",
              pathname: "/",
            },
            {
              title: "About",
              pathname: "/about",
            },
          ]}
        />

        <About />
      </Container>
    </div>
  );
}
