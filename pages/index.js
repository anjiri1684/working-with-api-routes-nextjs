import { useRef } from "react";

function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  function submitFormHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form action="" onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feddback">Your Feedback </label>
          <textarea id="email" rows={5} ref={feedbackInput}></textarea>
          <button>Send Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
