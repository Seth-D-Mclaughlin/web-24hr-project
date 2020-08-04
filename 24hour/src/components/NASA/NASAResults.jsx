import React from 'react';

const NASAResults = (props) => {
    return (
        <div>
          { props.results.map(result => {
            return (
              <div key={result._id}>
              <h2>{result.headline.main}</h2>
              {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
              <p>
                {result.snippet}
                <br />
                {result.keywords.length > 0 ? ' Keywords: ' : ''}
              </p>
              <ul>
                {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
              </ul>
              <a href={result.web_url}><button>Read It</button></a>
            </div>
            )
          })}
            <div>
              <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
              <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
            </div>
        </div>

    )
  }
  
  export default NASAResults;





// CREATING OUR COMPONENT

// We need to set up a component, create a file called, NytResults.js to display our results. Since we've handled all of the "smarts" of the applications in our parent component, we can make this a functional component. The purpose of this component is to take the results and nicely render them. Let's start our component.

// import React from 'react';

// const NytResults = (props) => {
//   return (
//     <div>
//     </div>
//   );
// };

// export default NytResults;
// By passing props in the parentheses of our component, we can now access the props in our component, which we'll need because we're going to need to get our results information from our parent component. Right now, we haven't set that up, so we'll need to do that.

// BACK TO THE NYTAPP   
// In our NytApp component, we have our results information saved in the state. If we want to render that information in our newly created NytResults component we need to pass it as a prop to NytResults so that it can access it. But first in order to even use NytResults in NytApp we need to import it. Add the following import to your NytApp.js file.

// import NytResults from './NytResults'
// Cool, now we can use it in our return !! Directly underneath our closing </form> tag, we can now use our NytResults component.

// {
//     results.length > 0 ? <NytResults results={results} /> : null
// }
// Let's think through this code. First off notice that we're using another ternary, this time the condition we're checking for is if our results length is greater than zero, AKA do we have any results. If we do have results, then we want to display our NytResults component, if we don't then we can just display an empty div.

// Notice the props that we are passing to the NytResults component. We're setting the prop results equal to the results state value. So in order to access this prop in the NytResults component, we need to use props.results since that's what we named our prop. If we named our prop nytResults instead of results then we would have to use props.nytResults. But we didn't so we'll use just results.

//BACK TO NYTAPP
// In our NytApp component, we have our results information saved in the state. If we want to render that information in our newly created NytResults component we need to pass it as a prop to NytResults so that it can access it. But first in order to even use NytResults in NytApp we need to import it. Add the following import to your NytApp.js file.

// import NytResults from './NytResults'
// Cool, now we can use it in our return !! Directly underneath our closing </form> tag, we can now use our NytResults component.

// {
//     results.length > 0 ? <NytResults results={results} /> : null
// }
// Let's think through this code. First off notice that we're using another ternary, this time the condition we're checking for is if our results length is greater than zero, AKA do we have any results. If we do have results, then we want to display our NytResults component, if we don't then we can just display an empty div.

// Notice the props that we are passing to the NytResults component. We're setting the prop results equal to the results state value. So in order to access this prop in the NytResults component, we need to use props.results since that's what we named our prop. If we named our prop nytResults instead of results then we would have to use props.nytResults. But we didn't so we'll use just results.

// FORMATTING AND DISPLAYING RESULTS

// Let's set up our return to display something other than an empty <div>. We're going to use our favorite, the super useful .map() to nicely format our response. Instead of having to do for loop inside of a for loop like in vanilla JS, we can just use map to accomplish the same thing. Make your NytResults component look like this:

// import React from 'react';

// const NytResults = (props) => {
//   return (
//     <div>
//       {props.results.map(result => {
//         return (
//           <div key={result._id}>
//             <h2>{result.headline.main}</h2>
//             {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
//             <p>
//               {result.snippet}
//               <br />
//               {result.keywords.length > 0 ? ' Keywords: ' : ''}
//             </p>
//             <ul>
//               {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
//             </ul>
//             <a href={result.web_url}><button>Read It</button></a>
//           </div>
//         )
//       })}
//     </div>
//   );
// };
// export default NytResults;
// Let's walk through this code. We're taking props.results and calling map on it. Reminder, map essentially takes every item in an array and performs the same action on it. So in this case, map is taking each result, and formatting it in JSX. Things specifically to notice:

// unique keys are required when you create multiples of the same item (so when you use map). Luckily we have an id to use here.
// We're taking the main headline and putting it in an h2 tag
// We use another ternary here to check if there is a more than 1 (AKA at least 2) things in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a "large" size and not the "xl" size of [0].
// We put the snippet in a <p> tag
// We have another ternary to check if there are keywords. If there are we display the string ' Keywords: '.
// Then we use a list, and another map to put every keyword into a list item
// Lastly, we make a link to the url of the article.
// Hopefully you can see how much more streamlined this is than the vanilla JS version.

// PAGINATION

// Now, we've got our results displaying, but we currently have no way to look at anything but the 10 articles. If you remember back to the vanilla JS version we had pagination. So let's put that in place in our React app! First thing is, let's add a way to paginate to our parent component. If you look at your vanilla JS code, we had two separate functions for different directions of pagination, here we can just use one.

// Add this function right above the return in the NytApp.js.

//   const changePageNumber = (event, direction) => {
//     event.preventDefault()
//     if (direction === 'down') {
//       if (pageNumber > 0) {
//         setPageNumber(pageNumber - 1);
//         fetchResults();
//       }
//     }
//     if (direction === 'up') {
//       setPageNumber(pageNumber + 1);
//       fetchResults();
//     }
//   }
// In changePageNumber we are taking in the event, so we can preventDefault, and direction. The direction is going to tell us up or down, then we can incorporate the checks we need to. If the direction is down, we need to make sure that the pageNumber is not 0 so we don't go into the negatives. If it's up we can just add 1! Then we're just fetching results again, after we changed our state to reflect the current correct page number.

// Now that we have our method defined, we need a way to actually use it with our results. Since we only want the buttons for pagination to appear if we have results, let's put it in our NytResults component. In order for us to be able to access it inside of that component we need to pass it as a prop! Let's update our NytApp where we call NytResults in our return to look like this:

// {
//    results.length > 0 ? <NytResults results={results} changePage={ChangePageNumber} /> : null
// }
// Now, we are passing our function changePageNumber to NytResults as a prop called changePage. So we'll need to use it as props.changePage because that's what we named it.

// BUTTONS TO CHANGE PAGE

// Let's go to our NytResults component and add the ability to call the method we just created in the parent component. Beneath our map and above the closing div, let's add the following code:

// <div>
//     <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>
//     <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
// </div>
// Here we're just creating two buttons, one that says Previous 10 and one that says Next 10. They're both calling the changePage function we defined in the parent, and passing the corresponding direction. Hopefully you can see how we passed the method down to this child component through props.

// Now, our app should work and be able to paginate!!!

// ONE MORE THING

// So now when we change pages, it works, but what happens if we go to page 5 of one search, and want to search something else? We need make it so that when someone does a new search, the pageNumber goes back to 0 every time, so they'll start on the first page of results.

// Make your handleSubmit method look like this:

//   const handleSubmit = (event) => {
//     setPageNumber(0);
//     fetchResults();
//     event.preventDefault() }
  