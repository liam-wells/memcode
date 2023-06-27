import { Link } from 'react-router-dom';

import Main from '~/appComponents/Main';
import SignInButtons from '~/appComponents/SignInButtons';
import FakeFlashcards from './components/FakeFlashcards';
import Courses from './components/Courses';

import NewProblem from '~/pages/courses_id/components/NewProblem';

import css from './index.css';

class Page_articles_welcome extends React.Component {
  renderHeading = (text) =>
    <h2 className="section-heading">
      {text}
    </h2>

  renderExplanation = (text) =>
    <div className="section-explanation">
      {text}
    </div>

  renderFeature = (heading, comment, image, className) =>
    <div className={`feature-box ${className}`}>

      <div className="text">
        <h5>{heading}</h5>
        <p>{comment}</p>
      </div>
    </div>

  render = () =>
    <Main className={css.main}>
      <article className="standard-article-formatting">
        <div className="container">
          <section className="article-headings">
            <h1 className="title">Welcome to Coto Cards</h1>
            <h2 className="subtitle">Memorizing is hard. Let's make everything else easy.</h2>

            <h2 className="more">
              Lightweight <mark>spaced repetition</mark>-based learning site.<br/>
              {/* Thought-through to the detail.<br/> */}
              <span style={{ color: 'rgba(39, 209, 158, 0.84)' }}>With formatting. </span>
              <span style={{ color: 'rgb(244, 126, 177)' }}>With images. </span>
              <span style={{ color: 'rgb(255, 255, 137)' }}>Accessible.</span>
            </h2>

            <Link to="/courses/new" className="button -orange -move-up-on-hover -with-radius" type="button">Use for Free, Forever →</Link>
            {/* <hr/> */}
          </section>

          <section className="article-section two-types-of-flashcards">
            {this.renderHeading('Two Types of Flashcards')}

            <FakeFlashcards/>
          </section>

          <section className="article-section creation">
            {this.renderHeading('Comfortable, blazingly fast course creation')}

            {this.renderExplanation(<>Course creators are first class citizens on Memcode.<br/> Try our editor here.</>)}

            <NewProblem courseId={0} uiAddOptimisticProblem={() => {}} uiUpdateOptimisticProblemIntoOld={() => {}}/>

            <Link to="/please-sign-in" className="button -orange -move-up-on-hover -with-radius" type="button">Create your own course →</Link>
          </section>

          <section className="article-section courses">
            {this.renderHeading('Play selected courses')}

            {this.renderExplanation(<>You can play all courses without signing in, - sign in as soon as you'd like us to offer you flashcards for review based on your progress!</>)}

            <Courses/>
          </section>


          {
            // !this.props.currentUser &&
            <section className="article-section sign-in">
              {this.renderHeading('Welcome')}
              <SignInButtons text="Sign In With"/>
            </section>
          }

        </div>
      </article>
    </Main>
}

export default Page_articles_welcome;
