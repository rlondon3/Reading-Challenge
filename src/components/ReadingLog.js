import React, { useContext, useEffect, useState } from 'react';
import CarouselContainer from '../common/CarouselContainer';
import BooksContext from '../ContextApi/BooksContext';
import Input from '../common/Input';

const ReadingLog = (props) => {
  const [log, setLog] = useState({
    first_name: '',
    last_name: '',
    school: '',
    grade: '',
    title: '',
    author: '',
    email: '',
    teacher_email: '',
    summary: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (log.first_name.trim() === '')
      errors.first_name = 'First name is required!';
    if (log.last_name.trim() === '')
      errors.last_name = 'Last name is required!';
    if (log.title.trim() === '') errors.title = 'Title is required!';
    if (log.author.trim() === '') errors.author = "Author's name is required!";
    if (log.email.trim() === '') errors.email = 'Your email is required!';
    if (log.teacher_email.trim() === '')
      errors.teacher_email = "Your ELA teacher's email is required!";
    if (log.summary.trim() === '')
      errors.summary = 'You must complete a summary';
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
    console.log('Submitted');
  };

  const validateProp = ({ name, value }) => {
    if (name === 'first_name') {
      if (value.trim() === '') return 'First name is required.';
    }
    if (name === 'last_name') {
      if (value.trim() === '') return 'Last name is required.';
    }
    if (name === 'title') {
      if (value.trim() === '') return 'Book title is required.';
    }
    if (name === 'author') {
      if (value.trim() === '') return "Author's name is required";
    }
    if (name === 'email') {
      if (value.trim() === '') return 'Email is required';
    }
    if (name === 'teacher_email') {
      if (value.trim() === '') return "Ela teacher's email is required";
    }
    if (name === 'summary') {
      if (value.trim() === '') return 'Summary is required';
    }
  };

  const handleChange = ({ target: input }) => {
    const errorMessage = validateProp(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    setLog({ ...log, [input.name]: input.value });
    setErrors(errors);
  };

  const booksContext = useContext(BooksContext);

  const getBookHandler = () => {
    booksContext.getBooks();
  };

  //GetBook Info
  useEffect(() => {
    getBookHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col s4'></div>
        <div className='col s4 center-align'>
          <div className='col s4'></div>
          <CarouselContainer />
        </div>
      </div>

      <div className='container row'>
        <form onSubmit={handleSubmit} className='col s12'>
          <div className='row'>
            <Input
              name='first_name'
              value={log.first_name}
              label='First Name'
              onChange={handleChange}
              error={errors.first_name}
            />
            <Input
              name='last_name'
              value={log.last_name}
              label='Last Name'
              onChange={handleChange}
              error={errors.last_name}
            />
          </div>
          <div className='row'>
            <Input
              name='school'
              value={log.school}
              label='School'
              onChange={handleChange}
            />
            <Input
              name='grade'
              value={log.grade}
              label='Grade'
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <Input
              name='title'
              value={log.title}
              label='Title'
              onChange={handleChange}
              error={errors.title}
            />
            <Input
              name='author'
              value={log.author}
              label='Author'
              onChange={handleChange}
              error={errors.author}
            />
          </div>
          <div className='row'>
            <Input
              name='email'
              value={log.email}
              label="Student's Email"
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              name='teacher_email'
              value={log.teacher_email}
              label="ELA Teacher's Email"
              onChange={handleChange}
              error={errors.teacher_email}
            />
          </div>
          <div className='row'>
            <h6>Bestseller Summary</h6>
            <p>
              Tips: Be sure to include all main characters' names, main ideas,
              and details from the plot that support the main idea. In your
              summary it would be beneficial to include how you related to any
              characters or the overall story.
            </p>
          </div>
        </form>
        <form onSubmit={handleSubmit} className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                onChange={handleChange}
                value={log.summary}
                name='summary'
                id='summary'
                className='materialize-textarea'
                error={errors.summary}
              ></textarea>
              <label htmlFor='textarea1'>Summary</label>
            </div>
          </div>
        </form>
        <div className='center-align'>
          <button
            disabled={validate()}
            onClick={handleSubmit}
            className='waves-effect waves-light btn-large'
          >
            <i className='material-icons right'>send</i>Log Book
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReadingLog;
