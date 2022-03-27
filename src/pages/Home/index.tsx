import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import girlImg from "../../assets/girl.svg";
import playImg from "../../assets/play.svg";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <section className="text-area">
            <h1>
              Get help with <br />
              <span>coding</span> from engineers<span>.</span>
            </h1>
            <p>
              Learn how to code efficiently and create apps and games that work.
              Consult with best experts to apply skills in action.
            </p>
          </section>
          <section className="wrap-button-main">
            <Button>Start learning</Button>
            <button>
              <img src={playImg} alt="Começar vídeo" /> Watch video
            </button>
          </section>
        </Content>

          <section className="image-area">
            <img src={girlImg} alt="menina" />
          </section>
      </Container>
    </>
  );
}
