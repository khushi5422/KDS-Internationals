import { useEffect, useState } from 'react';
import styles from './styles.module.css'; // Adjust the path as needed

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    filterSelection(filter);
  }, [filter]);

  const filterSelection = (c: string) => {
    const elements = document.getElementsByClassName('column') as HTMLCollectionOf<HTMLElement>;

    if (c === 'all') {
      c = '';
    }

    for (let i = 0; i < elements.length; i++) {
      w3RemoveClass(elements[i], 'show');
      if (elements[i].className.indexOf(c) > -1) w3AddClass(elements[i], 'show');
    }
  };

  const w3AddClass = (element: HTMLElement, name: string) => {
    const arr1 = element.className.split(' ');
    const arr2 = name.split(' ');

    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += ' ' + arr2[i];
      }
    }
  };

  const w3RemoveClass = (element: HTMLElement, name: string) => {
    const arr1 = element.className.split(' ');
    const arr2 = name.split(' ');

    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }

    element.className = arr1.join(' ');
  };

  const handleButtonClick = (category: string) => {
    setFilter(category);
  };

  return (
    <div>
      {process.browser && <link rel="stylesheet" href="/path/to/styles.css" />}
      <div id="myBtnContainer">
        <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleButtonClick('all')}>
          Show all
        </button>
        <button className={`btn ${filter === 'nature' ? 'active' : ''}`} onClick={() => handleButtonClick('nature')}>
          Nature
        </button>
        <button className={`btn ${filter === 'cars' ? 'active' : ''}`} onClick={() => handleButtonClick('cars')}>
          Cars
        </button>
        <button className={`btn ${filter === 'people' ? 'active' : ''}`} onClick={() => handleButtonClick('people')}>
          People
        </button>
      </div>
      <div className="row">
        <div className="column nature">
          <div className="content">
            <img src="/w3images/mountains.jpg" alt="Mountains" className="w-100 h-50" />
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src="/w3images/lights.jpg" alt="Lights" className="w-100 h-50" />
            <h4>Lights</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src="/w3images/nature.jpg" alt="Nature" className="w-100 h-50" />
            <h4>Forest</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>

        <div className="column cars">
          <div className="content">
            <img src="/w3images/cars1.jpg" alt="Car" className="w-100 h-50" />
            <h4>Retro</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column cars">
          <div className="content">
            <img src="/w3images/cars2.jpg" alt="Car" className="w-100 h-50" />
            <h4>Fast</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column cars">
          <div className="content">
            <img src="/w3images/cars3.jpg" alt="Car" className="w-100 h-50" />
            <h4>Classic</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>

        <div className="column people">
          <div className="content">
            <img src="/w3images/people1.jpg" alt="Car" className="w-100 h-50" />
            <h4>Girl</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column people">
          <div className="content">
            <img src="/w3images/people2.jpg" alt="Car" className="w-100 h-50" />
            <h4>Man</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        <div className="column people">
          <div className="content">
            <img src="/w3images/people3.jpg" alt="Car" className="w-100 h-50" />
            <h4>Woman</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
