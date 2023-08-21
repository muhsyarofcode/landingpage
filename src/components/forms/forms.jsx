
function Masage () {
    return(
        <form className='formmsg' action="https://formspree.io/f/mknaqwky" method="POST">
              <div className="mb-3 mt-3">
                <label htmlFor="username" className="form-label ">Nama Lengkap</label>
                <input className="form-control" type="text" id="username" name="username" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label ">Email</label>
                <input className="form-control" type="email" id="email" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label ">Pesan</label>
                <textarea className="form-control" id="message" name="message" rows="3"></textarea>
              </div>
              <div className='tombolmsg'>
                <button type="submit" className="btn btn-primary">Kirim</button>
              </div>
            </form>
    )
}

export default Masage;