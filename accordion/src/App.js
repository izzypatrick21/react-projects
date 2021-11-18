import React from "react";
import questions from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3> FAQ about Banking</h3>
        <section>
          {
            questions.map((question) => {
              return (
                <Question key={question.id} {...question} />
              )
            })
          }
        </section>
      </div>

    </main>
  );
}

export default App;
