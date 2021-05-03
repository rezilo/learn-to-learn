import './Title.scss';

function Title(props) {
  return (
    <div className="title-component">
      <h1 className="title-component__main-title">Учись учиться</h1>
      <h2 className="title-component__main-subtitle">
        Нам необходимо учиться чтобы оставаться востребованными в любой сфере деятельности. <br />
        Но как это делать эффективно? Для начала нужно научиться учиться! <br/>
      </h2>
      <p>Ниже список из 10 техник которые позволяют мне вот уже семь лет делать это эффективно.</p>
    </div>
  )
}

export default Title;