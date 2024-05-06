import './Login.css';
import './SampleLogin.css';

const SampleLogin = ({ children }) => {

    function createRipple(event) {
        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    return (
        // <section className="vh-100 mt-5">
        //     <div className="row d-flex justify-content-center align-items-center h-100">
        //         <div className="col-md-3 col-lg-3 col-xl-3">
        //             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        //                 className="img-fluid" alt="Sample" />
        //         </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={createRipple}
                                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', backgroundColor: '#3b71ca' }}>Login</button>

                        </div>
                  </form>
              </div>
        //     </div>
        // </section>
    );
}

export default SampleLogin;