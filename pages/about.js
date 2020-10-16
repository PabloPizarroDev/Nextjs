export default class extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Acerca del curso</h1>
          <img src="/static/platzi-logo.png" alt="Platzi" />
          <p>
            Next.js promete ser uno de los frameworks más utilizados por devs
            frontend
          </p>
        </div>
        <style jsx>
          {`
            .container {
              font-family: "Avenir", Helvetica, Arial, sans-serif;
              display: flex;
              flex-direction: column;
              height: 100%;
              align-items: center;
              justify-content: space-around;
            }
            h1 {
              color: #14bdeb;
              font-size: 5.5em;
            }
            :global(div p) {
              color: #eef4ed;
              font-size: 3.5em;
              text-align: center;
            }
            img {
              max-width: 70%;
            }
          `}
        </style>

        <style jsx global>
          {`
            body {
              background: #2c302e;
            }
          `}
        </style>
      </div>
    );
  }
}
