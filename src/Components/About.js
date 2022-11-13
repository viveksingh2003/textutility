export default function About(props) {
  return (
    <div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <div class="px-4 py-2 my-2 text-center">
    <h1 class="display-5 fw-bold">About us</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
     </div>
    </div>
  </div>
  )
}