import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="w-full bg-[#1E1438] pt-[80px] pb-8 text-white">
      <div className=" max-w-[1200px] mx-auto flex justify-between px-8 pb-[80px]">
        <img src="images/logo.png" className="size-14 rounded-full mr-10 text-violet-500" />
        <div className="footer-links">
          <h1>Company</h1>
          <p>About</p>
          <p>Pricing</p>
          <p>Jobs</p>
        </div>
        <div className="footer-links">
          <h1>Articles</h1>
          <p>Blog</p>
          <p>Phoenix Files</p>
          <p>Laravel Bytes</p>
          <p>Ruby Dispatch</p>
          <p>Django Beats</p>
          <p>JavaScript Journal</p>
        </div>
        <div className="footer-links">
          <h1>Resources</h1>
          <p>Docs</p>
          <p>Customers</p>
          <p>Support</p>
          <p>Support Metrics</p>
          <p>Status</p>
        </div>
        <div className="footer-links">
          <h1>Contact</h1>
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Community</p>
        </div>
        <div className="footer-links">
          <h1>Legal</h1>
          <p>Security</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
          <p>Acceptable Use Policy</p>
        </div>
      </div>
      <p className='text-center text-xs text-[#a391c1] cursor-pointer hover:text-white'>Copyright &copy; 2024 Fly.io</p>
    </div>
  );
};

export default Footer;