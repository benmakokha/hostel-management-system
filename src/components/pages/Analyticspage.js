import React from 'react';

function Analyticspage(){

    return(

        <div class="container mt-3"> 
         <h1>Input Group Size</h1>
  <     p>Use the .input-group-sm class for small input groups and .input-group-lg for large inputs groups:</p>
       <form>
    <div class="input-group mb-3 input-group-sm">
      <div class="input-group-prepend">
        <span class="input-group-text">Small</span>
      </div>
      <input type="text" class="form-control"/>
 
    </div>
  </form>
  <form>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Default</span>
      </div>
      <input type="text" class="form-control"/>
    </div>
  </form>
  <form>
    <div class="input-group mb-3 input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text">Large</span>
      </div>
      <input type="text" class="form-control"/>
    </div>
  </form>
</div>
    );
};

export default Analyticspage;
