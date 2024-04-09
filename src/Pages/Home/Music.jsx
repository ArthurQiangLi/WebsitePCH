export default function Music() {
  return (
    <>
      <p>music</p>
      <section id="Music" className="musicplayer--section">
        <img src="./img/placeholder1.png" alt="musiclist" />
      </section>
      <p>music</p>
      <section className="musicplayer--section">
        <img src="./img/placeholder1.png" alt="musiclist" />
        <ul className="list-group">
          <li className="list-group-item disabled" aria-disabled="true">
            A disabled item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </section>
    </>
  );
}
