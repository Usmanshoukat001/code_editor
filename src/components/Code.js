import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Code() {
  return (
    <>
    <h1>Code Editor</h1>
    <div className='row'>
    <div class="card col-md-4">
  <div class="card-body">
    <h5 class="card-title">HTML</h5>
  </div>
</div>
 <div class="card col-md-4">
  <div class="card-body">
  <h5 class="card-title">CSS</h5>
</div>
</div>
 <div class="card col-md-4">
  <div class="card-body">
  <h5 class="card-title">Js</h5>  
</div>
</div>
</div>
<div className='container'>
  <iframe>

  </iframe>
</div>
    </>
  )
}
