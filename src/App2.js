import React from 'react';
import './App.css';
import Food from './Food';

const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjZfMjY4%2FMDAxNjQzMTczNjIyMDcx.rmnlGq-Uta7VR7wFuVFom3bCtVi9eKawHt1pGLI1PjIg.aUX1g3lg8xCE9Yqbn3jC-YlsM14opEJ_mPvaTxD97j4g.JPEG.minamkkjs%2F%25BA%25ED%25B7%25CE%25B1%25D71.jpg&type=sc960_832',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150506_6%2Ftjsgml6938_1430887555209k3SL8_PNG%2FIMG_7769.PNG&type=sc960_832',
    rating: 3.9,
  },
  {
    id: 3,
    name: 'samgyeopsal',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130723_155%2Fmkdkrk_1374583815715RA2kL_JPEG%2FDSC08911.jpg&type=sc960_832',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'chukumi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140805_4%2Fyhe1471_1407244627286f0o74_JPEG%2F20140803_181942.jpg&type=sc960_832',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'pizza',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTJfMjcx%2FMDAxNjQ3MDg1MzIxMjE2.ZseM2SX4MkVTyrvIcbKkU5imbhRiDOyRnO51a9nsdq4g.PJcqPkL4OKwuVZ3H8I5w2-uzbUKcOyDhVvToOAehqwYg.JPEG.kejnlove%2F20220219%25A3%25DF190558.jpg&type=sc960_832',
    rating: 4.9,
  },
];

function App2() {
  return (
    <div>
      <h1>App.js를 App2.js로 대체!</h1>
      <hr />
      <h3>내가 좋아하는 음식</h3>
      {foodLike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App2;
