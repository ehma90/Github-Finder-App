

function Footer() {
    const updateYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p><a href="https://github.com/ehma90">ehma.dev</a> Copyright &copy; {updateYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
