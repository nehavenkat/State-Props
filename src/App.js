import React from 'react';
import './App.css';
import {Container , Col , Row } from 'reactstrap';
import MyBadge from './Components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warningsign from './Components/Warningsign';
import BookList from './Components/BookList';


function App() {
  return (
<Container>
<div>
<Warningsign text="This is Danger"></Warningsign>
</div>
<div>
<MyBadge/>
</div>
<Row>
<Col md-12>

<BookList/>

</Col>
</Row>
</Container>
);
}

export default App;


