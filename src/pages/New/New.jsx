import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
// import InputSlider from '../../components/InputSlider'
import './New.css'

const New = ({currentPost, data}) => {
  const [value, setValue] = useState('');
  // const [slide, setSlide] = useState(0);


  const uniqueCategory = [];
  const Categories = data?.products?.filter(element => {
    const isDuplicate = uniqueCategory.includes(element.brand);
    if (!isDuplicate) {
      uniqueCategory.push(element.brand);
      return true;
    }
    return false;
  });

  // console.log(uniqueCategory)
  console.log(Categories);

  return (
    <div>
      <div className="container">
        <div className="row in-new">
          <div className="col-md-3">
            <div className="container ner">
              <p id="Search">Search</p>
              <form action="">
                <div className="form-row">
                  <input type="text" id="name" placeholder="Submit.." value={value} onChange={(e) => setValue(e.target.value)} />
                  {/* <label className="label"><i className="fa fa-search far"></i></label> */}
                </div>
              </form>
              <p id="price">Price</p>

              {/* <InputSlider value={slide} onChange={(e) => setSlide(e.target.value)} /> */}
           
              <p id="Categories">Categories</p>
              {uniqueCategory && uniqueCategory.map((post, i) => (
                <Fragment key={i}>
                  <Link to={`/Brand/${post}`} key={post} className="pge">
                    <p>{post}</p>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>
      
          <div className="col-md-9">
            <div className='row'>
              {currentPost && currentPost.filter((post) => {
                if (value === "") {
                  return post
                } else if (post.brand.toLowerCase().includes(value.toLowerCase())) {
                  return post
                }
              }).map((post, i) => (
                <div className='col-md-4' key={i}>
                  <Link to={`/PostDetail/${post._id}`} key={post._id} className="pge">
                    <div className="thumb-wrapper">
                      <img src={`https://store-betta.herokuapp.com${post.image}`} className="img-fluid imgHome" alt={post.image} />
                      <div>
                        <div>{post.brand}</div>
                        <p className='postBrand'>{post.name}</p>
                        <p className="item-price"><span>&#x20A6;{post.price}</span></p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default New;



