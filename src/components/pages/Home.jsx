import { Container, Button } from "react-bootstrap";
import "./Home.css";

const tourDates = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

function Home() {
  return (
    <>
      <header className="home-hero text-center">
        <h1 className="home-hero-title">The Generics</h1>

        <Button
          variant="outline-info"
          className="latest-album-button"
          type="button"
        >
          Get our Latest Album
        </Button>

        <div>
          <Button
            variant="outline-info"
            className="play-button"
            type="button"
            aria-label="Play"
          >
            ▶
          </Button>
        </div>
      </header>

      <main className="tours-section">
        <Container>
          <h2 className="tours-title">TOURS</h2>

          <div className="tour-list">
            {tourDates.map((tour) => (
              <div className="tour-row" key={tour.date}>
                <span className="tour-date">{tour.date}</span>
                <span className="tour-city">{tour.city}</span>
                <span className="tour-venue">{tour.venue}</span>

                <Button
                  variant="info"
                  className="buy-tickets-button"
                  type="button"
                >
                  BUY TICKETS
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </main>

      <footer className="home-footer">
        <Container>
          <h2>The Generics</h2>
        </Container>
      </footer>
    </>
  );
}

export default Home;
