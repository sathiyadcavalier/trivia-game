import React from "react";
import './App.css';
import axios from "axios"

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = { list: [], answer: "", status: "" }

    this.getData();

  }

  getData = () => {

    // GET request for remote image in node.js
    axios({
      method: 'get',
      url: 'https://jservice.io/api/random',
    })

      .then((response) => {


        if (response && response.data)
          this.setState({ list: response.data })

      })

      .catch((error) => { console.log(error) })

  }

  handleForm = (event) => {

    this.setState({ answer: event.target.value })

  }

  handleSubmit = () => {

    this.state.list.map((item) => {

      if (this.state.answer === item.answer) {

        return (

          alert("Correct Answer")

        )

      }
      else {

        return (

          alert("Incorrect Answer")

        )

      }

    })


  }

  render() {

    return (

      <div class="container">

        <h1>Question</h1>

        <div class="question">

          {this.state.list.map((item) => {

            return (

              <>

                {item.question}

              </>

            )

          })}

        </div>

        <form onSubmit={this.handleSubmit}>

          <label for="answer" id="label">Answer: </label>
          <input type="text" id="answer" value={this.state.answer} onChange={this.handleForm} />
          <input id="submit" type="submit" />
          {() => {

            if (this.state.answer === "") {

              return (

                <p>Please enter answer</p>

              )

            }


          }}

        </form>

      </div>

    )

  }

}


export default App;
