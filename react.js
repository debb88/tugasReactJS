const user = React.createElement;

class acc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };
  }

  render() {
    if (this.state.onClick) {
      return alert('Maaf untuk saat ini fitur tidak tersedia.');
    }

    return user(
      'button',
      { onClick: () => this.setState({ onClick: true })},
      'Login'
    );
  }
}

  const asd = document.getElementById('user');
  const root = ReactDOM.createRoot(asd);
  root.render(user(acc));