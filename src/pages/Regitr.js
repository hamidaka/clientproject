import './Registr.css'
import Button from '@mui/material/Button';
export default function Regitr(){
    return (
        <>
 <section className="text-center text-lg-start" >

    


  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right" style={{background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter:" blur(30px)"}}
            
            >
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5" >Sign up now</h2>
            <form>
       
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" >Last name</label>
                  </div>
                </div>
              </div>

          
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" >Email address</label>
              </div>

            
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" >Password</label>
              </div>

           
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
                <label className="form-check-label">
                  Subscribe to our newsletter
                </label>
              </div>

            
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style ={{backgroundColor:'black'}}
            >
              Sign up
            </Button>

       
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1"  style= {{color:'orange'}}>
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1"  style= {{color:'orange'}}>
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1"  style= {{color:'orange'}}>
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1" style= {{color:'orange'}}>
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://i.pinimg.com/550x/30/a3/16/30a316e0a1b7c0358df6472e1aabc4cb.jpg" className="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>

</section>
</>
    )
}