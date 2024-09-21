import "@/styles/main.sass";
import database from "@/database/database";
import Link from "next/link";

export default function Main() {
  return (
    <main>
      <div className="main-container">
        <div className="main-content">
          <section className="apresentation">
            <section className="title">
              <h1>Blog</h1>
            </section>

            <section className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt soluta quo, reprehenderit, laboriosam iure voluptate
                nesciunt perspiciatis omnis officia laborum, similique
                voluptatibus cumque culpa aperiam? Corporis tenetur veniam qui
                incidunt.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                cumque enim maxime quod error aspernatur architecto, nulla quasi
                repellendus ut dignissimos. Soluta laborum possimus adipisci
                minima quo deserunt amet temporibus?
              </p>
            </section>
          </section>

          <section className="publication">
            <div className="title">
              <h1>Publicações</h1>
            </div>

            <section className="posts">
              {database.map((i) => (
                <div className="card" key={i.id}>
                  <div className="card-title">
                    <Link href={`../posts/${i.title}`}>{i.title}</Link>
                  </div>

                  <div className="card-description">
                    <p>{i.description}</p>
                  </div>

                  <div className="card-data">
                    <p>{i.data}</p>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
