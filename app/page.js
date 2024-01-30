import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <section className="main_box-project">
        <div className="container">
          <div className="box-row-project">
            <div className="project_box">
              <Link href="/planet" className="box-shadows-manage">
                <Image
                  className="planet_img"
                  src="/planet.png"
                  alt="Planet Image"
                  width={300}
                  height={300}
                  priority
                />
                <h3>Learn About Planets</h3>
                <p>
                  A planet is a large, rounded astronomical body that is neither
                  a star nor its remnant. The best available theory of planet
                  formation is the nebular ...
                </p>
              </Link>
            </div>
            <div className="project_box">
              <Link href="/weather" className="box-shadows-manage">
                <Image
                  className="planet_img"
                  src="/weather.png"
                  alt="Planet Image"
                  width={300}
                  height={300}
                  priority
                />
                <h3>Weather Application</h3>
                <p>
                  A planet is a large, rounded astronomical body that is neither
                  a star nor its remnant. The best available theory of planet
                  formation is the nebular ...
                </p>
              </Link>
            </div>
            <div className="project_box">
              <Link href="/calculator" className="box-shadows-manage">
                <Image
                  className="planet_img"
                  src="/calculator.png"
                  alt="Planet Image"
                  width={300}
                  height={300}
                  priority
                />
                <h3>Calculator</h3>
                <p>
                  A planet is a large, rounded astronomical body that is neither
                  a star nor its remnant. The best available theory of planet
                  formation is the nebular ...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
